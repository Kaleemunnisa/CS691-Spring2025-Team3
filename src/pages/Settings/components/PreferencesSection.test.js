import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PreferencesSection from './PreferencesSection';

describe('PreferencesSection Component', () => {
    test('renders the PreferencesSection component', () => {
        const mockToggleDarkMode = jest.fn();
        render(<PreferencesSection darkMode={false} toggleDarkMode={mockToggleDarkMode} />);

        // Check if the header is rendered
        expect(screen.getByText('App Preferences')).toBeInTheDocument();

        // Check if the dark mode toggle is rendered
        expect(screen.getByText('Dark mode')).toBeInTheDocument();
        const toggleSwitch = screen.getByRole('checkbox');
        expect(toggleSwitch).toBeInTheDocument();
        expect(toggleSwitch).not.toBeChecked(); // Initially not checked
    });

    test('toggles dark mode', () => {
        const mockToggleDarkMode = jest.fn();
        render(<PreferencesSection darkMode={false} toggleDarkMode={mockToggleDarkMode} />);

        // Simulate clicking the toggle switch
        const toggleSwitch = screen.getByRole('checkbox');
        fireEvent.click(toggleSwitch);

        // Check if the toggle function is called
        expect(mockToggleDarkMode).toHaveBeenCalledTimes(1);
    });

    test('renders dark mode as checked', () => {
        const mockToggleDarkMode = jest.fn();
        render(<PreferencesSection darkMode={true} toggleDarkMode={mockToggleDarkMode} />);

        // Check if the toggle switch is checked
        const toggleSwitch = screen.getByRole('checkbox');
        expect(toggleSwitch).toBeChecked(); // Should be checked when darkMode is true
    });
});