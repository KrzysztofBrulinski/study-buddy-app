import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  border-right: 1px solid ${({ theme }) => theme.colors.grey};
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.darkGrey};
  margin-top: 20px;

  h2 {
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
  height: 100%;
  margin-top: 50px;
`;

export const StyledLink = styled(NavLink)`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.darkGrey};
  text-decoration: none;
  margin: 0 24px 15px 0;
  position: relative;
  transition: ${({ theme }) => theme.standardTransition};

  &::after {
    content: '';
    width: 18px;
    height: 3px;
    background-color: transparent;
    top: 50%;
    transform: translateY(-50%);
    right: -24px;
    position: absolute;
    transition: ${({ theme }) => theme.standardTransition};
  }
  &:hover,
  &.active {
    color: ${({ theme }) => theme.colors.black};
  }

  &.active::after {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
