import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Class from './Class';

// Mocking the images
jest.mock('../assets/pose1.jpg', () => 'pose1.jpg');
jest.mock('../assets/pose2.jpg', () => 'pose2.jpg');
jest.mock('../assets/pose3.jpg', () => 'pose3.jpg');
jest.mock('../assets/pose4.jpg', () => 'pose4.jpg');

describe('Class Component', () => {
    beforeEach(() => {
        render(
            <MemoryRouter>
                <Class />
            </MemoryRouter>
        );
    });

    test('renders the main heading and description', () => {
        expect(screen.getByText('Your Healthy Partner')).toBeInTheDocument();
        expect(screen.getByText(/Our online yoga, meditation, pilates and guided wellness programs/i)).toBeInTheDocument();
    });

    test('renders the Browse Classes button', () => {
        const button = screen.getByRole('button', { name: /Browse Classes/i });
        expect(button).toBeInTheDocument();
    });

    test('renders class cards with correct titles and descriptions', () => {
        const classCards = screen.getAllByRole('img');
        expect(classCards).toHaveLength(4); // Check if there are 4 class cards

        const yogaCard = screen.getByText('Yoga');
        const meditationCard = screen.getByText('Meditation');
        const pilatesCard = screen.getByText('Pilates');
        const guidedProgramsCard = screen.getByText('Guided Programs');

        expect(yogaCard).toBeInTheDocument();
        expect(meditationCard).toBeInTheDocument();
        expect(pilatesCard).toBeInTheDocument();
        expect(guidedProgramsCard).toBeInTheDocument();
    });

    test('navigates to the yoga section when Browse Classes button is clicked', () => {
        const button = screen.getByRole('button', { name: /Browse Classes/i });
        fireEvent.click(button);
        expect(window.location.hash).toBe('#yoga'); 
    });
});