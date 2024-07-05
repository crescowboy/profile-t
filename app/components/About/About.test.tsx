import React from 'react';
import { render, screen } from '@testing-library/react';
import About from './About';

describe('About Component', () => {
  test('renders about section with correct content', () => {
    render(<About />);
    
   
    const titleElement = screen.getByText(/Acerca de mí/i);
    expect(titleElement).toBeInTheDocument();

    
    const paragraphElement = screen.getByText(/Soy un apasionado ingeniero de software/i);
    expect(paragraphElement).toBeInTheDocument();
  });
});
