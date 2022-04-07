import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Wrapper, StyledAppTitle, StyledNavigation } from './Navigation.styles';

const Navigation = ({ links }) => (
  <Wrapper>
    <StyledAppTitle>
      <h1>Study Buddy</h1>
    </StyledAppTitle>
    <StyledNavigation>
      {links.map((link) => (
        <Link key={link.url} to={link.url}>
          {link.label}
        </Link>
      ))}
    </StyledNavigation>
  </Wrapper>
);

Navigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Navigation;
