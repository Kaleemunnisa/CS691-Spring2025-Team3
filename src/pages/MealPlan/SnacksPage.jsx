import { useState, useEffect, useRef, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import "./CategoryPage.css"

function SnacksPage() {
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
    const savedFavorites = localStorage.getItem("snacksFavorites")
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites))
    }

    setLoading(true)

    const allSnacksRecipes = [
      {
        _id: "801",
        name: "Dark Chocolate Covered Almonds with Sea Salt",
        description: "Crunchy almonds coated in dark chocolate and sea salt",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 220,
        protein: 6,
        carbs: 15,
        fats: 16,
        fiber: 4,
        image: "",
        category: { _id: "4", name: "SNACKS" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Melt dark chocolate in a microwave-safe bowl.",
          "Dip almonds into melted chocolate, then place on parchment paper.",
          "Sprinkle with sea salt and refrigerate until set."
        ],
        ingredients: [
          { name: "Dark Chocolate", quantity: "2", unit: "tbsp" },
          { name: "Almonds", quantity: "¼", unit: "cup" },
          { name: "Sea Salt", quantity: "1", unit: "pinch" }
        ]
      },
      {
        _id: "802",
        name: "Spicy Roasted Chickpeas",
        description: "Crunchy chickpeas seasoned with spices for a savory snack",
        prepTime: 10,
        cookTime: 30,
        servings: 1,
        calories: 150,
        protein: 7,
        carbs: 22,
        fats: 4,
        fiber: 6,
        image: "",
        category: { _id: "4", name: "SNACKS" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Preheat oven to 400°F (200°C).",
          "Rinse and dry chickpeas, then toss with olive oil and spices.",
          "Spread on a baking sheet and roast for 30 minutes until crispy."
        ],
        ingredients: [
          { name: "Canned Chickpeas", quantity: "1", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Cumin", quantity: "½", unit: "tsp" },
          { name: "Paprika", quantity: "½", unit: "tsp" },
          { name: "Salt", quantity: "¼", unit: "tsp" }
        ]
      },
      {
        _id: "803",
        name:" Mini Caprese Skewers",
        description: "Fresh mozzarella, cherry tomatoes, and basil on skewers",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 120,
        protein: 6,
        carbs: 4,
        fats: 8,
        fiber: 1,
        image: "",
        category: { _id: "4", name: "SNACKS" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Thread cherry tomatoes, mozzarella balls, and basil leaves onto skewers.",
          "Drizzle with balsamic glaze before serving."
        ],
        ingredients: [
          { name: "Cherry Tomatoes", quantity: "6", unit: "pieces" },
          { name: "Mozzarella Balls", quantity: "6", unit: "pieces" },
          { name: "Fresh Basil", quantity: "6", unit: "leaves" },
          { name: "Balsamic Glaze", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "804",
        name: "Peanut Butter Banana Smoothie",
        description: "Creamy smoothie with banana and peanut butter",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 300,
        protein: 10,
        carbs: 40,
        fats: 12,
        fiber: 4,
        image: "",
        category: { _id: "4", name:" SNACKS" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Blend banana, peanut butter, yogurt, and milk until smooth.",
          "Serve immediately."
        ],
        ingredients: [
          { name: "Banana", quantity: "1", unit: "medium" },
          { name: "Peanut Butter", quantity: "1", unit: "tbsp" },
          { name: "Greek Yogurt", quantity: "½", unit: "cup" },
          { name: "Milk", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "805",
        name: "Veggie Sticks with Hummus",
        description: "Fresh vegetable sticks served with creamy hummus",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 100,
        protein: 4,
        carbs: 15,
        fats: 4,
        fiber: 5,
        image: "",
        category: { _id: "4", name: "SNACKS" },
        cuisine: { name:" MIDDLE_EASTERN "},
        steps: [
          "Cut carrots, celery, and bell peppers into sticks.",
          "Serve with hummus for dipping."
        ],
        ingredients: [
          { name: "Carrot", quantity: "1", unit: "medium" },
          { name: "Celery", quantity: "1", unit: "stalk" },
          { name: "Bell Pepper", quantity: "½", unit: "medium" },
          { name: "Hummus", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id: "806",
        name: "Apple Slices with Almond Butter",
        description: "Crisp apple slices paired with almond butter",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 200,
        protein: 5,
        carbs: 25,
        fats: 10,
        fiber: 6,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Slice apple into thin wedges.",
          "Spread almond butter on each slice."
        ],
        ingredients: [
          { name: "Apple", quantity: "1", unit: "medium" },
          { name: "Almond Butter", quantity: "2", unit: "tbsp" }
        ]
      },
      {
        _id:" 807",
        name: "Avocado Deviled Eggs",
        description: "Classic deviled eggs with avocado twist",
        prepTime: 15,
        cookTime: 10,
        servings: 1,
        calories: 180,
        protein: 12,
        carbs: 4,
        fats: 14,
        fiber: 3,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Boil eggs, halve them, and remove yolks.",
          "Mash yolks with avocado, Greek yogurt, and spices.",
          "Fill egg whites with the mixture."
        ],
        ingredients: [
          { name: "Eggs", quantity: "2", unit: "whole" },
          { name: "Avocado", quantity: "¼", unit: "medium" },
          { name: "Greek Yogurt", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "808",
        name: "Cinnamon Roasted Pecans",
        description: "Sweet and spicy roasted pecans",
        prepTime: 5,
        cookTime: 20,
        servings: 1,
        calories: 250,
        protein: 3,
        carbs: 10,
        fats: 22,
        fiber: 3,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Toss pecans with cinnamon, honey, and cayenne pepper.",
          "Roast at 325°F (160°C) for 20 minutes."
        ],
        ingredients: [
          { name: "Pecans", quantity: "½", unit: "cup" },
          { name: "Cinnamon", quantity: "1", unit: "tsp" },
          { name: "Honey", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id:" 809",
        name: "Cucumber Sushi Rolls",
        description: "Low-carb sushi rolls with cucumber and smoked salmon",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 120,
        protein: 8,
        carbs: 6,
        fats: 7,
        fiber: 2,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" JAPANESE "},
        steps: [
          "Slice cucumber into thin ribbons using a peeler.",
          "Layer with smoked salmon and cream cheese, then roll tightly."
        ],
        ingredients: [
          { name: "Cucumber", quantity: "½", unit: "medium" },
          { name: "Smoked Salmon", quantity: "1", unit: "oz" },
          { name: "Cream Cheese", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "810",
        name: "Protein-Packed Energy Bites",
        description:" No-bake bites with oats, chia seeds, and protein powder",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 180,
        protein: 10,
        carbs: 20,
        fats: 8,
        fiber: 5,
        image: "",
        category: { _id: "4", name: "SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Mix oats, protein powder, chia seeds, and honey in a bowl.",
          "Roll into balls and refrigerate for 30 minutes."
        ],
        ingredients: [
          { name: "Rolled Oats", quantity: "¼", unit: "cup" },
          { name: "Protein Powder", quantity: "1", unit: "scoop" },
          { name: "Chia Seeds", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id:" 811",
        name: "Greek Yogurt with Honey and Walnuts",
        description: "Creamy yogurt with honey and crunchy walnuts",
        prepTime: 3,
        cookTime: 0,
        servings: 1,
        calories: 220,
        protein: 12,
        carbs: 18,
        fats: 12,
        fiber: 2,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" GREEK "},
        steps: [
          "Scoop Greek yogurt into a bowl.",
          "Top with honey and walnuts."
        ],
        ingredients: [
          { name: "Greek Yogurt", quantity: "½", unit: "cup" },
          { name: "Walnuts", quantity: "1", unit: "tbsp" },
          { name: "Honey", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "812",
        name: "Baked Sweet Potato Fries",
        description: "Crispy baked sweet potato fries with paprika",
        prepTime: 10,
        cookTime: 25,
        servings: 1,
        calories: 150,
        protein: 2,
        carbs: 30,
        fats: 3,
        fiber: 5,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Preheat oven to 425°F (220°C).",
          "Slice sweet potato into fries, toss with olive oil and paprika.",
          "Bake for 25 minutes, flipping halfway."
        ],
        ingredients: [
          { name: "Sweet Potato", quantity: "1", unit: "small" },
          { name: "Paprika", quantity: "½", unit: "tsp" }
        ]
      },
      {
        _id: "813",
        name: "Cottage Cheese and Pineapple Bowl",
        description: "Creamy cottage cheese with fresh pineapple",
        prepTime: 3,
        cookTime: 0,
        servings: 1,
        calories: 160,
        protein: 14,
        carbs: 20,
        fats: 3,
        fiber: 2,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Combine cottage cheese and pineapple in a bowl."
        ],
        ingredients: [
          { name: "Cottage Cheese", quantity: "½", unit: "cup" },
          { name: "Pineapple", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "814",
        name: "Dark Chocolate Rice Cakes",
        description: "Rice cakes topped with melted dark chocolate",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 180,
        protein: 3,
        carbs: 25,
        fats: 8,
        fiber: 2,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Melt dark chocolate and spread over rice cakes.",
          "Sprinkle with sea salt (optional)."
        ],
        ingredients: [
          { name: "Rice Cakes", quantity: "2", unit: "cakes" },
          { name: "Dark Chocolate", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "815",
        name: "Spiced Roasted Pumpkin Seeds",
        description: "Crunchy pumpkin seeds seasoned with spices",
        prepTime: 5,
        cookTime: 20,
        servings: 1,
        calories: 160,
        protein: 8,
        carbs: 5,
        fats: 12,
        fiber: 2,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Toss pumpkin seeds with olive oil, garlic powder, and paprika.",
          "Roast at 300°F (150°C) for 20 minutes."
        ],
        ingredients: [
          { name: "Pumpkin Seeds", quantity: "¼", unit: "cup" },
          { name: "Garlic Powder", quantity: "½", unit: "tsp" }
        ]
      },
      {
        _id: "816",
        name: "Turkey and Cheese Roll-Ups",
        description: "Sliced turkey rolled with cheese and spinach",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 140,
        protein: 15,
        carbs: 2,
        fats: 8,
        fiber: 1,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Layer turkey slices with cheese and spinach.",
          "Roll tightly and slice into bite-sized pieces.",
        ]
      },
      {
        _id: "817",
        name: "Mango Chia Pudding",
        description: "Creamy chia pudding layered with fresh mango",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 200,
        protein: 5,
        carbs: 30,
        fats: 8,
        fiber: 10,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" ASIAN "},
        steps: [
          "Mix chia seeds with almond milk and let sit for 5 minutes.",
          "Layer with diced mango in a glass."
        ],
        ingredients: [
          { name: "Chia Seeds", quantity: "2", unit: "tbsp" },
          { name: "Almond Milk", quantity: "½", unit: "cup" },
          { name: "Mango", quantity: "½", unit: "medium" }
        ]
      },
      {
        _id:" 818",
        name: "Zucchini Chips",
        description: "Crispy baked zucchini chips seasoned with salt",
        prepTime: 10,
        cookTime: 30,
        servings: 1,
        calories: 100,
        protein: 3,
        carbs: 15,
        fats: 4,
        fiber: 3,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name: "AMERICAN "},
        steps: [
          "Preheat oven to 225°F (110°C).",
          "Slice zucchini thinly, toss with olive oil and salt.",
          "Bake for 30 minutes until crispy."
        ],
        ingredients: [
          { name: "Zucchini", quantity: "1", unit: "medium" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Salt", quantity: "¼", unit: "tsp" }
        ]
      },
      {
        _id: "819",
        name: "Almond Joy Energy Balls",
        description: "No-bake energy balls with coconut and almonds",
        prepTime: 15,
        cookTime: 0,
        servings: 1,
        calories: 220,
        protein: 6,
        carbs: 20,
        fats: 14,
        fiber: 3,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Mix almond butter, oats, shredded coconut, and honey.",
          "Roll into balls and refrigerate for 30 minutes."
        ],
        ingredients: [
          { name: "Almond Butter", quantity: "¼", unit: "cup" },
          { name: "Rolled Oats", quantity: "½", unit: "cup" },
          { name: "Shredded Coconut", quantity: "¼", unit: "cup" },
          { name: "Honey", quantity: "2", unit: "tbsp" }
        ]
      },
      {
        _id: "820",
        name: "Caprese Salad Bites",
        description: "Bite-sized caprese salad on toothpicks",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 150,
        protein: 7,
        carbs: 5,
        fats: 10,
        fiber: 1,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" ITALIAN "},
        steps: [
          "Skewer cherry tomatoes, mozzarella balls, and basil leaves.",
          "Drizzle with balsamic reduction before serving."
        ],
        ingredients: [
          { name: "Cherry Tomatoes", quantity: "6", unit: "pieces" },
          { name: "Mozzarella Balls", quantity: "6", unit: "pieces" },
          { name: "Fresh Basil", quantity: "6", unit: "leaves" },
          { name: "Balsamic Reduction", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "821",
        name: "Spicy Roasted Chickpeas",
        description: "Crunchy chickpeas seasoned with spices for a savory snack",
        prepTime: 10,
        cookTime: 30,
        servings: 1,
        calories: 150,
        protein: 7,
        carbs: 22,
        fats: 4,
        fiber: 6,
        image: "",
        category: { _id: "4", name: "SNACKS" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Preheat oven to 400°F (200°C).",
          "Rinse and dry chickpeas, then toss with olive oil and spices.",
          "Spread on a baking sheet and roast for 30 minutes until crispy."
        ],
        ingredients: [
          { name: "Canned Chickpeas", quantity: "1", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Cumin", quantity: "½", unit: "tsp" },
          { name: "Paprika", quantity: "½", unit: "tsp" },
          { name: "Salt", quantity: "¼", unit: "tsp" }
        ]
      },
      {
        _id: "822",
        name: "Mini Caprese Skewers",
        description: "Fresh mozzarella, cherry tomatoes, and basil on skewers",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 120,
        protein: 6,
        carbs: 4,
        fats: 8,
        fiber: 1,
        image: "",
        category: { _id: "4", name: "SNACKS "},
        cuisine: { name: "ITALIAN "},
        steps: [
          "Thread cherry tomatoes, mozzarella balls, and basil leaves onto skewers.",
          "Drizzle with balsamic glaze before serving."
        ],
        ingredients: [
          { name: "Cherry Tomatoes", quantity: "6", unit: "pieces" },
          { name: "Mozzarella Balls", quantity: "6", unit: "pieces" },
          { name: "Fresh Basil", quantity: "6", unit: "leaves" },
          { name: "Balsamic Glaze", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "823",
        name: "Peanut Butter Banana Smoothie",
        description: "Creamy smoothie with banana and peanut butter",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 300,
        protein: 10,
        carbs: 40,
        fats: 12,
        fiber: 4,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name: "AMERICAN "},
        steps: [
          "Blend banana, peanut butter, yogurt, and milk until smooth.",
          "Serve immediately."
        ],
        ingredients: [
          { name: "Banana", quantity: "1", unit: "medium" },
          { name: "Peanut Butter", quantity: "1", unit: "tbsp" },
          { name: "Greek Yogurt", quantity: "½", unit: "cup" },
          { name: "Milk", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "824",
        name: "Veggie Sticks with Hummus",
        description: "Fresh vegetable sticks served with creamy hummus",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 100,
        protein: 4,
        carbs: 15,
        fats: 4,
        fiber: 5,
        image: "",
        category: { _id: "4", name: "SNACKS "},
        cuisine: { name: "MIDDLE_EASTERN "},
        steps: [
          "Cut carrots, celery, and bell peppers into sticks.",
          "Serve with hummus for dipping."
        ],
        ingredients: [
          { name: "Carrot", quantity: "1", unit: "medium" },
          { name: "Celery", quantity: "1", unit: "stalk" },
          { name: "Bell Pepper", quantity: "½", unit: "medium" },
          { name: "Hummus", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id:" 825",
        name: "Apple Slices with Almond Butter",
        description:" Crisp apple slices paired with almond butter",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 200,
        protein: 5,
        carbs: 25,
        fats: 10,
        fiber: 6,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Slice apple into thin wedges.",
          "Spread almond butter on each slice."
        ],
        ingredients: [
          { name: "Apple", quantity: "1", unit: "medium" },
          { name: "Almond Butter", quantity: "2", unit: "tbsp" }
        ]
      },
      {
        _id:" 826",
        name:" Avocado Deviled Eggs",
        description:" Classic deviled eggs with avocado twist",
        prepTime: 15,
        cookTime: 10,
        servings: 1,
        calories: 180,
        protein: 12,
        carbs: 4,
        fats: 14,
        fiber: 3,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Boil eggs, halve them, and remove yolks.",
          "Mash yolks with avocado, Greek yogurt, and spices.",
          "Fill egg whites with the mixture."
        ],
        ingredients: [
          { name: "Eggs", quantity: "2", unit: "whole" },
          { name: "Avocado", quantity: "¼", unit: "medium" },
          { name: "Greek Yogurt", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "827",
        name: "Cinnamon Roasted Pecans",
        description:" Sweet and spicy roasted pecans",
        prepTime: 5,
        cookTime: 20,
        servings: 1,
        calories: 250,
        protein: 3,
        carbs: 10,
        fats: 22,
        fiber: 3,
        image: "",
        category: { _id: "4", name: "SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Toss pecans with cinnamon, honey, and cayenne pepper.",
          "Roast at 325°F (160°C) for 20 minutes."
        ],
        ingredients: [
          { name: "Pecans", quantity: "½", unit: "cup" },
          { name: "Cinnamon", quantity: "1", unit: "tsp" },
          { name: "Honey", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id:" 828",
        name: "Cucumber Sushi Rolls",
        description: "Low-carb sushi rolls with cucumber and smoked salmon",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 120,
        protein: 8,
        carbs: 6,
        fats: 7,
        fiber: 2,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" JAPANESE "},
        steps: [
          "Slice cucumber into thin ribbons using a peeler.",
          "Layer with smoked salmon and cream cheese, then roll tightly."
        ],
        ingredients: [
          { name: "Cucumber", quantity: "½", unit: "medium" },
          { name: "Smoked Salmon", quantity: "1", unit: "oz" },
          { name: "Cream Cheese", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "829",
        name:" Protein-Packed Energy Bites",
        description: "No-bake bites with oats, chia seeds, and protein powder",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 180,
        protein: 10,
        carbs: 20,
        fats: 8,
        fiber: 5,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name: "AMERICAN "},
        steps: [
          "Mix oats, protein powder, chia seeds, and honey in a bowl.",
          "Roll into balls and refrigerate for 30 minutes."
        ],
        ingredients: [
          { name: "Rolled Oats", quantity: "¼", unit: "cup" },
          { name: "Protein Powder", quantity: "1", unit: "scoop" },
          { name: "Chia Seeds", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id:" 830",
        name: "Greek Yogurt with Honey and Walnuts",
        description:" Creamy yogurt with honey and crunchy walnuts",
        prepTime: 3,
        cookTime: 0,
        servings: 1,
        calories: 220,
        protein: 12,
        carbs: 18,
        fats: 12,
        fiber: 2,
        image: "",
        category: { _id: "4", name: "SNACKS "},
        cuisine: { name:" GREEK "},
        steps: [
          "Scoop Greek yogurt into a bowl.",
          "Top with honey and walnuts."
        ],
        ingredients: [
          { name: "Greek Yogurt", quantity: "½", unit: "cup" },
          { name: "Walnuts", quantity: "1", unit: "tbsp" },
          { name: "Honey", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "831",
        name: "Baked Sweet Potato Fries",
        description: "Crispy baked sweet potato fries with paprika",
        prepTime: 10,
        cookTime: 25,
        servings: 1,
        calories: 150,
        protein: 2,
        carbs: 30,
        fats: 3,
        fiber: 5,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:' AMERICAN' },
        steps: [
          "Preheat oven to 425°F (220°C).",
          "Slice sweet potato into fries, toss with olive oil and paprika.",
          "Bake for 25 minutes, flipping halfway."
        ],
        ingredients: [
          { name: "Sweet Potato", quantity: "1", unit: "small" },
          { name: "Paprika", quantity: "½", unit: "tsp" }
        ]
      },
      {
        _id:" 832",
        name: "Cottage Cheese and Pineapple Bowl",
        description: "Creamy cottage cheese with fresh pineapple",
        prepTime: 3,
        cookTime: 0,
        servings: 1,
        calories: 160,
        protein: 14,
        carbs: 20,
        fats: 3,
        fiber: 2,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name: "AMERICAN "},
        steps: [
          "Combine cottage cheese and pineapple in a bowl."
        ],
        ingredients: [
          { name: "Cottage Cheese", quantity: "½", unit: "cup" },
          { name: "Pineapple", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "833",
        name: "Dark Chocolate Rice Cakes",
        description:" Rice cakes topped with melted dark chocolate",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 180,
        protein: 3,
        carbs: 25,
        fats: 8,
        fiber: 2,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Melt dark chocolate and spread over rice cakes.",
          "Sprinkle with sea salt (optional)."
        ],
        ingredients: [
          { name: "Rice Cakes", quantity: "2", unit: "cakes" },
          { name: "Dark Chocolate", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id:" 834",
        name: "Spiced Roasted Pumpkin Seeds",
        description: "Crunchy pumpkin seeds seasoned with spices",
        prepTime: 5,
        cookTime: 20,
        servings: 1,
        calories: 160,
        protein: 8,
        carbs: 5,
        fats: 12,
        fiber: 2,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name: "AMERICAN "},
        steps: [
          "Toss pumpkin seeds with olive oil, garlic powder, and paprika.",
          "Roast at 300°F (150°C) for 20 minutes."
        ],
        ingredients: [
          { name: "Pumpkin Seeds", quantity: "¼", unit: "cup" },
          { name: "Garlic Powder", quantity: "½", unit: "tsp" }
        ]
      },
      {
        _id: "835",
        name: "Turkey and Cheese Roll-Ups",
        description:" Sliced turkey rolled with cheese and spinach",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 140,
        protein: 15,
        carbs: 2,
        fats : 8,
        fiber: 1,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Layer turkey slices with cheese and spinach.",
          "Roll tightly and slice into bite-sized pieces."
        ],
        ingredients: [
          { name: "Turkey Slices", quantity: "4", unit: "slices" },
          { name: "Cheese", quantity: "2", unit: "slices" },
          { name: "Spinach", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id: "836",
        name: "Mango Chia Pudding",
        description: "Creamy chia pudding layered with fresh mango",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 200,
        protein: 5,
        carbs: 30,
        fats: 8,
        fiber: 10,
        image: "",
        category: { _id: "4", name: "SNACKS" },
        cuisine: { name: "ASIAN "},
        steps: [
          "Mix chia seeds with almond milk and let sit for 5 minutes.",
          "Layer with diced mango in a glass."
        ],
        ingredients: [
          { name: "Chia Seeds", quantity: "2", unit: "tbsp" },
          { name: "Almond Milk", quantity: "½", unit: "cup" },
          { name: "Mango", quantity: "½", unit: "medium" }
        ]
      },
      {
        _id: "837",
        name: "Zucchini Chips",
        description: "Crispy baked zucchini chips seasoned with salt",
        prepTime: 10,
        cookTime: 30,
        servings: 1,
        calories: 100,
        protein: 3,
        carbs: 15,
        fats: 4,
        fiber: 3,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Preheat oven to 225°F (110°C).",
          "Slice zucchini thinly, toss with olive oil and salt.",
          "Bake for 30 minutes until crispy."
        ],
        ingredients: [
          { name: "Zucchini", quantity: "1", unit: "medium" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Salt", quantity: "¼", unit: "tsp" }
        ]
      },
      {
        _id: "838",
        name: "Almond Joy Energy Balls",
        description: "No-bake energy balls with coconut and almonds",
        prepTime: 15,
        cookTime: 0,
        servings: 1,
        calories: 220,
        protein: 6,
        carbs: 20,
        fats: 14,
        fiber: 3,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Mix almond butter, oats, shredded coconut, and honey.",
          "Roll into balls and refrigerate for 30 minutes."
        ],
        ingredients: [
          { name: "Almond Butter", quantity: "¼", unit: "cup" },
          { name: "Rolled Oats", quantity: "½", unit: "cup" },
          { name: "Shredded Coconut", quantity: "¼", unit: "cup" },
          { name: "Honey", quantity: "2", unit: "tbsp" }
        ]
      },
      {
        _id:" 839",
        name: "Caprese Salad Bites",
        description: "Bite-sized caprese salad on toothpicks",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 150,
        protein: 7,
        carbs: 5,
        fats: 10,
        fiber: 1,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" ITALIAN "},
        steps: [
          "Skewer cherry tomatoes, mozzarella balls, and basil leaves.",
          "Drizzle with balsamic reduction before serving."
        ],
        ingredients: [
          { name: "Cherry Tomatoes", quantity: "6", unit: "pieces" },
          { name: "Mozzarella Balls", quantity: "6", unit: "pieces" },
          { name: "Fresh Basil", quantity: "6", unit: "leaves" },
          { name: "Balsamic Reduction", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "840",
        name: "Sweet Potato and Black Bean Quesadillas",
        description: "Quesadillas filled with sweet potatoes and black beans",
        prepTime: 15,
        cookTime: 10,
        servings: 1,
        calories: 300,
        protein: 10,
        carbs: 45,
        fats: 10,
        fiber: 8,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name: "MEXICAN "},
        steps: [
          "Cook sweet potatoes until tender, then mash.",
          "Spread on a tortilla, add black beans, and top with cheese.",
          "Fold and cook on a skillet until golden."
        ],
        ingredients: [
          { name: "Sweet Potato", quantity: "1", unit: "medium" },
          { name: "Black Beans", quantity: "½", unit: "cup" },
          { name: "Cheese", quantity: "¼", unit: "cup" },
          { name: "Tortilla", quantity: "1", unit: "whole" }
        ]
      },
      {
        _id: "841",
        name: "Chocolate Avocado Mousse",
        description: "Creamy mousse made with avocado and cocoa powder",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 250,
        protein: 4,
        carbs: 20,
        fats: 18,
        fiber: 7,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Blend avocado, cocoa powder, and honey until smooth.",
          "Chill before serving."
        ],
        ingredients: [
          { name: "Avocado", quantity: "1", unit: "medium" },
          { name: "Cocoa Powder", quantity: "2", unit: "tbsp" },
          { name: "Honey", quantity: "2", unit: "tbsp" }
        ]
      },
      {
        _id: "842",
        name: "Roasted Red Pepper Hummus",
        description: "Creamy hummus made with roasted red peppers",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 150,
        protein: 5,
        carbs: 20,
        fats: 6,
        fiber: 4,
        image: "",
        category: { _id: "4", name: "SNACKS "},
        cuisine: { name: "MIDDLE_EASTERN "},
        steps: [
          "Blend chickpeas, tahini, roasted red peppers, and garlic.",
          "Serve with pita chips or veggies."
        ],
        ingredients: [
          { name: "Canned Chickpeas", quantity: "1", unit: "cup" },
          { name: "Tahini", quantity: "2", unit: "tbsp" },
          { name: "Roasted Red Peppers", quantity: "½", unit: "cup" },
          { name: "Garlic", quantity: "1", unit: "clove" }
        ]
      },
      {
        _id: "843",
        name: "Fruit and Nut Trail Mix",
        description: "A mix of dried fruits and nuts for a healthy snack",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 200,
        protein: 5,
        carbs: 25,
        fats: 10,
        fiber: 4,
        image: "",
        category: { _id: "4", name: "SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Combine nuts, dried fruits, and seeds in a bowl.",
          "Mix well and store in an airtight container."
        ],
        ingredients: [
          { name: "Almonds", quantity: "¼", unit: "cup" },
          { name: "Dried Cranberries", quantity: "¼", unit: "cup" },
          { name: "Pumpkin Seeds", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id: "844",
        name: "Savory Oatmeal with Spinach and Egg",
        description: "Oatmeal topped with sautéed spinach and a poached egg",
        prepTime: 10,
        cookTime: 5,
        servings: 1,
        calories: 250,
        protein: 12,
        carbs: 30,
        fats: 10,
        fiber: 5,
        image: "",
        category: { _id: "4", name: "SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Cook oatmeal according to package instructions.",
          "Sauté spinach in a pan until wilted.",
          "Top oatmeal with spinach and a poached egg."
        ],
        ingredients: [
          { name: "Oats", quantity: "½", unit: "cup" },
          { name: "Spinach", quantity: "1", unit: "cup" },
          { name: "Egg", quantity: "1", unit: "whole" }
        ]
      },
      {
        _id: "845",
        name: "Sweet Potato Hummus",
        description: "Creamy hummus made with sweet potatoes and tahini",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 180,
        protein: 4,
        carbs: 30,
        fats: 6,
        fiber: 5,
        image: "",
        category: { _id: "4", name: "SNACKS "},
        cuisine: { name:" MIDDLE_EASTERN "},
        steps: [
          "Blend cooked sweet potatoes, tahini, lemon juice, and garlic until smooth.",
          "Serve with pita or veggies."
        ],
        ingredients: [
          { name: "Cooked Sweet Potato", quantity: "1", unit: "medium" },
          { name: "Tahini", quantity: "2", unit: "tbsp" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" },
          { name: "Garlic", quantity: "1", unit: "clove" }
        ]
      },
      {
        _id: "846",
        name: "Chocolate-Dipped Strawberries",
        description: "Fresh strawberries dipped in dark chocolate",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 150,
        protein: 2,
        carbs: 20,
        fats: 8,
        fiber: 3,
        image: "",
        category: { _id: "4", name: "SNACKS "},
        cuisine: { name: "AMERICAN "},
        steps: [
          "Melt dark chocolate in a microwave-safe bowl.",
          "Dip strawberries into melted chocolate and place on parchment paper.",
          "Let cool until chocolate hardens."
        ],
        ingredients: [
          { name: "Strawberries", quantity: "6", unit: "pieces" },
          { name: "Dark Chocolate", quantity: "2", unit: "oz" }
        ]
      },
      {
        _id: "847",
        name: "Cauliflower Buffalo Bites",
        description: "Spicy cauliflower bites baked until crispy",
        prepTime: 10,
        cookTime: 25,
        servings: 1,
        calories: 120,
        protein: 4,
        carbs: 10,
        fats: 6,
        fiber: 3,
        image: "",
        category: { _id: "4", name:" SNACKS "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Preheat oven to 450°F (230°C).",
          "Toss cauliflower florets with hot sauce and olive oil.",
          "Bake for 25 minutes until crispy."
        ],
        ingredients: [
          { name: "Cauliflower", quantity: "1", unit: "medium" },
          { name: "Hot Sauce", quantity: "¼", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id:" 848",
        name: "Quinoa Salad with Chickpeas",
        description:" Nutritious salad with quinoa, chickpeas, and veggie's",
        prepTime: 15,
        cookTime: 15,
        servings: 1,
        calories: 250,
        protein: 10,
        carbs: 40,
        fats: 6,
        fiber: 8,
        image: "",
        category: { _id: "4", name: "SNACKS" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Cook quinoa according to package instructions.",
          "Mix cooked quinoa with chickpeas, diced cucumber, and cherry tomatoes.",
          "Drizzle with olive oil and lemon juice."
        ],
        ingredients: [
          { name: "Quinoa", quantity: "½", unit: "cup" },
          { name: "Canned Chickpeas", quantity: "½", unit: "cup" },
          { name: "Cucumber", quantity: "½", unit: "medium" },
          { name: "Cherry Tomatoes", quantity: "½", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id:" 849",
        name: "Egg and Avocado Toast",
        description:" Whole grain toast topped with smashed avocado and a poached egg",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 300,
        protein: 12,
        carbs: 30,
        fats: 15,
        fiber: 7,
        image: "",
        category: { _id: "4", name:" SNACKS" },
        cuisine: { name: "AMERICAN "},
        steps: [
          "Toast whole grain bread.",
          "Mash avocado and spread on toast.",
          "Top with a poached egg and season with salt and pepper."
        ],
        ingredients: [
          { name: "Whole Grain Bread", quantity: "1", unit: "slice" },
          { name: "Avocado", quantity: "½", unit: "medium" },
          { name: "Egg", quantity: "1", unit: "whole" }
        ]
      },
      {
        _id: "850",
        name: "Roasted Brussels Sprouts with Balsamic Glaze",
        description: "Crispy roasted Brussels sprouts drizzled with balsamic glaze",
        prepTime: 10,
        cookTime: 25,
        servings: 1,
        calories: 180,
        protein: 5,
        carbs: 15,
        fats: 10,
        fiber: 6,
        image: "",
        category: { _id: "4", name: "SNACKS "},
        cuisine: { name: "AMERICAN "},
        steps: [
          "Preheat oven to 400°F (200°C).",
          "Toss Brussels sprouts with olive oil, salt, and pepper.",
          "Roast for 25 minutes until crispy, then drizzle with balsamic glaze."
        ],
        ingredients: [
          { name: "Brussels Sprouts", quantity: "1", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Balsamic Glaze", quantity: "1", unit: "tbsp" }
        ]
      },
    ]

    setTimeout(() => {
      setRecipes(allSnacksRecipes)
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
  }, [filteredRecipes])

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

  useEffect(() => {
    localStorage.setItem("snacksFavorites", JSON.stringify(favorites))
  }, [favorites])

  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = filteredRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
  const totalPages = Math.ceil(filteredRecipes.length / recipesPerPage)

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
        <h1>Healthy Snacks</h1>
        <p>Nutritious snack options to keep you energized between meals</p>
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
                placeholder="Search snack recipes..."
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
            <div className="no-results">No snack recipes match your filters. Try adjusting your search criteria.</div>
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

export default SnacksPage
