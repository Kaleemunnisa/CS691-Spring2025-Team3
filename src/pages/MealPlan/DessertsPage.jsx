import { useState, useEffect, useRef, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import "./CategoryPage.css"

function DessertsPage() {
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

  useEffect(() => {
    // Load favorites from localStorage
    const savedFavorites = localStorage.getItem("dessertsFavorites")
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }

    // Simulate loading data
    setLoading(true)

    // Hardcoded recipes data - filtered for desserts
    const allDessertsRecipes = [
      {
        _id: "601",
        name: "Protein Chocolate Mousse",
        description: "A guilt-free chocolate dessert with added protein",
        prepTime: 10,
        cookTime: 0,
        servings: 2,
        calories: 200,
        protein: 20,
        carbs: 15,
        fats: 8,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meal%20categories-wTOBcdk0mnQzVq8h7AM9pzKZzbkFMA.png",
        category: { _id: "6", name: "DESSERTS" },
        cuisine: { name: "FRENCH" },
        steps: [
          "Add avocado, cocoa powder, protein powder, almond milk, and sweetener to a food processor",
          "Blend until smooth and creamy",
          "Refrigerate for at least 30 minutes",
          "Serve chilled with berries on top",
        ],
        ingredients: [
          { name: "Ripe Avocado", quantity: "1", unit: "medium" },
          { name: "Chocolate Protein Powder", quantity: "1", unit: "scoop" },
          { name: "Cocoa Powder", quantity: "2", unit: "tbsp" },
          { name: "Almond Milk", quantity: "1/4", unit: "cup" },
          { name: "Honey or Maple Syrup", quantity: "1", unit: "tbsp" },
          { name: "Fresh Berries", quantity: "1/4", unit: "cup (for topping)" },
        ],
      },
      {
        _id: "602",
        name: "Greek Yogurt Panna Cotta",
        description: "A protein-rich twist on the classic Italian dessert",
        prepTime: 15,
        cookTime: 5,
        servings: 4,
        calories: 150,
        protein: 12,
        carbs: 18,
        fats: 4,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meal%20categories-wTOBcdk0mnQzVq8h7AM9pzKZzbkFMA.png",
        category: { _id: "6", name: "DESSERTS" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Sprinkle gelatin over cold water and let stand for 5 minutes",
          "Heat honey and vanilla with 1/4 cup milk until hot but not boiling",
          "Stir in gelatin mixture until dissolved",
          "Whisk in yogurt until smooth",
          "Pour into small ramekins or glasses",
          "Refrigerate for at least 4 hours or overnight",
          "Top with fresh berries and mint before serving",
        ],
        ingredients: [
          { name: "Greek Yogurt", quantity: "2", unit: "cups" },
          { name: "Milk", quantity: "1/2", unit: "cup" },
          { name: "Gelatin", quantity: "1", unit: "tbsp" },
          { name: "Honey", quantity: "3", unit: "tbsp" },
          { name: "Vanilla Extract", quantity: "1", unit: "tsp" },
          { name: "Fresh Berries", quantity: "1", unit: "cup (for topping)" },
          { name: "Fresh Mint", quantity: "", unit: "for garnish" },
        ],
      },
      {
        _id: "603",
        name: "Baked Cinnamon Apples",
        description: "Warm, comforting dessert with minimal added sugar",
        prepTime: 10,
        cookTime: 30,
        servings: 4,
        calories: 120,
        protein: 1,
        carbs: 30,
        fats: 1,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meal%20categories-wTOBcdk0mnQzVq8h7AM9pzKZzbkFMA.png",
        category: { _id: "6", name: "DESSERTS" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Preheat oven to 350°F (175°C)",
          "Core apples, leaving the bottom intact",
          "Mix cinnamon, nutmeg, oats, and honey",
          "Stuff the mixture into the cored apples",
          "Place apples in a baking dish with water",
          "Bake for 30 minutes until apples are tender",
          "Serve warm with a dollop of Greek yogurt if desired",
        ],
        ingredients: [
          { name: "Apples", quantity: "4", unit: "medium" },
          { name: "Rolled Oats", quantity: "1/4", unit: "cup" },
          { name: "Cinnamon", quantity: "1", unit: "tsp" },
          { name: "Nutmeg", quantity: "1/4", unit: "tsp" },
          { name: "Honey", quantity: "2", unit: "tbsp" },
          { name: "Water", quantity: "1/4", unit: "cup" },
          { name: "Greek Yogurt", quantity: "1/2", unit: "cup (optional, for serving)" },
        ],
      },
      {
        _id: "604",
        name: "Protein Cheesecake Bites",
        description: "Mini no-bake cheesecakes with a protein boost",
        prepTime: 20,
        cookTime: 0,
        servings: 12,
        calories: 110,
        protein: 8,
        carbs: 10,
        fats: 5,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meal%20categories-wTOBcdk0mnQzVq8h7AM9pzKZzbkFMA.png",
        category: { _id: "6", name: "DESSERTS" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Mix crushed graham crackers with melted coconut oil for the crust",
          "Press mixture into the bottom of a muffin tin lined with paper liners",
          "Blend cream cheese, Greek yogurt, protein powder, and sweetener until smooth",
          "Spoon mixture over crusts",
          "Refrigerate for at least 2 hours or overnight",
          "Top with fresh berries before serving",
        ],
        ingredients: [
          { name: "Graham Crackers", quantity: "1", unit: "cup, crushed" },
          { name: "Coconut Oil", quantity: "3", unit: "tbsp, melted" },
          { name: "Cream Cheese", quantity: "8", unit: "oz, softened" },
          { name: "Greek Yogurt", quantity: "1", unit: "cup" },
          { name: "Vanilla Protein Powder", quantity: "2", unit: "scoops" },
          { name: "Honey or Maple Syrup", quantity: "3", unit: "tbsp" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" },
          { name: "Vanilla Extract", quantity: "1", unit: "tsp" },
          { name: "Fresh Berries", quantity: "1", unit: "cup (for topping)" },
        ],
      },
      {
        _id: "605",
        name: "Chocolate Protein Truffles",
        description: "Rich chocolate truffles with hidden protein",
        prepTime: 25,
        cookTime: 0,
        servings: 15,
        calories: 90,
        protein: 5,
        carbs: 8,
        fats: 5,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meal%20categories-wTOBcdk0mnQzVq8h7AM9pzKZzbkFMA.png",
        category: { _id: "6", name: "DESSERTS" },
        cuisine: { name: "FRENCH" },
        steps: [
          "Mix protein powder, cocoa powder, and almond flour in a bowl",
          "Add almond butter, honey, and vanilla and mix until combined",
          "If mixture is too dry, add a little almond milk",
          "Roll mixture into 1-inch balls",
          "Roll balls in cocoa powder, chopped nuts, or coconut flakes",
          "Refrigerate for at least 1 hour before serving",
          "Store in an airtight container in the refrigerator",
        ],
        ingredients: [
          { name: "Chocolate Protein Powder", quantity: "1/2", unit: "cup" },
          { name: "Cocoa Powder", quantity: "1/4", unit: "cup" },
          { name: "Almond Flour", quantity: "1/2", unit: "cup" },
          { name: "Almond Butter", quantity: "1/3", unit: "cup" },
          { name: "Honey", quantity: "2", unit: "tbsp" },
          { name: "Vanilla Extract", quantity: "1", unit: "tsp" },
          { name: "Almond Milk", quantity: "1-2", unit: "tbsp (if needed)" },
          { name: "Cocoa Powder", quantity: "2", unit: "tbsp (for coating)" },
          { name: "Chopped Nuts", quantity: "1/4", unit: "cup (for coating, optional)" },
          { name: "Coconut Flakes", quantity: "1/4", unit: "cup (for coating, optional)" },
        ],
      },
      {
        _id: "606",
        name: "Berry Protein Frozen Yogurt",
        description: "Homemade frozen yogurt with protein and fresh berries",
        prepTime: 10,
        cookTime: 0,
        servings: 4,
        calories: 130,
        protein: 15,
        carbs: 15,
        fats: 2,
        image:
          "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Meal%20categories-wTOBcdk0mnQzVq8h7AM9pzKZzbkFMA.png",
        category: { _id: "6", name: "DESSERTS" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Blend frozen berries, Greek yogurt, protein powder, and honey until smooth",
          "For a soft-serve consistency, serve immediately",
          "For a firmer texture, transfer to a container and freeze for 1-2 hours",
          "Stir every 30 minutes while freezing to prevent ice crystals",
          "Let sit at room temperature for 5 minutes before serving if frozen solid",
        ],
        ingredients: [
          { name: "Frozen Mixed Berries", quantity: "2", unit: "cups" },
          { name: "Greek Yogurt", quantity: "2", unit: "cups" },
          { name: "Vanilla Protein Powder", quantity: "2", unit: "scoops" },
          { name: "Honey", quantity: "2", unit: "tbsp" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" },
          { name: "Fresh Mint", quantity: "", unit: "for garnish (optional)" },
        ],
      },
    ]

    setTimeout(() => {
      setRecipes(allDessertsRecipes)
      setLoading(false)
    }, 500)

    // Set up intersection observer for animations
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
  }, [filteredRecipes])

  // Set up animation refs when recipes change
  useEffect(() => {
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
  }, [loading, currentPage])

  // Save favorites to localStorage when they change
  useEffect(() => {
    localStorage.setItem("dessertsFavorites", JSON.stringify(favorites))
  }, [favorites])

  // Pagination
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage)

  const handleCuisineChange = (cuisine) => {
    setSelectedCuisine(cuisine)
    setCurrentPage(1) // Reset to first page when filter changes
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1) // Reset to first page when search changes
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
  }

  const toggleFavorite = (e, recipeId) => {
    e.stopPropagation() // Prevent recipe click event
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
    setCurrentPage(1) // Reset to first page when filter changes
  }

  // Function to display recipe details
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe)
  }

  const closeRecipeDetails = () => {
    setSelectedRecipe(null)
  }

  // Pagination controls
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber)
    // Scroll to top of recipe grid
    document.querySelector(".recipes-grid")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <div className="category-page">
      <header className="category-header">
        <h1>Healthy Desserts</h1>
        <p>Satisfy your sweet tooth with these healthier dessert options</p>
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
                placeholder="Search dessert recipes..."
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
            <div className="no-results">No dessert recipes match your filters. Try adjusting your search criteria.</div>
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

export default DessertsPage
