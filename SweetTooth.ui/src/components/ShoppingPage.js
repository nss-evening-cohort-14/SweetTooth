import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Container
} from 'reactstrap';
import '../styles/shoppingPage.scss';
import { Div, FilledDiv } from '../styles/ShoppingPageStyled';
import SnackCard from './SnackCard';
import MoodModal from './forms/MoodModal';
import { getMoodById } from '../helpers/data/MoodData';
import { getOrderItems } from '../helpers/data/OrderData';
import { getSnacksByMood } from '../helpers/data/SnackData';

function ShoppingPage({
  user, snacks, setUser, order, setOrder
}) {
  // console.warn('Top of Shopping Page, user', user);
  const [userMood, setUserMood] = useState({});
  useEffect(() => {
    getMoodById(user.moodId)
      .then(setUserMood);
  }, [user]);
  // I believe this above useEffect is grabbing old data before the  backend has the chance to update, therefore possible refactor available here

  const [snacksByMood, setSnacksByMood] = useState([]);
  useEffect(() => {
    getSnacksByMood(user.moodId).then(setSnacksByMood);
  }, []);

  // const [snacksByCategory, setSnacksByCategory] = useState([]);
  // useEffect(() => {
  //   getSnacksByCategory('Sweet').then(setSnacksByCategory);
  // }, []);

  const [modalStatus, setModalStatus] = useState(false);
  const modalToggle = () => setModalStatus(!modalStatus);

  const [orderItems, setOrderItems] = useState([]);
  useEffect(() => {
    getOrderItems(order.id).then((resp) => {
      // console.warn('resp', resp);
      if (resp.length === 0) {
        setOrderItems([{
          id: '',
          orderId: '',
          snackId: '',
          quantity: 0
        }]);
      } else {
        setOrderItems(resp);
      }
    });
  }, []);

  return (
    <>
      <div className="shoppingPage d-flex flex-column justify-content-center align-items-center pt-3">
        <Button className='btn-danger' onClick={modalToggle}>Select Mood</Button>
        {/* <Button>Select Category</Button> */}
        <MoodModal
          id='selectMood'
          modalStatus={modalStatus}
          modalToggle={modalToggle}
          userMood={userMood}
          setUserMood={setUserMood}
          user={user}
          setUser={setUser}
        />
        <Container className="rounded mb-20 border border-primary m-3">
          <FilledDiv className="row justify-content-center">
            <h1>These snacks would fit your mood nicely.</h1>
            <Div className="col-12 d-flex align-items-stretch p-2">
              {orderItems.length > 0
                ? snacksByMood.map((snack, i) => (
                  <SnackCard
                    key={i}
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
          </FilledDiv>
        </Container>
        {/* <Container className="rounded mb-20 border border-secondary flex-grow-1 flex-fill m-3">
          <h1>All Snacks (Filtered by Category)</h1>
          <div className="row pt-5">
            <Div className="col-12 d-flex align-items-stretch">
              {orderItems.length > 0
                ? snacksByCategory.map((snack, i) => (
                  <SnackCard
                    key={i}
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
        </Container> */}
        <Container className="rounded mb-20 border border-secondary flex-grow-1 flex-fill m-3">
          <FilledDiv className="row justify-content-center">
            <h1>Select from all snacks to fuel your snack attack.</h1>
            <Div className="col-12 d-flex align-items-stretch p-2">
              {orderItems.length > 0
                ? snacks.map((snack, i) => (
                  <SnackCard
                    key={i}
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
          </FilledDiv>
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
