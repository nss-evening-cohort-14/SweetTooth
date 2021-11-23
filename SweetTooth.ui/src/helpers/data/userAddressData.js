import axios from 'axios';
import firebaseConfig from '../apiKeys';
// import { getUserByUserId } from './userData';

const dbUrl = firebaseConfig.databaseURL;

const getAllAddresses = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/userAddresses`)
    .then((response) => {
      if (response.data) {
        resolve(response.data);
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getAllAddressesByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/userAddresses/userId/${userId}`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const getByAddressId = (addressId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/userAddresses/${addressId}`)
    .then((resp) => resolve(resp.data))
    .catch((error) => reject(error));
});

const getAddressByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/userAddresses/userId/${userId}`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

const createNewUserAddress = (address) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/userAddresses`, address)
    .then(() => getAddressByUserId(address.userId)).then((response) => {
      resolve(response);
    })
    .catch((error) => reject(error));
});

const updateUserAddress = (address) => new Promise((resolve, reject) => {
  axios.put(`${dbUrl}/userAddresses/${address.id}`, address)
    .then(() => getAddressByUserId(address.userId))
    .then(resolve)
    .catch((error) => reject(error));
});

const deleteUserAddress = (address) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/userAddresses/${address.id}`)
    .then(() => getAllAddressesByUserId(address.userId)).then((response) => {
      resolve(response);
    })
    .catch((error) => reject(error));
});

export {
  getAllAddresses,
  getAddressByUserId,
  getByAddressId,
  getAllAddressesByUserId,
  createNewUserAddress,
  updateUserAddress,
  deleteUserAddress
};
