import React from 'react';
import PropTypes from 'prop-types';
import { StyledAverage } from './Average.styles';

const Average = ({ average }) => <StyledAverage value={average}>{average}</StyledAverage>;

Average.propTypes = {
  average: PropTypes.string,
};

export default Average;
