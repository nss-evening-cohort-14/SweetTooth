import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getSnacks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/snack`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSnackById = (snackId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/snack/${snackId}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export { getSnacks, getSnackById };
