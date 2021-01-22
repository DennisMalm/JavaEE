import React, { useState, useEffect } from 'react';
import Item from './item.component.js';
import getProducts, { sendOrder } from '../../services/product.service';
import CartItem from './cartitem.component';
import auth from '../../services/auth.service';

function Shop() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [orderSent, setOrderSent] = useState(false);
  const [update, setUpdate] = useState(false);
  const [shipping, setShipping] = useState(0);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchItems();
    const user = auth.getCurrentUser();
    setUser({ user: user });
  }, []);
  const createItem = (itemInfo) => {
    return (
      <Item
        add={addToCart}
        remove={removeItem}
        key={itemInfo.id}
        id={itemInfo.id}
        name={itemInfo.name}
        price={itemInfo.price}
        desc={itemInfo.desc}
        quantity={itemInfo.quantity}
        total={itemInfo.total}
      ></Item>
    );
  };
  const itemIndex = (id) => {
    return cart.findIndex((item) => item.id === id);
  };
  const setAmount = (id, increase) => {
    let newCart = cart;
    console.log('index id ' + id + ' index ' + itemIndex(id));
    console.log(cart[itemIndex(id)]);
    if (increase) {
      newCart[itemIndex(id)].quantity += 1;
      //setCart(newCart);
    } else if (!increase) {
      newCart[itemIndex(id)].quantity -= 1;
      //setCart(newCart);
    }
    newCart[itemIndex(id)].total =
      newCart[itemIndex(id)].price * newCart[itemIndex(id)].quantity;
    setCart(newCart);
    if (newCart[itemIndex(id)].quantity < 1) {
      removeItem(id);
    }
    shippingCost(0);
  };
  const cartList = (itemInfo) => {
    const price = itemInfo.price;
    const quantity = itemInfo.quantity;
    const tot = price * quantity;
    return (
      <CartItem
        key={itemInfo.id}
        id={itemInfo.id}
        name={itemInfo.name}
        price={itemInfo.price}
        desc={itemInfo.desc}
        quantity={itemInfo.quantity}
        total={tot}
        remove={removeItem}
        amount={setAmount}
      ></CartItem>
    );
  };

  const addToCart = (id) => {
    if (cart.some((item) => item.id === id)) {
      console.log('item already exists');
    } else {
      const itemToAdd = products.filter((found) => found.id === id);
      const newCart = cart;
      setCart([...newCart, ...itemToAdd]);
      shippingCost(itemToAdd[0].total);
    }
    console.log('lelelele');
  };

  const removeItem = (id) => {
    let cloneCart = cart;
    cloneCart = cloneCart.filter((remove) => remove.id !== id);
    console.log('removed from ' + cloneCart);
    setCart(cloneCart);
    shippingCost(0);
  };

  const fetchItems = async () => {
    getProducts((res) => {
      console.log(res);
      setProducts(res);
    });
  };

  const shippingCost = (init) => {
    const total = cart.reduce((prev, next) => prev + next.total, init);

    setShipping(total);
  };

  const executeOrder = () => {
    console.log('Sending order to DB');
    console.log(cart);
    cart.forEach((element) => {
      console.log(
        element.name +
          ' ' +
          element.price +
          ' ' +
          element.quantity +
          ' ' +
          element.total
      );
    });
    console.log(update);
    //setUpdate((prevState) => !prevState);
    let itemsArray = [];
    let orderArray = [];
    const username = user.user.username;
    cart.map((item) => itemsArray.push(item));

    //orderArray.push(itemsArray, username, )

    console.log(username);
    console.log(shipping);
    console.log(itemsArray);
    orderArray.push(username, shipping, itemsArray);
    console.log(orderArray);
    sendOrder(orderArray);
  };
  const testOrder = () => {
    console.log('Sending order to DB');
    console.log(cart);
    let itemsArray = [];
    //let orderArray = [];
    let orderArray;

    cart.forEach((element) => {
      console.log(
        element.name +
          ' ' +
          element.price +
          ' ' +
          element.quantity +
          ' ' +
          element.total
      );
    });

    console.log(update);

    const username = user.user.username;
    cart.map((item) => itemsArray.push(item.name));

    orderArray = {
      username: username,
      totalPrice: shipping,
      items: itemsArray,
    };

    console.log(username);
    console.log(shipping);
    console.log(itemsArray);
    //orderArray.push(username, shipping, itemsArray);
    console.log(orderArray);
    sendOrder(orderArray);
  };
  const testButton = () => {
    console.log('test test test');
  };
  return (
    <div className='container'>
      <header className='jumbotron'>
        <h3>Available items </h3>
      </header>

      <ul className='list-group p-2'>{products.map(createItem)}</ul>
      <button className='btn btn-secondary m-2' onClick={testOrder}>
        Make order!
      </button>
      {orderSent ? <p>Order made!{orderSent.total}</p> : <p></p>}
      <ul className='list-group'>
        {cart.map(cartList)}
        <li className='list-group-item'>Total cost of shipping: {shipping}</li>
      </ul>
      {orderSent}
    </div>
  );
}

export default Shop;
