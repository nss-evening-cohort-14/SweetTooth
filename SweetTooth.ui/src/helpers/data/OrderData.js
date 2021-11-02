import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getSingleOder = (orderId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/api/orders/${orderId}`)
    .then((response) => resolve(response))
    .catch((error) => reject(error));
});

export default getSingleOder;
