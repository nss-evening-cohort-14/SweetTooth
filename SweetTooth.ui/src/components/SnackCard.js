import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Card,
  CardText,
  CardTitle,
  Row,
  Col
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
        <Row>
          <Col>
            <Button><i className='fas fa-plus fa-2x'></i></Button>
          </Col>
          <Col>
            <Button><i className='fas fa-minus fa-2x'></i></Button>
          </Col>
        </Row>
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
