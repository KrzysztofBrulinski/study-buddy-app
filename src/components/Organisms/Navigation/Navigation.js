import React from 'react';
import { Wrapper, Logo, StyledNavigation, StyledLink } from './Navigation.styles';

const links = [
  { label: 'Dashboard', url: '/' },
  { label: 'Add user', url: '/add-user' },
];

const Navigation = () => (
  <Wrapper>
    <Logo>
      <h2>
        Study
        <br />
        Buddy
      </h2>
    </Logo>
    <StyledNavigation>
      {links.map((link) => (
        <StyledLink key={link.url} to={link.url}>
          {link.label}
        </StyledLink>
      ))}
    </StyledNavigation>
  </Wrapper>
);

export default Navigation;
