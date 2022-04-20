import React from 'react';
import FormField from './FormField';
import { renderWithProviders } from 'helpers/renderWithProviders';

describe('Form Field', () => {
  it('Render component', () => {
    renderWithProviders(<FormField label="name" name="name" id="name" />);
  });
});
