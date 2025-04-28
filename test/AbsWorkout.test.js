import React from 'react';
import { render, screen } from '@testing-library/react';
import AbsWorkout from './AbsWorkout';

// Mocking the Header component
jest.mock('../../components/Header/Header', () => () => <div>Header Component</div>);

// Mocking the images
jest.mock('../assets/abs1.png', () => 'abs1.png');
jest.mock('../assets/abs2.png', () => 'abs2.png');
jest.mock('../assets/abs3.png', () => 'abs3.png');
jest.mock('../assets/abs4.png', () => 'abs4.png');
jest.mock('../assets/abs5.png', () => 'abs5.png');
jest.mock('../assets/abs6.png', () => 'abs6.png');
jest.mock('../assets/abs7.png', () => 'abs7.png');
jest.mock('../assets/abs8.jpeg', () => 'abs8.jpeg');

describe('AbsWorkout Component', () => {
    test('renders the AbsWorkout component and its exercises', () => {
        render(<AbsWorkout />);

        // Check if the header is rendered
        expect(screen.getByText('Header Component')).toBeInTheDocument();

        // Check if the workout label is rendered
        expect(screen.getByText('ABS WORKOUT')).toBeInTheDocument();

        // Check if all exercises are rendered
        const exercises = [
            "RUSSIAN TWISTS",
            "HANGING LEG RAISES",
            "CABLE CRUNCHES",
            "PLANK",
            "HANGING KNEE RAISES",
            "BICYCLE CRUNCHES",
            "OBLIQUE SIDE BENDS",
            "TOE TOUCHES"
        ];

        exercises.forEach(exercise => {
            expect(screen.getByText(exercise)).toBeInTheDocument();
        });
    });

    test('renders indicators for exercises that have them', () => {
        render(<AbsWorkout />);

        // Check if the indicator for "RUSSIAN TWISTS" is rendered
        expect(screen.getByText('10-12 REPS')).toBeInTheDocument();

        // Check if the indicator for "CABLE CRUNCHES" is rendered
        expect(screen.getByText('REST TIME')).toBeInTheDocument();
    });

    test('does not render indicators for exercises that do not have them', () => {
        render(<AbsWorkout />);

        // Check that no indicator is rendered for "HANGING LEG RAISES"
        expect(screen.queryByText('REST TIME')).not.toBeInTheDocument();
        expect(screen.queryByText('10-12 REPS')).not.toBeInTheDocument();
    });
});