import React from 'react';
import PropTypes from 'prop-types';
import {
  Button, Card, Container
} from 'reactstrap';
import { getPayMethodById, softDeletePaymentMethod } from '../helpers/data/paymentMethodData';
import '../styles/paymentMethodCard.scss';
import chip from '../Assets/ccchip.png';
import PaymentMethodModalEdit from './modals/PaymentMethodModalEdit';

function PaymentMethodCard({
  user, paymentMethodsArray, setPaymentMethodsArray, paymentMethodInfo
}) {
  // const [editNow, setEditNow] = useState(false);
  // const [idToUpdate, setIdToUpdate] = useState('');

  const handleClick = (type) => {
    switch (type) {
      case 'softDelete':
        if (paymentMethodInfo) {
          getPayMethodById(paymentMethodInfo.id)
            .then(() => {
              softDeletePaymentMethod(paymentMethodInfo)
                .then((resp) => setPaymentMethodsArray(resp));
            });
        }
        break;
      // case 'edit':
      //   if (paymentMethodInfo != null) {
      //     setIdToUpdate(paymentMethodInfo.id);
      //     setEditNow((prevState) => !prevState);
      //   }
      //   break;
      default:
        console.warn('nothing selected');
    }
  };
  return (
    <Container>
      <Card className="cred-card" key={paymentMethodInfo.id}>
        <div className="face-front">
          <img className="cred-image" src="https://images.pexels.com/photos/924824/pexels-photo-924824.jpeg"/>
          <h3 className="debit">Bank of SweetTooth</h3>
          <h3 className="bank">{paymentMethodInfo?.method}</h3>
          <img className="chip" src={chip} alt="chip"/>
          <h3 className="number">{paymentMethodInfo?.cardNumber}</h3>
          <h5 className="valid"><span>VALID <br /> THRU</span><span>{paymentMethodInfo?.expDate}</span></h5>
          <h5 className="card-holder"> CCV: {paymentMethodInfo?.securityCode}</h5>
        </div>
      </Card>
          {/* <Button color='info' outline
            onClick={(e) => handleClick('edit', paymentMethodInfo.id, e)}
          >
            {idToUpdate === paymentMethodInfo.id && editNow
              ? 'Close' : 'Edit' }
          </Button> */}
          <div style={{ display: 'inline-flex', flexDirection: 'row' }}>
           {
          <PaymentMethodModalEdit
            user={user}
            paymentMethodsArray={paymentMethodsArray}
            setPaymentMethodsArray={setPaymentMethodsArray}
            paymentMethodInfo={paymentMethodInfo}
        />
      }
          <Button color='danger' outline size='sm'
            onClick={(e) => handleClick('softDelete', paymentMethodInfo.id, e)}
          >
            Delete
          </Button>
          </div>

    </Container>
  );
}

PaymentMethodCard.propTypes = {
  user: PropTypes.any,
  paymentMethodInfo: PropTypes.object,
  paymentMethodsArray: PropTypes.array,
  setPaymentMethodsArray: PropTypes.func
};

export default PaymentMethodCard;
