import { useState, useRef, useEffect } from "react"
import "./NutritionInfo.css"
import ScrollAnimation from "../../ScrollAnimation/ScrollAnimation"
import { Spinner } from "react-bootstrap"

const SPOONACULAR_API_KEY = "08f6d92d470e4da0a6651aa95f197f60"

function NutritionInfo() {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [foodTitle, setFoodTitle] = useState("")
  const [prediction, setPrediction] = useState(null)
  const [servings, setServings] = useState(1)
  const [servingSize, setServingSize] = useState("100g")
  const [nutritionValues, setNutritionValues] = useState(null)
  const [error, setError] = useState(null)
  const [recentSearches, setRecentSearches] = useState([])
  const [analysisSource, setAnalysisSource] = useState(null) 
  const [allergens, setAllergens] = useState({
    Dairy: false,
    Eggs: false,
    Fish: false,
    Gluten: false,
    TreeNuts: false,
    Soy: false,
    Seeds: false,
    Wheat: false,
    ShellFish: false,
    Mustard: false,
  })
  const fileInputRef = useRef(null)

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const savedSearches = localStorage.getItem("recentFoodSearches")
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches))
    }
  }, [])

  // Save recent searches to localStorage when they change
  useEffect(() => {
    localStorage.setItem("recentFoodSearches", JSON.stringify(recentSearches))
  }, [recentSearches])

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const analyzeImage = async () => {
    if (!image) return

    setIsAnalyzing(true)
    setError(null)
    setPrediction(null)
    setNutritionValues(null)

    try {
      // Use Spoonacular API to analyze the image
      const formData = new FormData()
      formData.append("file", image)

      console.log("Analyzing image with Spoonacular API...")
      const response = await fetch(`https://api.spoonacular.com/food/images/analyze?apiKey=${SPOONACULAR_API_KEY}`, {
        method: "POST",
        body: formData,
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(`API request failed with status ${response.status}: ${errorData.message || "Unknown error"}`)
      }

      const data = await response.json()
      console.log("Image analysis response:", data)

      // Format the nutrition data
      const nutrition = {
        calories: data.nutrition?.calories || 0,
        protein: data.nutrition?.protein || 0,
        carbs: data.nutrition?.carbs || 0,
        fats: data.nutrition?.fat || 0,
        fiber: data.nutrition?.fiber || 0,
      }

      setPrediction(data.category?.name || "Food")
      setNutritionValues(nutrition)
      setAnalysisSource("image")
    } catch (error) {
      console.error("Error analyzing image:", error)
      setError(`Failed to analyze image: ${error.message}`)

      // Fallback to a mock response for demonstration
      const mockNutrition = {
        calories: 250,
        protein: 10,
        carbs: 30,
        fats: 12,
        fiber: 3,
      }
      setPrediction("Food Item (Estimated)")
      setNutritionValues(mockNutrition)
      setAnalysisSource("image")
    } finally {
      setIsAnalyzing(false)
    }
  }

  const searchFoodNutrition = async () => {
    if (!foodTitle.trim()) return

    setIsSearching(true)
    setError(null)
    setPrediction(null)
    setNutritionValues(null)

    try {
      const encodedTitle = encodeURIComponent(foodTitle)
      console.log(`Searching for nutrition info for: ${foodTitle}`)

      const response = await fetch(
        `https://api.spoonacular.com/recipes/guessNutrition?apiKey=${SPOONACULAR_API_KEY}&title=${encodedTitle}`,
      )

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(`API request failed with status ${response.status}: ${errorData.message || "Unknown error"}`)
      }

      const data = await response.json()
      console.log("Nutrition data response:", data)

      // Format the nutrition data
      const nutrition = {
        calories: data.calories ? data.calories.value : 0,
        protein: data.protein ? data.protein.value : 0,
        carbs: data.carbs ? data.carbs.value : 0,
        fats: data.fat ? data.fat.value : 0,
        fiber: 0, // Spoonacular doesn't provide fiber in this endpoint
      }

      setPrediction(foodTitle)
      setNutritionValues(nutrition)
      setAnalysisSource("text")

      // Save to recent searches
      if (!recentSearches.includes(foodTitle)) {
        setRecentSearches((prev) => [foodTitle, ...prev].slice(0, 5))
      }
    } catch (error) {
      console.error("Error searching for food nutrition:", error)
      setError(`Failed to get nutrition info: ${error.message}`)

      // Fallback to a mock response for demonstration
      const mockNutrition = {
        calories: 428,
        protein: 13,
        carbs: 65,
        fats: 16,
        fiber: 3,
      }
      setPrediction(`${foodTitle} (Estimated)`)
      setNutritionValues(mockNutrition)
      setAnalysisSource("text")
    } finally {
      setIsSearching(false)
    }
  }

  const calculateNutrition = (nutrition, servings) => {
    if (!nutrition) return null

    return {
      calories: Math.round(nutrition.calories * servings),
      protein: Math.round(nutrition.protein * servings),
      carbs: Math.round(nutrition.carbs * servings),
      fats: Math.round(nutrition.fats * servings),
      fiber: Math.round(nutrition.fiber * servings * 10) / 10,
    }
  }

  const adjustedNutrition = calculateNutrition(nutritionValues, servings)

  const handleUploadClick = () => {
    fileInputRef.current.click()
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && foodTitle.trim()) {
      searchFoodNutrition()
    }
  }

  const resetAnalysis = () => {
    setPrediction(null)
    setNutritionValues(null)
    setError(null)
    setAnalysisSource(null)
  }

  const nutritionFields = [
    { name: "calories", unit: "kcal" },
    { name: "protein", unit: "g" },
    { name: "carbs", unit: "g" },
    { name: "fats", unit: "g" },
    { name: "fiber", unit: "g" },
  ]

  return (
    <div className="nutrition-info">
      <button className="back-button" onClick={() => window.history.back()}>
        Back
      </button>

      {error && (
        <div className="error-message">
          <p>{error}</p>
          <p className="error-note">Using estimated values instead.</p>
        </div>
      )}

      <div className="nutrition-grid">
        <ScrollAnimation animationType="slide-in-left">
          <div className="analysis-section">
            <h2 className="section-title">Analyze Your Food</h2>

            <div className="analysis-methods">
              {/* Image Upload Section */}
              <div className="analysis-method">
                <h3 className="method-title">Upload Food Image</h3>
                <div className={`upload-container ${preview ? "has-image" : ""}`} onClick={handleUploadClick}>
                  {preview ? (
                    <div className="preview-container">
                      <img src={preview || "/placeholder.svg"} alt="Food preview" className="food-preview" />
                      {isAnalyzing && (
                        <div className="analyzing-overlay">
                          <Spinner animation="border" role="status">
                            <span className="sr-only">Analyzing...</span>
                          </Spinner>
                          <p>Analyzing your food...</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="upload-placeholder">
                      <p>UPLOAD IMAGE</p>
                      <div className="upload-icon">
                        <span>⬆️</span>
                      </div>
                    </div>
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="file-input"
                    hidden
                  />
                </div>
                {preview && !isAnalyzing && (
                  <button className="analyze-btn" onClick={analyzeImage} disabled={isSearching}>
                    Analyze Image
                  </button>
                )}
              </div>

              {/* Text Search Section */}
              <div className="analysis-method">
                <h3 className="method-title">Search by Food Name</h3>
                <div className="text-search-container">
                  <div className="search-input-container">
                    <input
                      type="text"
                      value={foodTitle}
                      onChange={(e) => setFoodTitle(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter food name (e.g., Spaghetti Aglio et Olio)"
                      className="food-search-input"
                    />
                    <button
                      className="search-btn"
                      onClick={searchFoodNutrition}
                      disabled={isSearching || !foodTitle.trim() || isAnalyzing}
                    >
                      {isSearching ? "Searching..." : "Search"}
                    </button>
                  </div>
                  <p className="search-tip">
                    Try to be specific with dish names for more accurate nutrition estimates.
                  </p>
                  {recentSearches.length > 0 && (
                    <div className="recent-searches">
                      <p className="recent-title">Recent Searches:</p>
                      <div className="recent-tags">
                        {recentSearches.map((search, index) => (
                          <button
                            key={index}
                            className="recent-tag"
                            onClick={() => {
                              setFoodTitle(search)
                              searchFoodNutrition()
                            }}
                          >
                            {search}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {prediction && (
              <div className="prediction-result">
                <h3>Analyzed Food:</h3>
                <p className="food-name">{prediction}</p>
                <p className="analysis-source">
                  {analysisSource === "image" ? "Based on image analysis" : "Based on text search"}
                </p>
                <button className="reset-btn" onClick={resetAnalysis}>
                  Analyze Another Food
                </button>
              </div>
            )}
          </div>
        </ScrollAnimation>

        <ScrollAnimation animationType="slide-in-right">
          <div className="info-section">
            <h2 className="info-title">Nutrition Info</h2>

            <div className="serving-info">
              <div className="form-group">
                <label htmlFor="servings">No. of Servings</label>
                <input
                  id="servings"
                  type="number"
                  className="form-input"
                  value={servings}
                  onChange={(e) => setServings(Math.max(0.1, Number.parseFloat(e.target.value) || 0))}
                  min="0.1"
                  step="0.1"
                />
              </div>
              <div className="form-group">
                <label htmlFor="size">Serving Size</label>
                <input
                  id="size"
                  type="text"
                  className="form-input"
                  value={servingSize}
                  onChange={(e) => setServingSize(e.target.value)}
                />
              </div>
            </div>

            <div className="nutrition-fields">
              {nutritionFields.map((field, index) => (
                <ScrollAnimation key={field.name} animationType="fade-in" delay={index * 50}>
                  <div className="nutrition-field">
                    <div className="field-input">
                      <label htmlFor={field.name}>{field.name.charAt(0).toUpperCase() + field.name.slice(1)}</label>
                      <input
                        id={field.name}
                        type="number"
                        className="form-input"
                        value={adjustedNutrition ? adjustedNutrition[field.name] : ""}
                        readOnly
                      />
                    </div>
                    <div className="field-unit">{field.unit}</div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            <ScrollAnimation animationType="fade-in" delay={500}>
              <div className="allergies-section">
                <h3>Do you have any allergies?</h3>
                <div className="allergies-grid">
                  {Object.keys(allergens).map((allergen, index) => (
                    <div key={allergen} className="allergen-item" style={{ animationDelay: `${index * 50}ms` }}>
                      <input
                        type="checkbox"
                        id={allergen}
                        checked={allergens[allergen]}
                        onChange={() => {
                          setAllergens({
                            ...allergens,
                            [allergen]: !allergens[allergen],
                          })
                        }}
                      />
                      <label htmlFor={allergen}>{allergen}</label>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
    </div>
  )
}

export default NutritionInfo
