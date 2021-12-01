import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

// endpoint yields array of objects
const getSnackMoods = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/snackMood`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// endpoint yields object
const getSnackMoodById = (id) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/snackMood/${id}`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

// endpoint yields object
const addSnackMood = (snackMood) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/snackMood`, snackMood)
    .then(() => getSnackMoods().then(resolve))
    .catch((error) => reject(error));
});

const deleteSnackMood = (id) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/snackMood/${id}`)
    .then(() => getSnackMoods().then(resolve))
    .catch((error) => reject(error));
});

export {
  getSnackMoods, getSnackMoodById, addSnackMood, deleteSnackMood
};
