import React from 'react';
import { render, screen } from '@testing-library/react';
import BackWorkout from './BackWorkout';

// Mocking the Header component
jest.mock('../../components/Header/Header', () => () => <div>Header Component</div>);

// Mocking the images
jest.mock('../assets/back1.png', () => 'back1.png');
jest.mock('../assets/back2.png', () => 'back2.png');
jest.mock('../assets/back3.png', () => 'back3.png');
jest.mock('../assets/back4.png', () => 'back4.png');
jest.mock('../assets/back5.png', () => 'back5.png');
jest.mock('../assets/back6.png', () => 'back6.png');
jest.mock('../assets/back7.png', () => 'back7.png');
jest.mock('../assets/back8.png', () => 'back8.png');

describe('BackWorkout Component', () => {
    test('renders the BackWorkout component and its exercises', () => {
        render(<BackWorkout />);

        // Check if the header is rendered
        expect(screen.getByText('Header Component')).toBeInTheDocument();

        // Check if the workout label is rendered
        expect(screen.getByText('BACK WORKOUT')).toBeInTheDocument();

        // Check if all exercises are rendered
        const exercises = [
            "DEADLIFTS",
            "LAT PULLDOWN",
            "BARBELL ROWS",
            "SEATED CABLE ROWS",
            "T-BAR ROWS",
            "SINGLE-ARM ROWS",
            "REVERSE FLYS",
            "FACE PULLS"
        ];

        exercises.forEach(exercise => {
            expect(screen.getByText(exercise)).toBeInTheDocument();
        });
    });

    test('renders indicators for exercises that have them', () => {
        render(<BackWorkout />);

        // Check if the indicator for "DEADLIFTS" is rendered
        expect(screen.getByText('10-12 REPS')).toBeInTheDocument();

        // Check if the indicator for "BARBELL ROWS" is rendered
        expect(screen.getByText('REST TIME')).toBeInTheDocument();
    });

    test('does not render indicators for exercises that do not have them', () => {
        render(<BackWorkout />);

        // Check that no indicator is rendered for "LAT PULLDOWN"
        expect(screen.queryByText('REST TIME')).not.toBeInTheDocument();
        expect(screen.queryByText('10-12 REPS')).not.toBeInTheDocument();
    });
});