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
  axios.get(`${dbUrl}/userAddresses/${userId}`)
    .then((response) => {
      if (response.data) {
        resolve(Object.values(response.data));
      } else {
        resolve([]);
      }
    }).catch((error) => reject(error));
});

const createNewUserAddress = (userAddressInfo) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/userAddresses`, userAddressInfo)
    .then(getAllAddressesByUserId(userAddressInfo.userId))
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export { getAllAddresses, getAllAddressesByUserId, createNewUserAddress };
