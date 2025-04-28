import React from 'react';
import { render, screen } from '@testing-library/react';
import YogaClass from './YogaClass';

// Mocking the Header component
jest.mock('../../components/Header/Header', () => () => <div>Header Component</div>);

// Mocking the yoga image
jest.mock('../assets/yoga.jpg', () => 'yoga.jpg');

describe('YogaClass Component', () => {
    test('renders the YogaClass component', () => {
        render(<YogaClass />);

        // Check if the header is rendered
        expect(screen.getByText('Header Component')).toBeInTheDocument();

        // Check if the yoga info is rendered
        expect(screen.getByText(/UNLOCK FLEXIBILITY WITH VIRTUAL YOGA/i)).toBeInTheDocument();
        expect(screen.getByText(/Stretch,Strengthen,and Relax from Home/i)).toBeInTheDocument();

        // Check if the yoga video preview is rendered
        expect(screen.getByAltText('Yoga instructor demonstrating pose')).toBeInTheDocument();

        // Check if the play button is rendered
        expect(screen.getByText('Learn')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /Learn/i })).toBeInTheDocument();

        // Check if the fullscreen button is rendered
        expect(screen.getByRole('button', { name: /⤢/ })).toBeInTheDocument();
    });

    test('renders yoga poses', () => {
        render(<YogaClass />);

        // Check if all yoga poses are rendered
        const poses = [
            "Surya Namaskar", "Vajrasana", "Malasana", "Garudasana", "Marichyasana",
            "Tadasana", "Shavasana", "Padmasana", "Utkatasana", "Salabhasana",
            "Vrikshasana", "Ustrasana", "Bakasana", "Sukhasana", "Ananda Balasana",
            "Bhujangasana", "Trikonasana", "Anjaneyasana", "Virasana", "Virabhadrasana1",
            "Dhanurasana", "Marjariasana", "Navasana", "Halasana", "Virabhadrasana2"
        ];

        poses.forEach(pose => {
            expect(screen.getByText(pose)).toBeInTheDocument();
        });
    });
});