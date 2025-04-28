import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import BreakfastPage from './BreakfastPage';

// Mocking the ScrollAnimation component
jest.mock('../../components/ScrollAnimation/ScrollAnimation', () => ({ children }) => (
    <div>{children}</div>
));

describe('BreakfastPage Component', () => {
    test('renders the BreakfastPage component and displays recipes', async () => {
        render(
            <MemoryRouter>
                <BreakfastPage />
            </MemoryRouter>
        );

        // Check if the header is rendered
        expect(screen.getByText('Breakfast Recipes')).toBeInTheDocument();
        expect(screen.getByText('Start your day with these nutritious breakfast options')).toBeInTheDocument();

        // Wait for recipes to load
        await waitFor(() => {
            expect(screen.getByText('Protein-Packed Oatmeal Bowl')).toBeInTheDocument();
            expect(screen.getByText('Avocado Toast with Poached Eggs')).toBeInTheDocument();
            expect(screen.getByText('Classic Egg & Turkey Bacon Breakfast')).toBeInTheDocument();
        });
    });

    test('filters recipes based on search query', async () => {
        render(
            <MemoryRouter>
                <BreakfastPage />
            </MemoryRouter>
        );

        // Wait for recipes to load
        await waitFor(() => {
            expect(screen.getByText('Protein-Packed Oatmeal Bowl')).toBeInTheDocument();
        });

        // Search for a recipe
        fireEvent.change(screen.getByPlaceholderText('Search breakfast recipes...'), {
            target: { value: 'Avocado' },
        });

        // Check if the filtered recipe is displayed
        expect(screen.getByText('Avocado Toast with Poached Eggs')).toBeInTheDocument();
        expect(screen.queryByText('Protein-Packed Oatmeal Bowl')).not.toBeInTheDocument();
    });

    test('filters recipes based on selected cuisine', async () => {
        render(
            <MemoryRouter>
                <BreakfastPage />
            </MemoryRouter>
        );

        // Wait for recipes to load
        await waitFor(() => {
            expect(screen.getByText('Protein-Packed Oatmeal Bowl')).toBeInTheDocument();
        });

        // Select a cuisine
        fireEvent.click(screen.getByText('American'));

        // Check if the filtered recipes are displayed
        expect(screen.getByText('Protein-Packed Oatmeal Bowl')).toBeInTheDocument();
        expect(screen.getByText('Avocado Toast with Poached Eggs')).toBeInTheDocument();
    });

    test('toggles favorites and shows favorites only', async () => {
        render(
            <MemoryRouter>
                <BreakfastPage />
            </MemoryRouter>
        );

        // Wait for recipes to load
        await waitFor(() => {
            expect(screen.getByText('Protein-Packed Oatmeal Bowl')).toBeInTheDocument();
        });

        // Add a recipe to favorites
        fireEvent.click(screen.getByText('☆')); // Assuming the favorite button is a star

        // Check if the recipe is favorited
        expect(screen.getByText('★')).toBeInTheDocument();

        // Toggle favorites filter
        fireEvent.click(screen.getByText('Show Favorites Only'));

        // Check if only favorite recipes are displayed
        expect(screen.getByText('Protein-Packed Oatmeal Bowl')).toBeInTheDocument();
    });

    test('handles pagination', async () => {
        render(
            <MemoryRouter>
                <BreakfastPage />
            </MemoryRouter>
        );

        // Wait for recipes to load
        await waitFor(() => {
            expect(screen.getByText('Protein-Packed Oatmeal Bowl')).toBeInTheDocument();
        });

        // Check if pagination buttons are present
        expect(screen.getByText('Previous')).toBeInTheDocument();
        expect(screen.getByText('Next')).toBeInTheDocument();

        // Click next page
        fireEvent.click(screen.getByText('Next'));

        // Check if the next set of recipes is displayed
        // This will depend on your implementation of pagination
    });
});