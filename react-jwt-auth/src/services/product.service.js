import axios from 'axios';
import authHeader from './auth-header';

const API_URL = 'http://localhost:8080/products/';
const user = JSON.parse(localStorage.getItem('user'));
export const getProducts = async (cb) => {
  fetch(API_URL + 'retrieve', { headers: authHeader() })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      cb(data);
    });
};

export const sendOrder = (order) => {
  console.log(authHeader(true));
  fetch('http://localhost:8080/orders/insert', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + user.accessToken,
      'content-type': 'application/json',
    },
    body: JSON.stringify(order),
  });
};

export default getProducts;
