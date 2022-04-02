import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Atoms/Button/Button';
import { Wrapper, StyledInfo } from './UsersListItem.styles';
import Average from 'components/Atoms/Average/Average';

const UsersListItem = ({ userData: { name = '', attendance = '0%', average = '' } }) => {
  return (
    <Wrapper>
      <Average average={average} />
      <StyledInfo>
        <p>{name}</p>
        <p>attendance {attendance}</p>
      </StyledInfo>
      <Button />
    </Wrapper>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    attendance: PropTypes.string,
    average: PropTypes.string.isRequired,
  }),
};

export default UsersListItem;
