import React from 'react';
import { Input } from 'components/atoms/Input/Input';
import { Wrapper } from './SearchBar.styles';
import { StatusInfo } from './SearchBar.styles';

const SearchBar = () => {
  return (
    <Wrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>## USER NAME ##</p>
      </StatusInfo>
      <Input />
    </Wrapper>
  );
};

export default SearchBar;
