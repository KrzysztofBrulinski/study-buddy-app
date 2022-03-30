import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/UsersListItem/UsersListItem';

const UsersList = () => {
  return (
    <div>
      <ul>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
