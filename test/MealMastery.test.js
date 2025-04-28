import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import MealMastery from './MealMastery';

// Mocking the images
jest.mock('../assets/meal-1.jpg', () => 'meal-1.jpg');
jest.mock('../assets/meal-2.jpg', () => 'meal-2.jpg');
jest.mock('../assets/meal-3.jpg', () => 'meal-3.jpg');

describe('MealMastery Component', () => {
    test('renders loading skeletons initially', () => {
        render(<MealMastery />);
        
        // Check for skeleton title
        expect(screen.getByRole('heading', { level: 1 })).toHaveClass('skeleton-title');
        
        // Check for skeleton description
        expect(screen.getByText(/Explore our Meal Plan page/i)).toHaveClass('skeleton-description');
        
        // Check for skeleton cards
        const skeletonCards = screen.getAllByText(/skeleton/i);
        expect(skeletonCards.length).toBe(3); // Expecting 3 skeleton cards
    });

    test('renders the Meal Mastery content after loading', async () => {
        render(<MealMastery />);

        // Wait for the loading to finish
        await waitFor(() => {
            expect(screen.queryByRole('heading', { level: 1 })).not.toHaveClass('skeleton-title');
            expect(screen.getByText('Meal Mastery')).toBeInTheDocument();
        });

        // Check for the description
        expect(screen.getByText(/Explore our Meal Plan page/i)).toBeInTheDocument();

        // Check for the actual cards
        expect(screen.getByText('Recipes')).toBeInTheDocument();
        expect(screen.getByText('Build Your Own Bowl')).toBeInTheDocument();
        expect(screen.getByText('Upload Images')).toBeInTheDocument();
    });
});