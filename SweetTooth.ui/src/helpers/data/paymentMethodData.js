import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPaymentMethodByUserId = (userId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/paymentMethod/userId/${userId}`)
});
