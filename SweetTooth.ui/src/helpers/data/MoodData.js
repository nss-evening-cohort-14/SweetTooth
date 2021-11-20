import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getMoods = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/mood`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getMoodById = (moodId) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/mood/${moodId}`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export {
  getMoods,
  getMoodById
};
