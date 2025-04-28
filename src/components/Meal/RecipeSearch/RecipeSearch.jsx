import { useState } from "react"
import "./RecipeSearch.css"

const RecipeSearch = () => {
  const [searchParams, setSearchParams] = useState({
    query: "",
    cuisine: "",
    diet: "",
    intolerances: "",
    type: "",
    maxReadyTime: "",
    minProtein: "",
    maxProtein: "",
    minCalories: "",
    maxCalories: "",
    minCarbs: "",
    maxCarbs: "",
    minFat: "",
    maxFat: "",
    sort: "popularity",
    number: 12,
  })

  const [searchResults, setSearchResults] = useState([])
  const [loading, setLoading] = useState(false)
  const [activeFilters, setActiveFilters] = useState(false)
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [error, setError] = useState(null)

  // Cuisine options
  const cuisineOptions = [
    "African",
    "American",
    "British",
    "Cajun",
    "Caribbean",
    "Chinese",
    "Eastern European",
    "European",
    "French",
    "German",
    "Greek",
    "Indian",
    "Irish",
    "Italian",
    "Japanese",
    "Jewish",
    "Korean",
    "Latin American",
    "Mediterranean",
    "Mexican",
    "Middle Eastern",
    "Nordic",
    "Southern",
    "Spanish",
    "Thai",
    "Vietnamese",
  ]

  // Diet options
  const dietOptions = [
    "Gluten Free",
    "Ketogenic",
    "Vegetarian",
    "Lacto-Vegetarian",
    "Ovo-Vegetarian",
    "Vegan",
    "Pescetarian",
    "Paleo",
    "Primal",
    "Low FODMAP",
    "Whole30",
  ]

  // Meal type options
  const mealTypeOptions = [
    "main course",
    "side dish",
    "dessert",
    "appetizer",
    "salad",
    "bread",
    "breakfast",
    "soup",
    "beverage",
    "sauce",
    "marinade",
    "fingerfood",
    "snack",
    "drink",
  ]

  // Intolerance options
  const intoleranceOptions = [
    "Dairy",
    "Egg",
    "Gluten",
    "Grain",
    "Peanut",
    "Seafood",
    "Sesame",
    "Shellfish",
    "Soy",
    "Sulfite",
    "Tree Nut",
    "Wheat",
  ]

  // Sort options
  const sortOptions = [
    { value: "popularity", label: "Popularity" },
    { value: "healthiness", label: "Healthiness" },
    { value: "price", label: "Price" },
    { value: "time", label: "Time" },
    { value: "calories", label: "Calories" },
    { value: "protein", label: "Protein" },
    { value: "carbs", label: "Carbs" },
    { value: "fat", label: "Fat" },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setSearchParams((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleCheckboxChange = (e, category) => {
    const { value, checked } = e.target

    setSearchParams((prev) => {
      const currentValues = prev[category] ? prev[category].split(",") : []

      let newValues
      if (checked) {
        // Add the value if it's not already in the array
        newValues = [...currentValues, value].filter((v, i, a) => a.indexOf(v) === i)
      } else {
        // Remove the value
        newValues = currentValues.filter((v) => v !== value)
      }

      return {
        ...prev,
        [category]: newValues.join(","),
      }
    })
  }

  const toggleFilters = () => {
    setActiveFilters(!activeFilters)
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      // Add additional parameters for better results
      const params = {
        ...searchParams,
        addRecipeInformation: true,
        fillIngredients: true,
      }

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

      const data = await response.json()
      setSearchResults(data.results || [])
    } catch (err) {
      console.error("Error searching recipes:", err)
      setError("Failed to search recipes. Please try again later.")
      setSearchResults([])
    } finally {
      setLoading(false)
    }
  }

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe)
  }

  const closeRecipeDetails = () => {
    setSelectedRecipe(null)
  }

  const renderNutrients = (recipe) => {
    if (!recipe.nutrition || !recipe.nutrition.nutrients) return null

    const nutrients = recipe.nutrition.nutrients
    const importantNutrients = ["Calories", "Protein", "Carbohydrates", "Fat"]

    return (
      <div className="recipe-nutrients">
        {importantNutrients.map((nutrientName) => {
          const nutrient = nutrients.find((n) => n.name === nutrientName)
          if (!nutrient) return null

          return (
            <div key={nutrientName} className="nutrient-item">
              <span className="nutrient-name">{nutrientName}</span>
              <span className="nutrient-value">
                {Math.round(nutrient.amount)} {nutrient.unit}
              </span>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className="recipe-search-container">
      <h2>Advanced Recipe Search</h2>
      <p className="search-description">Search through thousands of recipes with advanced filtering options</p>

      <form onSubmit={handleSearch} className="search-form">
        <div className="search-bar">
          <input
            type="text"
            name="query"
            value={searchParams.query}
            onChange={handleInputChange}
            placeholder="Search recipes (e.g., pasta, chicken, vegetarian)"
            className="search-input"
          />
          <button type="submit" className="search-button">
            Search
          </button>
          <button type="button" className={`filter-toggle ${activeFilters ? "active" : ""}`} onClick={toggleFilters}>
            Filters {activeFilters ? "▲" : "▼"}
          </button>
        </div>

        {activeFilters && (
          <div className="advanced-filters">
            <div className="filter-section">
              <h3>Cuisine</h3>
              <div className="filter-options">
                {cuisineOptions.map((cuisine) => (
                  <label key={cuisine} className="filter-option">
                    <input
                      type="checkbox"
                      value={cuisine}
                      checked={searchParams.cuisine.split(",").includes(cuisine)}
                      onChange={(e) => handleCheckboxChange(e, "cuisine")}
                    />
                    {cuisine}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Diet</h3>
              <div className="filter-options">
                {dietOptions.map((diet) => (
                  <label key={diet} className="filter-option">
                    <input
                      type="checkbox"
                      value={diet}
                      checked={searchParams.diet.split(",").includes(diet)}
                      onChange={(e) => handleCheckboxChange(e, "diet")}
                    />
                    {diet}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Meal Type</h3>
              <div className="filter-options">
                {mealTypeOptions.map((type) => (
                  <label key={type} className="filter-option">
                    <input
                      type="checkbox"
                      value={type}
                      checked={searchParams.type.split(",").includes(type)}
                      onChange={(e) => handleCheckboxChange(e, "type")}
                    />
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Intolerances</h3>
              <div className="filter-options">
                {intoleranceOptions.map((intolerance) => (
                  <label key={intolerance} className="filter-option">
                    <input
                      type="checkbox"
                      value={intolerance}
                      checked={searchParams.intolerances.split(",").includes(intolerance)}
                      onChange={(e) => handleCheckboxChange(e, "intolerances")}
                    />
                    {intolerance}
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-section">
              <h3>Nutrition</h3>
              <div className="nutrition-filters">
                <div className="nutrition-filter">
                  <label>Calories</label>
                  <div className="range-inputs">
                    <input
                      type="number"
                      name="minCalories"
                      placeholder="Min"
                      value={searchParams.minCalories}
                      onChange={handleInputChange}
                      className="range-input"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      name="maxCalories"
                      placeholder="Max"
                      value={searchParams.maxCalories}
                      onChange={handleInputChange}
                      className="range-input"
                    />
                  </div>
                </div>

                <div className="nutrition-filter">
                  <label>Protein (g)</label>
                  <div className="range-inputs">
                    <input
                      type="number"
                      name="minProtein"
                      placeholder="Min"
                      value={searchParams.minProtein}
                      onChange={handleInputChange}
                      className="range-input"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      name="maxProtein"
                      placeholder="Max"
                      value={searchParams.maxProtein}
                      onChange={handleInputChange}
                      className="range-input"
                    />
                  </div>
                </div>

                <div className="nutrition-filter">
                  <label>Carbs (g)</label>
                  <div className="range-inputs">
                    <input
                      type="number"
                      name="minCarbs"
                      placeholder="Min"
                      value={searchParams.minCarbs}
                      onChange={handleInputChange}
                      className="range-input"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      name="maxCarbs"
                      placeholder="Max"
                      value={searchParams.maxCarbs}
                      onChange={handleInputChange}
                      className="range-input"
                    />
                  </div>
                </div>

                <div className="nutrition-filter">
                  <label>Fat (g)</label>
                  <div className="range-inputs">
                    <input
                      type="number"
                      name="minFat"
                      placeholder="Min"
                      value={searchParams.minFat}
                      onChange={handleInputChange}
                      className="range-input"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      name="maxFat"
                      placeholder="Max"
                      value={searchParams.maxFat}
                      onChange={handleInputChange}
                      className="range-input"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="filter-section">
              <h3>Other Filters</h3>
              <div className="other-filters">
                <div className="other-filter">
                  <label>Max Ready Time (minutes)</label>
                  <input
                    type="number"
                    name="maxReadyTime"
                    value={searchParams.maxReadyTime}
                    onChange={handleInputChange}
                    className="other-input"
                  />
                </div>

                <div className="other-filter">
                  <label>Sort By</label>
                  <select name="sort" value={searchParams.sort} onChange={handleInputChange} className="sort-select">
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="other-filter">
                  <label>Results Per Page</label>
                  <select
                    name="number"
                    value={searchParams.number}
                    onChange={handleInputChange}
                    className="number-select"
                  >
                    <option value="12">12</option>
                    <option value="24">24</option>
                    <option value="36">36</option>
                    <option value="48">48</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        )}
      </form>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Searching for recipes...</p>
        </div>
      ) : (
        <>
          {searchResults.length > 0 ? (
            <div className="search-results">
              <h3>Search Results ({searchResults.length})</h3>
              <div className="recipe-grid">
                {searchResults.map((recipe) => (
                  <div key={recipe.id} className="recipe-card" onClick={() => handleRecipeClick(recipe)}>
                    <div className="recipe-image-container">
                      <img src={recipe.image || "/placeholder.svg"} alt={recipe.title} className="recipe-image" />
                    </div>
                    <div className="recipe-info">
                      <h4 className="recipe-title">{recipe.title}</h4>
                      <div className="recipe-meta">
                        <span>
                          <i className="recipe-icon">⏱️</i>
                          {recipe.readyInMinutes} min
                        </span>
                        <span>
                          <i className="recipe-icon">👤</i>
                          {recipe.servings} servings
                        </span>
                      </div>
                      {recipe.nutrition && renderNutrients(recipe)}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            searchParams.query &&
            !loading && (
              <div className="no-results">
                <p>No recipes found. Try adjusting your search criteria.</p>
              </div>
            )
          )}
        </>
      )}

      {selectedRecipe && (
        <div className="recipe-modal">
          <div className="recipe-modal-content">
            <button className="close-modal" onClick={closeRecipeDetails}>
              ×
            </button>

            <div className="recipe-modal-header">
              <h2>{selectedRecipe.title}</h2>
              <img
                src={selectedRecipe.image || "/placeholder.svg"}
                alt={selectedRecipe.title}
                className="recipe-detail-image"
              />
            </div>

            <div className="recipe-modal-body">
              <div className="recipe-summary">
                <div className="recipe-meta-detail">
                  <div className="meta-item">
                    <span className="meta-label">Ready in:</span>
                    <span className="meta-value">{selectedRecipe.readyInMinutes} minutes</span>
                  </div>
                  <div className="meta-item">
                    <span className="meta-label">Servings:</span>
                    <span className="meta-value">{selectedRecipe.servings}</span>
                  </div>
                  {selectedRecipe.healthScore && (
                    <div className="meta-item">
                      <span className="meta-label">Health Score:</span>
                      <span className="meta-value">{selectedRecipe.healthScore}/100</span>
                    </div>
                  )}
                </div>

                {selectedRecipe.summary && (
                  <div className="recipe-summary-text">
                    <h3>Summary</h3>
                    <p dangerouslySetInnerHTML={{ __html: selectedRecipe.summary }}></p>
                  </div>
                )}
              </div>

              <div className="recipe-details-grid">
                <div className="recipe-ingredients">
                  <h3>Ingredients</h3>
                  <ul className="ingredients-list">
                    {selectedRecipe.extendedIngredients &&
                      selectedRecipe.extendedIngredients.map((ingredient, index) => (
                        <li key={index} className="ingredient-item">
                          <span className="ingredient-amount">
                            {ingredient.amount} {ingredient.unit}
                          </span>
                          <span className="ingredient-name">{ingredient.original}</span>
                        </li>
                      ))}
                  </ul>
                </div>

                <div className="recipe-nutrition">
                  <h3>Nutrition Information</h3>
                  {selectedRecipe.nutrition && selectedRecipe.nutrition.nutrients ? (
                    <div className="nutrition-grid">
                      {selectedRecipe.nutrition.nutrients.slice(0, 8).map((nutrient) => (
                        <div key={nutrient.name} className="nutrition-item">
                          <span className="nutrition-name">{nutrient.name}</span>
                          <span className="nutrition-value">
                            {Math.round(nutrient.amount)} {nutrient.unit}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>Nutrition information not available</p>
                  )}
                </div>
              </div>

              {selectedRecipe.analyzedInstructions && selectedRecipe.analyzedInstructions.length > 0 && (
                <div className="recipe-instructions">
                  <h3>Instructions</h3>
                  <ol className="instructions-list">
                    {selectedRecipe.analyzedInstructions[0].steps.map((step) => (
                      <li key={step.number} className="instruction-step">
                        <span className="step-number">{step.number}</span>
                        <span className="step-text">{step.step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              <div className="recipe-tags">
                {selectedRecipe.diets && selectedRecipe.diets.length > 0 && (
                  <div className="tag-section">
                    <h4>Diets:</h4>
                    <div className="tags">
                      {selectedRecipe.diets.map((diet) => (
                        <span key={diet} className="tag diet-tag">
                          {diet}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedRecipe.dishTypes && selectedRecipe.dishTypes.length > 0 && (
                  <div className="tag-section">
                    <h4>Dish Types:</h4>
                    <div className="tags">
                      {selectedRecipe.dishTypes.map((type) => (
                        <span key={type} className="tag dish-tag">
                          {type}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {selectedRecipe.cuisines && selectedRecipe.cuisines.length > 0 && (
                  <div className="tag-section">
                    <h4>Cuisines:</h4>
                    <div className="tags">
                      {selectedRecipe.cuisines.map((cuisine) => (
                        <span key={cuisine} className="tag cuisine-tag">
                          {cuisine}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {selectedRecipe.sourceUrl && (
                <div className="recipe-source">
                  <a href={selectedRecipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="source-link">
                    View Original Recipe
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RecipeSearch
