import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container
} from 'reactstrap';
import '../styles/shoppingPage.scss';
import { Div } from '../styles/ShoppingPageStyled';
import SnackCard from './SnackCard';
import MoodModal from './forms/MoodModal';

export default function ShoppingPage({
  user, order, snacks
}) {
  console.warn('shoppingpage', user);
  const [modalStatus, setModalStatus] = useState(true);
  const modalToggle = () => setModalStatus(!modalStatus);

  return (
    <>
      <div className="shoppingPage d-flex flex-column justify-content-around">
        <Button onClick={modalToggle}>Select Mood</Button>
        <Container className="rounded mb-20 border border-primary m-3">
          <MoodModal
            id='selectMood'
            modalStatus={modalStatus}
            modalToggle={modalToggle}
          />
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
                  orderId={order.id}
                />
              ))}
            </Div>
          </div>
        </Container>
        <Container className="rounded mb-20 border border-secondary flex-grow-1 flex-fill m-3">
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
                    setOrderItems={setOrderItems}
                    orderId={order.id}
                  />
                ))} */}
            </Div>
          </div>
        </Container>
        <Container className="rounded mb-20 border border-success m-3">
          <h1>Stretch: Recently Viewed</h1>
        </Container>
      </div>
    </>
  );
}

ShoppingPage.propTypes = {
  user: PropTypes.any,
  order: PropTypes.object,
  snacks: PropTypes.array
};
