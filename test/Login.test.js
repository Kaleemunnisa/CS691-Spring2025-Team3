import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import { Login } from './Login';

// Mocking child components
jest.mock('./nav/Nav', () => () => <div>Nav Component</div>);
jest.mock('../Home', () => () => <div>Home Component</div>);
jest.mock('./class/Class', () => () => <div>Class Component</div>);
jest.mock('./exercise/Exercise', () => () => <div>Exercise Component</div>);
jest.mock('./meal-plan/MealMastery', () => () => <div>Meal Mastery Component</div>);
jest.mock('./mix/Mix', () => () => <div>Mix Component</div>);
jest.mock('./footer/footer', () => () => <div>Footer Component</div>);

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

describe('Login Component', () => {
    test('renders the Login component and its children', () => {
        render(
            <MemoryRouter>
                <Login />
            </MemoryRouter>
        );

        // Check if all child components are rendered
        expect(screen.getByText('Nav Component')).toBeInTheDocument();
        expect(screen.getByText('Home Component')).toBeInTheDocument();
        expect(screen.getByText('Class Component')).toBeInTheDocument();
        expect(screen.getByText('Exercise Component')).toBeInTheDocument();
        expect(screen.getByText('Meal Mastery Component')).toBeInTheDocument();
        expect(screen.getByText('Mix Component')).toBeInTheDocument();
        expect(screen.getByText('Footer Component')).toBeInTheDocument();
    });

    test('navigates to home if userID is present in localStorage', () => {
        // Set userID in localStorage
        window.localStorage.setItem('userID', '12345');

        const navigate = jest.fn();

        render(
            <MemoryRouter>
                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/login" element={<Login navigate={navigate} />} />
                </Routes>
            </MemoryRouter>
        );

        // Check if navigate was called
        expect(navigate).toHaveBeenCalledWith('/');
    });

    test('does not navigate if userID is not present in localStorage', () => {
        // Clear userID from localStorage
        window.localStorage.removeItem('userID');

        const navigate = jest.fn();

        render(
            <MemoryRouter>
                <Routes>
                    <Route path="/" element={<div>Home Page</div>} />
                    <Route path="/login" element={<Login navigate={navigate} />} />
                </Routes>
            </MemoryRouter>
        );

        // Check that navigate was not called
        expect(navigate).not.toHaveBeenCalled();
    });
});