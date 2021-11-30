import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
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
    <div style={{ padding: '2%' }}>
       <Button onClick={returnToDashboard}>Return to Dashboard</Button>
       <h2>Users</h2>
       <Table size='sm' responsive hover bordered>
          <thead>
            <tr>
              <th>
                 Soft Delete
              </th>
              <th>
                Id
              </th>
              <th>
                Firebase Id
              </th>
              <th>
                Admin Status
              </th>
              <th>
                First name
              </th>
              <th>
                Last Name
              </th>
              <th>
                Email
              </th>
              {/* <th>
                Profile Url
              </th> */}
              <th>
                Date Created
              </th>
              <th>
                 Mood Id
              </th>
            </tr>
          </thead>
        <tbody>
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
        </tbody>
      </Table>
    </div>
  );
}
