import styled from 'styled-components';
import { MainWrapper } from 'assets/styles/GlobalStyledComponents/MainWrapper.style';

export const Wrapper = styled.div`
  grid-row: 1 / 3;
  grid-column: 3 / 3;
  border: 1px solid ${({ theme }) => theme.colors.darkPurple};
  overflow: hidden;
  overflow-y: scroll;
  padding: 30px 45px;
  color: ${({ theme }) => theme.colors.darkGrey};

  ${MainWrapper} {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const NewsSectionHeader = styled.h2`
  margin: 0 0 16px 0;
`;

export const TitleWrapper = styled.div`
  h3,
  p {
    margin: 0;
  }

  h3 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }

  p {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  padding: 15px 10px 15px 0;
  justify-content: flex-start;
  align-items: center;

  p {
    margin: 0;
  }

  img {
    min-width: 186px;
    width: 100%;
    height: 124px;
    border-radius: 10px;
  }
`;
