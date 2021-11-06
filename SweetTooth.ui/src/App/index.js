import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase';
import NavbarSweetTooth from '../components/Navbar';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((authed) => {
      if (authed) {
        const userInfoObject = {
          uid: authed.uid,
          firstName: authed.displayName.split(' ')[0],
          lastName: authed.displayName.split(' ')[1],
          email: authed.email,
          profileUrl: authed.photoURL
        };
        setUser(userInfoObject);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
    <div className='App'>
      <Router>
          <NavbarSweetTooth user={user}/>
          <Routes user={user}/>
      </Router>
    </div>
  );
}

export default App;
