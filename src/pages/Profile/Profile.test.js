import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Profile from './Profile';

// Mocking the Sidebar component
jest.mock('../../components/Sidebar/Sidebar', () => () => <div>Sidebar Component</div>);

describe('Profile Component', () => {
    test('renders the Profile component', () => {
        render(<Profile />);

        // Check if the sidebar is rendered
        expect(screen.getByText('Sidebar Component')).toBeInTheDocument();

        // Check if the greeting header is rendered
        expect(screen.getByText(/Hi User,/)).toBeInTheDocument();

        // Check if the form fields are rendered
        expect(screen.getByPlaceholderText('First name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Last name')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Age')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Height (cm)')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Weight (lbs/kgs)')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
        expect(screen.getByPlaceholderText('Phone')).toBeInTheDocument();
    });

    test('updates form data on input change', () => {
        render(<Profile />);

        // Simulate user input
        fireEvent.change(screen.getByPlaceholderText('First name'), { target: { value: 'John' } });
        fireEvent.change(screen.getByPlaceholderText('Last name'), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByPlaceholderText('Age'), { target: { value: '30' } });
        fireEvent.change(screen.getByPlaceholderText('Height (cm)'), { target: { value: '180' } });
        fireEvent.change(screen.getByPlaceholderText('Weight (lbs/kgs)'), { target: { value: '75' } });
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Phone'), { target: { value: '123-456-7890' } });

        // Check if the values are updated
        expect(screen.getByPlaceholderText('First name').value).toBe('John');
        expect(screen.getByPlaceholderText('Last name').value).toBe('Doe');
        expect(screen.getByPlaceholderText('Age').value).toBe('30');
        expect(screen.getByPlaceholderText('Height (cm)').value).toBe('180');
        expect(screen.getByPlaceholderText('Weight (lbs/kgs)').value).toBe('75');
        expect(screen.getByPlaceholderText('Email').value).toBe('john.doe@example.com');
        expect(screen.getByPlaceholderText('Phone').value).toBe('123-456-7890');
    });

    test('submits the form and saves data to localStorage', () => {
        // Mock localStorage
        const setItemMock = jest.fn();
        Object.defineProperty(window, 'localStorage', {
            value: {
                setItem: setItemMock,
            },
            writable: true,
        });

        render(<Profile />);

        // Simulate user input
        fireEvent.change(screen.getByPlaceholderText('First name'), { target: { value: 'John' } });
        fireEvent.change(screen.getByPlaceholderText('Last name'), { target: { value: 'Doe' } });
        fireEvent.change(screen.getByPlaceholderText('Age'), { target: { value: '30' } });
        fireEvent.change(screen.getByPlaceholderText('Height (cm)'), { target: { value: '180' } });
        fireEvent.change(screen.getByPlaceholderText('Weight (lbs/kgs)'), { target: { value: '75' } });
        fireEvent.change(screen.getByPlaceholderText('Email'), { target: { value: 'john.doe@example.com' } });
        fireEvent.change(screen.getByPlaceholderText('Phone'), { target: { value: '123-456-7890' } });

        // Submit the form
        fireEvent.click(screen.getByText('Save Changes'));

        // Check if localStorage.setItem was called with the correct data
        expect(setItemMock).toHaveBeenCalledWith('userData', JSON.stringify({
            firstName: 'John',
            lastName : 'Doe',
            age: '30',
            gender: 'Male',
            height: '180',
            weight: '75',
            email: 'john.doe@example.com',
            phone: '123-456-7890',
        }));
        
        // Check if the alert is displayed
        expect(window.alert).toHaveBeenCalledWith("Profile updated successfully!");
    });
});