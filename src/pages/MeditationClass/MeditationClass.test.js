import React from 'react';
import { render, screen } from '@testing-library/react';
import MeditationClass from './MeditationClass';

// Mocking the Header component
jest.mock('../../components/Header/Header', () => () => <div>Header Component</div>);

// Mocking the meditation image
jest.mock('../assets/meditation.jpg', () => 'meditation.jpg');

describe('MeditationClass Component', () => {
    test('renders the MeditationClass component', () => {
        render(<MeditationClass />);

        // Check if the header is rendered
        expect(screen.getByText('Header Component')).toBeInTheDocument();

        // Check if the inspiration text is rendered
        expect(screen.getByText('INSPIRATION FOR JOYFUL LIVING')).toBeInTheDocument();
        expect(screen.getByText('Stretch,Strengthen,and Relax from Home')).toBeInTheDocument();

        // Check if the meditation video preview is rendered
        expect(screen.getByAltText('Person meditating')).toBeInTheDocument();

        // Check if the play button is rendered
        expect(screen.getByText('Learn')).toBeInTheDocument();
    });

    test('renders meditation techniques buttons', () => {
        render(<MeditationClass />);

        // Check if all meditation techniques are rendered
        const techniques = [
            "Focused Attention", "Breath Awareness", "Vipassana", "Sound Bath", "Insight",
            "Mindfulness", "Transcendental", "Yoga Nidra", "Nada Yoga", "Breath Counting",
            "Loving-Kindness", "Mantra", "Chakra Meditation", "Tonglen", "Heart-Centered",
            "Body Scan", "Walking", "Visualization", "Taoist", "Shikantaza",
            "Guided", "Zen Meditation", "Candle Gazing", "Kundalini", "Pranayama"
        ];

        techniques.forEach(technique => {
            expect(screen.getByText(technique)).toBeInTheDocument();
        });
    });
});