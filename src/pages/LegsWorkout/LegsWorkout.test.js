import React from 'react';
import { render, screen } from '@testing-library/react';
import LegsWorkout from './LegsWorkout';

// Mocking the Header component
jest.mock('../../components/Header/Header', () => () => <div>Header Component</div>);

// Mocking the images
jest.mock('../assets/leg1.png', () => 'leg1.png');
jest.mock('../assets/leg2.png', () => 'leg2.png');
jest.mock('../assets/leg3.png', () => 'leg3.png');
jest.mock('../assets/leg4.png', () => 'leg4.png');
jest.mock('../assets/leg5.png', () => 'leg5.png');
jest.mock('../assets/leg6.png', () => 'leg6.png');
jest.mock('../assets/leg7.png', () => 'leg7.png');
jest.mock('../assets/leg8.png', () => 'leg8.png');

describe('LegsWorkout Component', () => {
    test('renders the LegsWorkout component and its exercises', () => {
        render(<LegsWorkout />);

        // Check if the header is rendered
        expect(screen.getByText('Header Component')).toBeInTheDocument();

        // Check if the workout label is rendered
        expect(screen.getByText('LEGS&GLUTES WORKOUT')).toBeInTheDocument();

        // Check if all exercises are rendered
        const exercises = [
            "SQUATS",
            "BULGARIAN SQUATS",
            "ROMANIAN DEADLIFTS",
            "LEG PRESS",
            "HIP THRUSTS",
            "CALF RAISES",
            "WALKING LUNGES",
            "HACK SQUAT MACHINE"
        ];

        exercises.forEach(exercise => {
            expect(screen.getByText(exercise)).toBeInTheDocument();
        });
    });

    test('renders indicators for exercises that have them', () => {
        render(<LegsWorkout />);

        // Check if the indicator for "SQUATS" is rendered
        expect(screen.getByText('10-12 REPS')).toBeInTheDocument();

        // Check if the indicator for "ROMANIAN DEADLIFTS" is rendered
        expect(screen.getByText('REST TIME')).toBeInTheDocument();
    });

    test('does not render indicators for exercises that do not have them', () => {
        render(<LegsWorkout />);

        // Check that no indicator is rendered for "BULGARIAN SQUATS"
        expect(screen.queryByText('REST TIME')).not.toBeInTheDocument();
        expect(screen.queryByText('10-12 REPS')).not.toBeInTheDocument();
    });
});