import PropTypes from 'prop-types';
import {
    Button, 
    Card,
    CardText,
    CardTitle
} from 'reactstrap';

const SnackCard = ({ 
    snackName, snackDescription, snackImageUrl
}) => {
    return (
        <Card body>
            <CardTitle tag="h5">{snackName}</CardTitle>
            <CardText>{snackDescription}</CardText>
            <img src={snackImageUrl} alt={snackName}/>
            <Button>"Plus1"</Button>
            <Button>"Minus1"</Button>
        </Card>
    );
};

SnackCard.propTypes = {
    snackName: PropTypes.string,
    snackDescription: PropTypes.string,
    snackImageUrl: PropTypes.string
}
export default SnackCard;