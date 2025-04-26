import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoginModal from './LoginModal';

// Mocking the images
jest.mock('../assets/google.png', () => 'google.png');
jest.mock('../assets/apple.png', () => 'apple.png');
jest.mock('../assets/login.jpg', () => 'login.jpg');
jest.mock('../assets/signup.jpg', () => 'signup.jpg');

describe('LoginModal Component', () => {
    const mockOnClose = jest.fn();
    const mockOnLogin = jest.fn();
    const mockOnRegister = jest.fn();
    const mockOnGoogleLogin = jest.fn();
    const mockOnFacebookLogin = jest.fn();

    beforeEach(() => {
        render(
            <LoginModal 
                isOpen={true} 
                onClose={mockOnClose} 
                onLogin={mockOnLogin} 
                onRegister={mockOnRegister} 
                onGoogleLogin={mockOnGoogleLogin} 
                onFacebookLogin={mockOnFacebookLogin} 
            />
        );
    });

    test('renders the login form', () => {
        expect(screen.getByText('Login')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Username')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
        expect(screen.getByText("Don't have an account?")).toBeInTheDocument();
    });

    test('renders the register form when toggled', () => {
        fireEvent.click(screen.getByText('Register here'));
        expect(screen.getByText('Register')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('First Name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Last Name')).toBeInTheDocument();
    });

    test('calls onClose when close button is clicked', () => {
        fireEvent.click(screen.getByRole('button', { name: /x/i }));
        expect(mockOnClose).toHaveBeenCalled();
    });

    test('submits the login form', async () => {
        fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'testuser' } });
        fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
        fireEvent.click(screen.getByRole('button', { name: /login/i }));

        // Here you would typically mock the fetch call and assert the expected behavior
        // For example, you could check if the correct API endpoint is called
    });

    test('submits the registration form', async () => {
        fireEvent.click(screen.getByText('Register here'));
        fireEvent.change(screen.getByPlaceholderText('First Name'), { target: { value: 'John' } });
        fireEvent.change(screen.getByPlaceholderText('Last Name'), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByPlaceholderText('Username'), { target: { value: 'johndoe' } });
        fireEvent.change(screen.getByPlaceholderText('Password'), { target: { value: 'password123' } });
        fireEvent.click(screen.getByRole('button', { name: /register/i }));

        // Here you would typically mock the fetch call and assert the expected behavior
    });

    test('calls handleGoogleLogin when Google button is clicked', () => {
        fireEvent.click(screen.getByRole('button', { name: /google/i }));
        expect(mockOnGoogleLogin).toHaveBeenCalled();
    });

    test('calls handleAppleLogin when Apple button is clicked', () => {
        fireEvent.click(screen.getByRole('button', { name: /apple/i }));
        expect(mockOnFacebookLogin).toHaveBeenCalled();
    });
});