import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getSnacks = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/snack`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getSnacks;
