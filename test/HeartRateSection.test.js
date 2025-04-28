import React from 'react';
import { render, screen } from '@testing-library/react';
import HeartRateSection from './HeartRateSection';
import BarChart from '../BarChart/BarChart';

jest.mock('../BarChart/BarChart', () => {
    return function MockBarChart(props) {
        return <div data-testid="mock-bar-chart">BarChart with data: {JSON.stringify(props.data)}</div>;
    };
});

describe('HeartRateSection Component', () => {
    beforeEach(() => {
        render(<HeartRateSection />);
    });

    test('renders the heart rate header', () => {
        expect(screen.getByText('Heart Rate')).toBeInTheDocument();
    });

    test('renders the heart rate value', () => {
        expect(screen.getByText('56 - 189 BPM')).toBeInTheDocument();
    });

    test('renders the time range buttons', () => {
        const buttons = screen.getAllByRole('button', { class: 'time-btn' });
        expect(buttons).toHaveLength(4);
        expect(screen.getByText('D')).toBeInTheDocument();
        expect(screen.getByText('W')).toBeInTheDocument();
        expect(screen.getByText('M')).toBeInTheDocument();
        expect(screen.getByText('Y')).toBeInTheDocument();
    });

    test('renders the BarChart with correct data', () => {
        const barChart = screen.getByTestId('mock-bar-chart');
        expect(barChart).toBeInTheDocument();
        expect(barChart).toHaveTextContent('BarChart with data: [{"value":60,"day":"M"},{"value":80,"day":"T"},{"value":50,"day":"W"},{"value":90,"day":"R"},{"value":70,"day":"F"},{"value":85,"day":"S"},{"value":65,"day":"S"}]');
    });
});