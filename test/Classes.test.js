import React from 'react';
import { render, screen } from '@testing-library/react';
import Classes from './Classes';

// Mocking the Header component
jest.mock('../../components/Header/Header', () => () => <div>Header Component</div>);

// Mocking the ClassCard component
jest.mock('../../components/ClassCard/ClassCard', () => ({ title, image, alt }) => (
    <div>
        <img src={image} alt={alt} />
        <h3>{title}</h3>
    </div>
));

// Mocking the images
jest.mock('../assets/meditation.jpg', () => 'meditation.jpg');
jest.mock('../assets/yoga.jpg', () => 'yoga.jpg');
jest.mock('../assets/pilates.jpg', () => 'pilates.jpg');
jest.mock('../assets/ayurvedic.jpg', () => 'ayurvedic.jpg');

describe('Classes Component', () => {
    test('renders the Classes component and its class cards', () => {
        render(<Classes />);

        // Check if the header is rendered
        expect(screen.getByText('Header Component')).toBeInTheDocument();

        // Check if all class titles are rendered
        const classTitles = [
            "MEDITATION",
            "YOGA",
            "PILATES",
            "AYURVEDIC"
        ];

        classTitles.forEach(title => {
            expect(screen.getByText(title)).toBeInTheDocument();
        });

        // Check if the images are rendered
        expect(screen.getByAltText('Person meditating at sunset')).toBeInTheDocument();
        expect(screen.getByAltText('Person in bridge pose')).toBeInTheDocument();
        expect(screen.getByAltText('Person in pilates pose')).toBeInTheDocument();
        expect(screen.getByAltText('Person in standing split pose')).toBeInTheDocument();
    });
});