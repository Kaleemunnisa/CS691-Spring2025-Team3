import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ScrollNavigation from './ScrollNavigation';

// Mocking the sections prop
const sections = [
    { id: 'section1', label: 'Section 1' },
    { id: 'section2', label: 'Section 2' },
    { id: 'section3', label: 'Section 3' },
];

describe('ScrollNavigation Component', () => {
    beforeEach(() => {
        // Set up the sections in the document
        sections.forEach(section => {
            const div = document.createElement('div');
            div.id = section.id;
            div.style.height = '100vh'; // Simulate section height
            document.body.appendChild(div);
        });
    });

    afterEach(() => {
        // Clean up the sections after each test
        sections.forEach(section => {
            const element = document.getElementById(section.id);
            if (element) {
                document.body.removeChild(element);
            }
        });
    });

    test('renders the ScrollNavigation component', () => {
        render(<ScrollNavigation sections={sections} />);
        
        // Check if all section buttons are rendered
        sections.forEach(section => {
            expect(screen.getByLabelText(`Scroll to ${section.label}`)).toBeInTheDocument();
        });
    });

    test('shows the navigation when scrolled down', () => {
        render(<ScrollNavigation sections={sections} />);
        
        // Simulate scrolling down
        window.scrollY = 250; // Set scroll position
        fireEvent.scroll(window);

        // Check if the navigation is visible
        expect(screen.getByRole('button', { name: /Scroll to Section 1/i }).parentElement).toHaveClass('visible');
    });

    test('hides the navigation when scrolled up', () => {
        render(<ScrollNavigation sections={sections} />);
        
        // Simulate scrolling down
        window.scrollY = 250; // Set scroll position
        fireEvent.scroll(window);

        // Simulate scrolling back up
        window.scrollY = 100; // Set scroll position
        fireEvent.scroll(window);

        // Check if the navigation is not visible
        expect(screen.getByRole('button', { name: /Scroll to Section 1/i }).parentElement).not.toHaveClass('visible');
    });

    test('scrolls to the correct section when a navigation item is clicked', () => {
        render(<ScrollNavigation sections={sections} />);
        
        // Simulate clicking on the first section
        const section1Button = screen.getByLabelText('Scroll to Section 1');
        fireEvent.click(section1Button);

        // Check if the window scrolls to the correct position
        expect(window.scrollY).toBe(0); // Since section1 is at the top
    });

    test('scrolls to the top when the top button is clicked', () => {
        render(<ScrollNavigation sections={sections} />);
        
        // Simulate scrolling down
        window.scrollY = 250; // Set scroll position
        fireEvent.scroll(window);

        // Click the scroll to top button
        const scrollToTopButton = screen.getByLabelText('Scroll to top');
        fireEvent.click(scrollToTopButton);

        // Check if the window scrolls to the top
        expect(window.scrollY).toBe(0);
    });
});