import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MealCategories from './MealCategories';

// Mocking the images
jest.mock('../../assets/B1.jpg', () => 'B1.jpg');
jest.mock('../../assets/L1.jpg', () => 'L1.jpg');
jest.mock('../../assets/D1.jpg', () => 'D1.jpg');
jest.mock('../../assets/S1.jpg', () => 'S1.jpg');
jest.mock('../../assets/P1.jpg', () => 'P1.jpg');
jest.mock('../../assets/DE1.jpg', () => 'DE1.jpg');

describe('MealCategories Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <MealCategories />
            </MemoryRouter>
        );
    });

    test('renders the MealCategories component', () => {
        expect(screen.getByPlaceholderText('Search meal categories...')).toBeInTheDocument();
        expect(screen.getByText('BREAKFAST')).toBeInTheDocument();
        expect(screen.getByText('LUNCH')).toBeInTheDocument();
        expect(screen.getByText('DINNER')).toBeInTheDocument();
        expect(screen.getByText('SNACKS')).toBeInTheDocument();
        expect(screen.getByText('PROTEIN SHAKES')).toBeInTheDocument();
        expect(screen.getByText('DESSERTS')).toBeInTheDocument();
    });

    test('filters categories based on search input', () => {
        const searchInput = screen.getByPlaceholderText('Search meal categories...');
        
        // Search for "breakfast"
        fireEvent.change(searchInput, { target: { value: 'breakfast' } });
        expect(screen.getByText('Showing 1 categories')).toBeInTheDocument();
        expect(screen.getByText('BREAKFAST')).toBeInTheDocument();
        expect(screen.queryByText('LUNCH')).not.toBeInTheDocument();

        // Search for "snack"
        fireEvent.change(searchInput, { target: { value: 'snack' } });
        expect(screen.getByText('Showing 1 categories')).toBeInTheDocument();
        expect(screen.getByText('SNACKS')).toBeInTheDocument();

        // Search for a non-existent category
        fireEvent.change(searchInput, { target: { value: 'nonexistent' } });
        expect(screen.getByText('No categories match your search. Try adjusting your search term.')).toBeInTheDocument();
    });

    test('navigates to the correct path when a category is clicked', () => {
        const categoryItem = screen.getByText('BREAKFAST');
        fireEvent.click(categoryItem);
        expect(window.location.pathname).toBe('/meal-plan/breakfast'); 
    });
});