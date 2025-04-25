import { useState, useEffect } from "react"
import "./MealPlan.css"
import MealCategories from "../../components/Meal/MealCategories/MealCategories"
import CreateBowl from "../../components/Meal/CreateBowl/CreateBowl"
import NutritionInfo from "../../components/Meal/NutritionInfo/NutritionInfo"
import m1 from "../../components/assets/meal-1.jpg"
import m2 from "../../components/assets/meal-3.jpg"
import m3 from "../../components/assets/meal-2.jpg"

function MealPlan() {
  const [activeView, setActiveView] = useState(null)

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }, [activeView])

  const categories = [
    {
      title: "Recipe Cookbook",
      description: "Browse and discover meal categories",
      image: m1,
      view: "categories",
    },
    {
      title: "Build Your Own Bowl",
      description: "Create custom meals with your ingredients",
      image: m2,
      view: "build",
    },
    {
      title: "Nutrition Analysis",
      description: "Track nutritional information of meals",
      image: m3,
      view: "nutrition",
    },
  ]

  return (
    <div className="meal-plan-page">
      <header className="meal-plan-header">
        <h1>Hi User, Good Morning</h1>
      </header>

      {!activeView ? (
        <div className="category-grid">
          {categories.map((category, index) => (
            <div
              key={category.title}
              className="category-card"
              onClick={() => setActiveView(category.view)}
              style={{ backgroundImage: `url(${category.image})` }}
            >
              <div className="category-content">
                <h2>{category.title}</h2>
                <p>{category.description}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="active-view-container">
          <button onClick={() => setActiveView(null)} className="back-button">
            ← Back to Categories
          </button>

          {activeView === "categories" && <MealCategories />}
          {activeView === "build" && <CreateBowl />}
          {activeView === "nutrition" && <NutritionInfo />}
        </div>
      )}
    </div>
  )
}

export default MealPlan