import "./CreateBowl.css"
import { useState } from "react"
import ScrollAnimation from "../../ScrollAnimation/ScrollAnimation"

function CreateBowl() {
  const API_KEY = "08f6d92d470e4da0a6651aa95f197f60"
  const [suggestedRecipes, setSuggestedRecipes] = useState([])
  const [loading, setLoading] = useState(false)
  const [detailLoading, setDetailLoading] = useState(false)
  const [searched, setSearched] = useState(false)
  const [ingredients, setIngredients] = useState(Array(6).fill(""))
  const [selectedRecipe, setSelectedRecipe] = useState(null)
  const [recipeDetails, setRecipeDetails] = useState(null)
  const [error, setError] = useState(null)

  const handleIngredientChange = (index, value) => {
    const newIngredients = [...ingredients]
    newIngredients[index] = value
    setIngredients(newIngredients)
  }

  const handleGenerateRecipes = async () => {
    try {
      const validIngredients = ingredients.filter((ing) => ing.trim() !== "")

      if (validIngredients.length === 0) {
        setError("Please add at least one ingredient")
        return
      }

      setError(null)
      setLoading(true)
      setSearched(true)

      // Format ingredients for API call (comma-separated)
      const ingredientsParam = validIngredients.join(",")

      // Make API call to Spoonacular
      const response = await fetch(
        `https://api.spoonacular.com/recipes/findByIngredients?apiKey=${API_KEY}&ingredients=${ingredientsParam}&number=6&ranking=1&ignorePantry=true`,
      )

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()
      setSuggestedRecipes(data)
      setLoading(false)
    } catch (error) {
      console.error("Error generating recipes:", error)
      setError("Failed to fetch recipes. Please try again.")
      setLoading(false)
      setSuggestedRecipes([])
    }
  }

  const fetchRecipeDetails = async (recipeId) => {
    try {
      setDetailLoading(true)

      // Fetch detailed recipe information including nutrition
      const response = await fetch(
        `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API_KEY}&includeNutrition=true`,
      )

      if (!response.ok) {
        throw new Error(`API error: ${response.status}`)
      }

      const data = await response.json()
      setRecipeDetails(data)
      setDetailLoading(false)
    } catch (error) {
      console.error("Error fetching recipe details:", error)
      setDetailLoading(false)
    }
  }

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe)
    setRecipeDetails(null) 
    fetchRecipeDetails(recipe.id)
  }

  const closeRecipeModal = () => {
    setSelectedRecipe(null)
    setRecipeDetails(null)
  }

  return (
    <div className="create-bowl">
      <div className="bowl-header">
        <h2>Find Recipes With Your Ingredients</h2>
        <p className="bowl-description">Enter ingredients you have and we'll find recipes for you</p>
      </div>

      <div className="search-recipes-container">
        <ScrollAnimation animationType="fade-in">
          <div className="ingredients-section">
            <h3 className="section-title">Your Ingredients</h3>
            <div className="ingredients-grid">
              {ingredients.map((ingredient, i) => (
                <input
                  key={i}
                  type="text"
                  value={ingredient}
                  onChange={(e) => handleIngredientChange(i, e.target.value)}
                  placeholder="Add ingredient"
                  className="ingredient-input"
                />
              ))}
            </div>
            {error && <div className="error-message">{error}</div>}
            <button className="generate-button" onClick={handleGenerateRecipes} disabled={loading}>
              {loading ? "Searching..." : "Find Recipes"}
            </button>
          </div>
        </ScrollAnimation>

        <div className="recipes-section">
          <h3 className="section-title">Suggested Recipes</h3>
          {loading ? (
            <div className="loading-recipes">
              <div className="spinner"></div>
              <p>Finding recipes...</p>
            </div>
          ) : !searched ? (
            <div className="empty-recipes">
              <div className="empty-icon">🔍</div>
              <p>Enter ingredients and click "Find Recipes" to see suggestions</p>
            </div>
          ) : suggestedRecipes.length === 0 ? (
            <div className="no-recipes">
              <div className="empty-icon">😕</div>
              <p>No recipes found with those ingredients. Try adding more or different ingredients.</p>
            </div>
          ) : (
            <>
              <div className="recipes-grid">
                {suggestedRecipes.map((recipe, i) => (
                  <ScrollAnimation key={recipe.id} animationType="slide-up" delay={i * 100}>
                    <div key={i} className="recipe-item" onClick={() => handleRecipeClick(recipe)}>
                      <img
                        src={recipe.image || "/placeholder.svg?height=200&width=200"}
                        alt={recipe.title}
                        className="recipe-image"
                      />
                      <div className="recipe-details">
                        <div className="recipe-name">{recipe.title}</div>
                        <div className="recipe-stats">
                          <span className="used-ingredients">Used: {recipe.usedIngredientCount}</span>
                          <span className="missed-ingredients">Missing: {recipe.missedIngredientCount}</span>
                        </div>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>
              {suggestedRecipes.length > 5 && <button className="show-more-button">Show more ▼</button>}
            </>
          )}
        </div>
      </div>

      {selectedRecipe && (
        <div className="recipe-modal-overlay" onClick={closeRecipeModal}>
          <div className="recipe-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeRecipeModal}>
              ×
            </button>

            {detailLoading ? (
              <div className="detail-loading">
                <div className="spinner"></div>
                <p>Loading recipe details...</p>
              </div>
            ) : (
              <div className="recipe-detail-container">
                <ScrollAnimation animationType="fade-in">
                  <h3 className="recipe-title">{selectedRecipe.title}</h3>
                </ScrollAnimation>

                <div className="recipe-meta-pills">
                  {recipeDetails?.readyInMinutes && (
                    <div className="meta-pill">
                      <span>PREP TIME:</span> {recipeDetails.readyInMinutes} min
                    </div>
                  )}
                  {recipeDetails?.cookingMinutes && (
                    <div className="meta-pill">
                      <span>COOK TIME:</span> {recipeDetails.cookingMinutes} min
                    </div>
                  )}
                  {recipeDetails?.servings && (
                    <div className="meta-pill">
                      <span>SERVINGS:</span> {recipeDetails.servings}
                    </div>
                  )}
                  {recipeDetails?.nutrition?.nutrients && (
                    <div className="meta-pill">
                      <span>CALORIES:</span>{" "}
                      {Math.round(recipeDetails.nutrition.nutrients.find((n) => n.name === "Calories")?.amount || 0)}
                    </div>
                  )}
                </div>

                <div className="recipe-content">
                  <div className="recipe-image-container">
                    <img
                      src={selectedRecipe.image || "/placeholder.svg?height=300&width=300"}
                      alt={selectedRecipe.title}
                      className="recipe-detail-image"
                    />
                  </div>

                  <ScrollAnimation animationType="slide-in-right" delay={200}>
                    <div className="recipe-info">
                      {recipeDetails?.nutrition?.nutrients && (
                        <div className="nutrition-section">
                          <h3>Nutrition Information</h3>
                          <div className="nutrition-grid">
                            <div className="nutrition-item">
                              <div className="nutrition-value">
                                {Math.round(
                                  recipeDetails.nutrition.nutrients.find((n) => n.name === "Protein")?.amount || 0,
                                )}
                                g
                              </div>
                              <div className="nutrition-label">PROTEIN</div>
                            </div>
                            <div className="nutrition-item">
                              <div className="nutrition-value">
                                {Math.round(
                                  recipeDetails.nutrition.nutrients.find((n) => n.name === "Carbohydrates")?.amount ||
                                    0,
                                )}
                                g
                              </div>
                              <div className="nutrition-label">CARBS</div>
                            </div>
                            <div className="nutrition-item">
                              <div className="nutrition-value">
                                {Math.round(
                                  recipeDetails.nutrition.nutrients.find((n) => n.name === "Fat")?.amount || 0,
                                )}
                                g
                              </div>
                              <div className="nutrition-label">FATS</div>
                            </div>
                          </div>
                        </div>
                      )}

                      <div className="ingredients-section">
                        <h3>Ingredients</h3>
                        <div className="ingredients-list">
                          {recipeDetails?.extendedIngredients?.map((ingredient, index) => (
                            <div key={index} className="ingredient-row">
                              <div className="ingredient-amount">
                                {ingredient.measures.us.amount} {ingredient.measures.us.unitShort}
                              </div>
                              <div className="ingredient-name">{ingredient.name}</div>
                            </div>
                          )) ||
                            selectedRecipe.usedIngredients
                              .concat(selectedRecipe.missedIngredients)
                              .map((ingredient, index) => (
                                <div key={index} className="ingredient-row">
                                  <div className="ingredient-amount">
                                    {ingredient.amount} {ingredient.unit}
                                  </div>
                                  <div className="ingredient-name">{ingredient.name}</div>
                                </div>
                              ))}
                        </div>
                      </div>

                      {recipeDetails?.analyzedInstructions && recipeDetails.analyzedInstructions.length > 0 && (
                        <div className="instructions-section">
                          <h3>Instructions</h3>
                          <div className="instructions-list">
                            {recipeDetails.analyzedInstructions[0].steps.map((step, index) => (
                              <div key={index} className="instruction-row">
                                <div className="instruction-number">{index + 1}.</div>
                                <div className="instruction-text">{step.step}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="recipe-actions">
                        <button
                          className="view-recipe-button"
                          onClick={() =>
                            window.open(
                              recipeDetails?.sourceUrl ||
                                `https://spoonacular.com/recipes/${selectedRecipe.title.replace(/\s+/g, "-").toLowerCase()}-${selectedRecipe.id}`,
                              "_blank",
                            )
                          }
                        >
                          View Full Recipe
                        </button>
                        <button className="save-recipe-button">Save Recipe</button>
                      </div>
                    </div>
                  </ScrollAnimation>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateBowl
