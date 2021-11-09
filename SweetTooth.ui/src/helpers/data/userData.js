import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getUserByFirebaseId = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users/user/${uid}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createNewUser = (userInfo) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/users`, userInfo)
    .then(() => getUserByFirebaseId(userInfo.firebaseId)).then((resp) => resolve(resp))
    .catch(reject);
});


const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/Users`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export { createNewUser, getUsers, getUserByFirebaseId };
