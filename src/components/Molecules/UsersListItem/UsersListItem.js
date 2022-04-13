import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledInfo } from './UsersListItem.styles';
import Average from 'components/atoms/Average/Average';
import { UserShape } from 'types';
import { useContext } from 'react';
import { UsersContext } from 'providers/UsersProvider';

const UsersListItem = ({ userData: { name = '', attendance = '0%', average = '' } }) => {
  const { deleteUser } = useContext(UsersContext);

  return (
    <Wrapper>
      <Average average={average} />
      <StyledInfo>
        <p>{name}</p>
        <p>attendance {attendance}</p>
      </StyledInfo>
      <DeleteButton
        onClick={() => {
          deleteUser(name);
        }}
      />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape(UserShape),
};

export default UsersListItem;
