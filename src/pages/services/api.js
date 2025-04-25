import axios from "axios"

const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5001/api"

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

export const getRecipes = async (params = {}) => {
  try {
    const response = await api.get("/recipes", { params })
    return response.data
  } catch (error) {
    console.error("Error fetching recipes:", error)
    throw error
  }
}

export const getRecipeById = async (id) => {
  try {
    const response = await api.get(`/recipes/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching recipe with id ${id}:`, error)
    throw error
  }
}

export const getFeaturedRecipes = async () => {
  try {
    const response = await api.get("/recipes/featured")
    return response.data
  } catch (error) {
    console.error("Error fetching featured recipes:", error)
    throw error
  }
}

export const getRecipesByCategory = async (categoryId) => {
  try {
    const response = await api.get(`/recipes/category/${categoryId}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching recipes for category ${categoryId}:`, error)
    throw error
  }
}

export const getRecipesByCuisine = async (cuisineId) => {
  try {
    const response = await api.get(`/recipes/cuisine/${cuisineId}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching recipes for cuisine ${cuisineId}:`, error)
    throw error
  }
}

export const createRecipe = async (recipeData) => {
  try {
    const response = await api.post("/recipes", recipeData)
    return response.data
  } catch (error) {
    console.error("Error creating recipe:", error)
    throw error
  }
}

export const updateRecipe = async (id, recipeData) => {
  try {
    const response = await api.put(`/recipes/${id}`, recipeData)
    return response.data
  } catch (error) {
    console.error(`Error updating recipe with id ${id}:`, error)
    throw error
  }
}

export const deleteRecipe = async (id) => {
  try {
    const response = await api.delete(`/recipes/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error deleting recipe with id ${id}:`, error)
    throw error
  }
}

// Category API calls
export const getCategories = async () => {
  try {
    const response = await api.get("/categories")
    return response.data
  } catch (error) {
    console.error("Error fetching categories:", error)
    throw error
  }
}

export const getCategoryById = async (id) => {
  try {
    const response = await api.get(`/categories/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching category with id ${id}:`, error)
    throw error
  }
}

// Cuisine API calls
export const getCuisines = async () => {
  try {
    const response = await api.get("/cuisines")
    return response.data
  } catch (error) {
    console.error("Error fetching cuisines:", error)
    throw error
  }
}

export const getCuisineById = async (id) => {
  try {
    const response = await api.get(`/cuisines/${id}`)
    return response.data
  } catch (error) {
    console.error(`Error fetching cuisine with id ${id}:`, error)
    throw error
  }
}

export default api

