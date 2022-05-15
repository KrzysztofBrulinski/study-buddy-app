import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.lightPurple};
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: ${({ isBig = false }) => (isBig ? '8px 45px' : '7px 28px')};
  border: none;
  border-radius: 25px;
  font-size: ${({ theme, isBig = false }) => (isBig ? theme.fontSize.m : theme.fontSize.s)};
  cursor: pointer;
  font-weight: bold;
`;
