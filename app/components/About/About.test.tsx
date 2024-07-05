import { render, screen } from '@testing-library/react';
import About from './About';

describe('About Component', () => {
  it('renders About Me section with correct text', () => {
    render(<About />);

    const headingElement = screen.getByRole('heading', { name: /About Me/i });
    expect(headingElement).toBeInTheDocument();

    const paragraphElements = screen.getAllByRole('paragraph');
    expect(paragraphElements.length).toBe(1); // Ensure there's only one paragraph

    const aboutText = screen.getByText(
      /Soy un apasionado ingeniero de software con amor por construir aplicaciones innovadoras y fáciles de usar./i
    );
    expect(aboutText).toBeInTheDocument();
  });
});
