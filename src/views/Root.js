import React, { useState } from 'react';
import { users as usersData } from 'data/users';
import UsersList from 'components/Organisms/UsersList/UsersList';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Form from 'components/Organisms/Form/Form.js';
import { Wrapper, PanelContainer } from './Root.styles';
import Navigation from 'components/Organisms/Navigation/Navigation';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
};

const links = [
  { label: 'Home', url: '/' },
  { label: 'Add user', url: '/add-user' },
];

const Root = () => {
  const [users, setUsers] = useState(usersData);
  const [formValues, setFormValues] = useState(initialFormState);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);
    setUsers(filteredUsers);
  };

  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper>
          <Navigation links={links} />
          <PanelContainer>
            <Routes>
              <Route path="/" element={<UsersList users={users} deleteUser={deleteUser} />} />
              <Route
                path="/add-user"
                element={
                  <Form formValues={formValues} setFormValues={setFormValues} setUsers={setUsers} users={users} initialFormState={initialFormState} />
                }
              />
            </Routes>
          </PanelContainer>
        </Wrapper>
      </ThemeProvider>
    </Router>
  );
};

export default Root;
