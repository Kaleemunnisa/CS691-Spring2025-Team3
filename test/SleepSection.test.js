import React from 'react';
import { render, screen } from '@testing-library/react';
import SleepSection from './SleepSection';

// Mocking the BarChart component
jest.mock('../BarChart/BarChart', () => {
    return function MockBarChart() {
        return <div data-testid="mock-bar-chart">BarChart</div>;
    };
});

// Mocking the clock icon
jest.mock('../assets/clock-icon.png', () => 'clock-icon.png');

describe('SleepSection Component', () => {
    test('renders the SleepSection component', () => {
        render(<SleepSection />);

        // Check if the header is rendered
        expect(screen.getByText('Sleep Time')).toBeInTheDocument();

        // Check if the average sleep time text is rendered
        expect(screen.getByText('Average Sleep Time')).toBeInTheDocument();

        // Check if the clock icon is rendered
        expect(screen.getByAltText('Clock')).toBeInTheDocument();

        // Check if the time buttons are rendered
        expect(screen.getByText('W')).toBeInTheDocument();
        expect(screen.getByText('M')).toBeInTheDocument();
        expect(screen.getByText('Y')).toBeInTheDocument();

        // Check if the BarChart is rendered
        expect(screen.getByTestId('mock-bar-chart')).toBeInTheDocument();
    });

    test('renders the correct time labels', () => {
        render(<SleepSection />);

        // Check if the time labels are rendered
        expect(screen.getByText('06:00')).toBeInTheDocument();
        expect(screen.getByText('13:00')).toBeInTheDocument();
        expect(screen.getByText('22:00')).toBeInTheDocument();
    });
});