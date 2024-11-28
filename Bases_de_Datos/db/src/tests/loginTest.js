import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'; // Extiende expect para pruebas DOM
import Login from './Login';

test('renders the login form', () => {
    render(<Login onLogin={jest.fn()} />);

    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
});

test('shows error message when fields are empty', () => {
    render(<Login onLogin={jest.fn()} />);
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(screen.getByRole('alert')).toHaveTextContent('Please fill in all fields.');
});

test('calls onLogin with email and password', () => {
    const mockOnLogin = jest.fn();
    render(<Login onLogin={mockOnLogin} />);

    fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
    fireEvent.click(screen.getByRole('button', { name: 'Login' }));

    expect(mockOnLogin).toHaveBeenCalledWith('test@example.com', 'password123');
});
