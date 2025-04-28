import React from 'react';
import { render, screen } from '@testing-library/react';
import ArmsWorkout from './ArmsWorkout';

// Mocking the Header component
jest.mock('../../components/Header/Header', () => () => <div>Header Component</div>);

// Mocking the images
jest.mock('../assets/chest1.png', () => 'chest1.png');
jest.mock('../assets/chest2.png', () => 'chest2.png');
jest.mock('../assets/chest3.png', () => 'chest3.png');
jest.mock('../assets/chest4.png', () => 'chest4.png');
jest.mock('../assets/chest5.png', () => 'chest5.png');
jest.mock('../assets/chest6.png', () => 'chest6.png');
jest.mock('../assets/chest7.png', () => 'chest7.png');
jest.mock('../assets/chest8.png', () => 'chest8.png');

describe('ArmsWorkout Component', () => {
    test('renders the ArmsWorkout component and its exercises', () => {
        render(<ArmsWorkout />);

        // Check if the header is rendered
        expect(screen.getByText('Header Component')).toBeInTheDocument();

        // Check if the workout label is rendered
        expect(screen.getByText('BICEPS&TRICEPS WORKOUT')).toBeInTheDocument();

        // Check if all exercises are rendered
        const exercises = [
            "BARBELL CURLS",
            "HAMMER CURLS",
            "CLOSE BENCHPRESS",
            "TRICEPS DIPS",
            "CONCENTRATION CURLS",
            "PREACHER CURLS",
            "ROPE-TRICEPS",
            "Overhead Dumbbell Triceps Extension"
        ];

        exercises.forEach(exercise => {
            expect(screen.getByText(exercise)).toBeInTheDocument();
        });
    });

    test('renders indicators for exercises that have them', () => {
        render(<ArmsWorkout />);

        // Check if the indicator for "BARBELL CURLS" is rendered
        expect(screen.getByText('10-12 REPS')).toBeInTheDocument();

        // Check if the indicator for "CLOSE BENCHPRESS" is rendered
        expect(screen.getByText('REST TIME')).toBeInTheDocument();
    });

    test('does not render indicators for exercises that do not have them', () => {
        render(<ArmsWorkout />);

        // Check that no indicator is rendered for "HAMMER CURLS"
        expect(screen.queryByText('REST TIME')).not.toBeInTheDocument();
        expect(screen.queryByText('10-12 REPS')).not.toBeInTheDocument();
    });
});