import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { List } from '../../Components/exportComponetns';
import useFetch from '../../hooks/useFetch';
import "./Products.scss";

export default function Products() {

  const catId = parseInt(useParams().id)
  const [maxPrice,setMaxPrice] = useState(150);
  const [sort,setSort] = useState(null);
  const { data, loading, error } = useFetch(`/sub-categories?[filters][categories][id][$eq]=${catId}`);
  console.log(data);
  return (
    <div className="products">
      <div className="left">
        <div className="filterItem">
          <h2>Product Categories</h2>
          <div className="inputItem">
            <input type="checkbox" id="1" value={1} />
            <label htmlFor="1">Self Help</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="2" value={2} />
            <label htmlFor="2">Business</label>
          </div>
          <div className="inputItem">
            <input type="checkbox" id="3" value={3} />
            <label htmlFor="3">Soft Skills</label>
          </div>
        </div>

        <div className="filterItem">
          <h2>Filter by Price</h2>
          <div className="inputItem">
            <span>0</span>
            <input
              type="range"
              id=""
              min={0}
              max={150}
              onChange={(e) => setMaxPrice(e.target.value)}
            />
            <span>{maxPrice}</span>
          </div>
        </div>

        <div className="filterItem">
          <h2>Sort by</h2>
          <div className="inputItem">
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
            />
            <label htmlFor="asc">Price (Lowest first)</label>
          </div>
          <div className="inputItem">
            <input
              type="radio"
              id="dec"
              value="dec"
              name="price"
              onChange={(e) => setSort("dec")}
            />
            <label htmlFor="dec">Price (Highest first)</label>
          </div>
        </div>
      </div>
      <div className="right">
        <img
          className='catImg'
          src="https://images.pexels.com/photos/1074535/pexels-photo-1074535.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt=""
        />
        <List catId = {catId} maxPrice={maxPrice} sort={sort}/>
      </div>
    </div>
  );
}
