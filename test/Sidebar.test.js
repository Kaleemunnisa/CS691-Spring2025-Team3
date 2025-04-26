import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';
import Sidebar from './Sidebar';

// Mocking localStorage
const mockLocalStorage = (() => {
    let store = {};
    return {
        getItem: (key) => store[key] || null,
        setItem: (key, value) => {
            store[key] = value.toString();
        },
        removeItem: (key) => {
            delete store[key];
        },
        clear: () => {
            store = {};
        },
    };
})();

Object.defineProperty(window, 'localStorage', {
    value: mockLocalStorage,
});

describe('Sidebar Component', () => {
    beforeEach(() => {
        // Set up user data in localStorage
        window.localStorage.setItem('userData', JSON.stringify({ displayName: 'John Doe' }));
    });

    afterEach(() => {
        // Clear localStorage after each test
        window.localStorage.clear();
    });

    test('renders the Sidebar component', () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Sidebar />
            </MemoryRouter>
        );

        // Check if the user name is displayed
        expect(screen.getByText('John Doe')).toBeInTheDocument();

        // Check if all navigation links are rendered
        expect(screen.getByText('Dashboard')).toBeInTheDocument();
        expect(screen.getByText('Classes')).toBeInTheDocument();
        expect(screen.getByText('Exercises')).toBeInTheDocument();
        expect(screen.getByText('Meal Plan')).toBeInTheDocument();
        expect(screen.getByText('Settings')).toBeInTheDocument();
    });

    test('highlights the active link based on the current route', () => {
        render(
            <MemoryRouter initialEntries={['/classes']}>
                <Sidebar />
            </MemoryRouter>
        );

        // Check if the Classes link is active
        expect(screen.getByText('Classes').closest('li')).toHaveClass('active');
        expect(screen.getByText('Dashboard').closest('li')).not.toHaveClass('active');
    });

    test('logs out the user and clears localStorage', () => {
        const { container } = render(
            <MemoryRouter initialEntries={['/']}>
                <Sidebar />
            </MemoryRouter>
        );

        // Simulate clicking the logout button
        fireEvent.click(screen.getByRole('img', { name: /Logout/i }));

        // Check if localStorage is cleared
        expect(window.localStorage.getItem('userData')).toBeNull();
    });
});