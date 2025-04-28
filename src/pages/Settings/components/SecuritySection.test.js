import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SecuritySection from './SecuritySection';

describe('SecuritySection Component', () => {
    const mockHandlePasswordChange = jest.fn();
    const mockHandleUpdatePassword = jest.fn();

    const passwordData = {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
    };

    test('renders the SecuritySection component', () => {
        render(
            <SecuritySection 
                passwordData={passwordData} 
                handlePasswordChange={mockHandlePasswordChange} 
                handleUpdatePassword={mockHandleUpdatePassword} 
            />
        );

        // Check if the header is rendered
        expect(screen.getByText('Settings')).toBeInTheDocument();
        expect(screen.getByText('Security')).toBeInTheDocument();
        expect(screen.getByText('Password')).toBeInTheDocument();
        expect(screen.getByText('Update your own password to keep your account secure')).toBeInTheDocument();

        // Check if the password input fields are rendered
        expect(screen.getByPlaceholderText('Current Password')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('New Password')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Confirm new Password')).toBeInTheDocument();
    });

    test('updates password data on input change', () => {
        render(
            <SecuritySection 
                passwordData={passwordData} 
                handlePasswordChange={mockHandlePasswordChange} 
                handleUpdatePassword={mockHandleUpdatePassword} 
            />
        );

        // Simulate user input
        fireEvent.change(screen.getByPlaceholderText('Current Password'), { target: { value: 'currentPassword123' } });
        fireEvent.change(screen.getByPlaceholderText('New Password'), { target: { value: 'newPassword123' } });
        fireEvent.change(screen.getByPlaceholderText('Confirm new Password'), { target: { value: 'newPassword123' } });

        // Check if the values are updated
        expect(mockHandlePasswordChange).toHaveBeenCalledTimes(3);
    });

    test('submits the form and calls handleUpdatePassword', () => {
        render(
            <SecuritySection 
                passwordData={passwordData} 
                handlePasswordChange={mockHandlePasswordChange} 
                handleUpdatePassword={mockHandleUpdatePassword} 
            />
        );

        // Simulate user input
        fireEvent.change(screen.getByPlaceholderText('Current Password'), { target: { value: 'currentPassword123' } });
        fireEvent.change(screen.getByPlaceholderText('New Password'), { target: { value: 'newPassword123' } });
        fireEvent.change(screen.getByPlaceholderText('Confirm new Password'), { target: { value: 'newPassword123' } });

        // Submit the form
        fireEvent.click(screen.getByText('Update Password'));

        // Check if handleUpdatePassword was called
        expect(mockHandleUpdatePassword).toHaveBeenCalledTimes(1);
    });
});