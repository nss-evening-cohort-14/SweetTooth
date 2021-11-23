import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Container
} from 'reactstrap';
import '../styles/shoppingPage.scss';
import { Div } from '../styles/ShoppingPageStyled';
import SnackCard from './SnackCard';
import { getOrderItems } from '../helpers/data/OrderData';

function ShoppingPage({
  order, snacks, setOrder
}) {
  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    getOrderItems(order.id).then((resp) => {
      console.warn('resp', resp);
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

  console.warn(orderItems);

  return (
    <>
      <div className="shoppingPage d-flex flex-column justify-content-around">
        <Container className="rounded mb-20 border border-primary m-3">
          <h1>Suggested Snacks (Filtered by Mood)</h1>
          <div className="row pt-5">
            <Div className="col-12 d-flex align-items-stretch">
              { orderItems.length > 0
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
  order: PropTypes.object,
  snacks: PropTypes.array,
  setOrder: PropTypes.func
};

export default ShoppingPage;
