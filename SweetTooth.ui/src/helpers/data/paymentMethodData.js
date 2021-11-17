import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPaymentMethodByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/paymentMethod/userId/${userId}`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

getPaymentMethodByPaymentId = (paymentId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/paymentMethod/paymentId/${paymentId}`)
    .then((resp) => resolve(resp))
    .catch((error) => reject(error));
});

const createNewPaymentMethod = (paymentMethod) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/paymentMethod`, paymentMethod)
    .then(() => getPaymentMethodByUserId(paymentMethod.userId)).then((resp) => resolve(resp))
    .catch((error) => reject(error));
});

const updatePaymentMethod = (paymentMethod) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/paymentMethod/${paymentMethod.id}`, paymentMethod)
    .then((resp) => console.warn(resp))
    // .then(() => getPaymentMethodByUserId(paymentMethod.userId)).then((resp) => resolve(resp))
    .catch((error) => reject(error));
});

export {
  getPaymentMethodByUserId, getPaymentMethodByPaymentId, createNewPaymentMethod, updatePaymentMethod
};
