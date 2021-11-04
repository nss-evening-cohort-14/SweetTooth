import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getSingleOder = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/orders/${orderId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getOrderByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/orders/user/${userId}`)
    .then((response) => {
      if (response.data) {
        resolve(response.data);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

export { getSingleOder, getOrderByUserId };
