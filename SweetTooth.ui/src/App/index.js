import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import NavbarSweetTooth from '../components/Navbar';
import Routes from '../helpers/Routes';
import './App.scss';
import { getUserByFirebaseId } from '../helpers/data/userData';
// import { getAllAddressesByUserId } from '../helpers/data/userAddressData';

function App() {
  const [user, setUser] = useState({});
  const [userAddresses, setUserAddresses] = useState([]);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if (userInfo) {
        console.warn(userInfo);
        // when still logged in but refresh page, user remains empty instead of changing state.
        // eslint-disable-next-line no-undef
        userInfo.getIdToken().then((token) => sessionStorage.setItem('token', token))
          .then(getUserByFirebaseId(userInfo.uid).then((resp) => {
            setUser(resp);
            setUserAddresses(resp.addresses);
          }));
      } else {
        setUser(false);
      }
    });
  }, []);

  // useEffect(() => {
  //   getAllAddressesByUserId(user.id).then((response) => {
  //     setUserAddresses(response);
  //   });
  // }, []);

  return (
    <div className='App'>
      <Router>
          <NavbarSweetTooth user={user}/>
          <Routes
            user={user}
            userAddresses={userAddresses}
            setUserAddresses={setUserAddresses}
          />
      </Router>
    </div>
  );
}

export default App;
