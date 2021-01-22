import React, { useState } from "react";
import "./ShoppingCart.css";

function Item(props) {
  const [quant, setQuant] = useState(0);

  const decrease = () => {
    if (quant > 0) {
      setQuant(quant - 1);
    }
  };

  const increase = () => {
    setQuant(quant + 1);
  };

  const handleSubmit = () => {
    /* if (quant >= 1) {
      console.log(props.name, quant, props.price * quant);
      props.add(props.id, quant, props.price * quant);
    }
    setQuant(0); */
    props.add(props.id);
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
          {/* <div className="def-number-input number-input">
            <button onClick={decrease} className="minus"></button>
            <input
              className="quantity"
              name="quantity"
              value={quant}
              onChange={() => console.log("change")}
              type="number"
            />
            <button onClick={increase} className="plus"></button>
          </div> */}
          <button onClick={handleSubmit} className="btn btn-primary">
            Add
          </button>
        </div>
      </div>
    </li>
  );
}
export default Item;
