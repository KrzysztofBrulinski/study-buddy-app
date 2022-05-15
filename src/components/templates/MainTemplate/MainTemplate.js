import React from 'react';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Wrapper } from './MainTemplate.styles';
import styled from 'styled-components';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import NewsFeed from '../NewsFeed/NewsFeed';

const ChildWrapper = styled.div`
  grid-row: 2 / 3;
  grid-column: 2 / 3;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
`;

const MainTemplate = ({ children }) => {
  return (
    <Wrapper>
      <Navigation />
      <SearchBar />
      <ChildWrapper>{children}</ChildWrapper>
      <NewsFeed />
    </Wrapper>
  );
};

export default MainTemplate;
