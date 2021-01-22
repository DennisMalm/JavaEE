import React, { useState, useEffect } from "react";
import "./ShoppingCart.css";

function CartItem(props) {
  const [quant, setQuant] = useState(props.quantity);
  const [update, forceUpdate] = useState(false);
  const decrease = () => {
    if (quant > 1) setQuant(quant - 1);

    setAmount(false);
  };

  const increase = () => {
    setQuant(quant + 1);
    setAmount(true);
  };
  useEffect(() => {}, [quant]);
  /* const handleSubmit = () => {
    props.remove(props.id, quant);
  }; */
  const setAmount = (newAmount) => {
    props.amount(props.id, newAmount);
  };
  const remove = () => {
    props.remove(props.id);
  };
  return (
    <li className="list-group-item">
      <div>
        <div className="row justify-content-between">
          <h3>{props.name}</h3>
          <p>Description: {props.desc}</p>
          <p>Price: {props.price}</p>
          <p>Quantity: {quant}</p>
          <p>Total: {props.price * quant}</p>
          <div className="def-number-input number-input">
            <button onClick={decrease} className="minus"></button>
            <input
              className="quantity"
              name="quantity"
              value={quant}
              onChange={() => console.log("change")}
              type="number"
            />
            <button onClick={increase} className="plus"></button>
          </div>
          <button onClick={remove} className="btn btn-primary">
            Remove
          </button>
        </div>
      </div>
    </li>
  );
}
export default CartItem;
