import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Settings from './Settings';

// Mocking the child components
jest.mock('./components/SecuritySection', () => (props) => (
    <div data-testid="security-section">
        <button onClick={props.handleUpdatePassword}>Update Password</button>
    </div>
));

jest.mock('./components/PreferencesSection', () => (props) => (
    <div data-testid="preferences-section">
        <button onClick={props.toggleDarkMode}>Toggle Dark Mode</button>
    </div>
));

jest.mock('./components/ConnectedAccountsSection', () => (props) => (
    <div data-testid="connected-accounts-section">
        <button onClick={() => props.handleAccountAction('google', 'connect')}>Connect Google</button>
    </div>
));

describe('Settings Component', () => {
    test('renders the Settings component', () => {
        render(<Settings />);

        // Check if the greeting is rendered
        expect(screen.getByText(/Hi User,/)).toBeInTheDocument();

        // Check if the child components are rendered
        expect(screen.getByTestId('security-section')).toBeInTheDocument();
        expect(screen.getByTestId('preferences-section')).toBeInTheDocument();
        expect(screen.getByTestId('connected-accounts-section')).toBeInTheDocument();
    });

    test('updates password successfully', () => {
        render(<Settings />);

        // Simulate filling out the password fields and submitting
        fireEvent.change(screen.getByPlaceholderText('Current Password'), { target: { value: 'currentPassword123' } });
        fireEvent.change(screen.getByPlaceholderText('New Password'), { target: { value: 'newPassword123' } });
        fireEvent.change(screen.getByPlaceholderText('Confirm new Password'), { target: { value: 'newPassword123' } });

        // Submit the form
        fireEvent.click(screen.getByText('Update Password'));

        // Check if the alert is displayed
        expect(window.alert).toHaveBeenCalledWith("Password updated successfully!");
    });

    test('toggles dark mode', () => {
        render(<Settings />);

        // Check initial dark mode state
        expect(screen.getByTestId('preferences-section')).toBeInTheDocument();

        // Simulate toggling dark mode
        fireEvent.click(screen.getByText('Toggle Dark Mode'));

        // Check if dark mode toggle function is called
        expect(localStorage.getItem('darkMode')).toBe('false'); // Assuming initial state is true
    });

    test('connects Google account', () => {
        render(<Settings />);

        // Simulate connecting Google account
        fireEvent.click(screen.getByText('Connect Google'));

        // Check if the Google account is connected
        expect(screen.getByText('Google')).toBeInTheDocument();
    });
});