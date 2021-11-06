import React from 'react';
import {
  Switch,
  Route
} from 'react-router-dom';
import AdminDashboard from '../components/AdminDashboard';
import Cart from '../components/Cart';
import ShoppingPage from '../components/ShoppingPage';
import UserProfile from '../components/UserProfile';

// will need to add private routes once auth is done.
// Admin and user hook

export default function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route
        exact path="/"
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
        component={UserProfile}
        />
        <Route
        exact path="/admin-dashboard"
        component={AdminDashboard}
        />
      </Switch>
    </div>
  );
}
