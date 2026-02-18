import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header brand', async () => {
  render(<App />);
  const brandElement = await screen.findByRole('heading', { name: 'AB CORPORATION' });
  expect(brandElement).toBeInTheDocument();
});
