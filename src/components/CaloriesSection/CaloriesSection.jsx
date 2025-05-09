import "./CaloriesSection.css"
import { useCalories } from "../../context/CalorieContext"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

function CaloriesSection() {
  const { getTodaysMeals, getTotalCaloriesToday } = useCalories()
  const [todaysMeals, setTodaysMeals] = useState([])
  const [caloriesConsumed, setCaloriesConsumed] = useState(0)

  useEffect(() => {
    setTodaysMeals(getTodaysMeals())
    setCaloriesConsumed(getTotalCaloriesToday())

    const intervalId = setInterval(() => {
      setTodaysMeals(getTodaysMeals())
      setCaloriesConsumed(getTotalCaloriesToday())
    }, 2000)

    return () => clearInterval(intervalId)
  }, [getTodaysMeals, getTotalCaloriesToday])

  const caloriesGoal = 2000 
  const caloriesRemaining = Math.max(0, caloriesGoal - caloriesConsumed)

  return (
    <div className="calories-section">
      <div className="calories-header">
        <h2>Calories & Nutrition</h2>
      </div>

      <div className="calories-content">
        <div className="calories-info">
          <div className="calories-eaten">
            <span className="calories-label">Eaten - </span>
            <span className="calories-value">{caloriesConsumed} Cal</span>
          </div>
          <div className="calories-left">
            <span className="calories-label">Left - </span>
            <span className="calories-value">{caloriesRemaining} Kcal</span>
          </div>
        </div>

        <div className="calories-progress">
          <div
            className="calories-progress-bar"
            style={{ width: `${Math.min(100, (caloriesConsumed / caloriesGoal) * 100)}%` }}
          ></div>
        </div>

        <div className="today-meals-section">
          <span> </span>
          <h3>Today's Meals</h3>

          {todaysMeals.length > 0 ? (
            <ul className="meal-list">
              {todaysMeals.map((meal) => (
                <li key={meal.id} className="meal-item">
                  <span className="meal-name">{meal.title || meal.name || "Unnamed Meal"}</span>
                  <span className="meal-calories">{meal.calories || 0}  Cal</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className="no-meals-message">
              <p>No meals tracked today.</p>
              <Link to="/meal-plan" className="add-meal-btn">
                Add Meals
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CaloriesSection
