import React, { useEffect } from 'react';
import { getOrderByUserId } from '../helpers/data/OrderData';
import OrderItemCard from './OrderItemCard';

export default function Cart() {
  useEffect(() => {
    getOrderByUserId('b1a01661-4331-ec11-8172-0800275f12c6').then((res) => console.warn(res));
  }, []);

  return (
    <div>
     <OrderItemCard/>
    </div>
  );
}
