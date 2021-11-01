import React from 'react';
import {
  NavbarBrand,
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  NavLink,
  Button
} from 'reactstrap';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signInUser, signOutUser } from '../helpers/auth';

export default function NavbarSweetTooth() {
  const authButtons = () => (
    <NavItem>
      {
        user !== null
        && <>
          {
            user
              ? <Button color='danger' onClick={signOutUser}>Admin Out</Button>
              : <Button color='success' onClick={signInUser}>Admin In</Button>
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
        <NavbarToggler onClick={function noRefCheck() {}} />
        <Collapse navbar>
          <Nav
            className="me-auto"
            navbar
          >
            <NavItem>
              <NavLink>
                <Link to="/shop">
                <i className="fas fa-candy-cane"></i>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/cart">
                <i className="fas fa-shopping-cart"></i>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="user-profile">
                <i className="fas fa-user"></i>
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="admin-dashboard">
                Admin Dashboard
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
        {authButtons()}
      </Navbar>
    </div>
  );
}

Navbar.propTypes = {
  user: PropTypes.any
};
