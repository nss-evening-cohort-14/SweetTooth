import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getUserByFirebaseId = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users/user/${uid}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const getUserByUserId = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users/user/${id}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

const createNewUser = (userInfo) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/users`, userInfo)
    .then(() => getUserByFirebaseId(userInfo.firebaseId)).then((resp) => resolve(resp))
    .catch((error) => reject(error));
});

const getUsers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/users`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  createNewUser, getUsers, getUserByFirebaseId, getUserByUserId 
};
