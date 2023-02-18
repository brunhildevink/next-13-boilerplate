import { render, screen } from '@testing-library/react';
import { Navbar } from './Navbar';

describe('Navbar component', () => {
  it('should render the Navbar component', () => {
    const { container } = render(<Navbar />);
    const nav = container.querySelector('nav');

    expect(nav).toBeInTheDocument();
  });
});
