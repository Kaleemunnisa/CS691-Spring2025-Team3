import React from 'react';
import { render, screen } from '@testing-library/react';
import AyurvedicClass from './AyurvedicClass';

// Mocking the Header component
jest.mock('../../components/Header/Header', () => () => <div>Header Component</div>);

// Mocking the image
jest.mock('../assets/ayurvedic.jpg', () => 'ayurvedic.jpg');

describe('AyurvedicClass Component', () => {
    test('renders the AyurvedicClass component and its content', () => {
        render(<AyurvedicClass />);

        // Check if the header is rendered
        expect(screen.getByText('Header Component')).toBeInTheDocument();

        // Check if the main title is rendered
        expect(screen.getByText(/IN AYURVEDIC HEALING/i)).toBeInTheDocument();

        // Check if the subtitle is rendered
        expect(screen.getByText(/Stretch,Strengthen,and Relax from Home/i)).toBeInTheDocument();

        // Check if the video preview image is rendered
        expect(screen.getByAltText('People doing handstands in gym')).toBeInTheDocument();

        // Check if the "Learn" button is rendered
        expect(screen.getByText('Learn')).toBeInTheDocument();

        // Check if the fullscreen button is rendered
        expect(screen.getByRole('button', { name: /⤢/ })).toBeInTheDocument();
    });

    test('renders all ayurvedic exercises as buttons', () => {
        render(<AyurvedicClass />);

        // Define the expected exercises
        const exercises = [
            "Chair Pose", "Dolphin Pose", "Sage Pose", "Wheel Pose", "Flutter Kicks",
            "Plank Pose", "Sphinx Pose", "Bridge Pose", "Leg Raises", "Wall Sits",
            "Tree Pose", "Goddess Pose", "Fish Pose", "Jumping Jacks", "Calf Raises",
            "Reverse Warrior", "Forward Fold", "Eagle Pose", "Deadlifts", "Mountain Pose",
            "Pigeon Pose", "Standing Split", "Moon Salutation", "Chin-Ups", "Crow Pose"
        ];

        // Check if all exercises are rendered
        exercises.forEach(exercise => {
            expect(screen.getByText(exercise)).toBeInTheDocument();
        });
    });
});