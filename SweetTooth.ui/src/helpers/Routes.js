import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import PropTypes from 'prop-types';
import AdminDashboard from '../components/AdminDashboard';
import Cart from '../components/Cart';
import LandingPage from '../components/LandingPage';
import ShoppingPage from '../components/ShoppingPage';
import UserProfile from '../components/UserProfile';

// will need to add private routes once auth is done.
// Admin and user hook

export default function Routes({
  user, userAddresses, setUserAddresses
}) {
  return (
    <div>
      <Switch>
        <Route
        exact path="/"
        component={() => <LandingPage
          user={user}
        />}
        />
        <Route
        exact path="/shop"
        component={ShoppingPage}
        />
        <Route
        exact path="/cart"
        component={() => <Cart
          user={user}
        />
      }
        />
        <Route
        exact path="/user-profile"
        component={() => <UserProfile
          user={user}
          userAddresses={userAddresses}
          setUserAddresses={setUserAddresses}
        />}
        />
        <Route
        exact path="/admin-dashboard"
        component={AdminDashboard}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  userAddresses: PropTypes.array,
  setUserAddresses: PropTypes.func
};
