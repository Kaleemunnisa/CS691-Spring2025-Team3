import React from 'react';
import { render, screen } from '@testing-library/react';
import PilatesClass from './PilatesClass';

// Mocking the Header component
jest.mock('../../components/Header/Header', () => () => <div>Header Component</div>);

// Mocking the Pilates image
jest.mock('../assets/pilates.jpg', () => 'pilates.jpg');

describe('PilatesClass Component', () => {
    test('renders the PilatesClass component', () => {
        render(<PilatesClass />);

        // Check if the header is rendered
        expect(screen.getByText('Header Component')).toBeInTheDocument();

        // Check if the inspirational text is rendered
        expect(screen.getByText('CHANGE HAPPENS THROUGH MOVEMENT AND MOVEMENT HEALS')).toBeInTheDocument();
        expect(screen.getByText('Stretch,Strengthen,and Relax from Home')).toBeInTheDocument();

        // Check if the Pilates video preview is rendered
        expect(screen.getByAltText('Person demonstrating Pilates pose')).toBeInTheDocument();

        // Check if the play button is rendered
        expect(screen.getByText('Learn')).toBeInTheDocument();
    });

    test('renders Pilates exercises buttons', () => {
        render(<PilatesClass />);

        // Check if all Pilates exercises are rendered
        const exercises = [
            "The Hundred", "Single Leg Stretch", "Corkscrew", "Knee Fold", "Pelvic Curl",
            "Roll-Up", "Scissors", "Leg Pull Front", "Spinal Rotation", "Side Leg Raise",
            "Roll-Over", "Criss-Cross", "Leg Pull Back", "Shoulder Bridge", "Hip Twist",
            "Single Leg Circles", "Saw", "Teaser", "Pilates Swimming", "Side Kick",
            "Double LegStretch", "Swan Dive", "Side Kick Series", "Swimming Prep", "Jackknife"
        ];

        exercises.forEach(exercise => {
            expect(screen.getByText(exercise)).toBeInTheDocument();
        });
    });
});