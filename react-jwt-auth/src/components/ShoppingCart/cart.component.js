import React, { useState } from "react";
import "./ShoppingCart.css";

function Cart(props) {
  const [quant, setQuant] = useState(props.quantity);
  const [cartItems, setCartItems] = useState([]);

  const decrease = () => {
    if (quant > 1) {
      setQuant(quant - 1);
      props.remove(props.id, quant);
    } else {
      setQuant(quant - 2);
      props.remove(props.id, quant);
    }
  };

  /* const addToCart = (prop) => {
    setCartItems([...cartItems, prop]);
  }; */

  /* const handleSubmit = () => {
    props.remove(props.id, quant);
  }; */
  return (
    <li className="list-group-item">
      <div>
        <div className="row justify-content-between">
          <h3>{props.name}</h3>
          <p>Price: {props.price}</p>
          <p>Description: {props.desc}</p>
          <p>Quantity: {quant}</p>
          <button onClick={decrease} className="btn btn-primary">
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}
export default Cart;
