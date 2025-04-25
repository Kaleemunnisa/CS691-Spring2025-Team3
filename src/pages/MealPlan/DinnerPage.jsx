"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ScrollAnimation from "../../components/ScrollAnimation/ScrollAnimation"
import "./CategoryPage.css"
import ScrollNavigation from "../../components/ScrollNavigation/ScrollNavigation"

function DinnerPage() {
  const [recipes, setRecipes] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCuisine, setSelectedCuisine] = useState("All")
  const navigate = useNavigate()

  const [sortBy, setSortBy] = useState("default")
  const [currentPage, setCurrentPage] = useState(1)
  const [recipesPerPage] = useState(12)
  const [favorites, setFavorites] = useState([])
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false)

  const cuisineOptions = ["All", "American", "Indian", "Italian", "Mexican", "French", "Thai", "Greek", "Mediterranean"]

  useEffect(() => {
    setLoading(true)

    const allDinnerRecipes = [
      {
        _id:" 601",
        name: "Spinach & Feta Egg Wrap",
        description:" Protein-packed egg wrap with spinach and feta",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 280,
        protein: 18,
        carbs: 25,
        fats: 12,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Scramble eggs in a pan for 2-3 minutes.",
          "Add spinach and cook for 1 more minute until wilted.",
          "Place scrambled eggs and spinach into the whole-wheat tortilla, top with feta cheese, and wrap."
        ],
        ingredients: [
          { name: "Eggs", quantity: "2", unit: "whole" },
          { name: "Spinach", quantity: "½", unit: "cup" },
          { name: "Feta Cheese", quantity: "1", unit: "tbsp" },
          { name: "Whole-Wheat Tortilla", quantity: "1", unit: "tortilla" }
        ]
      },
      {
        _id: "602",
        name: "Quinoa & Black Bean Stuffed Peppers",
        description: "Fiber-rich stuffed peppers with quinoa and beans",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 320,
        protein: 18,
        carbs: 45,
        fats: 5,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Mix quinoa, black beans, tomatoes, cumin, and olive oil.",
          "Stuff the mixture into the bell pepper and bake for 15 minutes."
        ],
        ingredients: [
          { name: "Bell Pepper", quantity: "1", unit: "large" },
          { name: "Quinoa", quantity: "½", unit: "cup" },
          { name: "Black Beans", quantity: "½", unit: "cup" },
          { name: "Diced Tomatoes", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "603",
        name: "Avocado & Chickpea Salad",
        description: "Fresh salad with avocado and chickpeas",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 300,
        protein: 15,
        carbs: 32,
        fats: 12,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Combine chickpeas, avocado, greens, and cherry tomatoes.",
          "Drizzle with olive oil and lemon juice, toss well."
        ],
        ingredients: [
          { name: "Chickpeas", quantity: "1", unit: "cup" },
          { name: "Avocado", quantity: "½", unit: "medium" },
          { name: "Mixed Greens", quantity: "1", unit: "cup" }
        ]
      },
      {
        _id: "604",
        name: "Tofu Stir-Fry with Brown Rice",
        description: "Asian-inspired tofu and vegetable stir-fry",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 340,
        protein: 22,
        carbs: 38,
        fats: 9,
        image: "",
        category: { _id: "3", name:" DINNER" },
        cuisine: { name: "ASIAN" },
        steps: [
          "Heat sesame oil in a pan, cook garlic and bell peppers for 3 minutes.",
          "Add tofu and soy sauce, stir-fry for 5 minutes.",
          "Serve with cooked brown rice."
        ],
        ingredients: [
          { name: "Firm Tofu", quantity: "½", unit: "cup" },
          { name: "Mixed Bell Peppers", quantity: "1", unit: "cup" },
          { name: "Soy Sauce", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "605",
        name: "Lentil & Kale Soup",
        description: "Hearty lentil and kale soup",
        prepTime: 5,
        cookTime: 20,
        servings: 1,
        calories: 290,
        protein: 20,
        carbs: 38,
        fats: 6,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Heat a pot, add garlic, carrots, and celery, sauté for 3 minutes.",
          "Add lentils, kale, and vegetable broth, simmer for 15 minutes."
        ],
        ingredients: [
          { name: "Cooked Lentils", quantity: "1", unit: "cup" },
          { name: "Kale", quantity: "1", unit: "cup" },
          { name: "Vegetable Broth", quantity: "2", unit: "cups" }
        ]
      },
      {
        _id: "606",
        name: "Roasted Cauliflower & Chickpea Bowl",
        description: "Spiced roasted cauliflower and chickpeas",
        prepTime: 5,
        cookTime: 15,
        servings: 1,
        calories: 320,
        protein: 18,
        carbs: 34,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Toss cauliflower and chickpeas with olive oil, garlic powder, and paprika.",
          "Roast for 15 minutes, flipping halfway."
        ],
        ingredients: [
          { name: "Cauliflower Florets", quantity: "1", unit: "cup" },
          { name: "Chickpeas", quantity: "½", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "607",
        name: "Spaghetti Squash with Tomato Basil Sauce",
        description: "Low-carb spaghetti squash with tomato sauce",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 310,
        protein: 18,
        carbs: 28,
        fats: 9,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Heat tomato sauce with garlic powder and black pepper.",
          "Toss with cooked spaghetti squash and sprinkle with Parmesan."
        ],
        ingredients: [
          { name: "Spaghetti Squash", quantity: "1", unit: "cup" },
          { name: "Tomato Sauce", quantity: "½", unit: "cup" },
          { name: "Parmesan Cheese", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "608",
        name: "Roasted Garlic & Herb Cauliflower Steaks",
        description: "Herb-roasted cauliflower steaks",
        prepTime: 5,
        cookTime: 20,
        servings: 1,
        calories: 260,
        protein: 18,
        carbs: 24,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Preheat oven to 375°F (190°C), brush cauliflower with olive oil and seasonings.",
          "Roast for 20 minutes, flipping halfway."
        ],
        ingredients: [
          { name: "Cauliflower", quantity: "1", unit: "large" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Garlic Powder", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "609",
        name: "Quinoa & Avocado Power Bowl",
        description: "Nutrient-dense quinoa and avocado bowl",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 340,
        protein: 22,
        carbs: 40,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Combine quinoa, black beans, tomatoes, and avocado.",
          "Drizzle with lime juice before serving."
        ],
        ingredients: [
          { name: "Quinoa", quantity: "½", unit: "cup" },
          { name: "Avocado", quantity: "½", unit: "medium" },
          { name: "Black Beans", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "610",
        name: "Thai Peanut Tofu Stir-Fry",
        description: "Thai-inspired peanut tofu stir-fry",
        prepTime: 5,
        cookTime: 8,
        servings: 1,
        calories: 380,
        protein: 40,
        carbs: 18,
        fats: 14,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "THAI "},
        steps: [
          "Heat sesame oil, cook tofu for 5 minutes.",
          "Add bell peppers and peanut sauce, stir-fry for 3 more minutes."
        ],
        ingredients: [
          { name: "Firm Tofu", quantity: "½", unit: "cup" },
          { name: "Mixed Bell Peppers", quantity: "1", unit: "cup" },
          { name: "Peanut Sauce", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "611",
        name: "Roasted Sweet Potatoes & Black Bean Tacos",
        description: "Sweet potato and black bean tacos",
        prepTime: 10,
        cookTime: 20,
        servings: 1,
        calories: 370,
        protein: 18,
        carbs: 45,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Roast sweet potatoes at 375°F (190°C) for 20 minutes.",
          "Fill tortillas with black beans, sweet potatoes, and salsa."
        ],
        ingredients: [
          { name: "Sweet Potato", quantity: "1", unit: "small" },
          { name: "Black Beans", quantity: "½", unit: "cup" },
          { name: "Whole Wheat Tortillas", quantity: "2", unit: "tortillas" }
        ]
      },
      {
        _id: "612",
        name: "Mediterranean Chickpea Salad",
        description: "Fresh Mediterranean chickpea salad",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 320,
        protein: 18,
        carbs: 34,
        fats: 12,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Combine all ingredients in a bowl, mix well.",
          "Chill for 10 minutes before serving."
        ],
        ingredients: [
          { name: "Chickpeas", quantity: "½", unit: "cup" },
          { name: "Cucumber", quantity: "½", unit: "medium" },
          { name: "Feta Cheese", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id: "613",
        name: "Eggplant & Chickpea Stir-Fry",
        description: "Spiced eggplant and chickpea stir-fry",
        prepTime: 5,
        cookTime: 8,
        servings: 1,
        calories: 340,
        protein: 24,
        carbs: 36,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Heat olive oil in a pan, cook eggplant and chickpeas for 5 minutes.",
          "Add garlic powder and turmeric, stir-fry for 3 more minutes."
        ],
        ingredients: [
          { name: "Eggplant", quantity: "1", unit: "cup" },
          { name: "Chickpeas", quantity: "½", unit: "cup" },
          { name: "Turmeric", quantity: "½", unit: "tsp" }
        ]
      },
      {
        _id: "614",
        name: "Mushroom & Spinach Scramble",
        description: "Mushroom and spinach egg scramble",
        prepTime: 5,
        cookTime: 6,
        servings: 1,
        calories: 310,
        protein: 26,
        carbs: 10,
        fats: 12,
        image: "",
        category: { _id: "3", name:" DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Heat olive oil in a pan, sauté mushrooms and spinach for 3 minutes.",
          "Add eggs and scramble for 3 minutes."
        ],
        ingredients: [
          { name: "Eggs", quantity: "2", unit: "whole" },
          { name: "Mushrooms", quantity: "½", unit: "cup" },
          { name: "Spinach", quantity: "1", unit: "cup" }
        ]
      },
      {
        _id: "615",
        name: "Lentil & Roasted Cauliflower Bowl",
        description: "Lentil and roasted cauliflower bowl",
        prepTime: 5,
        cookTime: 15,
        servings: 1,
        calories: 350,
        protein: 22,
        carbs: 42,
        fats: 9,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Preheat oven to 375°F (190°C), roast cauliflower for 15 minutes.",
          "Toss with cooked lentils, olive oil, turmeric, and cumin."
        ],
        ingredients: [
          { name: "Cooked Lentils", quantity: "1", unit: "cup" },
          { name: "Cauliflower Florets", quantity: "1", unit: "cup" },
          { name: "Cumin", quantity: "½", unit: "tsp" }
        ]
      },
      {
        _id: "616",
        name: "Baked Eggplant Parmesan",
        description: "Baked eggplant with tomato sauce and cheese",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 320,
        protein: 18,
        carbs: 28,
        fats: 9,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name:" ITALIAN "},
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Layer eggplant slices with tomato sauce and mozzarella.",
          "Bake for 15 minutes, then top with Parmesan."
        ],
        ingredients: [
          { name: "Eggplant", quantity: "1", unit: "medium" },
          { name: "Tomato Sauce", quantity: "½", unit: "cup" },
          { name: "Shredded Mozzarella", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id: "617",
        name: "Zucchini Noodles with Pesto",
        description: "Fresh zucchini noodles tossed with pest",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 280,
        protein: 16,
        carbs: 22,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER "},
        cuisine: { name:" ITALIAN "},
        steps: [
          "Toss zucchini noodles with pesto and cherry tomatoes.",
          "Top with Parmesan and serve."
        ],
        ingredients: [
          { name: "Zucchini", quantity: "1", unit: "medium" },
          { name: "Basil Pesto", quantity: "1", unit: "tbsp" },
          { name: "Cherry Tomatoes", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "618",
        name: "Vegan Lentil & Sweet Potato Stew",
        description: "Hearty vegan stew with lentils and sweet potatoes",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 350,
        protein: 22,
        carbs: 45,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Heat olive oil in a pot, add sweet potatoes and tomatoes.",
          "Add lentils and broth, simmer for 15 minutes."
        ],
        ingredients: [
          { name: "Cooked Lentils", quantity: "1", unit: "cup" },
          { name: "Diced Sweet Potatoes", quantity: "½", unit: "cup" },
          { name: "Vegetable Broth", quantity: "2", unit: "cups" }
        ]
      },
      {
        _id: "619",
        name: "Garlic & Herb Tofu with Roasted Brussels Sprouts",
        description: "Tofu and Brussels sprouts roasted with garlic and herbs",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 330,
        protein: 28,
        carbs: 20,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "ASIAN" },
        steps: [
          "Preheat oven to 375°F (190°C), roast Brussels sprouts for 15 minutes.",
          "Pan-sear tofu with garlic powder and black pepper for 5 minutes."
        ],
        ingredients: [
          { name: "Firm Tofu", quantity: "½", unit: "cup" },
          { name: "Brussels Sprouts", quantity: "1", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "620",
        name: "Chickpea & Spinach Stew",
        description: "Hearty stew with chickpeas and spinach",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 320,
        protein: 22,
        carbs: 36,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER "},
        cuisine: { name: "MEDITERRANEAN "},
        steps: [
          "Heat a pot, add chickpeas and spinach.",
          "Pour in vegetable broth and season with spices. Simmer for 10 minutes."
        ],
        ingredients: [
          { name: "Chickpeas", quantity: "½", unit: "cup" },
          { name: "Spinach", quantity: "1", unit: "cup" },
          { name: "Vegetable Broth", quantity: "1", unit: "cup" }
        ]
      },
      {
        _id: "621",
        name: "Black Bean & Avocado Burrito Bowl",
        description: "Protein-packed bowl with black beans and avocado",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 360,
        protein: 22,
        carbs: 40,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Combine black beans, avocado, brown rice, and tomatoes.",
          "Drizzle with lime juice before serving."
        ],
        ingredients: [
          { name: "Black Beans", quantity: "½", unit: "cup" },
          { name: "Avocado", quantity: "½", unit: "medium" },
          { name: "Brown Rice", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "622",
        name: "Greek Salad with Hummus",
        description: "Mediterranean salad with hummus and feta",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 290,
        protein: 16,
        carbs: 22,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Toss mixed greens, tomatoes, and feta cheese.",
          "Drizzle with olive oil and serve with hummus."
        ],
        ingredients: [
          { name: "Mixed Greens", quantity: "1", unit: "cup" },
          { name: "Feta Cheese", quantity: "¼", unit: "cup" },
          { name: "Hummus", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "623",
        name: "Teriyaki Tofu & Broccoli Stir-Fry",
        description: "Asian-inspired tofu and broccoli stir-fry",
        prepTime: 5,
        cookTime: 7,
        servings: 1,
        calories: 330,
        protein: 28,
        carbs: 20,
        fats: 12,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "ASIAN" },
        steps: [
          "Heat sesame oil, sauté tofu and broccoli for 5 minutes.",
          "Add teriyaki sauce, stir-fry for 2 more minutes."
        ],
        ingredients: [
          { name: "Firm Tofu", quantity: "½", unit: "cup" },
          { name: "Broccoli Florets", quantity: "1", unit: "cup" },
          { name: "Teriyaki Sauce", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id:" 624",
        name: "Black Bean & Corn Tacos",
        description: "Mexican-style tacos with black beans and corn",
        prepTime: 5,
        cookTime: 3,
        servings: 1,
        calories: 350,
        protein: 22,
        carbs: 42,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Heat black beans and corn in a pan for 3 minutes.",
          "Fill tortillas with the mixture, top with salsa and avocado."
        ],
        ingredients: [
          { name: "Black Beans", quantity: "½", unit: "cup" },
          { name: "Corn", quantity: "¼", unit: "cup" },
          { name: "Whole Wheat Tortillas", quantity: "2", unit: "tortillas" }
        ]
      },
      {
        _id: "625",
        name: "Eggplant & Chickpea Hummus Wrap",
        description: "Mediterranean wrap with grilled eggplant and hummus",
        prepTime: 5,
        cookTime: 6,
        servings: 1,
        calories: 350,
        protein: 24,
        carbs: 38,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN "},
        steps: [
          "Grill eggplant slices for 3 minutes per side.",
          "Spread hummus on the tortilla, add chickpeas and eggplant, wrap and serve."
        ],
        ingredients: [
          { name: "Whole Wheat Tortilla", quantity: "1", unit: "tortilla" },
          { name: "Chickpeas", quantity: "½", unit: "cup" },
          { name: "Grilled Eggplant", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "626",
        name: "Cauliflower Fried Rice",
        description: "Low-carb fried rice with cauliflower and veggies",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 290,
        protein: 18,
        carbs: 22,
        fats: 9,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "ASIAN" },
        steps: [
          "Heat a pan, stir-fry cauliflower rice, bell peppers, and soy sauce for 5 minutes.",
          "Serve warm."
        ],
        ingredients: [
          { name: "Cauliflower Rice", quantity: "1", unit: "cup" },
          { name: "Mixed Bell Peppers", quantity: "½", unit: "cup" },
          { name: "Soy Sauce", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "627",
        name: "Thai Peanut Chickpea Bowl",
        description: "Thai-inspired chickpea bowl with peanut sauce",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 320,
        protein: 20,
        carbs: 36,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name:" THAI" },
        steps: [
          "Combine all ingredients in a bowl and mix well.",
          "Drizzle with lime juice before serving."
        ],
        ingredients: [
          { name: "Chickpeas", quantity: "½", unit: "cup" },
          { name: "Peanut Sauce", quantity: "1", unit: "tbsp" },
          { name: "Cooked Quinoa", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "628",
        name: "Avocado Toast with Chickpeas",
        description: "Simple avocado toast with protein-packed chickpeas",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 280,
        protein: 16,
        carbs: 30,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Toast the bread and spread mashed avocado on top.",
          "Sprinkle chickpeas and black pepper before serving."
        ],
        ingredients: [
          { name: "Whole Wheat Bread", quantity: "1", unit: "slice" },
          { name: "Avocado", quantity: "½", unit: "medium" },
          { name: "Chickpeas", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id: "629",
        name: "Roasted Brussels Sprouts & Sweet Potatoes",
        description: "Oven-roasted veggies with olive oil and pepper",
        prepTime: 5,
        cookTime: 20,
        servings: 1,
        calories: 300,
        protein: 18,
        carbs: 35,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Toss Brussels sprouts and sweet potatoes with olive oil and black pepper.",
          "Roast for 20 minutes, flipping halfway."
        ],
        ingredients: [
          { name: "Brussels Sprouts", quantity: "1", unit: "cup" },
          { name: "Sweet Potatoes", quantity: "½", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "630",
        name: "Stuffed Bell Peppers with Quinoa",
        description: "Quinoa-stuffed bell peppers with black beans",
        prepTime: 5,
        cookTime: 15,
        servings: 1,
        calories: 330,
        protein: 22,
        carbs: 38,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Mix quinoa, black beans, and tomatoes, stuff into bell pepper halves.",
          "Bake for 15 minutes."
        ],
        ingredients: [
          { name: "Bell Pepper", quantity: "1", unit: "whole" },
          { name: "Cooked Quinoa", quantity: "½", unit: "cup" },
          { name: "Black Beans", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "631",
        name: "Greek Yogurt & Cucumber Wrap",
        description: "Cool and creamy Greek yogurt wrap",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 310,
        protein: 20,
        carbs: 30,
        fats: 9,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Spread Greek yogurt inside the tortilla, add diced cucumbers and garlic powder.",
          "Wrap and serve chilled."
        ],
        ingredients: [
          { name: "Whole Wheat Tortilla", quantity: "1", unit: "tortilla" },
          { name: "Greek Yogurt", quantity: "½", unit: "cup" },
          { name: "Cucumbers", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id:" 632",
        name: "Tomato & Lentil Soup",
        description: "Hearty tomato and lentil soup",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 290,
        protein: 20,
        carbs: 34,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Heat olive oil in a pot, add tomatoes, lentils, and broth.",
          "Season with cumin, simmer for 10 minutes."
        ],
        ingredients: [
          { name: "Cooked Lentils", quantity: "1", unit: "cup" },
          { name: "Diced Tomatoes", quantity: "½", unit: "cup" },
          { name: "Vegetable Broth", quantity: "2", unit: "cups" }
        ]
      },
      {
        _id: "633",
        name: "Cheesy Broccoli & Cauliflower Casserole",
        description: "Cheesy veggie casserole with Greek yogurt",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 320,
        protein: 22,
        carbs: 20,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Mix all ingredients in a baking dish, bake at 375°F (190°C) for 10 minutes."
        ],
        ingredients: [
          { name: "Steamed Broccoli", quantity: "1", unit: "cup" },
          { name: "Steamed Cauliflower", quantity: "1", unit: "cup" },
          { name: "Shredded Cheese", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id: "634",
        name: "Spicy Black Bean Bowl",
        description: "Spicy black bean and quinoa bowl",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 340,
        protein: 22,
        carbs: 38,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Combine all ingredients in a bowl and mix well.",
          "Serve warm."
        ],
        ingredients: [
          { name: "Black Beans", quantity: "½", unit: "cup" },
          { name: "Cooked Quinoa", quantity: "½", unit: "cup" },
          { name: "Hot Sauce", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "635",
        name: "Baked Cauliflower Nuggets",
        description: "Crispy baked cauliflower nuggets",
        prepTime: 5,
        cookTime: 15,
        servings: 1,
        calories: 280,
        protein: 18,
        carbs: 30,
        fats: 8,
        image: "",
        category: { _id: "3", name:" DINNER" },
        cuisine: { name:" AMERICAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Toss cauliflower with olive oil and breadcrumbs.",
          "Bake for 15 minutes."
        ],
        ingredients: [
          { name: "Cauliflower Florets", quantity: "1", unit: "cup" },
          { name: "Whole Wheat Breadcrumbs", quantity: "¼", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: 636,
        name: "Kale & Avocado Power Bowl",
        description: "Nutrient-dense kale and avocado bowl",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 320,
        protein: 18,
        carbs: 36,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "In a bowl, combine chopped kale, quinoa, and cherry tomatoes.",
          "Drizzle with olive oil and lemon juice, then mix well.",
          "Top with sliced avocado and sprinkle with black pepper."
        ],
        ingredients: [
          { name: "Kale", quantity: "1", unit: "cup" },
          { name: "Avocado", quantity: "½", unit: "medium" },
          { name: "Cooked Quinoa", quantity: "½", unit: "cup" },
          { name: "Cherry Tomatoes", quantity: "½", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Lemon Juice", quantity: "1", unit: "tsp" },
          { name: "Black Pepper", quantity: "½", unit: "tsp" }
        ]
      },
      {
        _id: "637",
        name: "Chickpea & Butternut Squash Curry",
        description: "Hearty curry with chickpeas and butternut squash",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 340,
        protein: 20,
        carbs: 42,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER "},
        cuisine: { name: "INDIAN" },
        steps: [
          "Heat olive oil in a pot, sauté butternut squash for 5 minutes.",
          "Add chickpeas, tomatoes, and curry powder.",
          "Simmer for 10 minutes until tender."
        ],
        ingredients: [
          { name: "Chickpeas", quantity: "½", unit: "cup" },
          { name: "Butternut Squash", quantity: "½", unit: "cup" },
          { name: "Diced Tomatoes", quantity: "½", unit: "cup" },
          { name: "Curry Powder", quantity: "1", unit: "tsp" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "638",
        name: "Black Bean & Salsa Tacos",
        description: "Flavorful tacos with black beans and salsa",
        prepTime: 5,
        cookTime: 3,
        servings: 1,
        calories: 350,
        protein: 22,
        carbs: 42,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEXICAN "},
        steps: [
          "Heat black beans in a pan for 3 minutes.",
          "Fill tortillas with black beans, salsa, and avocado.",
          "Serve warm."
        ],
        ingredients: [
          { name: "Black Beans", quantity: "½", unit: "cup" },
          { name: "Salsa", quantity: "¼", unit: "cup" },
          { name: "Whole Wheat Tortillas", quantity: "2", unit: "tortillas" },
          { name: "Avocado", quantity: "½", unit: "medium" }
        ]
      },
      {
        _id: "639",
        name: "Spaghetti Squash with Pesto & Cherry Tomatoes",
        description: "Light spaghetti squash dish with pesto and tomatoes",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 310,
        protein: 18,
        carbs: 28,
        fats: 9,
        image: "",
        category: { _id: "3", name: "DINNER "},
        cuisine: { name: "ITALIAN" },
        steps: [
          "Toss spaghetti squash with pesto and cherry tomatoes.",
          "Sprinkle Parmesan on top and serve."
        ],
        ingredients: [
          { name: "Cooked Spaghetti Squash", quantity: "1", unit: "cup" },
          { name: "Cherry Tomatoes", quantity: "½", unit: "cup" },
          { name: "Basil Pesto", quantity: "1", unit: "tbsp" },
          { name: "Parmesan Cheese", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "640",
        name: "Tofu & Cabbage Stir-Fry",
        description: "Quick stir-fry with tofu and cabbage",
        prepTime: 5,
        cookTime: 8,
        servings: 1,
        calories: 330,
        protein: 26,
        carbs: 20,
        fats: 12,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "ASIAN" },
        steps: [
          "Heat sesame oil in a pan, cook tofu for 5 minutes.",
          "Add cabbage, soy sauce, and garlic powder, stir-f ry for 3 more minutes."
        ],
        ingredients: [
          { name: "Firm Tofu", quantity: "½", unit: "cup" },
          { name: "Cabbage", quantity: "1", unit: "cup" },
          { name: "Sesame Oil", quantity: "1", unit: "tsp" },
          { name: "Soy Sauce", quantity: "1", unit: "tbsp" },
          { name: "Garlic Powder", quantity: "½", unit: "tsp" }
        ]
      },
      {
        _id: "641",
        name: "Grilled Chicken with Quinoa & Roasted Vegetables",
        description: "Lean chicken with quinoa and roasted veggies",
        prepTime: 10,
        cookTime: 25,
        servings: 1,
        calories: 350,
        protein: 40,
        carbs: 35,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Toss bell peppers, zucchini, and broccoli with olive oil and roast for 20 minutes.",
          "Grill chicken for 5 minutes per side.",
          "Serve chicken with quinoa and roasted vegetables."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "4", unit: "oz" },
          { name: "Cooked Quinoa", quantity: "½", unit: "cup" },
          { name: "Bell Peppers, Zucchini, Broccoli", quantity: "1", unit: "cup" }
        ]
      },
      {
        _id: "642",
        name: "Baked Salmon with Asparagus & Brown Rice",
        description: "Omega-3-rich salmon with asparagus and rice",
        prepTime: 10,
        cookTime: 12,
        servings: 1,
        calories: 420,
        protein: 45,
        carbs: 30,
        fats: 15,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Place salmon on a baking sheet, brush with olive oil and garlic powder.",
          "Bake for 12 minutes until flaky.",
          "Steam asparagus and serve with brown rice."
        ],
        ingredients: [
          { name: "Salmon Fillet", quantity: "5", unit: "oz" },
          { name: "Asparagus", quantity: "1", unit: "cup" },
          { name: "Brown Rice", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "643",
        name: "Grilled Turkey Burgers",
        description: "Lean turkey burgers with fresh veggies",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 380,
        protein: 42,
        carbs: 35,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "AMERICAN "},
        steps: [
          "Shape ground turkey into a patty, grill for 5 minutes per side.",
          "Place patty on a whole wheat bun, add lettuce, tomato, and mustard."
        ],
        ingredients: [
          { name: "Ground Turkey", quantity: "5", unit: "oz" },
          { name: "Whole Wheat Burger Bun", quantity: "1", unit: "bun" },
          { name: "Lettuce", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "644",
        name: "Garlic Butter Shrimp with Steamed Broccoli",
        description: "Buttery shrimp with steamed broccoli",
        prepTime: 5,
        cookTime: 7,
        servings: 1,
        calories: 360,
        protein: 40,
        carbs: 15,
        fats: 12,
        image: "",
        category: { _id: "3", name:" DINNER" },
        cuisine: { name:" MEDITERRANEAN "},
        steps: [
          "Melt butter in a pan, sauté garlic for 1 minute.",
          "Add shrimp, cook for 3-4 minutes per side until pink.",
          "Serve with steamed broccoli."
        ],
        ingredients: [
          { name: "Shrimp", quantity: "5", unit: "oz" },
          { name: "Steamed Broccoli", quantity: "1", unit: "cup" },
          { name: "Butter", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "645",
        name: "Lemon-Garlic Baked Tilapia",
        description: "Citrusy baked tilapia with garlic",
        prepTime: 5,
        cookTime: 12,
        servings: 1,
        calories: 330,
        protein: 42,
        carbs: 10,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Place tilapia on a baking sheet, drizzle with olive oil and lemon juice.",
          "Sprinkle with garlic powder and black pepper.",
          "Bake for 12 minutes."
        ],
        ingredients: [
          { name: "Tilapia Fillet", quantity: "6", unit: "oz" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" },
          { name: "Garlic Powder", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "646",
        name: "Spicy Lentil & Chicken Soup",
        description: "Protein-packed soup with lentils and chicken",
        prepTime: 5,
        cookTime: 15,
        servings: 1,
        calories: 370,
        protein: 45,
        carbs: 38,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Heat a pot, add lentils, shredded chicken, diced tomatoes, and chicken broth.",
          "Season with chili powder and simmer for 15 minutes."
        ],
        ingredients: [
          { name: "Cooked Lentils", quantity: "1", unit: "cup" },
          { name: "Shredded Chicken", quantity: "4", unit: "oz" },
          { name: "Chicken Broth", quantity: "2", unit: "cups" }
        ]
      },
      {
        _id: "647",
        name: "Balsamic Chicken with Roasted Vegetables",
        description: "Tangy balsamic chicken with roasted veggies",
        prepTime: 10,
        cookTime: 25,
        servings: 1,
        calories: 380,
        protein: 44,
        carbs: 18,
        fats: 10,
        image: "",
        category: { _id: "3", name:" DINNER" },
        cuisine: { name: "MEDITERRANEAN "},
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Marinate chicken in balsamic vinegar for 10 minutes.",
          "Roast vegetables for 20 minutes, flipping halfway.",
          "Grill chicken for 5 minutes per side and serve with vegetables."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Balsamic Vinegar", quantity: "1", unit: "tbsp" },
          { name: "Carrots, Zucchini, Bell Peppers", quantity: "1", unit: "cup" }
        ]
      },
      {
        _id: "648",
        name: "Seared Tuna with Avocado Salsa",
        description: "Fresh tuna with creamy avocado salsa",
        prepTime: 5,
        cookTime: 4,
        servings: 1,
        calories: 390,
        protein: 46,
        carbs: 16,
        fats: 14,
        image: "",
        category: { _id: "3", name: "DINNER "},
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Sear tuna in a hot pan for 1-2 minutes per side.",
          "Mix avocado, cherry tomatoes, lime juice, and olive oil to make salsa.",
          "Serve salsa over tuna."
        ],
        ingredients: [
          { name: "Tuna Steak", quantity: "5", unit: "oz" },
          { name: "Avocado", quantity: "½", unit: "medium" },
          { name: "Cherry Tomatoes", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "649",
        name: "Egg & Spinach Scramble with Whole Wheat Toast",
        description: "Protein-rich scramble with toast",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 320,
        protein: 22,
        carbs: 30,
        fats: 12,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Heat butter in a pan, scramble eggs with spinach for 3 minutes.",
          "Serve with whole wheat toast."
        ],
        ingredients: [
          { name: "Eggs", quantity: "2", unit: "whole" },
          { name: "Spinach", quantity: "1", unit: "cup" },
          { name: "Whole Wheat Toast", quantity: "1", unit: "slice" }
        ]
      },
      {
        _id: "650",
        name: "Turkey & Sweet Potato Skillet",
        description:" Savory turkey and sweet potato skillet",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 380,
        protein: 35,
        carbs: 40,
        fats: 12,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "AMERICAN "},
        steps: [
          "Heat olive oil in a pan, cook onions and sweet potatoes for 5 minutes.",
          "Add ground turkey, cook until browned, then add spinach and stir for 2 more minutes."
        ],
        ingredients: [
          { name: "Ground Turkey", quantity: "4", unit: "oz" },
          { name: "Sweet Potatoes", quantity: "½", unit: "cup" },
          { name: "Spinach", quantity: "1", unit: "cup" }
        ]
      },
      {
        _id: "651",
        name: "Grilled Chicken with Avocado Salsa",
        description: "Grilled chicken with fresh avocado salsa",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 390,
        protein: 44,
        carbs: 12,
        fats: 14,
        image: "",
        category: { _id: "3", name:" DINNER" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Grill chicken for 5 minutes per side.",
          "Mix avocado, cherry tomatoes, lime juice, and black pepper to make salsa.",
          "Serve salsa over grilled chicken."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Avocado", quantity: "½", unit: "medium" },
          { name: "Cherry Tomatoes", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: 652,
        name: "Garlic Butter Steak with Green Beans",
        description: "Juicy steak with garlic butter and green beans",
        prepTime: 5,
        cookTime: 8,
        servings: 1,
        calories: 420,
        protein: 48,
        carbs: 14,
        fats: 16,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Melt butter in a pan, cook garlic for 1 minute.",
          "Sear steak for 3-4 minutes per side until desired doneness.",
          "Steam green beans and serve with steak."
        ],
        ingredients: [
          { name: "Lean Steak", quantity: "5", unit: "oz" },
          { name: "Green Beans", quantity: "1", unit: "cup" },
          { name: "Butter", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "653",
        name:" Black Bean & Grilled Shrimp Bowl",
        description: "Protein-packed shrimp and black bean bowl",
        prepTime: 5,
        cookTime: 6,
        servings: 1,
        calories: 360,
        protein: 38,
        carbs: 40,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Grill shrimp for 3 minutes per side.",
          "Combine black beans, brown rice, and bell peppers in a bowl.",
          "Drizzle with lime juice and serve with shrimp."
        ],
        ingredients: [
          { name: "Shrimp", quantity: "5", unit: "oz" },
          { name: "Black Beans", quantity: "½", unit: "cup" },
          { name: "Brown Rice", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "654",
        name: "Thai Peanut Chicken with Brown Rice",
        description: "Thai-inspired peanut chicken with rice",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 380,
        protein: 42,
        carbs: 38,
        fats: 10,
        image: "",
        category: { _id: "3", name:" DINNER" },
        cuisine: { name: "THAI" },
        steps: [
          "Grill chicken for 5 minutes per side.",
          "Serve with brown rice, steamed broccoli, and drizzle with peanut sauce."
        ],
        ingredients: [
          { name: "Grilled Chicken", quantity: "4", unit: "oz" },
          { name: "Brown Rice", quantity: "½", unit: "cup" },
          { name: "Peanut Sauce", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "655",
        name: "Teriyaki Salmon with Steamed Broccoli",
        description: "Sweet and savory teriyaki salmon",
        prepTime: 5,
        cookTime: 12,
        servings: 1,
        calories: 400,
        protein: 42,
        carbs: 20,
        fats: 14,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "ASIAN" },
        steps: [
          "Brush salmon with teriyaki sauce, bake at 375°F (190°C) for 12 minutes.",
          "Serve with steamed broccoli."
        ],
        ingredients: [
          { name: "Salmon Fillet", quantity: "5", unit: "oz" },
          { name: "Teriyaki Sauce", quantity: "1", unit: "tbsp" },
          { name: "Steamed Broccoli", quantity: "1", unit: "cup" }
        ]
      },
      {
        _id: "656",
        name: "Garlic Lemon Chicken Thighs",
        description: "Zesty garlic-lemon chicken thighs",
        prepTime: 5,
        cookTime: 12,
        servings: 1,
        calories: 390,
        protein: 42,
        carbs: 10,
        fats: 16,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name:" MEDITERRANEAN" },
        steps: [
          "Sear chicken thighs in a pan for 5 minutes per side.",
          "Add garlic and lemon juice, simmer for 2 minutes."
        ],
        ingredients: [
          { name: "Chicken Thighs", quantity: "5", unit: "oz" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" },
          { name: "Minced Garlic", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "657",
        name: "Spicy Chicken Stir-Fry with Bell Peppers",
        description: "Spicy chicken and bell pepper stir-fry",
        prepTime: 5,
        cookTime: 7,
        servings: 1,
        calories: 370,
        protein: 40,
        carbs: 24,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "ASIAN" },
        steps: [
          "Heat a pan, stir-fry chicken and bell peppers for 5 minutes.",
          "Add soy sauce and chili flakes, stir for 2 minutes."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "4", unit: "oz" },
          { name: "Mixed Bell Peppers", quantity: "1", unit: "cup" },
          { name: "Soy Sauce", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "658",
        name: "Roasted Salmon with Roasted Brussels Sprouts",
        description: "Flavorful roasted salmon with Brussels sprouts",
        prepTime: 10,
        cookTime: 32,
        servings: 1,
        calories: 400,
        protein: 44,
        carbs: 16,
        fats: 14,
        image: "",
        category: { _id: "3", name:" DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Toss Brussels sprouts with olive oil and black pepper, roast for 20 minutes.",
          "Bake salmon for 12 minutes, serve together."
        ],
        ingredients: [
          { name: "Salmon", quantity: "5", unit: "oz" },
          { name: "Brussels Sprouts", quantity: "1", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "659",
        name: "Grilled Shrimp with Zucchini Noodles",
        description: "Light and healthy shrimp with zucchini noodles",
        prepTime: 5,
        cookTime: 6,
        servings: 1,
        calories: 340,
        protein: 38,
        carbs: 14,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name:" MEDITERRANEAN" },
        steps: [
          "Grill shrimp for 3 minutes per side.",
          "Sauté zucchini noodles with olive oil and garlic powder for 3 minutes."
        ],
        ingredients: [
          { name: "Shrimp", quantity: "5", unit: "oz" },
          { name: "Zucchini Noodles", quantity: "1", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "660",
        name: "Egg White & Veggie Omelet",
        description: "Healthy omelet packed with veggies",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 310,
        protein: 30,
        carbs: 18,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Heat olive oil in a pan, cook bell peppers and spinach for 3 minutes.",
          "Pour in egg whites, cook for 2 minutes per side."
        ],
        ingredients: [
          { name: "Egg Whites", quantity: "3", unit: "whole" },
          { name: "Spinach", quantity: "½", unit: "cup" },
          { name: "Diced Bell Peppers", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "661",
        name: "Balsamic Glazed Chicken with Sweet Potatoes",
        description: "Sweet and tangy chicken with roasted sweet potatoes",
        prepTime: 10,
        cookTime: 25,
        servings: 1,
        calories: 380,
        protein: 44,
        carbs: 40,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER "},
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Toss sweet potatoes in olive oil and roast for 20 minutes.",
          "Grill chicken for 5 minutes per side, then brush with balsamic vinegar."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Sweet Potatoes", quantity: "½", unit: "cup" },
          { name: "Balsamic Vinegar", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "662",
        name: "Turkey & Spinach Stuffed Mushrooms",
        description:" Savory turkey and spinach stuffed mushrooms",
        prepTime: 10,
        cookTime: 12,
        servings: 1,
        calories: 320,
        protein: 42,
        carbs: 14,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Cook turkey and spinach in a pan for 5 minutes, then stuff into mushrooms.",
          "Top with Parmesan and bake for 12 minutes."
        ],
        ingredients: [
          { name: "Mushrooms", quantity: "4", unit: "large" },
          { name: "Ground Turkey", quantity: "3", unit: "oz" },
          { name: "Spinach", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "663",
        name: "Teriyaki Turkey Bowl with Cauliflower Rice",
        description: "Asian-inspired teriyaki turkey bowl",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 350,
        protein: 42,
        carbs: 24,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER "},
        cuisine: { name: "ASIAN" },
        steps: [
          "Cook ground turkey in a pan for 5 minutes, then add teriyaki sauce.",
          "Serve with cauliflower rice and steamed broccoli."
        ],
        ingredients: [
          { name: "Ground Turkey", quantity: "4", unit: "oz" },
          { name: "Cauliflower Rice", quantity: "1", unit: "cup" },
          { name: "Teriyaki Sauce", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "664",
        name: "Greek Yogurt Chicken Salad Wrap",
        description: "Creamy chicken salad wrapped in a tortilla",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 360,
        protein: 42,
        carbs: 28,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Mix shredded chicken with Greek yogurt.",
          "Wrap in a whole wheat tortilla with lettuce."
        ],
        ingredients: [
          { name: "Shredded Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Greek Yogurt", quantity: "2", unit: "tbsp" },
          { name: "Whole Wheat Tortilla", quantity: "1", unit: "tortilla" }
        ]
      },
      {
        _id: "665",
        name: "Baked Parmesan Crusted Chicken",
        description: "Crispy baked chicken with Parmesan crust",
        prepTime: 10,
        cookTime: 20,
        servings: 1,
        calories: 390,
        protein: 44,
        carbs: 18,
        fats: 12,
        image: "",
        category: { _id: "3", name: "DINNER "},
        cuisine: { name: "AMERICAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Coat chicken with Parmesan and breadcrumbs, drizzle with olive oil.",
          "Bake for 20 minutes."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Parmesan Cheese", quantity: "2", unit: "tbsp" },
          { name: "Whole Wheat Breadcrumbs", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "666",
        name: "Honey Mustard Glazed Salmon",
        description: "Sweet and tangy salmon with honey mustard glaze",
        prepTime: 5,
        cookTime: 12,
        servings: 1,
        calories: 400,
        protein: 44,
        carbs: 16,
        fats: 14,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Mix honey and mustard, spread over salmon.",
          "Bake for 12 minutes."
        ],
        ingredients: [
          { name: "Salmon Fillet", quantity: "5", unit: "oz" },
          { name: "Honey", quantity: "1", unit: "tbsp" },
          { name: "Dijon Mustard", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "667",
        name: "Garlic Butter Shrimp with Roasted Green Beans",
        description: "Juicy shrimp sautéed in garlic butter with roasted green beans",
        prepTime: 5,
        cookTime: 18,
        servings: 1,
        calories: 360,
        protein: 38,
        carbs: 16,
        fats: 12,
        image: "",
        category: { _id: "3", name:" DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Heat butter in a pan, sauté shrimp for 3 minutes per side.",
          "Roast green beans at 375°F (190°C) for 15 minutes."
        ],
        ingredients: [
          { name: "Shrimp", quantity: "5", unit: "oz" },
          { name: "Green Beans", quantity: "1", unit: "cup" },
          { name: "Butter", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "668",
        name: "Asian Cabbage Stir-Fry with Ground Turkey",
        description: "Quick stir-fry with ground turkey and cabbage",
        prepTime: 5,
        cookTime: 8,
        servings: 1,
        calories: 340,
        protein: 40,
        carbs: 18,
        fats: 10,
        image: "",
        category: { _id : "3", name: "DINNER" },
        cuisine: { name: "ASIAN" },
        steps: [
          "Cook ground turkey in a pan for 5 minutes.",
          "Add cabbage and soy sauce, stir-fry for 3 more minutes."
        ],
        ingredients: [
          { name: "Ground Turkey", quantity: "4", unit: "oz" },
          { name: "Cabbage", quantity: "1", unit: "cup" },
          { name: "Soy Sauce", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "669",
        name: "Quinoa, Spinach & Chicken Bowl",
        description: "Nutritious bowl with quinoa, spinach, and chicken",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 370,
        protein: 42,
        carbs: 36,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Cook quinoa according to package instructions.",
          "In a pan, heat olive oil and sauté spinach for 2 minutes until wilted.",
          "Add grilled chicken, cherry tomatoes, and cooked quinoa to the pan, stir well.",
          "Season with garlic powder and serve warm."
        ],
        ingredients: [
          { name: "Grilled Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Cooked Quinoa", quantity: "½", unit: "cup" },
          { name: "Fresh Spinach", quantity: "1", unit: "cup" }
        ]
      },
      {
        _id: "670",
        name: "Spicy Garlic Chicken Stir-Fry",
        description:" Flavorful stir-fry with spicy garlic chicken",
        prepTime: 5,
        cookTime: 12,
        servings: 1,
        calories: 360,
        protein: 40,
        carbs: 18,
        fats: 9,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "ASIAN" },
        steps: [
          "Heat a pan over medium heat, add minced garlic and cook for 1 minute.",
          "Add chicken slices and stir-fry for 5 minutes until browned.",
          "Toss in bell peppers and broccoli, cook for 3 minutes.",
          "Add soy sauce and chili flakes, stir well, and cook for 2 more minutes."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "4", unit: "oz" },
          { name: "Bell Peppers", quantity: "½", unit: "cup" },
          { name: "Broccoli Florets", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "671",
        name: "Mediterranean Chicken with Roasted Vegetables",
        description:" Flavorful chicken with roasted Mediterranean vegetables",
        prepTime: 10,
        cookTime: 20,
        servings: 1,
        calories: 370,
        protein: 44,
        carbs: 14,
        fats: 12,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Toss chicken and vegetables with olive oil and oregano.",
          "Roast for 20 minutes, flipping halfway."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Cherry Tomatoes", quantity: "½", unit: "cup" },
          { name: "Zucchini", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "672",
        name: "Thai Basil Chicken Stir-Fry",
        description: "Aromatic stir-fry with Thai basil and chicken",
        prepTime: 5,
        cookTime: 7,
        servings: 1,
        calories: 350,
        protein: 40,
        carbs: 16,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "THAI" },
        steps: [
          "Stir-fry chicken and bell peppers for 5 minutes.",
          "Add soy sauce, chili flakes, and basil, cook for 2 minutes."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "4", unit: "oz" },
          { name: "Bell Peppers", quantity: "½", unit: "cup" },
          { name : "Fresh Basil Leaves", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "673",
        name: "Chipotle-Lime Shrimp Bowl",
        description: "Spicy shrimp bowl with chipotle and lime",
        prepTime: 5,
        cookTime: 6,
        servings: 1,
        calories: 390,
        protein: 40,
        carbs: 42,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Cook shrimp with chipotle seasoning for 3 minutes per side.",
          "Serve with brown rice, black beans, and lime juice."
        ],
        ingredients: [
          { name: "Shrimp", quantity: "5", unit: "oz" },
          { name: "Brown Rice", quantity: "½", unit: "cup" },
          { name: "Black Beans", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "674",
        name: "Korean BBQ Chicken with Cabbage Slaw",
        description: "Grilled chicken with a tangy cabbage slaw",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 360,
        protein: 42,
        carbs: 20,
        fats: 10,
        image: "",
        category: { _id: "3", name:" DINNER" },
        cuisine: { name: "KOREAN" },
        steps: [
          "Grill chicken for 5 minutes per side, brushing with BBQ sauce.",
          "Toss cabbage with rice vinegar, serve with chicken."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Korean BBQ Sauce", quantity: "1", unit: "tbsp" },
          { name: "Cabbage", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "675",
        name: "Shrimp & Brown Rice Stir-Fry",
        description: "Quick stir-fry with shrimp and brown rice",
        prepTime: 5,
        cookTime: 6,
        servings: 1,
        calories: 380,
        protein: 42,
        carbs: 36,
        fats: 8,
        image: "",
        category: { _id: "3", name:" DINNER" },
        cuisine: { name: "ASIAN "},
        steps: [
          "Stir-fry shrimp and bell peppers for 4 minutes.",
          "Add soy sauce and brown rice, cook for 2 more minutes."
        ],
        ingredients: [
          { name: "Shrimp", quantity: "5", unit: "oz" },
          { name: "Cooked Brown Rice", quantity: "½", unit: "cup" },
          { name: "Mixed Bell Peppers", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "676",
        name: "Garlic-Herb Chicken with Mashed Cauliflower",
        description: "Tender chicken with garlic-herb flavor and creamy cauliflower",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 350,
        protein: 40,
        carbs: 18,
        fats: 12,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Sear chicken with olive oil and garlic for 5 minutes per side.",
          "Serve with mashed cauliflower."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Mashed Cauliflower", quantity: "1", unit: "cup" }
        ]
      },
      {
        _id: "677",
        name:" Lemon Butter Salmon with Asparagus",
        description: "Rich salmon with lemon butter and fresh asparagus",
        prepTime: 5,
        cookTime: 8,
        servings: 1,
        calories: 400,
        protein: 45,
        carbs: 12,
        fats: 14,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Sear salmon in butter for 4 minutes per side.",
          "Serve with steamed asparagus and lemon zest."
        ],
        ingredients: [
          { name: "Salmon", quantity: "5", unit: "oz" },
          { name : "Butter", quantity: "1", unit: "tbsp" },
          { name: "Asparagus", quantity: "1", unit: "cup" }
        ]
      },
      {
        _id: "678",
        name: "Jerk Chicken with Mango Salsa",
        description: "Spicy jerk chicken topped with fresh mango salsa",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 370,
        protein: 42,
        carbs: 18,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER "},
        cuisine: { name:" CARIBBEAN" },
        steps: [
          "Grill chicken for 5 minutes per side, seasoning with jerk spice.",
          "Mix mango with lime juice, serve on top."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Jerk Seasoning", quantity: "1", unit: "tsp" },
          { name: "Mango", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "679",
        name: "Cajun Chicken & Green Beans",
        description: "Spicy Cajun chicken served with green beans",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 380,
        protein: 44,
        carbs: 16,
        fats: 12,
        image: "",
        category: { _id: "3", name: "DINNER "},
        cuisine: { name: "AMERICAN "},
        steps: [
          "Sear chicken in olive oil and Cajun seasoning for 5 minutes per side.",
          "Steam green beans, serve together."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Cajun Seasoning", quantity: "1", unit: "tsp" },
          { name: "Green Beans", quantity: "1", unit: "cup" }
        ]
      },
      {
        _id: "680",
        name: "Teriyaki Chicken Lettuce Wraps",
        description: "Flavorful ground chicken wrapped in fresh lettuce",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 340,
        protein: 38,
        carbs: 18,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "ASIAN" },
        steps: [
          "Cook ground chicken with teriyaki sauce for 5 minutes.",
          "Serve in lettuce leaves with shredded carrots."
        ],
        ingredients: [
          { name: "Ground Chicken", quantity: "4", unit: "oz" },
          { name: "Teriyaki Sauce", quantity: "1", unit: "tbsp" },
          { name: "Lettuce Leaves", quantity: "2", unit: "large" }
        ]
      },
      {
        _id: "681",
        name: "Roasted Turkey with Butternut Squash",
        description: "Herb-roasted turkey with butternut squash",
        prepTime: 10,
        cookTime: 25,
        servings: 1,
        calories: 380,
        protein: 42,
        carbs: 28,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name:" MEDITERRANEAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Toss butternut squash with olive oil and rosemary, roast for 20 minutes.",
          "Grill turkey for 5 minutes per side, serve with squash."
        ],
        ingredients: [
          { name: "Turkey Breast", quantity: "5", unit: "oz" },
          { name: "Butternut Squash", quantity: "½", unit: "cup" },
          { name: "Rosemary", quantity: "½", unit: "tsp" }
        ]
      },
      {
        _id: "682",
        name: "Grilled Tuna Salad with Lemon Dressing",
        description: "Fresh tuna salad with lemon dressing",
        prepTime: 5,
        cookTime: 6,
        servings: 1,
        calories: 350,
        protein: 44,
        carbs: 16,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Grill tuna for 3 minutes per side.",
          "Toss greens, cherry tomatoes, lemon juice, and olive oil.",
          "Serve with grilled tuna."
        ],
        ingredients: [
          { name: "Tuna Steak", quantity: "5", unit: "oz" },
          { name: "Mixed Greens", quantity: "1", unit: "cup" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "683",
        name: "Black Pepper Beef Stir-Fry",
        description: "Spicy beef stir-fry with bell peppers",
        prepTime: 5,
        cookTime: 7,
        servings: 1,
        calories: 370,
        protein: 42,
        carbs: 14,
        fats: 12,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "ASIAN" },
        steps: [
          "Stir-fry beef and bell peppers for 5 minutes.",
          "Add soy sauce and black pepper, cook for 2 more minutes."
        ],
        ingredients: [
          { name: "Lean Beef", quantity: "4", unit: "oz" },
          { name: "Bell Peppers", quantity: "½", unit: "cup" },
          { name: "Soy Sauce", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "684",
        name: "Honey Soy Glazed Chicken",
        description: "Sweet and savory glazed chicken",
        prepTime: 5,
        cookTime: 20,
        servings: 1,
        calories: 360,
        protein: 42,
        carbs: 18,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER "},
        cuisine: { name: "ASIAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Mix honey and soy sauce, brush onto chicken.",
          "Bake for 20 minutes."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Honey", quantity: "1", unit: "tbsp" },
          { name: "Soy Sauce", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "685",
        name: "Shrimp Tacos with Avocado Slaw",
        description: "Mexican-style shrimp tacos with avocado slaw",
        prepTime: 10,
        cookTime: 6,
        servings: 1,
        calories: 390,
        protein: 40,
        carbs: 42,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Grill shrimp for 3 minutes per side.",
          "Mix cabbage, avocado, and lime juice to make slaw.",
          "Serve in tortillas with shrimp."
        ],
        ingredients: [
          { name: "Shrimp", quantity: "5", unit: "oz" },
          { name: "Whole Wheat Tortillas", quantity: "2", unit: "tortillas" },
          { name: "Avocado", quantity: "½", unit: "medium" }
        ]
      },
      {
        _id: "686",
        name: "Chicken & Mushroom Stir-Fry",
        description: "Quick chicken and mushroom stir-fry",
        prepTime: 5,
        cookTime: 7,
        servings: 1,
        calories: 350,
        protein: 40,
        carbs: 14,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER "},
        cuisine: { name:" ASIAN "},
        steps: [
          "Stir-fry chicken and mushrooms for 5 minutes.",
          "Add soy sauce and garlic powder, cook for 2 more minutes."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "4", unit: "oz" },
          { name: "Mushrooms", quantity: "½", unit: "cup" },
          { name: "Soy Sauce", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "687",
        name: "Spiced Chicken with Quinoa Pilaf",
        description: "Spiced chicken with quinoa pilaf",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 380,
        protein: 44,
        carbs: 32,
        fats: 8,
        image: "",
        category: { _id: "3", name:" DINNER "},
        cuisine: { name:" MEDITERRANEAN" },
        steps: [
          "Grill chicken for 5 minutes per side, seasoning with cumin.",
          "Serve with quinoa drizzled with olive oil."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Cooked Quinoa", quantity: "½", unit: "cup" },
          { name: "Cumin", quantity: "½", unit: "tsp" }
        ]
      },
      {
        _id: "688",
        name: "Seared Scallops with Cauliflower Mash",
        description: "Tender scallops with creamy cauliflower mash",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 360,
        protein: 42,
        carbs: 14,
        fats: 10,
        image: "",
        category: { _id: "3", name:" DINNER" },
        cuisine: { name:" AMERICAN "},
        steps: [
          "Sear scallops in butter for 2 minutes per side.",
          "Serve with mashed cauliflower."
        ],
        ingredients: [
          { name: "Scallops", quantity: "5", unit: "oz" },
          { name: "Mashed Cauliflower", quantity: "1", unit: "cup" },
          { name: "Butter", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "689",
        name:" Grilled Chicken Caesar Salad Wrap",
        description: "Classic Caesar salad in a wrap",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 370,
        protein: 42,
        carbs: 28,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Mix grilled chicken with lettuce and Caesar dressing.",
          "Wrap in a whole wheat tortilla."
        ],
        ingredients: [
          { name: "Grilled Chicken", quantity: "5", unit: "oz" },
          { name: "Whole Wheat Tortilla", quantity: "1", unit: "tortilla" },
          { name: "Caesar Dressing", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "690",
        name: "Chimichurri Chicken with Grilled Veggies",
        description: "Argentinian-style chicken with chimichurri sauce",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 360,
        protein: 42,
        carbs: 18,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "ARGENTINIAN" },
        steps: [
          "Grill chicken for 5 minutes per side.",
          "Serve with grilled bell peppers and chimichurri sauce."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Bell Peppers", quantity: "½", unit: "cup" },
          { name: "Chimichurri Sauce", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "691",
        name: "Balsamic Glazed Chicken with Wild Rice",
        description: "Sweet balsamic chicken with wild rice",
        prepTime: 5,
        cookTime: 20,
        servings: 1,
        calories: 380,
        protein: 44,
        carbs: 35,
        fats: 10,
        image: "",
        category: { _id: "3", name:" DINNER "},
        cuisine: { name:" MEDITERRANEAN "},
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Brush chicken with balsamic vinegar and olive oil.",
          "Bake for 20 minutes, serve with wild rice."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Wild Rice", quantity: "½", unit: "cup" },
          { name: "Balsamic Vinegar", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "692",
        name: "Asian-Style Chicken with Bok Choy",
        description: "Asian stir-fry with chicken and bok choy",
        prepTime: 5,
        cookTime: 8,
        servings: 1,
        calories: 340,
        protein: 40,
        carbs: 12,
        fats: 10,
        image: "",
        category: { _id: "3", name:" DINNER" },
        cuisine: { name:" ASIAN "},
        steps: [
          "Stir-fry chicken for 5 minutes.",
          "Add bok choy, soy sauce, and sesame oil, cook for 3 more minutes."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Bok Choy", quantity: "1", unit: "cup" },
          { name: "Sesame Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "693",
        name: "Blackened Tilapia with Quinoa",
        description:" Spiced tilapia with quinoa",
        prepTime: 5,
        cookTime: 6,
        servings: 1,
        calories: 360,
        protein: 42,
        carbs: 30,
        fats: 10,
        image: "",
        category: { _id: "3", name:" DINNER "},
        cuisine: { name:" AMERICAN "},
        steps: [
          "Coat tilapia with blackening seasoning.",
          "Heat olive oil in a pan, cook fish for 3 minutes per side.",
          "Serve with quinoa."
        ],
        ingredients: [
          { name: "Tilapia Fillet", quantity: "5", unit: "oz" },
          { name: "Cooked Quinoa", quantity: "½", unit: "cup" },
          { name: "Blackening Seasoning", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "694",
        name: "Garlic-Lemon Grilled Shrimp",
        description: "Zesty grilled shrimp with garlic and lemon",
        prepTime: 5,
        cookTime: 6,
        servings: 1,
        calories: 320,
        protein: 40,
        carbs: 10,
        fats: 8,
        image: "",
        category: { _id: "3", name:" DINNER "},
        cuisine: { name:" MEDITERRANEAN "},
        steps: [
          "Toss shrimp with lemon juice, garlic, and olive oil.",
          "Grill for 3 minutes per side."
        ],
        ingredients: [
          { name: "Shrimp", quantity: "5", unit: "oz" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" },
          { name: "Minced Garlic", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "695",
        name:" Spicy Garlic Chicken Stir-Fry",
        description:" Fiery chicken stir-fry with garlic and chili",
        prepTime: 5,
        cookTime: 7,
        servings: 1,
        calories: 370,
        protein: 42,
        carbs: 18,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "ASIAN" },
        steps: [
          "Stir-fry chicken and bell peppers for 5 minutes.",
          "Add chili flakes and soy sauce, cook for 2 more minutes."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "4", unit: "oz" },
          { name: "Bell Peppers", quantity: "½", unit: "cup" },
          { name: "Chili Flakes", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "696",
        name: "Jerk Chicken with Roasted Sweet Potatoes",
        description: "Caribbean jerk chicken with sweet potatoes",
        prepTime: 10,
        cookTime: 25,
        servings: 1,
        calories: 390,
        protein: 44,
        carbs: 36,
        fats: 10,
        image: "",
        category: { _id: "3", name: "DINNER" },
        cuisine: { name: "CARIBBEAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Toss sweet potatoes with olive oil, roast for 20 minutes.",
          "Grill chicken with jerk seasoning for 5 minutes per side."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Sweet Potatoes", quantity: "½", unit: "cup" },
          { name: "Jerk Seasoning", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "697",
        name: "Honey Garlic Salmon with Roasted Green Beans",
        description: "Sweet and savory salmon with roasted green beans",
        prepTime: 5,
        cookTime: 12,
        servings: 1,
        calories: 410,
        protein: 45,
        carbs: 18,
        fats: 14,
        image: "",
        category: { _id: "3", name:" DINNER "},
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Mix honey and garlic, spread over salmon.",
          "Roast salmon and green beans at 375°F (190°C) for 12 minutes."
        ],
        ingredients: [
          { name: "Salmon", quantity: "5", unit: "oz" },
          { name: "Honey", quantity: "1", unit: "tbsp" },
          { name: "Minced Garlic", quantity: "1", unit: "tsp" },
          { name: "Green Beans", quantity: "1", unit: "cup" }
        ]
      },
      {
        _id: "698",
        name: "Balsamic Turkey Meatballs with Zucchini Noodles",
        description: "Flavorful turkey meatballs served with zucchini noodles",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 360,
        protein: 42,
        carbs: 18,
        fats: 10,
        image: "",
        category: { _id: "3", name:" DINNER "},
        cuisine: { name:" MEDITERRANEAN "},
        steps: [
          "Form ground turkey into small meatballs.",
          "Bake at 375°F (190°C) for 15 minutes.",
          "Toss zucchini noodles with olive oil and serve with meatballs."
        ],
        ingredients: [
          { name: "Ground Turkey", quantity: "4", unit: "oz" },
          { name: "Zucchini Noodles", quantity: "1", unit: "cup" },
          { name: "Balsamic Vinegar", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "699",
        name: "Cajun-Spiced Grilled Chicken with Brown Rice",
        description: "Spicy grilled chicken served with brown rice",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 380,
        protein: 44,
        carbs: 34,
        fats: 10,
        image: "",
        category: { _id: "3", name:" DINNER" },
        cuisine: { name:" AMERICAN "},
        steps: [
          "Coat chicken with Cajun seasoning, grill for 5 minutes per side.",
          "Serve with brown rice."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "5", unit: "oz" },
          { name: "Cooked Brown Rice", quantity: "½", unit: "cup" },
          { name: "Cajun Seasoning", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id:" 700",
        name: "Teriyaki Glazed Shrimp with Steamed Vegetables",
        description:" Sweet teriyaki shrimp served with steamed vegetables",
        prepTime: 5,
        cookTime: 6,
        servings: 1,
        calories: 350,
        protein: 40,
        carbs: 20,
        fats: 8,
        image: "",
        category: { _id: "3", name: "DINNER "},
        cuisine: { name:" ASIAN "},
        steps: [
          "Stir-fry shrimp with teriyaki sauce for 3 minutes per side.",
          "Serve with steamed vegetables."
        ],
        ingredients: [
          { name: "Shrimp", quantity: "5", unit: "oz" },
          { name: "Teriyaki Sauce", quantity: "1", unit: "tbsp" },
          { name: "Steamed Carrots and Broccoli", quantity: "½", unit: "cup" }
        ]
      },
    ]

    setTimeout(() => {
      setRecipes(allDinnerRecipes)
      setLoading(false)
    }, 500)
  }, [])

  // Filter recipes based on search query and selected cuisine
  const filteredRecipes = recipes.filter((recipe) => {
    // Filter by search query
    if (
      searchQuery &&
      !recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

    // Filter by cuisine
    if (selectedCuisine !== "All" && recipe.cuisine.name !== selectedCuisine) {
      return false
    }

    return true
  })

  // Sort recipes based on selected criteria
  const sortedRecipes = [...filteredRecipes].sort((a, b) => {
    if (sortBy === "calories-asc") return a.calories - b.calories
    if (sortBy === "calories-desc") return b.calories - a.calories
    if (sortBy === "protein-desc") return b.protein - a.protein
    if (sortBy === "prep-time") return a.prepTime - b.prepTime
    return 0 // default, no sorting
  })

  // Filter by favorites if needed
  const displayRecipes = showFavoritesOnly
    ? sortedRecipes.filter((recipe) => favorites.includes(recipe._id))
    : sortedRecipes

  // Get current recipes for pagination
  const indexOfLastRecipe = currentPage * recipesPerPage
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage
  const currentRecipes = displayRecipes.slice(indexOfFirstRecipe, indexOfLastRecipe)
  const totalPages = Math.ceil(displayRecipes.length / recipesPerPage)

  const handleCuisineChange = (cuisine) => {
    setSelectedCuisine(cuisine)
    setCurrentPage(1)
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  // Function to display recipe details
  const [selectedRecipe, setSelectedRecipe] = useState(null)

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe)
  }

  const closeRecipeDetails = () => {
    setSelectedRecipe(null)
  }

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
    setCurrentPage(1) // Reset to first page when sorting changes
  }

  const toggleFavorite = (e, recipeId) => {
    e.stopPropagation() // Prevent triggering the recipe click
    if (favorites.includes(recipeId)) {
      setFavorites(favorites.filter((id) => id !== recipeId))
    } else {
      setFavorites([...favorites, recipeId])
    }
  }

  const toggleFavoritesFilter = () => {
    setShowFavoritesOnly(!showFavoritesOnly)
    setCurrentPage(1) // Reset to first page
  }

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber)
    // Scroll to top of recipe grid
    document.querySelector(".recipes-grid").scrollIntoView({ behavior: "smooth" })
  }

  return (
    <div className="category-page">
      <header className="category-header" id="header-section">
        <h1>Dinner Recipes</h1>
        <p>Complete your day with these satisfying dinner options</p>
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
                <ScrollAnimation animationType="fade-in" delay={100}>
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
                </ScrollAnimation>

                <ScrollAnimation animationType="fade-in" delay={200}>
                  <div className="recipe-ingredients">
                    <h3>Ingredients</h3>
                    <ul className="ingredients-list">
                      {selectedRecipe.ingredients.map((ingredient, index) => (
                        <li key={index} style={{ animationDelay: `${index * 50}ms` }}>
                          <span className="ingredient-quantity">
                            {ingredient.quantity} {ingredient.unit}
                          </span>
                          <span className="ingredient-name">{ingredient.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollAnimation>

                <ScrollAnimation animationType="fade-in" delay={300}>
                  <div className="recipe-steps">
                    <h3>Instructions</h3>
                    <ol className="steps-list">
                      {selectedRecipe.steps.map((step, index) => (
                        <li key={index} style={{ animationDelay: `${index * 100}ms` }}>
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
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="filter-section" id="filters-section">
            <div className="search-container">
              <input
                type="search"
                placeholder="Search dinner recipes..."
                className="search-input"
                value={searchQuery}
                onChange={handleSearchChange}
              />
              <span className="search-icon">🔍</span>
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

          <div className="additional-filters">
            <div className="sort-container">
              <label htmlFor="sort-select">Sort by:</label>
              <select id="sort-select" value={sortBy} onChange={handleSortChange} className="sort-select">
                <option value="default">Default</option>
                <option value="calories-asc">Calories (Low to High)</option>
                <option value="calories-desc">Calories (High to Low)</option>
                <option value="protein-desc">Highest Protein</option>
                <option value="prep-time">Quickest Prep Time</option>
              </select>
            </div>

            <div className="favorites-filter">
              <button
                className={`favorites-button ${showFavoritesOnly ? "active" : ""}`}
                onClick={toggleFavoritesFilter}
              >
                {showFavoritesOnly ? "Show All Recipes" : "Show Favorites Only"}
              </button>
            </div>
          </div>

          <div className="back-to-categories">
            <button className="back-button" onClick={() => navigate("/meal-plan")}>
              ← Back to All Categories
            </button>
          </div>

          {loading ? (
            <div className="recipes-skeleton">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="recipe-skeleton">
                  <div className="skeleton-image"></div>
                  <div className="skeleton-content">
                    <div className="skeleton-title"></div>
                    <div className="skeleton-details"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : filteredRecipes.length === 0 ? (
            <div className="no-results">No dinner recipes match your filters. Try adjusting your search criteria.</div>
          ) : (
            <>
              <div className="recipes-grid" id="recipes-section">
                {currentRecipes.map((recipe, index) => (
                  <ScrollAnimation key={recipe._id} animationType="slide-up" delay={index * 100}>
                    <div className="recipe-item" onClick={() => handleRecipeClick(recipe)}>
                      <img src={recipe.image || "/placeholder.svg"} alt={recipe.name} className="recipe-image" />
                      <div className="recipe-overlay">
                        <h3>{recipe.name}</h3>
                        <div className="recipe-details">
                          <span>{recipe.calories} cal</span>
                          <span>{recipe.prepTime + recipe.cookTime} min</span>
                        </div>
                        <button
                          className={`favorite-toggle ${favorites.includes(recipe._id) ? "favorited" : ""}`}
                          onClick={(e) => toggleFavorite(e, recipe._id)}
                          aria-label={favorites.includes(recipe._id) ? "Remove from favorites" : "Add to favorites"}
                        >
                          {favorites.includes(recipe._id) ? "★" : "☆"}
                        </button>
                      </div>
                    </div>
                  </ScrollAnimation>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="pagination">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="pagination-button"
                  >
                    Previous
                  </button>

                  <div className="page-numbers">
                    {[...Array(totalPages)].map((_, index) => (
                      <button
                        key={index}
                        onClick={() => handlePageChange(index + 1)}
                        className={`page-number ${currentPage === index + 1 ? "active" : ""}`}
                      >
                        {index + 1}
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="pagination-button"
                  >
                    Next
                  </button>
                </div>
              )}

              {showFavoritesOnly && favorites.length === 0 && (
                <div className="no-favorites">
                  <p>You haven't added any favorites yet. Click the ☆ on recipes to add them to your favorites.</p>
                </div>
              )}
            </>
          )}
        </>
      )}
      {!selectedRecipe && (
        <ScrollNavigation
          sections={[
            { id: "header-section", label: "Top" },
            { id: "filters-section", label: "Filters" },
            { id: "recipes-section", label: "Recipes" },
          ]}
        />
      )}
    </div>
  )
}

export default DinnerPage