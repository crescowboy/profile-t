import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactForm from './ContactForm';
import swal from 'sweetalert';

jest.mock('sweetalert', () => jest.fn());

describe('ContactForm', () => {
  it('renders the form elements correctly', () => {
    render(<ContactForm />);

    expect(screen.getByPlaceholderText('Nombre')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Mensaje')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /enviar/i })).toBeInTheDocument();
  });

  it('updates form values on input change', () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText('Nombre'), {
      target: { value: 'Juan' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'juan@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Mensaje'), {
      target: { value: 'Este es un mensaje de prueba' },
    });

    expect(screen.getByPlaceholderText('Nombre')).toHaveValue('Juan');
    expect(screen.getByPlaceholderText('Email')).toHaveValue('juan@example.com');
    expect(screen.getByPlaceholderText('Mensaje')).toHaveValue('Este es un mensaje de prueba');
  });

  it('displays a success message on form submit', () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText('Nombre'), {
      target: { value: 'Juan' },
    });
    fireEvent.change(screen.getByPlaceholderText('Email'), {
      target: { value: 'juan@example.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('Mensaje'), {
      target: { value: 'Este es un mensaje de prueba' },
    });

    fireEvent.submit(screen.getByRole('button', { name: /enviar/i }));

    expect(swal).toHaveBeenCalledWith('Mensaje enviado con éxito', { icon: 'success' });
    expect(screen.getByPlaceholderText('Nombre')).toHaveValue('');
    expect(screen.getByPlaceholderText('Email')).toHaveValue('');
    expect(screen.getByPlaceholderText('Mensaje')).toHaveValue('');
  });
});
