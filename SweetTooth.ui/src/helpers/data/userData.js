import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const createNewUser = (userInfo) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/users`, userInfo)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export { createNewUser, getUsers };
