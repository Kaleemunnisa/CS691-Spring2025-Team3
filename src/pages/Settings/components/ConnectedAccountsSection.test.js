import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ConnectedAccountsSection from './ConnectedAccountsSection';

// Mocking the icons
jest.mock('../../../components/assets/google.png', () => 'googleIcon.png');
jest.mock('../../../components/assets/apple.png', () => 'appleIcon.png');
jest.mock('../../../components/assets/gmail.png', () => 'emailIcon.png');

describe('ConnectedAccountsSection Component', () => {
    const mockHandleAccountAction = jest.fn();

    const connectedAccounts = {
        google: { connected: true, user: 'user@gmail.com' },
        apple: { connected: false, user: '' },
        email: { connected: true, user: 'user@example.com', isPrimary: true },
    };

    test('renders the ConnectedAccountsSection component', () => {
        render(
            <ConnectedAccountsSection 
                connectedAccounts={connectedAccounts} 
                handleAccountAction={mockHandleAccountAction} 
            />
        );

        // Check if the section header is rendered
        expect(screen.getByText('Connected Accounts')).toBeInTheDocument();
        expect(screen.getByText('Manage accounts connected to your profile')).toBeInTheDocument();

        // Check if Google account info is rendered
        expect(screen.getByText('Google')).toBeInTheDocument();
        expect(screen.getByText('User  user@gmail.com')).toBeInTheDocument();
        expect(screen.getByText('Disconnect')).toBeInTheDocument();

        // Check if Apple account info is rendered
        expect(screen.getByText('Apple')).toBeInTheDocument();
        expect(screen.getByText('Not Connected')).toBeInTheDocument();
        expect(screen.getByText('Connect')).toBeInTheDocument();

        // Check if Email account info is rendered
        expect(screen.getByText('Email')).toBeInTheDocument();
        expect(screen.getByText('User  user@example.com')).toBeInTheDocument();
        expect(screen.getByText('Primary')).toBeInTheDocument();
    });

    test('handles connect and disconnect actions', () => {
        render(
            <ConnectedAccountsSection 
                connectedAccounts={connectedAccounts} 
                handleAccountAction={mockHandleAccountAction} 
            />
        );

        // Click the disconnect button for Google
        fireEvent.click(screen.getByText('Disconnect'));
        expect(mockHandleAccountAction).toHaveBeenCalledWith('google', 'disconnect');

        // Click the connect button for Apple
        fireEvent.click(screen.getByText('Connect'));
        expect(mockHandleAccountAction).toHaveBeenCalledWith('apple', 'connect');

        // Click the primary button for Email
        fireEvent.click(screen.getByText('Primary'));
        expect(mockHandleAccountAction).toHaveBeenCalledWith('email', 'primary');
    });
});