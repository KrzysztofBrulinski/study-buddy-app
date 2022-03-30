import React from 'react';
import PropTypes from 'prop-types';

const UsersListItem = ({
  userData: { name = '', attendance = '0%', average = '' },
}) => {
  return (
    <li>
      <div>{average}</div>
      <div>
        <p>{name}</p>
        <p>attendance {attendance}</p>
      </div>
      <button>X</button>
    </li>
  );
};

UsersListItem.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string,
    attendance: PropTypes.string,
    average: PropTypes.string,
  }),
};

export default UsersListItem;
