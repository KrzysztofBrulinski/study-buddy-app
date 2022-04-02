import React from 'react';
import { users } from 'data/users';
import UsersListItem from 'components/Molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const UsersList = () => {
  return (
    <Wrapper>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;
