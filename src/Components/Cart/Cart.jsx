import React from 'react';
import DeleteOutlinedIcon from "@mui/icons-material/Delete";
import {useSelector , useDispatch} from "react-redux";
import "./Cart.scss";
import { removeItem, resetCart } from '../../redux/cartReducer';
import {loadStripe} from "@stripe/stripe-js";
import { makeRequest } from '../../makeRequest';
export default function Cart() {
  
  const products = useSelector(state => state.cart.products);
  const dispatch = useDispatch();

  //Calc total price 
  const calcTotal = ()=>{
    let total = 0 ;
    products.forEach((item) => (total += item.quantity * item.price))
    return total.toFixed(2);
  }


  const stripePromise = loadStripe(
    "pk_test_51MRvPXGQVJ7krI2Mg8DqDOGFHoHwXRWfUtb3DtyMctbli2MNtrMtRwNodi38XinjhPz2BjQifeX78nYXbS4EGKC100y1SzxQ5H"
  );
  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makeRequest.post("/orders", {
        products,
      });
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      })
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="cart">
      <h1>Products in your Cart</h1>
      {products?.map((item) => (
        <div className="item" key={item?.id}>
          <img src={item?.img} alt={item?.title} />
          <div className="details">
            <h1>{item?.title}</h1>
            <p>{item?.description?.substring(0, 50)}...</p>
            <div className="price">
              {item?.quantity}x ${item?.price}
            </div>
          </div>
          <DeleteOutlinedIcon className="delete" onClick={()=>dispatch(removeItem(item.id))}/>
        </div>
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>${calcTotal()}</span>
      </div>
      <button onClick={handlePayment} >PROCEED TO CHECKOUT</button>
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
}




















/*

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

*/