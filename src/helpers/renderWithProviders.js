import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import UsersProvider from 'providers/UsersProvider';

export const renderWithProviders = (children) => {
  return render(
    <UsersProvider>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </UsersProvider>
  );
};
