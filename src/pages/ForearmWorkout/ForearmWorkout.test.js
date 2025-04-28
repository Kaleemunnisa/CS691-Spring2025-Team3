import React from 'react';
import { render, screen } from '@testing-library/react';
import ForearmWorkout from './ForearmWorkout';

// Mocking the Header component
jest.mock('../../components/Header/Header', () => () => <div>Header Component</div>);

// Mocking the images
jest.mock('../assets/1.JPG', () => 'forearm1.jpg');
jest.mock('../assets/2.JPG', () => 'forearm2.jpg');
jest.mock('../assets/3.JPG', () => 'forearm3.jpg');
jest.mock('../assets/4.JPG', () => 'forearm4.jpg');
jest.mock('../assets/5.JPG', () => 'forearm5.jpg');
jest.mock('../assets/6.JPG', () => 'forearm6.jpg');
jest.mock('../assets/7.JPG', () => 'forearm7.jpg');
jest.mock('../assets/8.JPG', () => 'forearm8.jpg');

describe('ForearmWorkout Component', () => {
    test('renders the ForearmWorkout component and its exercises', () => {
        render(<ForearmWorkout />);

        // Check if the header is rendered
        expect(screen.getByText('Header Component')).toBeInTheDocument();

        // Check if the workout label is rendered
        expect(screen.getByText('FOREARM WORKOUT')).toBeInTheDocument();

        // Check if all exercises are rendered
        const exercises = [
            "WRIST CURLS",
            "PALMS DOWN",
            "REVERSE CURLS",
            "ZOTTAM CURLS",
            "HAMMER CURLS",
            "WRIST ROLLER",
            "TOWEL PULLUPS",
            "DEAD HANGS"
        ];

        exercises.forEach(exercise => {
            expect(screen.getByText(exercise)).toBeInTheDocument();
        });
    });

    test('renders indicators for exercises that have them', () => {
        render(<ForearmWorkout />);

        // Check if the indicator for "WRIST CURLS" is rendered
        expect(screen.getByText('10-12 REPS')).toBeInTheDocument();

        // Check if the indicator for "REVERSE CURLS" is rendered
        expect(screen.getByText('REST TIME')).toBeInTheDocument();
    });

    test('does not render indicators for exercises that do not have them', () => {
        render(<ForearmWorkout />);

        // Check that no indicator is rendered for "PALMS DOWN"
        expect(screen.queryByText('REST TIME')).not.toBeInTheDocument();
        expect(screen.queryByText('10-12 REPS')).not.toBeInTheDocument();
    });
});