import styled from 'styled-components';

export const StyledAverage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border-radius: 50px;
  font-size: ${({ theme }) => theme.fontSize.m};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme, value }) => {
    if (value > 4) return theme.colors.success;
    if (value > 3) return theme.colors.warning;
    if (value < 3) return theme.colors.error;
    return theme.colors.grey;
  }};
`;
