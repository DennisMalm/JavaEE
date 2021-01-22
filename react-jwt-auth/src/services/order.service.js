import axios from 'axios';
import authHeader from './auth-header';

const user = JSON.parse(localStorage.getItem('user'));
const API_URL = 'http://localhost:8080/orders/';
export const getOrder = async (cb) => {
  fetch(API_URL + 'retrieve/' + user.username, { headers: authHeader() })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      cb(data);
    });
};

export default getOrder;
