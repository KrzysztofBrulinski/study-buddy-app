import React from 'react';
import AddUser from './AddUser';
import Dashboard from './Dashboard';
import { renderWithProviders } from 'helpers/renderWithProviders';
import { screen, fireEvent } from '@testing-library/react';

describe('Add User Form', () => {
  it('Adds user to the list', () => {
    renderWithProviders(
      <>
        <AddUser /> <Dashboard />
      </>
    );

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Krzysztof' } });
    fireEvent.change(screen.getByLabelText('Attendance'), { target: { value: '73%' } });
    fireEvent.change(screen.getByLabelText('Average'), { target: { value: '4.7' } });
    fireEvent.click(screen.getByText('Consent'));
    fireEvent.click(screen.getByText('Add'));
    screen.getByText('Krzysztof');
  });
  it('Prevents to add new user to the list if checkbox not checked', () => {
    renderWithProviders(
      <>
        <AddUser /> <Dashboard />
      </>
    );

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'Janek' } });
    fireEvent.change(screen.getByLabelText('Attendance'), { target: { value: '73%' } });
    fireEvent.change(screen.getByLabelText('Average'), { target: { value: '4.7' } });
    fireEvent.click(screen.getByText('Add'));
    const user = screen.queryAllByText('Janek');
    expect(user.length).toBe(0);
  });
});
