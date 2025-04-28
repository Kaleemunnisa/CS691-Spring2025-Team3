import RecipeSearch from "../../components/Meal/RecipeSearch/RecipeSearch"
import "./MealPlan.css"

const RecipeSearchPage = () => {
  return (
    <div className="meal-plan-page">
      <div className="back-to-categories">
        <button className="back-button" onClick={() => window.history.back()}>
          Back
        </button>
      </div>

      <header className="meal-plan-header">
        <h1>Recipe Search</h1>
        <p>Find the perfect recipes for your meal plan</p>
      </header>

      <RecipeSearch />
    </div>
  )
}

export default RecipeSearchPage
