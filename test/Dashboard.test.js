import React from 'react';
import { render, screen } from '@testing-library/react';
import Dashboard from './Dashboard';

jest.mock('../Header/Header', () => () => <div>Header</div>);
jest.mock('../ActivitySection/ActivitySection', () => () => <div>Activity Section</div>);
jest.mock('../SleepSection/SleepSection', () => () => <div>Sleep Section</div>);
jest.mock('../HeartRateSection/HeartRateSection', () => () => <div>Heart Rate Section</div>);
jest.mock('../CaloriesSection/CaloriesSection', () => () => <div>Calories Section</div>);

describe('Dashboard Component', () => {
    beforeEach(() => {
        render(<Dashboard />);
    });

    test('renders the Dashboard component', () => {
        expect(screen.getByText('Header')).toBeInTheDocument();
        expect(screen.getByText('Activity Section')).toBeInTheDocument();
        expect(screen.getByText('Sleep Section')).toBeInTheDocument();
        expect(screen.getByText('Heart Rate Section')).toBeInTheDocument();
        expect(screen.getByText('Calories Section')).toBeInTheDocument();
    });

    test('renders the correct structure', () => {
        const dashboard = screen.getByText('Header').closest('.dashboard');
        expect(dashboard).toBeInTheDocument();
        expect(dashboard).toHaveClass('dashboard');
    });
});