import React from 'react';
import { render, screen } from '@testing-library/react';
import Interests from './Interests';

describe('Interests', () => {
  it('renders the Interests component correctly', () => {
    render(<Interests />);

    expect(screen.getByText('Intereses')).toBeInTheDocument();
    expect(screen.getByText('Desarrollo Web')).toBeInTheDocument();
    expect(screen.getByText('Gym')).toBeInTheDocument();
    expect(screen.getByText('Tecnología')).toBeInTheDocument();
    expect(screen.getByText('Baloncesto')).toBeInTheDocument();
    expect(screen.getByText('Fotografía')).toBeInTheDocument();
  });

  it('renders the correct icons for each interest', () => {
    render(<Interests />);

    const icons = [
      { name: 'Desarrollo Web', title: 'laptop-code' },
      { name: 'Gym', title: 'dumbbell' },
      { name: 'Tecnología', title: 'robot' },
      { name: 'Baloncesto', title: 'basketball-ball' },
      { name: 'Fotografía', title: 'camera' },
    ];

    icons.forEach(interest => {
      const iconElement = screen.getByText(interest.name).previousSibling as SVGSVGElement;
      expect(iconElement.tagName).toBe('svg');
    });
  });
});
