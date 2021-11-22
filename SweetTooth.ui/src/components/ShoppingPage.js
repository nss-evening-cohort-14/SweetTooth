import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container
} from 'reactstrap';
import '../styles/shoppingPage.scss';
import { Div } from '../styles/ShoppingPageStyled';
import SnackCard from './SnackCard';
import MoodModal from './forms/MoodModal';
import { getMoodById } from '../helpers/data/MoodData';
import { getOrderItems } from '../helpers/data/OrderData';

function ShoppingPage({
  user, setUser, order, snacks, setOrder
}) {
  // console.warn('shopPage (user):', user);
  const [modalStatus, setModalStatus] = useState(true);
  const modalToggle = () => setModalStatus(!modalStatus);

  const [userMood, setUserMood] = useState({});
  useEffect(() => {
    getMoodById(user.moodId).then((resp) => setUserMood(resp));
    console.warn('ShopPage: userMood', userMood);
  }, []);

  const [orderItems, setOrderItems] = useState([]);
  useEffect(() => {
    if (order.id) {
      getOrderItems(order.id).then((resp) => {
        setOrderItems(resp);
      });
    }
  }, []);

  return (
    <>
      <div className="shoppingPage d-flex flex-column justify-content-around">
        <Button onClick={modalToggle}>Select Mood</Button>
        <Container className="rounded mb-20 border border-primary m-3">
          <MoodModal
            id='selectMood'
            modalStatus={modalStatus}
            modalToggle={modalToggle}
            userMood={userMood}
            setUserMood={setUserMood}
            user={user}
            setUser={setUser}
          />
          <h1>Suggested Snacks (Filtered by Mood)</h1>
          <div className="row pt-5">
            <Div className="col-12 d-flex align-items-stretch">
              {orderItems.length > 0
                ? snacks.map((snack) => (
                  <SnackCard
                    key={snack.id}
                    id={snack.id}
                    name={snack.name}
                    price={snack.price}
                    category={snack.category}
                    description={snack.description}
                    image={snack.image}
                    orderId={order.id}
                    orderItems={orderItems}
                    setOrderItems={setOrderItems}
                    setOrder={setOrder}
                  />
                ))
                : ''
              }
            </Div>
          </div>
        </Container>
        <Container className="rounded mb-20 border border-secondary flex-grow-1 flex-fill m-3">
          <h1>All Snacks (Filtered by Category)</h1>
          <div className="row pt-5">
            <Div className="col-12 d-flex align-items-stretch">
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
  setUser: PropTypes.func,
  order: PropTypes.object,
  snacks: PropTypes.array,
  setOrder: PropTypes.func
};

export default ShoppingPage;
