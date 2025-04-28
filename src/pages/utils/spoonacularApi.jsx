// Spoonacular API utility functions

/**
 * Search recipes using the complex search endpoint
 * @param {Object} params - Search parameters
 * @returns {Promise<Object>} - Search results
 */
export const searchRecipesComplex = async (params) => {
  try {
    // API key should be stored in environment variables
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY

    // Build the query string
    const queryParams = new URLSearchParams()

    // Add all non-empty parameters to the query
    Object.entries(params).forEach(([key, value]) => {
      if (value) queryParams.append(key, value)
    })

    // Add API key
    queryParams.append("apiKey", apiKey)

    const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?${queryParams.toString()}`)

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error searching recipes:", error)
    throw error
  }
}

/**
 * Get detailed recipe information by ID
 * @param {number} id - Recipe ID
 * @returns {Promise<Object>} - Recipe details
 */
export const getRecipeInformation = async (id) => {
  try {
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}&includeNutrition=true`,
    )

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error getting recipe information:", error)
    throw error
  }
}

/**
 * Search recipes by ingredients
 * @param {string[]} ingredients - List of ingredients
 * @param {number} number - Number of results to return
 * @returns {Promise<Object[]>} - Search results
 */
export const searchRecipesByIngredients = async (ingredients, number = 10) => {
  try {
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY
    const ingredientsParam = ingredients.join(",")

    const response = await fetch(
      `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientsParam}&number=${number}&apiKey=${apiKey}`,
    )

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error searching recipes by ingredients:", error)
    throw error
  }
}

/**
 * Get nutrition information for a recipe
 * @param {number} id - Recipe ID
 * @returns {Promise<Object>} - Nutrition information
 */
export const getRecipeNutrition = async (id) => {
  try {
    const apiKey = process.env.REACT_APP_SPOONACULAR_API_KEY
    const response = await fetch(`https://api.spoonacular.com/recipes/${id}/nutritionWidget.json?apiKey=${apiKey}`)

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error getting recipe nutrition:", error)
    throw error
  }
}

// API key should be stored in environment variables in a production app
const API_KEY = "08f6d92d470e4da0a6651aa95f197f60"
const BASE_URL = "https://api.spoonacular.com"

/**
 * Guess nutrition information for a food by title
 * @param {string} title - The food title to search for
 * @returns {Promise<Object>} - Nutrition information
 */
export const guessNutritionByTitle = async (title) => {
  try {
    const encodedTitle = encodeURIComponent(title)
    const response = await fetch(`${BASE_URL}/recipes/guessNutrition?apiKey=${API_KEY}&title=${encodedTitle}`)

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    const data = await response.json()
    return {
      calories: data.calories ? data.calories.value : 0,
      protein: data.protein ? data.protein.value : 0,
      carbs: data.carbs ? data.carbs.value : 0,
      fats: data.fat ? data.fat.value : 0,
      fiber: 0, // Spoonacular doesn't provide fiber in this endpoint
    }
  } catch (error) {
    console.error("Error fetching nutrition data:", error)
    throw error
  }
}

/**
 * Analyze a recipe by title
 * @param {string} title - Recipe title
 * @returns {Promise<Object>} - Recipe analysis
 */
export const analyzeRecipe = async (title) => {
  try {
    const encodedTitle = encodeURIComponent(title)
    const response = await fetch(`${BASE_URL}/recipes/analyzeARecipe?apiKey=${API_KEY}&title=${encodedTitle}`)

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error analyzing recipe:", error)
    throw error
  }
}
