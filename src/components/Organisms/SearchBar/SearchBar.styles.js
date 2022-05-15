import styled from 'styled-components';
import { Input } from 'components/atoms/Input/Input';

export const Wrapper = styled.div`
  grid-row: 1 / 2;
  grid-column: 2 / 3;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  padding: 0 38px;
  display: flex;
  align-items: center;

  ${Input} {
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.darkGrey};
    height: 44px;
    width: 45%;
    margin-left: 45px;
    padding: 15px 28px;
    border: 2px solid ${({ theme }) => theme.colors.lightPurple};
  }
`;

export const StatusInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: ${({ theme }) => theme.colors.darkPurple};
  height: 100%;

  p {
    margin: 0 0 5px 0;
    padding: 0;
    font-size: ${({ theme }) => theme.fontSize.m};
    color: ${({ theme }) => theme.colors.darkGrey};

    &:last-child {
      font-weight: 700;
      font-size: ${({ theme }) => theme.fontSize.l};
      margin: 0;
    }
  }
`;
