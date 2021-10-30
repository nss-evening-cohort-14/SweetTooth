import React from 'react';
import {
  NavbarBrand,
  Navbar,
  NavbarToggler,
  Collapse,
  NavItem,
  Nav,
  NavLink,
} from 'reactstrap';

export default function NavbarSweetTooth() {
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
              <NavLink href="/components/">
              <i className="fas fa-candy-cane"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
              <i className="fas fa-shopping-cart"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
              <i className="fas fa-user"></i>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
              Admin Dashboard
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}
