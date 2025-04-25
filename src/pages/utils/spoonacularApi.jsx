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
 * Search for recipes by ingredients
 * @param {string[]} ingredients - Array of ingredients
 * @param {number} number - Number of results to return
 * @returns {Promise<Object[]>} - Array of recipe objects
 */
export const searchRecipesByIngredients = async (ingredients, number = 5) => {
  try {
    const ingredientsParam = ingredients.map(encodeURIComponent).join(",")
    const response = await fetch(
      `${BASE_URL}/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredientsParam}&number=${number}`,
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
 * Get detailed recipe information
 * @param {number} id - Recipe ID
 * @returns {Promise<Object>} - Detailed recipe information
 */
export const getRecipeInformation = async (id) => {
  try {
    const response = await fetch(`${BASE_URL}/recipes/${id}/information?apiKey=${API_KEY}&includeNutrition=true`)

    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`)
    }

    return await response.json()
  } catch (error) {
    console.error("Error fetching recipe information:", error)
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
