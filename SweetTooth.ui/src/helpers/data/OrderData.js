import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getOrderItems = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders/${orderId}/orderItems`)
    .then((res) => {
      if (res.data) {
        resolve(res.data);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const updateTotal = (orderId) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/orders/total/${orderId}`)
    .then((resp) => resolve(resp.data))
    .catch((error) => reject(error));
});

const addOrderItem = (orderItem) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders/orderItems`, orderItem)
    .then(() => getOrderItems(orderItem.orderId).then((resp) => resolve(resp)))
    .catch((error) => reject(error));
});

const updateOrderItem = (orderItemId, orderItem) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/orders/orderItems/update/${orderItemId}`, orderItem)
    .then(() => {
      getOrderItems(orderItem.orderId).then(resolve);
    })
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

const addEmptyOrder = () => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/orders/emptyOrder`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const processOrder = (orderId) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/orders/processOrder/${orderId}`)
    .then(() => addEmptyOrder().then((resp) => resolve(resp)))
    .catch((error) => reject(error));
});

const deleteOrder = (orderId) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/orders/${orderId}`)
    .then(() => addEmptyOrder().then((resp) => resolve(resp)))
    .catch((error) => reject(error));
});

export {
  getSingleOrder,
  getOrderByUserId,
  getOrders,
  getUnprocessedOrderByUserId,
  processOrder,
  deleteOrder,
  getOrderItems,
  addOrderItem,
  updateOrderItem,
  updateTotal
};
