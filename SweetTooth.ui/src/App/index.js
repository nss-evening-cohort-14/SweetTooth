import React, { useEffect, useState } from 'react';
import firebase from 'firebase';
import './App.scss';

function App() {
  const [user, setUser] = useState(null);
  // const [admin, setAdmin] = useState(null);
  const [domWriting, setDomWriting] = useState('Nothing Here!');

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInState) => {
      if (userInState) {
        const userInfoObject = {
          fullName: userInState.displayName,
          uid: userInState.uid,
          userName: userInState.email.split('@')[0]
        };
        setUser(userInfoObject);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);
  const handleClick = (e) => {
    console.warn(`You clicked ${e.target.id}`);
    setDomWriting(`You clicked ${e.target.id}! Check the Console!`);
  };

  return (
    <div className='App'>
      <h2>INSIDE APP COMPONENT</h2>
      <div>
        <button
          id='this-button'
          className='btn btn-info'
          onClick={handleClick}
        >
          Login
        </button>
      </div>
      <div>
        <button
          id='that-button'
          className='btn btn-primary mt-3'
          onClick={handleClick}
        >
          Logout
        </button>
      </div>
      <h3>{domWriting}</h3>
    </div>
  );
}

export default App;
