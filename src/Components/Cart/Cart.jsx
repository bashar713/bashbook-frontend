import React from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/Delete";
import "./Cart.scss";

export default function Cart() {
    const data = [
      {
        id: 1,
        img: "https://m.media-amazon.com/images/I/81PuKheA8xL.jpg",
        title: "Rich Dad Poor Dad",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo iste explicabo praesentium a iure doloremque veniam cupiditate totam esse iusto minus, quae aut, modi vitae illum reiciendis aspernatur voluptatem voluptate!",
        isNew: true,
        oldPrice: 19,
        price: 12,
      },
    ]
    return (
      <div className="cart">
        <h1>Products in your Cart</h1>
        {data?.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="details">
              <h1>{item.title}</h1>
              <p>{item.description?.substring(0, 50)}...</p>
              <div className="price">1 x ${item.price}</div>
            </div>
            <DeleteOutlinedIcon className='delete'/>
          </div>
        ))}
        <div className="total">
            <span>SUBTOTAL</span>
            <span>$15</span>
        </div>
        <button>PROCEED TO CHECKOUT</button>
        <span className='reset'>Reset Cart</span>
      </div>
    );
}
