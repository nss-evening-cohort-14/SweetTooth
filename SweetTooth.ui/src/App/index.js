import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavbarSweetTooth from '../components/Navbar';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  return (
    <div className='App'>
      <Router>
          <NavbarSweetTooth/>
          <Routes/>
      </Router>
    </div>
  );
}

export default App;
