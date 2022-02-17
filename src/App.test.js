import { render, screen } from '@testing-library/react';
import Auth from './AuthPage';

test('renders learn react link', () => {
  render(<Auth />);
  const linkElement = screen.getByText(/Busybody/i);
  expect(linkElement).toBeInTheDocument();
});
