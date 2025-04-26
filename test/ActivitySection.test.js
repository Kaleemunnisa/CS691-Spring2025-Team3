import React from 'react';
import { render, screen } from '@testing-library/react';
import ActivitySection from './ActivitySection';
import BarChart from '../BarChart/BarChart';

// Mock the BarChart component
jest.mock('../BarChart/BarChart', () => {
  return function MockBarChart() {
    return <div data-testid="mock-bar-chart">BarChart</div>;
  };
});

describe('ActivitySection', () => {
  beforeEach(() => {
    render(<ActivitySection />);
  });

  test('renders the time range buttons', () => {
    const buttons = screen.getAllByRole('button', { class: 'time-btn' });
    expect(buttons).toHaveLength(5);
    expect(screen.getByText('D')).toBeInTheDocument();
    expect(screen.getByText('W')).toBeInTheDocument();
    expect(screen.getByText('M')).toBeInTheDocument();
    expect(screen.getByText('6M')).toBeInTheDocument();
    expect(screen.getByText('Y')).toBeInTheDocument();
  });

  test('renders the Move chart with correct header and value', () => {
    expect(screen.getByText('Move')).toBeInTheDocument();
    expect(screen.getByText('7275 Steps')).toBeInTheDocument();
    expect(screen.getByTestId('mock-bar-chart')).toBeInTheDocument();
  });

  test('renders the Exercise chart with correct header and value', () => {
    expect(screen.getByText('Exercise')).toBeInTheDocument();
    expect(screen.getByText('12 of 12 hr')).toBeInTheDocument();
    expect(screen.getByTestId('mock-bar-chart')).toBeInTheDocument();
  });

  test('renders the Goal chart with correct header and value', () => {
    expect(screen.getByText('Goal')).toBeInTheDocument();
    expect(screen.getByText('750 cal')).toBeInTheDocument();
    expect(screen.getByTestId('mock-bar-chart')).toBeInTheDocument();
  });
});