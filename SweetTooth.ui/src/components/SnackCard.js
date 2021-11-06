import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardText,
  CardTitle
} from 'reactstrap';
import styled from 'styled-components';

const Image = styled.img`
  max-height: 200px;
  border-radius: 50%;
  width: 200px;
`;

function SnackCard({
  name, category, price, description, image
}) {
  return (
    <div className="col-sm-4">
      <Card body>
        <CardTitle tag='h5'>{name}</CardTitle>
        <CardText>
          {category}<br/>
          {description}<br/>
          ${price}
        </CardText>
        <Image src={image} alt={name}/>
        <Button>Plus1</Button>
        <Button>Minus1</Button>
      </Card>
    </div>
  );
}

SnackCard.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  price: PropTypes.number,
  description: PropTypes.string,
  image: PropTypes.string
};
export default SnackCard;
