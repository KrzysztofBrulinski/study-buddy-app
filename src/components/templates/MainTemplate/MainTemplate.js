import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px 1fr;
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      {children}
    </Wrapper>
  );
};

export default MainTemplate;
