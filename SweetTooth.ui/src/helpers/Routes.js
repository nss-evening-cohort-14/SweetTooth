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
import UserProfile from '../components/UserProfile';
import Processed from '../components/Processed';
import ShoppingPage from '../components/ShoppingPage';
import OrdersAdmin from '../components/OrdersAdmin';
import UsersAdmin from '../components/UsersAdmin';
import MoodsAdmin from '../components/MoodsAdmin';
import SnacksAdmin from '../components/SnacksAdmin';
import SnackMoodAdmin from '../components/SnackMoodAdmin';

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
function Routes({
  user,
  setUser,
  order,
  setOrder,
  orderItems,
  setOrderItems,
  userAddresses,
  setUserAddresses,
  snacks,
  setSnacks,
  paymentMethodsArray,
  setPaymentMethodsArray
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
        <PrivateRoute
          exact path="/shop"
          component={() => <ShoppingPage
            order={order}
            setOrder={setOrder}
            snacks={snacks}
            user={user}
            setUser={setUser}
          />}
          user={user}
        />
        <PrivateRoute
          exact path="/cart"
          component={() => <Cart
            user={user}
            order={order}
            orderItems={orderItems}
            setOrder={setOrder}
            setOrderItems={setOrderItems}
          />
          }
          user={user}
        />
        <PrivateRoute
          exact path="/user-profile"
          component={() => <UserProfile
            user={user}
            userAddresses={userAddresses}
            setUserAddresses={setUserAddresses}
            paymentMethodsArray={paymentMethodsArray}
            setPaymentMethodsArray={setPaymentMethodsArray}
          />}
          user={user}
        />
        <PrivateRoute
          exact path="/admin-dashboard"
          component={() => <AdminDashboard
            user={user}
            snacks={snacks}
            setSnacks={setSnacks}
          />}
          user={user}
        />
        <PrivateRoute
          exact path='/processed'
          component={() => <Processed
            user={user}
          />
          }
          user={user}
        />
        <PrivateRoute
          exact path='/admin-orders'
          component={OrdersAdmin}
          user={user}
        />
        <PrivateRoute
          exact path='/admin-users'
          component={UsersAdmin}
          user={user}
        />
        <PrivateRoute
          exact path='/admin-moods'
          component={MoodsAdmin}
          user={user}
        />
        <PrivateRoute
          exact path='/admin-snacks'
          component={() => <SnacksAdmin
            snacks={snacks}
          />}
          user={user}
        />
        <PrivateRoute
          exact path='/admin-snack-moods'
          component={() => <SnackMoodAdmin />}
          user={user}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  setUser: PropTypes.func,
  order: PropTypes.object,
  orderItems: PropTypes.array,
  setOrderItems: PropTypes.func,
  userAddresses: PropTypes.array,
  setUserAddresses: PropTypes.func,
  setOrder: PropTypes.func,
  snacks: PropTypes.array,
  setSnacks: PropTypes.func,
  paymentMethodsArray: PropTypes.array,
  setPaymentMethodsArray: PropTypes.func
};

export default Routes;
