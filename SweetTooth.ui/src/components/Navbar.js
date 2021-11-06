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
              ? <Button outline color='danger' onClick={signOutUser}>Logout</Button>
              : ''
          }
        </>
      }
      </NavItem>
  );
  return (
    <div>
      <Navbar
        color="light"
        expand="md"
        light
      >
        <NavbarBrand href="/">
          SweetTooth
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
                <Link className="nav-link" to="/shop">
                <i className="fas fa-candy-cane"></i>
                </Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="/cart">
                <i className="fas fa-shopping-cart"></i>
                </Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="user-profile">
                <i className="fas fa-user"></i>
                </Link>
            </NavItem>
            <NavItem>
                <Link className="nav-link" to="admin-dashboard">
                Admin Dashboard
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
