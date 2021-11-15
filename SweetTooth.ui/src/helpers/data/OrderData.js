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

const getSingleOrder = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${orderId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getOrderByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/user/${userId}`)
    .then((response) => {
      if (response.data) {
        resolve(response.data);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getUnprocessedOrderByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/unprocessed/${userId}`)
    .then((response) => {
      if (response.data) {
        resolve(response.data);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getSingleOrder,
  getOrderByUserId,
  getOrders,
  getUnprocessedOrderByUserId,
  getOrderItems,
  addOrderItem,
  updateOrderItem
};
