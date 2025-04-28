import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

// Mocking localStorage
beforeEach(() => {
    const mockUserData = { displayName: 'John Doe' };
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(JSON.stringify(mockUserData));
});

afterEach(() => {
    jest.restoreAllMocks(); 
});

describe('Header Component', () => {
    test('renders the header with user greeting', () => {
        render(<Header />);
        
        expect(screen.getByText('Hi John Doe, Good Evening')).toBeInTheDocument();
    });

    test('renders the header with default greeting when no user data', () => {
        jest.spyOn(Storage.prototype, 'getItem').mockReturnValue(null); 
        render(<Header />);

        expect(screen.getByText('Hi User, Good Evening')).toBeInTheDocument();
    });

    test('renders the user avatar', () => {
        render(<Header />);
        
        const avatar = screen.getByAltText('User ');
        expect(avatar).toBeInTheDocument();
        expect(avatar).toHaveAttribute('src', '/placeholder.svg');
    });
});