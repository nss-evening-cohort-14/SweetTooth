import React, { useState, useEffect } from 'react';
import { Container } from 'reactstrap';
import { getSnacks } from '../helpers/data/SnackData';
import '../styles/shoppingPage.scss';
import SnackCard from './SnackCard';

export default function ShoppingPage() {
  const [snacks, setSnacks] = useState([]);
  useEffect(() => {
    getSnacks().then(setSnacks);
  }, []);

  return (
    <>
      <div className="shoppingPage d-flex flex-column justify-content-around mainDiv">
        <Container className = "rounded mb-20 border border-primary m-3">
          <h1>Suggested Snacks (Filtered by Mood)</h1>
          {snacks.map((snack) => (
            <SnackCard
              key={snack.id}
              name={snack.name}
              price={snack.price}
              category={snack.category}
              description={snack.description}
              image={snack.image}
            />
          ))}
        </Container>
        <Container className = "rounded mb-20 border border-secondary flex-grow-1 flex-fill m-3">
          <h1>All Snacks (Filtered by Category</h1>
        </Container>
        <Container className = "rounded mb-20 border border-success m-3">
          <h1>Stretch: Recently Viewed</h1>
        </Container>
      </div>
    </>
  );
}
