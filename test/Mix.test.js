import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Mix from './Mix';

// Mocking the images
jest.mock('../assets/yoga1.jpg', () => 'yoga1.jpg');
jest.mock('../assets/yoga2.jpg', () => 'yoga2.jpg');
jest.mock('../assets/yoga3.jpg', () => 'yoga3.jpg');
jest.mock('../assets/yoga4.jpg', () => 'yoga4.jpg');
jest.mock('../assets/gym-1.jpg', () => 'gym-1.jpg');
jest.mock('../assets/gym-2.jpg', () => 'gym-2.jpg');
jest.mock('../assets/gym-3.jpg', () => 'gym-3.jpg');
jest.mock('../assets/gym-4.jpg', () => 'gym-4.jpg');
jest.mock('../assets/m1.jpg', () => 'm1.jpg');
jest.mock('../assets/m2.jpg', () => 'm2.jpg');
jest.mock('../assets/m3.jpg', () => 'm3.jpg');
jest.mock('../assets/m4.jpg', () => 'm4.jpg');

describe('Mix Component', () => {
    test('renders loading skeletons initially', () => {
        render(<Mix />);
        
        // Check for skeleton images
        const skeletonImages = screen.getAllByText(/skeleton/i);
        expect(skeletonImages.length).toBe(4); // Expecting 4 skeleton images
    });

    test('renders the Mix content after loading', async () => {
        render(<Mix />);

        // Wait for the loading to finish
        await waitFor(() => {
            expect(screen.queryByText(/skeleton/i)).not.toBeInTheDocument();
        });

        // Check for the title and description
        expect(screen.getByText('Join our Specialised programs and challenges')).toBeInTheDocument();
        expect(screen.getByText(/Participate in our Customized Programs/i)).toBeInTheDocument();

        // Check for category buttons
        expect(screen.getByText('Yoga')).toBeInTheDocument();
        expect(screen.getByText('Gym')).toBeInTheDocument();
        expect(screen.getByText('Meal')).toBeInTheDocument();
    });

    test('displays yoga images when Yoga category is selected', async () => {
        render(<Mix />);

        // Wait for the loading to finish
        await waitFor(() => {
            expect(screen.queryByText(/skeleton/i)).not.toBeInTheDocument();
        });

        // Click on the Gym category
        fireEvent.click(screen.getByText('Yoga'));

        // Check for yoga images
        expect(screen.getByAltText('Meditation')).toBeInTheDocument();
        expect(screen.getByAltText('Pilates')).toBeInTheDocument();
        expect(screen.getByAltText('Yoga')).toBeInTheDocument();
        expect(screen.getByAltText('Ayurveda')).toBeInTheDocument();
    });

    test('displays gym images when Gym category is selected', async () => {
        render(<Mix />);

        // Wait for the loading to finish
        await waitFor(() => {
            expect(screen.queryByText(/skeleton/i)).not.toBeInTheDocument();
        });

        // Click on the Gym category
        fireEvent.click(screen.getByText('Gym'));

        // Check for gym images
        expect(screen.getByAltText('Biceps')).toBeInTheDocument();
        expect(screen.getByAltText('Triceps')).toBeInTheDocument();
        expect(screen.getByAltText('Chest')).toBeInTheDocument();
        expect(screen.getByAltText('Legs')).toBeInTheDocument();
    });

    test('displays meal images when Meal category is selected', async () => {
        render(<Mix />);

        // Wait for the loading to finish
        await waitFor(() => {
            expect(screen.queryByText(/skeleton/i)).not.toBeInTheDocument();
        });

        // Click on the Meal category
        fireEvent.click(screen.getByText('Meal'));

        // Check for meal images
        expect(screen.getByAltText('Breakfast')).toBeInTheDocument();
        expect(screen.getByAltText('Lunch')).toBeInTheDocument();
        expect(screen.getByAltText('Dinner')).toBeInTheDocument();
        expect(screen.getByAltText('Drinks&Desserts')).toBeInTheDocument();
    });
});