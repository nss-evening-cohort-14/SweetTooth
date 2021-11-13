import React from 'react';
import {
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import PropTypes from 'prop-types';
import AdminDashboard from '../components/AdminDashboard';
import Cart from '../components/Cart';
import LandingPage from '../components/LandingPage';
import ShoppingPage from '../components/ShoppingPage';
import UserProfile from '../components/UserProfile';

// will need to add private routes once auth is done.
// Admin and user hook

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (remainder) => (user
    ? (<Component {...remainder} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: remainder.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};
function Routes({ user }) {
  return (
    <div>
      <Switch>
        <Route
        exact path="/"
        component={() => <LandingPage
          user={user}
        />}
        />
        <PrivateRoute
        exact path="/shop"
        component={ShoppingPage}
        user={user}
        />
        <PrivateRoute
        exact path="/cart"
        component={() => <Cart
        user={user}
        />
      }
        user={user}
        />
        <PrivateRoute
        exact path="/user-profile"
        component={UserProfile}
        user={user}
        />
        <PrivateRoute
        exact path="/admin-dashboard"
        component={AdminDashboard}
        user={user}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any
};

export default Routes;
