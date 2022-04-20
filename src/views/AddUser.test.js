import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { screen, fireEvent } from '@testing-library/react';

describe('Add User', () => {
  it('Render component, add user', () => {
    renderWithProviders(
      <>
        <AddUser /> <Dashboard />
      </>
    );

    fireEvent.change(screen.getByTestId('Name'), { target: { value: 'Krzysztof' } });
    fireEvent.change(screen.getByTestId('Attendance'), { target: { value: '73%' } });
    fireEvent.change(screen.getByTestId('Average'), { target: { value: '4.7' } });
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Krzysztof');
  });
});
