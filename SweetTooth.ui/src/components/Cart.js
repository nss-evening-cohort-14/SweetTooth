import React, { useEffect } from 'react';
import { getSingleOder } from '../helpers/data/OrderData';
import OrderItemCard from './OrderItemCard';

export default function Cart() {
  useEffect(() => {
    getSingleOder('85955DA1-EE35-EC11-8173-0800275F12C6').then((res) => console.warn(res));
  }, []);

  return (
    <div>
     <OrderItemCard/>
    </div>
  );
}
