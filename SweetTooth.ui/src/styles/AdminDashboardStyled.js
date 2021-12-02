import styled from 'styled-components';
import { Card } from 'reactstrap';

const AdminDiv = styled(Card)`
  flex-flow: row wrap;
  margin: auto;
  box-shadow: 0px 0px 5px gray;
  margin: 10px;
  border-radius: 10px;
  align-self: auto;
  background: tomato;
  padding: 5px;
  width: 200px;
  height: 150px;
  margin-top: 10px;
  line-height: 150px;
  color: white;
  font-weight: bold;
  text-align: center;
`;

export default AdminDiv;
