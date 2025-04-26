import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import NutritionInfo from './NutritionInfo';
import * as tf from '@tensorflow/tfjs';

// Mocking TensorFlow.js
jest.mock('@tensorflow/tfjs', () => ({
    loadLayersModel: jest.fn(),
    browser: {
        fromPixels: jest.fn().mockReturnValue({
            toFloat: jest.fn().mockReturnValue({
                div: jest.fn().mockReturnValue({
                    expandDims: jest.fn(),
                }),
            }),
        }),
    },
}));

describe('NutritionInfo Component', () => {
    beforeEach(() => {
        render(<NutritionInfo />);
    });

    test('renders the NutritionInfo component', () => {
        expect(screen.getByText('Nutrition Info')).toBeInTheDocument();
        expect(screen.getByLabelText('No. of Servings')).toBeInTheDocument();
        expect(screen.getByLabelText('Serving Size')).toBeInTheDocument();
    });

    test('uploads an image and analyzes it', async () => {
        const file = new File(['dummy content'], 'food.jpg', { type: 'image/jpeg' });
        const fileInput = screen.getByLabelText('UPLOAD IMAGE');

        // Simulate file upload
        fireEvent.change(fileInput, { target: { files: [file] } });

        // Check if the preview is displayed
        expect(screen.getByAltText('Food preview')).toBeInTheDocument();

        // Mock the model loading and prediction
        tf.loadLayersModel.mockResolvedValueOnce({
            predict: jest.fn().mockReturnValue({
                data: jest.fn().mockResolvedValueOnce(new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])),
            }),
        });

        // Simulate analyzing the image
        fireEvent.click(screen.getByText('Analyze Food'));

        await waitFor(() => {
            expect(screen.getByText('Detected Food:')).toBeInTheDocument();
            expect(screen.getByText('burger')).toBeInTheDocument(); // Assuming 'burger' is the predicted class
        });
    });

    test('calculates nutrition values based on servings', async () => {
        const file = new File(['dummy content'], 'food.jpg', { type: 'image/jpeg' });
        const fileInput = screen.getByLabelText('UPLOAD IMAGE');

        // Simulate file upload
        fireEvent.change(fileInput, { target: { files: [file] } });

        // Mock the model loading and prediction
        tf.loadLayersModel.mockResolvedValueOnce({
            predict: jest.fn().mockReturnValue({
                data: jest.fn().mockResolvedValueOnce(new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])),
            }),
        });

        // Simulate analyzing the image
        fireEvent.click(screen.getByText('Analyze Food'));

        await waitFor(() => {
            expect(screen.getByText('Detected Food:')).toBeInTheDocument();
            expect(screen.getByText('burger')).toBeInTheDocument(); // Assuming 'burger' is the predicted class
        });

        // Change servings
        const servingsInput = screen.getByLabelText('No. of Servings');
        fireEvent.change(servingsInput, { target: { value: '2' } });

        // Check if the nutrition values are updated
        expect(screen.getByDisplayValue('590')).toBeInTheDocument(); // Assuming burger has 295 calories
    });

    test('handles allergies selection', () => {
        const allergenCheckbox = screen.getByLabelText('Dairy');
        fireEvent.click(allergenCheckbox);
        expect(allergenCheckbox).toBeChecked();

        fireEvent.click(allergenCheckbox);
        expect(allergenCheckbox).not.toBeChecked();
    });
});