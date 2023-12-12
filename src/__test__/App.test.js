import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../components/App';

it('<App />', () => {
  render(<App />);
  expect(screen.getByText('Learn React')).toBeInTheDocument();
});