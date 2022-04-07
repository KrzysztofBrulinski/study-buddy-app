import React from 'react';
import PropTypes from 'prop-types';
import DeleteButton from 'components/Atoms/DeleteButton/DeleteButton';
import { Wrapper, StyledInfo } from './UsersListItem.styles';
import Average from 'components/Atoms/Average/Average';

const UsersListItem = ({ deleteUser, userData: { name = '', attendance = '0%', average = '' } }) => (
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

UsersListItem.propTypes = {
  deleteUser: PropTypes.func,
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
    average: PropTypes.string.isRequired,
  }),
};

export default UsersListItem;
