import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import ClassCard from './ClassCard';

// Mocking the image
jest.mock('../assets/placeholder.svg', () => 'placeholder.svg');

describe('ClassCard Component', () => {
    const mockNavigate = jest.fn();

    beforeEach(() => {
        jest.clearAllMocks(); // Clear previous calls to mock functions
        render(
            <MemoryRouter>
                <Routes>
                    <Route path="/classes/yoga" element={<div>Yoga Class</div>} />
                    <Route path="/classes/meditation" element={<div>Meditation Class</div>} />
                    <Route path="/classes/pilates" element={<div>Pilates Class</div>} />
                    <Route path="/classes/ayurvedic" element={<div>Ayurvedic Class</div>} />
                    <Route path="/" element={<ClassCard title="YOGA" image="/placeholder.svg" alt="Yoga" />} />
                </Routes>
            </MemoryRouter>
        );
    });

    test('renders the class card with correct title and image', () => {
        const title = screen.getByText('YOGA');
        const image = screen.getByAltText('Yoga');

        expect(title).toBeInTheDocument();
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/placeholder.svg');
    });

    test('navigates to the correct route when clicked', () => {
        const classCard = screen.getByText('YOGA').closest('.class-card');
        fireEvent.click(classCard);

        expect(screen.getByText('Yoga Class')).toBeInTheDocument();
    });

    test('navigates to Meditation class when title is MEDITATION', () => {
        render(
            <MemoryRouter>
                <Routes>
                    <Route path="/classes/meditation" element={<div>Meditation Class</div>} />
                    <Route path="/" element={<ClassCard title="MEDITATION" image="/placeholder.svg" alt="Meditation" />} />
                </Routes>
            </MemoryRouter>
        );

        const classCard = screen.getByText('MEDITATION').closest('.class-card');
        fireEvent.click(classCard);

        expect(screen.getByText('Meditation Class')).toBeInTheDocument();
    });

    test('navigates to Pilates class when title is PILATES', () => {
        render(
            <MemoryRouter>
                <Routes>
                    <Route path="/classes/pilates" element={<div>Pilates Class</div>} />
                    <Route path="/" element={<ClassCard title="PILATES" image="/placeholder.svg" alt="Pilates" />} />
                </Routes>
            </MemoryRouter>
        );

        const classCard = screen.getByText('PILATES').closest('.class-card');
        fireEvent.click(classCard);

        expect(screen.getByText('Pilates Class')).toBeInTheDocument();
    });

    test('navigates to Ayurvedic class when title is AYURVEDIC', () => {
        render(
            <MemoryRouter>
                <Routes>
                    <Route path="/classes/ayurvedic" element={<div>Ayurvedic Class</div>} />
                    <Route path="/" element={<ClassCard title="AYURVEDIC" image="/placeholder.svg" alt="Ayurvedic" />} />
                </Routes>
            </MemoryRouter>
        );

        const classCard = screen.getByText('AYURVEDIC').closest('.class-card');
        fireEvent.click(classCard);

        expect(screen.getByText('Ayurvedic Class')).toBeInTheDocument();
    });
});