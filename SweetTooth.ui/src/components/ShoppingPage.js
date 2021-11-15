import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Container
} from 'reactstrap';
import { getSnacks } from '../helpers/data/SnackData';
import '../styles/shoppingPage.scss';
import { Div } from '../styles/ShoppingPageStyled';
import SnackCard from './SnackCard';

export default function ShoppingPage({ user, order, orderItems }) {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    getSnacks().then(setSnacks);
  }, []);

  console.warn(user, order, orderItems);

  return (
    <>
      <div className="shoppingPage d-flex flex-column justify-content-around">
        <Container className = "rounded mb-20 border border-primary m-3">
          <h1>Suggested Snacks (Filtered by Mood)</h1>
            <div className="row pt-5">
              <Div className="col-12 d-flex align-items-stretch">
                {snacks.map((snack) => (
                  <SnackCard
                    key={snack.id}
                    id={snack.id}
                    name={snack.name}
                    price={snack.price}
                    category={snack.category}
                    description={snack.description}
                    image={snack.image}
                    orderItems={orderItems}
                    orderId={order.id}
                  />
                ))}
              </Div>
            </div>
        </Container>
        <Container className = "rounded mb-20 border border-secondary flex-grow-1 flex-fill m-3">
          <h1>All Snacks (Filtered by Category)</h1>
            <div className="row pt-5">
              <Div className="col-12 d-flex align-items-stretch">
                {/* {snacks.map((snack) => (
                  <SnackCard
                    key={snack.id}
                    id={snack.id}
                    name={snack.name}
                    price={snack.price}
                    category={snack.category}
                    description={snack.description}
                    image={snack.image}
                    orderItems={orderItems}
                    orderId={order.id}
                  />
                ))} */}
              </Div>
            </div>
        </Container>
        <Container className = "rounded mb-20 border border-success m-3">
          <h1>Stretch: Recently Viewed</h1>
        </Container>
      </div>
    </>
  );
}

ShoppingPage.propTypes = {
  user: PropTypes.any,
  order: PropTypes.object,
  orderItems: PropTypes.array
};
