import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import Exercises from './Exercises';

// Mocking the Header component
jest.mock('../../components/Header/Header', () => () => <div>Header Component</div>);

// Mocking the images
jest.mock('../assets/man-front.png', () => 'man-front.png');
jest.mock('../assets/man-back.png', () => 'man-back.png');

describe('Exercises Component', () => {
    test('renders the Exercises component and its muscle groups', () => {
        render(
            <MemoryRouter>
                <Exercises />
            </MemoryRouter>
        );

        // Check if the header is rendered
        expect(screen.getByText('Header Component')).toBeInTheDocument();

        // Check if muscle labels are rendered
        const muscleLabels = [
            "SHOULDERS", "CHEST", "BICEPS", "FOREARM", "ABS", "QUADS",
            "TRAPS", "TRICEPS", "LATS", "LOWER BACK", "GLUTES", "HAMSTRINGS", "CALVES"
        ];

        muscleLabels.forEach(label => {
            expect(screen.getByText(label)).toBeInTheDocument();
        });
    });

    test('navigates to the correct route when a muscle label is clicked', () => {
        const navigate = jest.fn();

        render(
            <MemoryRouter initialEntries={['/exercises']}>
                <Routes>
                    <Route path="/exercises" element={<Exercises />} />
                    <Route path="/exercises/shoulders" element={<div>Shoulders Exercises</div>} />
                    <Route path="/exercises/abs" element={<div>Abs Exercises</div>} />
                    <Route path="/exercises/arms" element={<div>Arms Exercises</div>} />
                    <Route path="/exercises/back" element={<div>Back Exercises</div>} />
                    <Route path="/exercises/chest" element={<div>Chest Exercises</div>} />
                    <Route path="/exercises/forearm" element={<div>Forearm Exercises</div>} />
                    <Route path="/exercises/legs" element={<div>Legs Exercises</div>} />
                </Routes>
            </MemoryRouter>
        );

        // Click on the "SHOULDERS" muscle label
        fireEvent.click(screen.getByText('SHOULDERS'));
        expect(screen.getByText('Shoulders Exercises')).toBeInTheDocument();

        // Click on the "ABS" muscle label
        fireEvent.click(screen.getByText('ABS'));
        expect(screen.getByText('Abs Exercises')).toBeInTheDocument();

        // Click on the "BICEPS" muscle label
        fireEvent.click(screen.getByText('BICEPS'));
        expect(screen.getByText('Arms Exercises')).toBeInTheDocument();

        // Click on the "CHEST" muscle label
        fireEvent.click(screen.getByText('CHEST'));
        expect(screen.getByText('Chest Exercises')).toBeInTheDocument();
    });
});