import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import { renderWithProviders } from 'helpers/renderWithProviders';
import NewsFeed, { query } from './NewsFeed';
import { screen } from '@testing-library/react';

const mock = new MockAdapter(axios);

describe('NewsFeed component', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Checks if error appear when data not arrived', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    renderWithProviders(<NewsFeed />);
    await screen.findByText(/Sorry/);
  });

  it('Render articles', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(200, {
      data: {
        allArticles: [{ id: 1, title: 'Test', category: 'Test', content: 'Tets' }],
      },
    });
    renderWithProviders(<NewsFeed />);
    await screen.findAllByText(/Test/);
  });
});
