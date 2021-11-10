import firebase from 'firebase/';
import axios from 'axios';
import { createNewUser } from './data/userData';

axios.interceptors.request.use((request) => {
  // eslint-disable-next-line no-undef
  const token = sessionStorage.getItem('token');

  if (token != null) {
    request.headers.Authorization = `Bearer ${token}`;
  }

  return request;
}, (err) => Promise.reject(err));

const signInUser = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider).then((user) => {
    if (user.additionalUserInfo?.isNewUser) {
      const userInfo = {
        firebaseId: user.user?.uid,
        firstName: user.user?.displayName.split(' ')[0],
        lastName: user.user?.displayName.split(' ')[1],
        email: user.user?.email,
        profileUrl: user.user?.photoURL,
        softDelete: false,
        admin: false,
        moodId: 'c4892c07-e999-4bfc-aef6-50b4989a2544'
      };
      createNewUser(userInfo);
      window.location.href = '/';
    }
  });
};

const signOutUser = () => new Promise((resolve, reject) => {
  firebase.auth().signOut().then(resolve).catch(reject);
});

export { signInUser, signOutUser };
