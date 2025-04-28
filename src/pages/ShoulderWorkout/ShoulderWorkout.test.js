import React from 'react';
import { render, screen } from '@testing-library/react';
import ShoulderWorkout from './ShoulderWorkout';

// Mocking the Header component
jest.mock('../../components/Header/Header', () => () => <div>Header Component</div>);

// Mocking the exercise images
jest.mock('../assets/shoulder1.png', () => 'shoulder1.png');
jest.mock('../assets/shoulder2.png', () => 'shoulder2.png');
jest.mock('../assets/shoulder3.png', () => 'shoulder3.png');
jest.mock('../assets/shoulder4.png', () => 'shoulder4.png');
jest.mock('../assets/shoulder5.png', () => 'shoulder5.png');
jest.mock('../assets/shoulder6.png', () => 'shoulder6.png');
jest.mock('../assets/shoulder7.png', () => 'shoulder7.png');
jest.mock('../assets/shoulder8.png', () => 'shoulder8.png');

describe('ShoulderWorkout Component', () => {
    test('renders the ShoulderWorkout component', () => {
        render(<ShoulderWorkout />);

        // Check if the header is rendered
        expect(screen.getByText('Header Component')).toBeInTheDocument();

        // Check if the workout label is rendered
        expect(screen.getByText('SHOULDER WORKOUT')).toBeInTheDocument();

        // Check if all workout exercises are rendered
        const exercises = [
            "OVERHEAD PRESS", "DUMBELL SHOULDER", "LATERAL RAISES", 
            "ARNOLD PRESS", "REVERSE PEC-DECK FLY", "FRONT RAISES", 
            "CABLE LATERAL RAISES", "UPRIGHT ROWS"
        ];

        exercises.forEach(exercise => {
            expect(screen.getByText(exercise)).toBeInTheDocument();
        });

        // Check if the indicators are rendered
        const indicators = Array(exercises.length).fill("10-12 REPS");
        indicators.forEach(indicator => {
            expect(screen.getByText(indicator)).toBeInTheDocument();
        });
    });

    test('renders exercise images', () => {
        render(<ShoulderWorkout />);

        // Check if all exercise images are rendered
        const images = [
            'shoulder1.png', 'shoulder2.png', 'shoulder3.png', 
            'shoulder4.png', 'shoulder5.png', 'shoulder6.png', 
            'shoulder7.png', 'shoulder8.png'
        ];

        images.forEach(image => {
            expect(screen.getByAltText(image.replace('.png', '').toUpperCase())).toBeInTheDocument();
        });
    });
});