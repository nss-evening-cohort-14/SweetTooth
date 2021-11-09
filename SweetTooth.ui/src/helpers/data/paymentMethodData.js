import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPaymentMethodByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/paymentMethod/userId/${userId}`)
    .then((resp) => resolve(Object.values(resp.data)))
    .catch((error) => reject(error));
});

export default getPaymentMethodByUserId;
