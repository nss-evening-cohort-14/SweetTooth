import React, { useEffect, useState } from 'react';
import { getOrderByUserId } from '../helpers/data/OrderData';
import OrderItemCard from './OrderItemCard';

export default function Cart() {
  const [order, setOrder] = useState(
    {
      id: '',
      orderDate: '',
      orderItems: [],
      orderNumber: 0,
      paymentMethod: null,
      paymentMethodId: '',
      processed: false,
      shipped: false,
      total: 0,
      userId: ''
    }
  );

  const [orderItems, setOrderItems] = useState([]);

  useEffect(() => {
    getOrderByUserId('b1a01661-4331-ec11-8172-0800275f12c6').then((res) => {
      setOrder(res);
      setOrderItems(res.orderItems);
    });
  }, []);

  console.warn('orderItems', orderItems);

  return (
    <div>
     {
        order.orderItems.map((item, i) => (
          <OrderItemCard
          key={i}
          quantity={item.quantity}
          name={item.itemSnack.name}
          price={item.itemSnack.price}
          image={item.itemSnack.image}
          />
        ))
      }
    </div>
  );
}
