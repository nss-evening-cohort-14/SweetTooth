import React, { useState } from 'react';
import {
  NavbarBrand,
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signOutUser } from '../helpers/auth';

// eslint-disable-next-line react/prop-types
export default function NavbarSweetTooth({ user }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const signOutButton = () => (
    <NavItem>
      {
        user !== null
        && <>
          {
            user
              ? <Button outline color='light' onClick={signOutUser}><i className="fas fa-sign-out-alt"></i></Button>
              : ''
          }
        </>
      }
      </NavItem>
  );
  return (
    <div>
      <Navbar
        style={{ backgroundColor: '#6bab90' }}
        expand="md"
        light
      >
        <NavbarBrand href="/" style={{ color: 'white', fontWeight: 'bold' }}>
          SweetTooth
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="nav-bar me-auto"
            navbar
          >
            <NavItem>
                <Link className="nav-link" to="/shop">
                <i className="fas fa-candy-cane" style={{ color: 'white' }}></i>
                </Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/cart">
                <i className="fas fa-shopping-cart" style={{ color: 'white' }}></i>
                </Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="user-profile">
                <i className="fas fa-user" style={{ color: 'white' }}></i>
                </Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="admin-dashboard">
                <i className="fas fa-user-lock" style={{ color: 'white' }}></i>
                </Link>
            </NavItem>
            {signOutButton()}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

Navbar.propTypes = {
  user: PropTypes.any,
};
