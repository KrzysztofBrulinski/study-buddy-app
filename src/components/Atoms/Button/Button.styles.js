import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23px;
  height: 23px;
  background-color: ${({ theme }) => theme.colors.grey};
  border-radius: 50px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }
`;
