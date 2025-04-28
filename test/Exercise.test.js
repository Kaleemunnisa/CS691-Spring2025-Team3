import React from 'react';
import { render, screen } from '@testing-library/react';
import Exercise from './Exercise';

// Mocking the image
jest.mock('../assets/exercise-bg.jpg', () => 'exercise-bg.jpg');

describe('Exercise Component', () => {
    beforeEach(() => {
        render(<Exercise />);
    });

    test('renders the hero section with correct text', () => {
        expect(screen.getByText('Exercise for every individual')).toBeInTheDocument();
        expect(screen.getByText(/We have a detailed and tailored plan for every user/i)).toBeInTheDocument();
    });

    test('renders the Browse Exercise button', () => {
        const button = screen.getByRole('button', { name: /Browse Exercise/i });
        expect(button).toBeInTheDocument();
    });

    test('renders the feature cards with correct titles and descriptions', () => {
        const featureTitles = [
            'Stay Active, Stay Connected',
            'Exercise anytime',
            'Empower Your Journey',
            'Elevate Your Routine'
        ];

        featureTitles.forEach(title => {
            expect(screen.getByText(title)).toBeInTheDocument();
            expect(screen.getByText(/We offer a comprehensive fitness platform that includes personalized workout tracking/i)).toBeInTheDocument();
        });
    });
});