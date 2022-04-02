import styled from 'styled-components';

export const Wrapper = styled.li`
  display: flex;
  align-items: center;
  position: relative;
  &:not(:last-child)::after {
    content: '';
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.superLightGrey};
  }
`;

export const StyledInfo = styled.div`
  padding: 24px;
  p {
    color: ${({ theme }) => theme.colors.darkGrey};
    font-size: ${({ theme }) => theme.fontSize.s};
    margin: 0;
  }

  p:first-child {
    font-size: ${({ theme }) => theme.fontSize.l};
    font-weight: 700;
    margin-bottom: 2px;
  }
`;
