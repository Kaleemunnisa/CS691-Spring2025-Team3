import { useState, useEffect, useRef, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import "./CategoryPage.css"

function ProteinShakesPage() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCuisine, setSelectedCuisine] = useState("All")
  const [sortBy, setSortBy] = useState("default")
  const [favorites, setFavorites] = useState([])
  const [showOnlyFavorites, setShowOnlyFavorites] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const recipesPerPage = 6
  const navigate = useNavigate()

  const observerRef = useRef(null)
  const recipeRefs = useRef([])

  const cuisineOptions = ["All", "American", "Indian", "Italian", "Mexican", "French", "Thai", "Greek", "Mediterranean"]

  useEffect(() => {
    const savedFavorites = localStorage.getItem("proteinShakesFavorites")
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }

    setLoading(true)

    const allProteinShakesRecipes = [
      {
        _id: "501",
        name: "Masala Chai Protein Shake",
        description: "A spiced protein shake inspired by Indian masala chai",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 180,
        protein: 25,
        carbs: 10,
        fats: 5,
        image: "",
        category: { _id: "5", name: "PROTEIN SHAKES" },
        cuisine: { name: "INDIAN" },
        steps: [
          "Add all ingredients to a blender",
          "Blend until smooth and frothy",
          "Pour into a glass and sprinkle with additional cinnamon if desired",
        ],
        ingredients: [
          { name: "Vanilla Protein Powder", quantity: "1", unit: "scoop" },
          { name: "Almond Milk", quantity: "1", unit: "cup" },
          { name: "Cinnamon", quantity: "1/4", unit: "tsp" },
          { name: "Cardamom", quantity: "1/8", unit: "tsp" },
          { name: "Ginger", quantity: "1/8", unit: "tsp" },
          { name: "Cloves", quantity: "1", unit: "pinch" },
          { name: "Ice Cubes", quantity: "4-5", unit: "" },
        ],
      },
      {
        _id: "502",
        name: "Berry Blast Protein Shake",
        description: "Antioxidant-rich berry shake with a protein boost",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 220,
        protein: 30,
        carbs: 20,
        fats: 3,
        image: "",
        category: { _id: "5", name: "PROTEIN SHAKES" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Add berries, protein powder, and milk to a blender",
          "Add banana and ice",
          "Blend until smooth",
          "Pour into a glass and enjoy immediately",
        ],
        ingredients: [
          { name: "Mixed Berries", quantity: "1", unit: "cup" },
          { name: "Vanilla Protein Powder", quantity: "1", unit: "scoop" },
          { name: "Almond Milk", quantity: "1", unit: "cup" },
          { name: "Banana", quantity: "1/2", unit: "medium" },
          { name: "Ice Cubes", quantity: "1", unit: "cup" },
          { name: "Honey", quantity: "1", unit: "tsp (optional)" },
        ],
      },
      {
        _id: "503",
        name: "Chocolate Peanut Butter Protein Shake",
        description: "Indulgent shake that tastes like dessert but packs a protein punch",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 35,
        carbs: 25,
        fats: 15,
        image: "",
        category: { _id: "5", name: "PROTEIN SHAKES" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Add all ingredients to a blender",
          "Blend until smooth and creamy",
          "Add more ice for a thicker consistency if desired",
          "Pour into a glass and drizzle with extra peanut butter if desired",
        ],
        ingredients: [
          { name: "Chocolate Protein Powder", quantity: "1", unit: "scoop" },
          { name: "Peanut Butter", quantity: "1", unit: "tbsp" },
          { name: "Banana", quantity: "1/2", unit: "medium" },
          { name: "Almond Milk", quantity: "1", unit: "cup" },
          { name: "Cocoa Powder", quantity: "1", unit: "tsp" },
          { name: "Ice Cubes", quantity: "1/2", unit: "cup" },
        ],
      },
      {
        _id: "504",
        name: "Green Protein Smoothie",
        description: "Nutrient-dense green smoothie with added protein",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 200,
        protein: 25,
        carbs: 22,
        fats: 4,
        image: "",
        category: { _id: "5", name: "PROTEIN SHAKES" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Add spinach, banana, and milk to a blender",
          "Add protein powder, nut butter, and ice",
          "Blend until smooth and creamy",
          "Add more liquid if needed for desired consistency",
        ],
        ingredients: [
          { name: "Spinach", quantity: "2", unit: "cups" },
          { name: "Banana", quantity: "1", unit: "medium" },
          { name: "Vanilla Protein Powder", quantity: "1", unit: "scoop" },
          { name: "Almond Milk", quantity: "1", unit: "cup" },
          { name: "Almond Butter", quantity: "1", unit: "tbsp" },
          { name: "Ice Cubes", quantity: "1/2", unit: "cup" },
          { name: "Honey", quantity: "1", unit: "tsp (optional)" },
        ],
      },
      {
        _id: "505",
        name: "Coffee Protein Shake",
        description: "Morning coffee and protein shake in one",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 190,
        protein: 28,
        carbs: 12,
        fats: 5,
        image: "",
        category: { _id: "5", name: "PROTEIN SHAKES" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Brew coffee and let cool",
          "Add cooled coffee, protein powder, milk, and ice to a blender",
          "Add banana and sweetener if using",
          "Blend until smooth and frothy",
          "Pour into a glass and enjoy immediately",
        ],
        ingredients: [
          { name: "Cold Brewed Coffee", quantity: "1/2", unit: "cup" },
          { name: "Vanilla or Chocolate Protein Powder", quantity: "1", unit: "scoop" },
          { name: "Almond Milk", quantity: "1/2", unit: "cup" },
          { name: "Banana", quantity: "1/2", unit: "medium (optional)" },
          { name: "Ice Cubes", quantity: "1", unit: "cup" },
          { name: "Stevia or Monk Fruit Sweetener", quantity: "", unit: "to taste (optional)" },
        ],
      },
      {
        _id: "506",
        name: "Tropical Protein Smoothie",
        description: "Island-inspired protein shake with tropical fruits",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 240,
        protein: 24,
        carbs: 30,
        fats: 3,
        image: "",
        category: { _id: "5", name: "PROTEIN SHAKES" },
        cuisine: { name: "THAI" },
        steps: [
          "Add all ingredients to a blender",
          "Blend until smooth and creamy",
          "Pour into a glass and garnish with a pineapple wedge if desired",
        ],
        ingredients: [
          { name: "Pineapple Chunks", quantity: "1/2", unit: "cup" },
          { name: "Mango Chunks", quantity: "1/2", unit: "cup" },
          { name: "Vanilla Protein Powder", quantity: "1", unit: "scoop" },
          { name: "Coconut Milk", quantity: "1", unit: "cup" },
          { name: "Ice Cubes", quantity: "1/2", unit: "cup" },
          { name: "Lime Juice", quantity: "1", unit: "tsp (optional)" },
        ],
      },
    ]

    setTimeout(() => {
      setRecipes(allProteinShakesRecipes)
      setLoading(false)
    }, 500)

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("fade-in-visible")
            observerRef.current.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const processedRecipes = useCallback(() => {
    let result = recipes.filter((recipe) => {
      if (
        searchQuery &&
        !recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
        !recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
      ) {
        return false
      }

      if (selectedCuisine !== "All" && recipe.cuisine.name !== selectedCuisine.toUpperCase()) {
        return false
      }

      if (showOnlyFavorites && !favorites.includes(recipe._id)) {
        return false
      }

      return true
    })

    if (sortBy !== "default") {
      result = [...result].sort((a, b) => {
        switch (sortBy) {
          case "calories-asc":
            return a.calories - b.calories
          case "calories-desc":
            return b.calories - a.calories
          case "protein-asc":
            return a.protein - b.protein
          case "protein-desc":
            return b.protein - a.protein
          case "time-asc":
            return a.prepTime + a.cookTime - (b.prepTime + b.cookTime)
          case "time-desc":
            return b.prepTime + b.cookTime - (a.prepTime + a.cookTime)
          default:
            return 0
        }
      })
    }

    return result
  }, [recipes, searchQuery, selectedCuisine, sortBy, showOnlyFavorites, favorites])

  const filteredRecipes = processedRecipes()

  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage)

  useEffect(() => {
    recipeRefs.current = recipeRefs.current.slice(0, currentRecipes.length)

    if (!loading && recipeRefs.current.length > 0) {
      recipeRefs.current.forEach((ref) => {
        if (ref && observerRef.current) {
          observerRef.current.observe(ref)
        }
      })
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [loading, currentRecipes])

  useEffect(() => {
    localStorage.setItem("proteinShakesFavorites", JSON.stringify(favorites))
  }, [favorites])

  const handleCuisineChange = (cuisine) => {
    setSelectedCuisine(cuisine)
    setCurrentPage(1) 
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1) 
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  const toggleFavorite = (e, recipeId) => {
    e.stopPropagation() 
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(recipeId)) {
        return prevFavorites.filter((id) => id !== recipeId)
      } else {
        return [...prevFavorites, recipeId]
      }
    })
  }

  const toggleShowOnlyFavorites = () => {
    setShowOnlyFavorites(!showOnlyFavorites)
    setCurrentPage(1) 
  }

  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe)
  }

  const closeRecipeDetails = () => {
    setSelectedRecipe(null)
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    document.querySelector(".recipes-grid")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="category-page">
      <header className="category-header">
        <h1>Protein Shakes</h1>
        <p>Boost your protein intake with these delicious shakes</p>
      </header>

      {selectedRecipe ? (
        <div className="recipe-details-modal">
          <div className="recipe-details-content">
            <button className="close-button" onClick={closeRecipeDetails}>
              ×
            </button>

            <div className="recipe-details-header">
              <h2>{selectedRecipe.name}</h2>
              <p className="recipe-description">{selectedRecipe.description}</p>

              <div className="recipe-meta">
                <div className="meta-item">
                  <span className="meta-label">Prep Time:</span>
                  <span className="meta-value">{selectedRecipe.prepTime} min</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Cook Time:</span>
                  <span className="meta-value">{selectedRecipe.cookTime} min</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Servings:</span>
                  <span className="meta-value">{selectedRecipe.servings}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Calories:</span>
                  <span className="meta-value">{selectedRecipe.calories} kcal</span>
                </div>
              </div>
            </div>

            <div className="recipe-details-body">
              <div className="recipe-image-container">
                <img
                  src={selectedRecipe.image || "/placeholder.svg"}
                  alt={selectedRecipe.name}
                  className="recipe-detail-image"
                />
              </div>

              <div className="recipe-content">
                <div className="recipe-nutrition">
                  <h3>Nutrition Information</h3>
                  <div className="nutrition-grid">
                    <div className="nutrition-item">
                      <span className="nutrition-value">{selectedRecipe.protein}g</span>
                      <span className="nutrition-label">Protein</span>
                    </div>
                    <div className="nutrition-item">
                      <span className="nutrition-value">{selectedRecipe.carbs}g</span>
                      <span className="nutrition-label">Carbs</span>
                    </div>
                    <div className="nutrition-item">
                      <span className="nutrition-value">{selectedRecipe.fats}g</span>
                      <span className="nutrition-label">Fats</span>
                    </div>
                  </div>
                </div>

                <div className="recipe-ingredients">
                  <h3>Ingredients</h3>
                  <ul className="ingredients-list">
                    {selectedRecipe.ingredients.map((ingredient, index) => (
                      <li key={index}>
                        <span className="ingredient-quantity">
                          {ingredient.quantity} {ingredient.unit}
                        </span>
                        <span className="ingredient-name">{ingredient.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="recipe-steps">
                  <h3>Instructions</h3>
                  <ol className="steps-list">
                    {selectedRecipe.steps.map((step, index) => (
                      <li key={index}>
                        <span className="step-number">{index + 1}.</span>
                        <span className="step-text">{step}</span>
                      </li>
                    ))}
                  </ol>
                  <div className="total-time">
                    <span className="total-time-label">Total Time:</span>
                    <span className="total-time-value">
                      {selectedRecipe.prepTime + selectedRecipe.cookTime} minutes
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="filter-section">
            <div className="search-container">
              <input
                type="search"
                placeholder="Search protein shake recipes..."
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <span className="search-icon">🔍</span>
            </div>

            <div className="filter-controls">
              <div className="sort-filter">
                <label htmlFor="sort-select">Sort by:</label>
                <select id="sort-select" value={sortBy} onChange={handleSortChange} className="sort-select">
                  <option value="default">Default</option>
                  <option value="calories-asc">Calories (Low to High)</option>
                  <option value="calories-desc">Calories (High to Low)</option>
                  <option value="protein-asc">Protein (Low to High)</option>
                  <option value="protein-desc">Protein (High to Low)</option>
                  <option value="time-asc">Prep Time (Quick to Long)</option>
                  <option value="time-desc">Prep Time (Long to Quick)</option>
                </select>
              </div>

              <div className="favorites-filter">
                <button
                  className={`favorites-button ${showOnlyFavorites ? "active" : ""}`}
                  onClick={toggleShowOnlyFavorites}
                >
                  {showOnlyFavorites ? "Show All Recipes" : "Show Favorites Only"}
                </button>
              </div>
            </div>

            <div className="cuisine-filter">
              <h3>Filter by Cuisine:</h3>
              <div className="cuisine-buttons">
                {cuisineOptions.map((cuisine, index) => (
                  <button
                    key={cuisine}
                    className={`cuisine-button ${selectedCuisine === cuisine ? "active" : ""}`}
                    onClick={() => handleCuisineChange(cuisine)}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {cuisine}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="back-to-categories">
            <button className="back-button" onClick={() => navigate("/meal-plan")}>
              ← Back to All Categories
            </button>
          </div>

          {loading ? (
            <div className="recipes-grid">
              {[...Array(6)].map((_, index) => (
                <div className="recipe-item skeleton" key={index}>
                  <div className="skeleton-image"></div>
                  <div className="skeleton-content">
                    <div className="skeleton-title"></div>
                    <div className="skeleton-details"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredRecipes.length === 0 ? (
            <div className="no-results">
              No protein shake recipes match your filters. Try adjusting your search criteria.
            </div>
          ) : (
            <>
              <div className="recipes-grid">
                {currentRecipes.map((recipe, index) => (
                  <div
                    className="recipe-item fade-in"
                    key={recipe._id}
                    onClick={() => handleRecipeClick(recipe)}
                    ref={(el) => (recipeRefs.current[index] = el)}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="favorite-icon" onClick={(e) => toggleFavorite(e, recipe._id)}>
                      {favorites.includes(recipe._id) ? "★" : "☆"}
                    </div>
                    <img src={recipe.image || "/placeholder.svg"} alt={recipe.name} className="recipe-image" />
                    <div className="recipe-overlay">
                      <h3>{recipe.name}</h3>
                      <div className="recipe-details">
                        <span>{recipe.calories} cal</span>
                        <span>{recipe.prepTime + recipe.cookTime} min</span>
                        <span>{recipe.protein}g protein</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagination-button"
                  >
                    &laquo; Prev
                  </button>
                  <div className="page-numbers">
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => paginate(index + 1)}
                        className={`pagination-button ${currentPage === index + 1 ? "active" : ""}`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="pagination-button"
                  >
                    Next &raquo;
                  </button>
                </div>
              )}
            </>
          )}
        </>
      )}
    </div>
  )
}

export default ProteinShakesPage
