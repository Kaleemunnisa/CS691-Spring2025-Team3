import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
    beforeEach(() => {
        render(<Footer />);
    });

    test('renders the footer with correct title', () => {
        expect(screen.getByText('Eat & fit')).toBeInTheDocument();
    });

    test('renders contact information', () => {
        expect(screen.getByText(/Give us a call at:/i)).toBeInTheDocument();
        expect(screen.getByText('+1 234-567-890')).toBeInTheDocument();
        expect(screen.getByText(/For future enquiries & newsletters:/i)).toBeInTheDocument();
        expect(screen.getByText('Support@eatandfit.com')).toBeInTheDocument();
    });

    test('renders resources and support sections', () => {
        expect(screen.getByText('Resources')).toBeInTheDocument();
        expect(screen.getByText('Support')).toBeInTheDocument();
        expect(screen.getByText("FAQ's")).toBeInTheDocument();
        expect(screen.getByText('Contact us')).toBeInTheDocument();
        expect(screen.getByText('Help Center')).toBeInTheDocument();
        expect(screen.getByText('Ratings')).toBeInTheDocument();
    });

    test('renders footer bottom with copyright and links', () => {
        expect(screen.getByText('Copyright 2025, All Rights Reserved')).toBeInTheDocument();
        expect(screen.getByText('Privacy & Policy')).toBeInTheDocument();
        expect(screen.getByText('Terms & Conditions')).toBeInTheDocument();
    });
});