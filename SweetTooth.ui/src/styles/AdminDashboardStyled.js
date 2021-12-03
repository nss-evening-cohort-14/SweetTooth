import styled from 'styled-components';
import { Button, Container } from 'reactstrap';

const AdminDashContainer = styled(Container)`
  margin-top: 2%
`;

const AdminDashButton = styled(Button)`
  flex-grow: 1;
  flex-flow: row wrap;
  align-items: center;
  box-shadow: 0px 0px 5px gray;
  margin: 10px;
  border-radius: 10px;
  align-self: auto;
  padding: 5px;
  width: 200px;
  height: 150px;
  margin-top: 10px;
  font-weight: bold;
  color: black;
`;

export { AdminDashContainer, AdminDashButton };
