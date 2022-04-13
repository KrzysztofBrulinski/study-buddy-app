import styled from 'styled-components';

export const MainWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  width: 100%;
  max-width: 500px;
  border-radius: 25px;
  padding: 40px 30px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3);
  margin: 25px;
  ${({ styles }) => styles}
`;
