import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getOrders = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/orders`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getOrders;
