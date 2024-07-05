
import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders profile information correctly', () => {
  render(<Header />);
  
  // Verifica que el nombre y el usuario estén presentes
  const nameElement = screen.getByText(/Wellington Crespo/i);
  const usernameElement = screen.getByText(/@wcrespo/i);
  
  expect(nameElement).toBeInTheDocument();
  expect(usernameElement).toBeInTheDocument();
});

test('renders profile picture with alt text', () => {
  render(<Header />);
  
  // Verifica que la imagen esté presente y tenga el texto alternativo correcto
  const imageElement = screen.getByAltText(/Profile Picture/i);
  
  expect(imageElement).toBeInTheDocument();
});
