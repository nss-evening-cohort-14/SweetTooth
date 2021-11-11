import axios from 'axios';
import firebaseConfig from '../apiKeys';
import { getUserByUserId } from './userData';

const dbUrl = firebaseConfig.databaseURL;

const createNewUserAddress = (userAddressInfo) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/userAddresses`, userAddressInfo)
    .then(() => getUserByUserId(userAddressInfo.userId)).then((resp) => resolve(resp))
    .catch((error) => reject(error));
  debugger;
});

export default createNewUserAddress;
