import { useState, useEffect, useRef } from "react"
import "./NutritionInfo.css"
import ScrollAnimation from "../../ScrollAnimation/ScrollAnimation"
import * as tf from "@tensorflow/tfjs"
import { Spinner } from "react-bootstrap"

const FOOD_CLASSES = [
  "apple",
  "banana",
  "bread",
  "broccoli",
  "burger",
  "chicken",
  "eggs",
  "oatmeal",
  "pasta",
  "pizza",
  "rice",
  "salad",
  "salmon",
  "steak",
  "yogurt",
]

const NUTRITION_DATA = {
  apple: { calories: 52, protein: 0.3, carbs: 14, fats: 0.2, fiber: 2.4 },
  banana: { calories: 89, protein: 1.1, carbs: 22.8, fats: 0.3, fiber: 2.6 },
  bread: { calories: 265, protein: 9.4, carbs: 49, fats: 3.2, fiber: 2.7 },
  broccoli: { calories: 34, protein: 2.8, carbs: 6.6, fats: 0.4, fiber: 2.6 },
  burger: { calories: 295, protein: 17, carbs: 24, fats: 14, fiber: 1.0 },
  chicken: { calories: 165, protein: 31, carbs: 0, fats: 3.6, fiber: 0 },
  eggs: { calories: 155, protein: 12.6, carbs: 1.1, fats: 10.6, fiber: 0 },
  oatmeal: { calories: 68, protein: 2.4, carbs: 12, fats: 1.4, fiber: 1.7 },
  pasta: { calories: 158, protein: 5.8, carbs: 31, fats: 0.9, fiber: 1.8 },
  pizza: { calories: 266, protein: 11, carbs: 33, fats: 10, fiber: 2.5 },
  rice: { calories: 130, protein: 2.7, carbs: 28, fats: 0.3, fiber: 0.4 },
  salad: { calories: 20, protein: 1.2, carbs: 3.3, fats: 0.2, fiber: 1.6 },
  salmon: { calories: 208, protein: 20, carbs: 0, fats: 13, fiber: 0 },
  steak: { calories: 271, protein: 26, carbs: 0, fats: 19, fiber: 0 },
  yogurt: { calories: 59, protein: 3.5, carbs: 5, fats: 3.3, fiber: 0 },
  // Add nutrition data for all your food classes
}

function NutritionInfo() {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [models, setModels] = useState({
    vgg19: null,
    resnet50: null,
    mobilenetv2: null,
  })
  const [modelsLoaded, setModelsLoaded] = useState(false)
  const [prediction, setPrediction] = useState(null)
  const [servings, setServings] = useState(1)
  const [servingSize, setServingSize] = useState("100g")
  const [nutritionValues, setNutritionValues] = useState(null)
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

  useEffect(() => {
    async function loadModels() {
      try {
        const mobilenet = await tf.loadLayersModel(
          "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json",
        )

        setModels({
          vgg19: mobilenet,
          resnet50: mobilenet, 
          mobilenetv2: mobilenet,
        })

        setModelsLoaded(true)
        console.log("Models loaded successfully")
      } catch (error) {
        console.error("Error loading models:", error)
      }
    }

    loadModels()

    return () => {
      if (models.vgg19) models.vgg19.dispose()
      if (models.resnet50) models.resnet50.dispose()
      if (models.mobilenetv2) models.mobilenetv2.dispose()
    }
  }, [models.vgg19, models.resnet50, models.mobilenetv2])

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

  const preprocessImage = async (img) => {
    return new Promise((resolve) => {
      const image = new Image()
      image.src = img
      image.onload = () => {
        const canvas = document.createElement("canvas")
        canvas.width = 224
        canvas.height = 224
        const ctx = canvas.getContext("2d")

        ctx.drawImage(image, 0, 0, 224, 224)

        const imageData = ctx.getImageData(0, 0, 224, 224)

        const tensor = tf.browser.fromPixels(imageData).toFloat().div(tf.scalar(255)).expandDims()

        resolve(tensor)
      }
    })
  }

  const analyzeImage = async () => {
    if (!image || !modelsLoaded) return

    setIsAnalyzing(true)

    try {
      const tensor = await preprocessImage(preview)

      const preds_vgg19 = await models.vgg19.predict(tensor).data()
      const preds_resnet50 = await models.resnet50.predict(tensor).data()
      const preds_mobilenetv2 = await models.mobilenetv2.predict(tensor).data()

      const vgg19Array = Array.from(preds_vgg19)
      const resnet50Array = Array.from(preds_resnet50)
      const mobilenetv2Array = Array.from(preds_mobilenetv2)

      const ensemblePreds = vgg19Array.map((val, i) => (val + resnet50Array[i] + mobilenetv2Array[i]) / 3)

      const maxIndex = ensemblePreds.indexOf(Math.max(...ensemblePreds))
      const predictedClass = FOOD_CLASSES[maxIndex]

      const nutrition = NUTRITION_DATA[predictedClass]

      setPrediction(predictedClass)
      setNutritionValues(nutrition)

      tensor.dispose()
    } catch (error) {
      console.error("Error analyzing image:", error)
    } finally {
      setIsAnalyzing(false)
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

  const nutritionFields = [
    { name: "calories", unit: "kcal" },
    { name: "protein", unit: "g" },
    { name: "carbs", unit: "g" },
    { name: "fats", unit: "g" },
    { name: "fiber", unit: "g" },
  ]

  return (
    <div className="nutrition-info">
      <div className="nutrition-grid">
        <ScrollAnimation animationType="slide-in-left">
          <div className="upload-section">
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
            {preview && !isAnalyzing && !prediction && (
              <button className="analyze-btn" onClick={analyzeImage} disabled={!modelsLoaded}>
                {modelsLoaded ? "Analyze Food" : "Loading Models..."}
              </button>
            )}
            {prediction && (
              <div className="prediction-result">
                <h3>Detected Food:</h3>
                <p className="food-name">{prediction}</p>
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
