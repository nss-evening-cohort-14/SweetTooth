import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';

const SnackCard = ({
  name, category, price, description, image
}) => {
  <Card body>
    <CardTitle tag='h5'>{name}</CardTitle>
    <CardText>
      {category}
      {description}
      {price}
    </CardText>
    <img src={image} alt={name}/>
    <Button>Plus1</Button>
    <Button>Minus1</Button>
  </Card>;
};

SnackCard.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string
};
export default SnackCard;
