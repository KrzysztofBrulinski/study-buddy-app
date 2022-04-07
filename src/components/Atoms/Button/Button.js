import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: 7px 28px;
  border: none;
  border-radius: 25px;
  font-size: ${({ theme }) => theme.fontSize.s};
  cursor: pointer;
`;
