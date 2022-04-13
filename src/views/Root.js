import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Wrapper, PanelContainer } from './Root.styles';
import AddUser from 'views/AddUser.js';
import MainTemplate from 'components/templates/MainTemplate/MainTemplate';
import Dashboard from './Dashboard';
import UsersProvider from 'providers/UsersProvider';

const Root = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainTemplate>
        <UsersProvider>
          <Wrapper>
            <PanelContainer>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/add-user" element={<AddUser />} />
              </Routes>
            </PanelContainer>
          </Wrapper>
        </UsersProvider>
      </MainTemplate>
    </ThemeProvider>
  </Router>
);

export default Root;
