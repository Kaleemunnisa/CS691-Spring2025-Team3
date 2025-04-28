import React from 'react';
import { render, screen } from '@testing-library/react';
import ScrollAnimation from './ScrollAnimation';

// Mocking IntersectionObserver
class IntersectionObserverMock {
    constructor(callback) {
        this.callback = callback;
    }

    observe() {
        // Simulate the intersection event
        this.callback([{ isIntersecting: true }]);
    }

    unobserve() {}
}

// Replace the global IntersectionObserver with the mock
beforeAll(() => {
    window.IntersectionObserver = IntersectionObserverMock;
});

describe('ScrollAnimation Component', () => {
    test('renders children and applies animation class when visible', () => {
        render(
            <ScrollAnimation animationType="fade-in">
                <div>Test Content</div>
            </ScrollAnimation>
        );

        // Check if the content is rendered
        expect(screen.getByText('Test Content')).toBeInTheDocument();

        // Check if the animation class is applied
        const animatedElement = screen.getByText('Test Content').parentElement;
        expect(animatedElement).toHaveClass('scroll-fade-in visible');
    });

    test('does not apply animation class when not visible', () => {
        // Create a new instance of the component without triggering visibility
        const { container } = render(
            <ScrollAnimation animationType="fade-in">
                <div>Test Content</div>
            </ScrollAnimation>
        );

        // Check if the content is rendered
        expect(screen.getByText('Test Content')).toBeInTheDocument();

        // Check if the animation class is not applied
        const animatedElement = container.firstChild;
        expect(animatedElement).toHaveClass('scroll-fade-in');
        expect(animatedElement).not.toHaveClass('visible');
    });
});