import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getOrderItems = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${orderId}orderItems`)
    .then((res) => {
      if (res.data) {
        resolve(res.data);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const addOrderItem = (orderItem) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders/orderItems`, orderItem)
    .then(() => getOrderItems(orderItem.orderId).then(resolve))
    .catch((error) => reject(error));
});

const updateOrderItem = (orderItem) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/orders/orderItems`, orderItem)
    .then(() => getOrderItems(orderItem.orderId).then(resolve))
    .catch((error) => reject(error));
});

export { getOrderItems, addOrderItem, updateOrderItem };
