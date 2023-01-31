import React from 'react';
import './Card.scss';
import { Link } from "react-router-dom";
 
export default function Card({item}) {

    return (
      <Link className="link" to={`/product/${item?.id}`}>
        <div className="card">
          <div className="image">
            {item?.attributes.isNew && <span>New Book</span>}
            <img src={process.env.REACT_APP_UPLOAD_URL + item?.attributes?.img?.data?.attributes?.url} alt="" />
          </div>
          <h2>{item?.title}</h2>
          <div className="prices">
            <h3>${item?.oldPrice || item?.attributes.price + 10}</h3>
            <h3>${item?.attributes.price}</h3>
          </div>
        </div>
      </Link>
    );
}
