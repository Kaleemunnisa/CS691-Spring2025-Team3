import { createContext, useContext, useState, useEffect, useCallback } from "react"

const CalorieContext = createContext()

export const useCalories = () => {
  const context = useContext(CalorieContext)
  if (!context) {
    throw new Error("useCalories must be used within a CalorieProvider")
  }
  return context
}

export const CalorieProvider = ({ children }) => {
  const [meals, setMeals] = useState(() => {
    const savedMeals = localStorage.getItem("trackedMeals")
    return savedMeals ? JSON.parse(savedMeals) : []
  })

  useEffect(() => {
    localStorage.setItem("trackedMeals", JSON.stringify(meals))
    console.log("Meals updated in localStorage:", meals)
  }, [meals])

  const addMeal = useCallback((meal) => {
    console.log("Adding meal:", meal)
    const newMeal = {
      ...meal,
      id: Date.now(),
      timestamp: new Date().toISOString(),
    }
    setMeals((prevMeals) => [...prevMeals, newMeal])
    return newMeal
  }, [])

  const removeMeal = useCallback((id) => {
    setMeals((prevMeals) => prevMeals.filter((meal) => meal.id !== id))
  }, [])

  const getTodaysMeals = useCallback(() => {
    const today = new Date().toISOString().split("T")[0]
    const todaysMeals = meals.filter((meal) => {
      const mealDate = new Date(meal.timestamp).toISOString().split("T")[0]
      return mealDate === today
    })
    console.log("Today's meals:", todaysMeals)
    return todaysMeals
  }, [meals])

  const getTotalCaloriesToday = useCallback(() => {
    const todaysMeals = getTodaysMeals()
    const total = todaysMeals.reduce((total, meal) => total + (meal.calories || 0), 0)
    console.log("Total calories today:", total)
    return total
  }, [getTodaysMeals])

  const clearAllMeals = useCallback(() => {
    setMeals([])
  }, [])

  const value = {
    meals,
    addMeal,
    removeMeal,
    getTodaysMeals,
    getTotalCaloriesToday,
    clearAllMeals,
  }

  return <CalorieContext.Provider value={value}>{children}</CalorieContext.Provider>
}
