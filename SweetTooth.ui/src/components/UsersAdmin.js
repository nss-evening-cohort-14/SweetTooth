import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Col, Row } from 'reactstrap';
import { getUsers } from '../helpers/data/userData';
import UserCard from './UserCard';

export default function UsersAdmin() {
  const [users, setUsers] = useState([]);

  const history = useHistory();
  const returnToDashboard = () => {
    history.push('/admin-dashboard');
  };

  useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
    <div>
       <h2>Users</h2>
       <Button onClick={returnToDashboard}>Return to Dashboard</Button>
      <Row className='border'>
        <Col>id</Col>
        <Col>firebaseId</Col>
        <Col>admin</Col>
        <Col>firstName</Col>
        <Col>lastName</Col>
        <Col>email</Col>
        <Col>profileUrl</Col>
        <Col>dateCreated</Col>
        <Col>moodId</Col>
        <Col>softDelete</Col>
      </Row>
        {users.map((user) => (
          <UserCard
            key={user.id}
            id={user.id}
            firebaseId={user.firebaseId}
            admin={user.admin}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            profileUrl={user.profileUrl}
            dateCreated={user.dateCreated}
            moodId={user.moodId}
            softDelete={user.softDelete}
          />
        ))}
    </div>
  );
}
