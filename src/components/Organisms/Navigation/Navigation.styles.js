import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 110px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const StyledAppTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: 20px;

  h1 {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    margin: 0 15px 0 0;
    text-align: right;
  }
`;

export const StyledNavigation = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  width: 100%;
  margin-top: 50px;

  a {
    font-size: ${({ theme }) => theme.fontSize.m};
    font-weight: 700;
    color: ${({ theme }) => theme.colors.darkGrey};
    text-decoration: none;
    margin: 0 24px 15px 0;
    position: relative;
    transition: ${({ theme }) => theme.standardTransition};

    &::after {
      content: '';
      width: 18px;
      height: 2px;
      background-color: transparent;
      top: 50%;
      right: -24px;
      position: absolute;
      transition: ${({ theme }) => theme.standardTransition};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.black};

      &::after {
        background-color: ${({ theme }) => theme.colors.grey};
      }
    }
  }
`;
