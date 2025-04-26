import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CreateBowl from './CreateBowl';

// Mocking the fetch API
global.fetch = jest.fn();

describe('CreateBowl Component', () => {
    beforeEach(() => {
        fetch.mockClear();
    });

    test('renders the CreateBowl component', () => {
        render(<CreateBowl />);
        expect(screen.getByText('Find Recipes With Your Ingredients')).toBeInTheDocument();
        expect(screen.getByText("Enter ingredients you have and we'll find recipes for you")).toBeInTheDocument();
    });

    test('shows error message when no ingredients are provided', async () => {
        render(<CreateBowl />);
        fireEvent.click(screen.getByRole('button', { name: /find recipes/i }));
        expect(await screen.findByText('Please add at least one ingredient')).toBeInTheDocument();
    });

    test('fetches recipes based on ingredients', async () => {
        const mockRecipes = [
            { id: 1, title: 'Recipe 1', image: 'image1.jpg', usedIngredientCount: 2, missedIngredientCount: 1 },
            { id: 2, title: 'Recipe 2', image: 'image2.jpg', usedIngredientCount: 1, missedIngredientCount: 2 },
        ];

        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockRecipes),
        });

        render(<CreateBowl />);
        const ingredientInput = screen.getAllByPlaceholderText('Add ingredient')[0];
        fireEvent.change(ingredientInput, { target: { value: 'Tomato' } });
        fireEvent.click(screen.getByRole('button', { name: /find recipes/i }));

        await waitFor(() => {
            expect(fetch).toHaveBeenCalledWith(expect.stringContaining('Tomato'));
            expect(screen.getByText('Recipe 1')).toBeInTheDocument();
            expect(screen.getByText('Recipe 2')).toBeInTheDocument();
        });
    });

    test('shows no recipes found message when API returns no recipes', async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce([]),
        });

        render(<CreateBowl />);
        const ingredientInput = screen.getAllByPlaceholderText('Add ingredient')[0];
        fireEvent.change(ingredientInput, { target: { value: 'Tomato' } });
        fireEvent.click(screen.getByRole('button', { name: /find recipes/i }));

        await waitFor(() => {
            expect(screen.getByText('No recipes found with those ingredients. Try adding more or different ingredients.')).toBeInTheDocument();
        });
    });

    test('fetches recipe details when a recipe is clicked', async () => {
        const mockRecipes = [
            { id: 1, title: 'Recipe 1', image: 'image1.jpg', usedIngredientCount: 2, missedIngredientCount: 1 },
        ];

        const mockRecipeDetails = {
            title: 'Recipe 1',
            image: 'image1.jpg',
            readyInMinutes: 30,
            cookingMinutes: 20,
            servings: 4,
            nutrition: {
                nutrients: [
                    { name: 'Calories', amount: 200 },
                    { name: 'Protein', amount: 10 },
                    { name: 'Carbohydrates', amount: 30 },
                    { name: 'Fat', amount: 5 },
                ],
            },
            extendedIngredients: [
                { name: 'Tomato', measures: { us: { amount: 1, unitShort: 'piece' } } },
                { name: 'Salt', measures: { us: { amount: 1, unitShort: 'tsp' } } },
            ],
            analyzedInstructions: [{ steps: [{ step: 'Chop the tomato.' }, { step: 'Add salt.' }] }],
        };

        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockRecipes),
        });

        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockRecipeDetails),
        });

        render(<CreateBowl />);
        const ingredientInput = screen.getAllByPlaceholderText('Add ingredient')[0];
        fireEvent.change(ingredientInput, { target: { value: 'Tomato' } });
        fireEvent.click(screen.getByRole('button', { name: /find recipes/i }));

        await waitFor(() => {
            fireEvent.click(screen.getByText('Recipe 1'));
            expect(screen.getByText('Recipe 1')).toBeInTheDocument();
            expect(screen.getByText('Prep Time:')).toBeInTheDocument();
            expect(screen.getByText('Cooking Time:')).toBeInTheDocument();
            expect(screen.getByText('Servings:')).toBeInTheDocument();
            expect(screen.getByText('Nutrition Information')).toBeInTheDocument();
            expect(screen.getByText('Ingredients')).toBeInTheDocument();
            expect(screen.getByText('Instructions')).toBeInTheDocument();
        });
    });

    test('closes recipe modal when close button is clicked', async () => {
        const mockRecipes = [
            { id: 1, title: 'Recipe 1', image: 'image1.jpg', usedIngredientCount: 2, missedIngredientCount: 1 },
        ];

        fetch.mockResolvedValueOnce({
            ok: true,
            json: jest.fn().mockResolvedValueOnce(mockRecipes),
        });

        render(<CreateBowl />);
        const ingredientInput = screen.getAllByPlaceholderText('Add ingredient')[0];
        fireEvent.change(ingredientInput, { target: { value: 'Tomato' } });
        fireEvent.click(screen.getByRole('button', { name: /find recipes/i }));

        await waitFor(() => {
            fireEvent.click(screen.getByText('Recipe 1'));
            fireEvent.click(screen.getByRole('button', { name: /×/i }));
            expect(screen.queryByText('Recipe 1')).not.toBeInTheDocument();
        });
    });
});