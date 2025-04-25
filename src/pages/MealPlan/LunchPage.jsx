"use client"

import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ScrollAnimation from "../../components/ScrollAnimation/ScrollAnimation"
import "./CategoryPage.css"

function LunchPage() {
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

  const cuisineOptions = ["All", "American", "Indian", "Italian", "Mexican", "French", "Thai", "Greek","Mediterranean","MIDDLE_EASTERN"]

  useEffect(() => {
    setLoading(true)

    const allLunchRecipes = [
      {
        _id: "301",
        name: "Grilled Chicken Buddha Bowl",
        description: "A balanced lunch bowl with lean protein, whole grains, and vegetables",
        prepTime: 15,
        cookTime: 20,
        servings: 1,
        calories: 520,
        protein: 40,
        carbs: 35,
        fats: 25,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Own%20bowl-61sMOEtRjVxLfV67ShQPGH6y3b7S4c.png",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Cook quinoa according to package instructions",
          "Season chicken breast with salt, pepper, and your favorite herbs",
          "Grill chicken for 6-7 minutes per side until fully cooked",
          "Slice cucumber and halve cherry tomatoes",
          "Arrange quinoa, chicken, and vegetables in a bowl",
          "Slice avocado and add to the bowl",
          "Drizzle with olive oil and lemon juice",
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "4", unit: "oz" },
          { name: "Quinoa", quantity: "1/2", unit: "cup" },
          { name: "Avocado", quantity: "1/2", unit: "medium" },
          { name: "Cherry Tomatoes", quantity: "1/2", unit: "cup" },
          { name: "Cucumber", quantity: "1/2", unit: "medium" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" },
        ],
      },
      {
        _id: "302",
        name: "Mediterranean Chickpea Salad",
        description: "A protein-rich salad with Mediterranean flavors",
        prepTime: 15,
        cookTime: 0,
        servings: 2,
        calories: 380,
        protein: 15,
        carbs: 45,
        fats: 18,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Own%20bowl-61sMOEtRjVxLfV67ShQPGH6y3b7S4c.png",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Drain and rinse chickpeas",
          "Dice cucumber, tomatoes, and red onion",
          "Chop fresh parsley and mint",
          "Combine all ingredients in a large bowl",
          "Whisk together olive oil, lemon juice, and spices",
          "Pour dressing over salad and toss to combine",
          "Crumble feta cheese on top before serving",
        ],
        ingredients: [
          { name: "Chickpeas", quantity: "1", unit: "can (15 oz)" },
          { name: "Cucumber", quantity: "1", unit: "medium" },
          { name: "Cherry Tomatoes", quantity: "1", unit: "cup" },
          { name: "Red Onion", quantity: "1/4", unit: "cup" },
          { name: "Feta Cheese", quantity: "1/4", unit: "cup" },
          { name: "Olive Oil", quantity: "2", unit: "tbsp" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" },
          { name: "Fresh Parsley", quantity: "1/4", unit: "cup" },
          { name: "Fresh Mint", quantity: "2", unit: "tbsp" },
        ],
      },
      {
        _id: "303",
        name: "Turkey and Avocado Wrap",
        description: "A quick and easy wrap with lean protein and healthy fats",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 420,
        protein: 30,
        carbs: 35,
        fats: 22,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Own%20bowl-61sMOEtRjVxLfV67ShQPGH6y3b7S4c.png",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Lay out the whole wheat wrap",
          "Spread hummus evenly over the wrap",
          "Layer turkey slices, avocado, spinach, and tomato",
          "Sprinkle with salt and pepper",
          "Roll up tightly and cut in half",
        ],
        ingredients: [
          { name: "Whole Wheat Wrap", quantity: "1", unit: "large" },
          { name: "Turkey Breast", quantity: "4", unit: "oz" },
          { name: "Avocado", quantity: "1/2", unit: "medium" },
          { name: "Hummus", quantity: "2", unit: "tbsp" },
          { name: "Spinach", quantity: "1", unit: "cup" },
          { name: "Tomato", quantity: "1/2", unit: "medium" },
          { name: "Salt and Pepper", quantity: "", unit: "to taste" },
        ],
      },
      {
        _id: "304",
        name: "Grilled Chicken with Sweet Potato and Broccoli",
        description: "Lean protein with fiber-rich veggies and complex carbs",
        prepTime: 10,
        cookTime: 25,
        servings: 2,
        calories: 450,
        protein: 45,
        carbs: 35,
        fats: 15,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "AMERICAN "},
        steps: [
          "Preheat the grill or a pan. Season chicken breasts with salt, pepper, garlic powder, and paprika.",
          "Grill the chicken for 6-8 minutes on each side until fully cooked.",
          "In a separate pan, heat olive oil and sauté the sweet potato until tender (about 10 minutes).",
          "Steam or sauté the broccoli until tender, about 4-5 minutes.",
          "Serve the chicken with sweet potato and broccoli."
        ],
        ingredients: [
          { name: "Chicken Breasts", quantity: "2", unit: "breasts" },
          { name: "Sweet Potato", quantity: "1", unit: "large" },
          { name: "Broccoli Florets", quantity: "1", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "305",
        name: "Turkey and Avocado Salad",
        description: "High-protein salad with healthy fats and fresh greens",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 45,
        carbs: 15,
        fats: 18,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Own%20bowl-61sMOEtRjVxLfV67ShQPGH6y3b7S4c.png",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Layer mixed greens, cucumber, and avocado on a plate.",
          "Top with sliced turkey breast.",
          "Drizzle with olive oil and balsamic vinegar, and toss gently."
        ],
        ingredients: [
          { name: "Turkey Breast", quantity: "6", unit: "oz" },
          { name: "Avocado", quantity: "1/2", unit: "medium" },
          { name: "Mixed Greens", quantity: "2", unit: "cups" },
          { name: "Cucumber", quantity: "1/4", unit: "medium" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Balsamic Vinegar", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "306",
        name: "Grilled Salmon with Quinoa and Asparagus",
        description: "Omega-3-rich salmon paired with whole grains and greens",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 500,
        protein: 40,
        carbs: 40,
        fats: 25,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Own%20bowl-61sMOEtRjVxLfV67ShQPGH6y3b7S4c.png",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Preheat the grill or pan. Season the salmon with salt, pepper, and olive oil.",
          "Grill the salmon for 4-6 minutes per side until cooked.",
          "Cook quinoa according to package instructions.",
          "Steam or grill the asparagus with a little olive oil and seasoning.",
          "Serve the salmon with quinoa and asparagus."
        ],
        ingredients: [
          { name: "Salmon Fillet", quantity: "6", unit: "oz" },
          { name: "Quinoa", quantity: "1/2", unit: "cup" },
          { name: "Asparagus", quantity: "1", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "307",
        name: "Chicken and Veggie Stir-Fry",
        description: "Protein-packed stir-fry with colorful vegetables",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        calories: 400,
        protein: 45,
        carbs: 30,
        fats: 15,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Own%20bowl-61sMOEtRjVxLfV67ShQPGH6y3b7S4c.png",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Heat sesame oil in a large pan or wok. Add garlic and ginger and sauté for 1 minute.",
          "Add chicken and cook until browned.",
          "Add bell peppers and broccoli, stir-fry for 5-7 minutes until tender.",
          "Pour in soy sauce and stir to coat everything. Serve with brown rice or quinoa."
        ],
        ingredients: [
          { name: "Chicken Breasts", quantity: "2", unit: "breasts" },
          { name: "Bell Peppers", quantity: "1", unit: "cup" },
          { name: "Broccoli Florets", quantity: "1/2", unit: "cup" },
          { name: "Soy Sauce (low-sodium)", quantity: "1/4", unit: "cup" },
          { name: "Sesame Oil", quantity: "1", unit: "tbsp" },
          { name: "Ginger", quantity: "1", unit: "tsp" },
          { name: "Garlic", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "308",
        name: "Tuna Salad Lettuce Wraps",
        description: "Low-carb wraps with protein-rich tuna and fresh veggies",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 300,
        protein: 30,
        carbs: 10,
        fats: 15,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Own%20bowl-61sMOEtRjVxLfV67ShQPGH6y3b7S4c.png",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Mix tuna, Greek yogurt (or mayo), mustard, celery, onion, salt, and pepper in a bowl.",
          "Spoon the mixture onto large lettuce leaves and wrap them up like a taco.",
          "Serve immediately."
        ],
        ingredients: [
          { name: "Canned Tuna (in water)", quantity: "1", unit: "can" },
          { name: "Greek Yogurt or Mayo (light)", quantity: "2", unit: "tbsp" },
          { name: "Mustard", quantity: "1", unit: "tbsp" },
          { name: "Celery", quantity: "1/2", unit: "stalk" },
          { name: "Red Onion", quantity: "1", unit: "tbsp" },
          { name: "Lettuce Leaves", quantity: "4", unit: "large" }
        ]
      },
      {
        _id: "309",
        name: "Chicken Quinoa Bowl",
        description: "Balanced bowl with grilled chicken and whole grains",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 450,
        protein: 40,
        carbs: 40,
        fats: 20,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Own%20bowl-61sMOEtRjVxLfV67ShQPGH6y3b7S4c.png",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Grill the chicken breast and slice it.",
          "In a bowl, combine cooked quinoa, cucumber, and tomatoes.",
          "Drizzle with olive oil and lemon juice.",
          "Top with grilled chicken slices and serve."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Quinoa", quantity: "1/2", unit: "cup" },
          { name: "Cucumber", quantity: "1/4", unit: "cup" },
          { name: "Cherry Tomatoes", quantity: "1/4", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "310",
        name: "Baked Salmon with Roasted Brussels Sprouts",
        description: "Omega-3-rich salmon with fiber-packed Brussels sprouts",
        prepTime: 10,
        cookTime: 20,
        servings: 1,
        calories: 450,
        protein: 40,
        carbs: 20,
        fats: 25,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Own%20bowl-61sMOEtRjVxLfV67ShQPGH6y3b7S4c.png",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Preheat the oven to 400°F (200°C).",
          "Season salmon fillet with salt, pepper, and olive oil.",
          "Toss Brussels sprouts with olive oil, balsamic vinegar, salt, and pepper.",
          "Place both salmon and Brussels sprouts on a baking sheet.",
          "Bake for 15-20 minutes, until the salmon is cooked through and Brussels sprouts are tender."
        ],
        ingredients: [
          { name: "Salmon Fillet", quantity: "6", unit: "oz" },
          { name: "Brussels Sprouts", quantity: "1", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Balsamic Vinegar", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "311",
        name: "Quinoa and Black Bean Salad with Grilled Chicken",
        description: "Protein-rich salad with quinoa, beans, and lime dressing",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 400,
        protein: 35,
        carbs: 45,
        fats: 12,
        image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Own%20bowl-61sMOEtRjVxLfV67ShQPGH6y3b7S4c.png",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Grill the chicken breast and slice it.",
          "Mix cooked quinoa, black beans, tomatoes, and corn in a large bowl.",
          "Drizzle with olive oil and lime juice, then top with grilled chicken slices."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Quinoa", quantity: "1/2", unit: "cup" },
          { name: "Black Beans", quantity: "1/2", unit: "cup" },
          { name: "Diced Tomatoes", quantity: "1/4", unit: "cup" },
          { name: "Corn Kernels", quantity: "1/4", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Lime Juice", quantity: "1", unit: "lime" }
        ]
      },
      {
        _id: "312",
        name: "Chicken Fajita Bowl",
        description: "Spicy chicken fajitas served over brown rice",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 400,
        protein: 35,
        carbs: 40,
        fats: 15,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Heat olive oil in a pan and sauté chicken until browned.",
          "Add bell pepper and onion to the pan and cook until tender.",
          "Serve the chicken and veggies over cooked brown rice, and squeeze lime on top."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Bell Pepper", quantity: "1", unit: "medium" },
          { name: "Onion", quantity: "1", unit: "medium" },
          { name: "Brown Rice", quantity: "1/2", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Fajita Seasoning", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "313",
        name: "Baked Chicken with Sweet Potato Fries",
        description: "Oven-baked chicken with crispy sweet potato fries",
        prepTime: 10,
        cookTime: 30,
        servings: 2,
        calories: 450,
        protein: 40,
        carbs: 45,
        fats: 15,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Preheat oven to 400°F (200°C).",
          "Season chicken breasts with olive oil, salt, pepper, and paprika, and bake for 25-30 minutes.",
          "Toss sweet potato fries in olive oil, salt, pepper, and paprika. Spread them on a baking sheet and bake for 20-25 minutes until crispy.",
          "Serve the chicken with sweet potato fries."
        ],
        ingredients: [
          { name: "Chicken Breasts", quantity: "2", unit: "breasts" },
          { name: "Sweet Potatoes", quantity: "2", unit: "medium" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "314",
        name: "Quinoa and Black Bean Salad with Grilled Chicken",
        description: "Protein-rich salad with quinoa, beans, and lime dressing",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 400,
        protein: 35,
        carbs: 45,
        fats: 12,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Grill the chicken breast and slice it.",
          "Mix cooked quinoa, black beans, tomatoes, and corn in a large bowl.",
          "Drizzle with olive oil and lime juice, then top with grilled chicken slices."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Quinoa", quantity: "1/2", unit: "cup" },
          { name: "Black Beans", quantity: "1/2", unit: "cup" },
          { name: "Diced Tomatoes", quantity: "1/4", unit: "cup" },
          { name: "Corn Kernels", quantity: "1/4", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Lime Juice", quantity: "1", unit: "lime" }
        ]
      },
      {
        _id: "315",
        name: "Egg White and Veggie Breakfast Muffins",
        description: "Low-calorie egg muffins with spinach and mushrooms",
        prepTime: 10,
        cookTime: 15,
        servings: 6,
        calories: 150,
        protein: 18,
        carbs: 8,
        fats: 6,
        image: "",
        category: { _id: "1", name: "LUNCH" },
        cuisine: { name: "AMERICAN "},
        steps: [
          "Preheat the oven to 350°F (175°C) and grease a muffin tin.",
          "Sauté spinach, mushrooms, and bell pepper in olive oil for 3-4 minutes.",
          "In a bowl, whisk egg whites and pour them into the muffin tin, adding the sautéed veggies.",
          "Bake for 12-15 minutes, until the egg muffins are set.",
          "Serve warm."
        ],
        ingredients: [
          { name: "Egg Whites", quantity: "6", unit: "whites" },
          { name: "Spinach", quantity: "1/2", unit: "cup" },
          { name: "Mushrooms", quantity: "1/2", unit: "cup" },
          { name: "Bell Pepper", quantity: "1/4", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "316",
        name: "Lean Beef Chili",
        description: "Hearty chili with lean beef and kidney beans",
        prepTime: 10,
        cookTime: 30,
        servings: 4,
        calories: 350,
        protein: 30,
        carbs: 25,
        fats: 15,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Brown the ground beef in a pan, then drain excess fat.",
          "Add onions and garlic, and cook until soft.",
          "Add kidney beans, diced tomatoes, chili powder, cumin, salt, and pepper.",
          "Simmer for 20-30 minutes, and serve hot."
        ],
        ingredients: [
          { name: "Lean Ground Beef", quantity: "1", unit: "lb" },
          { name: "Kidney Beans", quantity: "1", unit: "can" },
          { name: "Diced Tomatoes", quantity: "1", unit: "can" },
          { name: "Onion", quantity: "1", unit: "medium" },
          { name: "Garlic", quantity: "2", unit: "cloves" },
          { name: "Chili Powder", quantity: "1", unit: "tbsp" },
          { name: "Cumin", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: 317,
        name: "Grilled Tilapia with Brown Rice and Asparagus",
        description: "Light fish dish with whole grains and greens",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 400,
        protein: 35,
        carbs: 40,
        fats: 15,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MEDITERRANEAN" },
        steps: [
          "Season tilapia with salt, pepper, and olive oil. Grill for 4-5 minutes on each side until cooked through.",
          "Steam or grill asparagus with olive oil and seasoning.",
          "Serve tilapia with brown rice and asparagus, garnished with lemon wedges."
        ],
        ingredients: [
          { name: "Tilapia Fillet", quantity: "1", unit: "fillet" },
          { name: "Brown Rice", quantity: "1/2", unit: "cup" },
          { name: "Asparagus", quantity: "1", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: 318,
        name: "Turkey and Avocado Wrap",
        description: "Lean turkey wrap with avocado and fresh greens",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 30,
        carbs: 30,
        fats: 18,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Lay the turkey slices on a whole-wheat wrap.",
          "Add avocado slices, lettuce, and a spread of mustard or Greek yogurt.",
          "Roll up the wrap and serve immediately."
        ],
        ingredients: [
          { name: "Sliced Turkey Breast", quantity: "6", unit: "oz" },
          { name: "Whole-Wheat Wrap", quantity: "1", unit: "wrap" },
          { name: "Avocado", quantity: "1/2", unit: "medium" },
          { name: "Lettuce", quantity: "1/4", unit: "cup" },
          { name: "Mustard or Greek Yogurt", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: 319,
        name: "Chicken and Veggie Skewer's",
        description: "Grilled chicken and vegetable skewers with Mediterranean seasoning",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        calories: 400,
        protein: 45,
        carbs: 20,
        fats: 18,
        image: "",
        category: { _id: "2", name: "LUNCH "},
        cuisine: { name: "AMERICAN" },
        steps: [
          "Preheat the grill to medium-high heat.",
          "Thread the chicken, bell pepper, onion, and zucchini onto skewers.",
          "Brush with olive oil and season with salt, pepper, and oregano.",
          "Grill for 6-8 minutes per side until chicken is fully cooked.",
          "Serve hot."
        ],
        ingredients: [
          { name: "Chicken Breasts", quantity: "2", unit: "breasts" },
          { name: "Bell Pepper", quantity: "1", unit: "medium" },
          { name: "Onion", quantity: "1", unit: "medium" },
          { name: "Zucchini", quantity: "1", unit: "medium" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: 320,
        name: "Pulled Chicken with Roasted Vegetables",
        description: "Shredded chicken with roasted sweet potatoes and Brussels sprouts",
        prepTime: 10,
        cookTime: 25,
        servings: 2,
        calories: 450,
        protein: 40,
        carbs: 40,
        fats: 15,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Preheat the oven to 400°F (200°C).",
          "Toss sweet potato and Brussels sprouts in olive oil and seasonings, and roast for 20-25 minutes.",
          "Shred the cooked chicken breasts.",
          "Serve the pulled chicken with roasted vegetables."
        ],
        ingredients: [
          { name: "Chicken Breasts", quantity: "2", unit: "breasts" },
          { name: "Sweet Potato", quantity: "1", unit: "medium" },
          { name: "Brussels Sprouts", quantity: "1", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: 321,
        name: "Grilled Chicken Shawarma",
        description: "Middle Eastern-spiced grilled chicken with quinoa or brown rice",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 350,
        protein: 45,
        carbs: 20,
        fats: 15,
        image: "",
        category: { _id: "2", name: "LUNCH "},
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Marinate the chicken in olive oil, lemon juice, spices, salt, and pepper for at least 30 minutes.",
          "Grill the chicken on medium-high heat for 6-8 minutes until fully cooked.",
          "Serve with a side of quinoa or brown rice and steamed vegetables."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Olive Oil", quantity: "2", unit: "tbsp" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" },
          { name: "Cumin", quantity: "1", unit: "tsp" },
          { name: "Paprika", quantity: "1", unit: "tsp" },
          { name: "Turmeric", quantity: "1/2", unit: "tsp" },
          { name: "Cinnamon", quantity: "1/2", unit: "tsp" },
          { name: "Garlic Powder", quantity: "1/2", unit: "tsp" }
        ]
      },
      {
        _id: 322,
        name: "Lentil Soup (Shorbat Adas)",
        description: "Middle Eastern spiced lentil soup with carrots and lemon",
        prepTime: 10,
        cookTime: 30,
        servings: 4,
        calories: 300,
        protein: 15,
        carbs: 45,
        fats: 8,
        image: "",
        category: { _id: "2", name: "LUNCH "},
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Heat olive oil in a large pot and sauté onions, garlic, and carrots for 5 minutes.",
          "Add lentils, cumin, turmeric, salt, pepper, and vegetable broth. Bring to a boil.",
          "Lower the heat and simmer for 30 minutes or until lentils are tender.",
          "Serve hot with a squeeze of lemon."
        ],
        ingredients: [
          { name: "Lentils", quantity: "1", unit: "cup" },
          { name: "Onion", quantity: "1", unit: "medium" },
          { name: "Carrots", quantity: "2", unit: "medium" },
          { name: "Garlic", quantity: "2", unit: "cloves" },
          { name: "Cumin", quantity: "1", unit: "tsp" },
          { name: "Turmeric", quantity: "1/2", unit: "tsp" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Vegetable Broth", quantity: "4", unit: "cups" }
        ]
      },
      {
        _id: 323,
        name: "Chicken Kofta Kebabs",
        description: "Spiced ground chicken kebabs with herbs",
        prepTime: 15,
        cookTime: 15,
        servings: 4,
        calories: 400,
        protein: 45,
        carbs: 15,
        fats: 20,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Mix all ingredients in a bowl until well combined.",
          "Shape the mixture into small kebabs around skewers.",
          "Grill the koftas for 6-8 minutes on each side until fully cooked.",
          "Serve with a side of roasted vegetables and quinoa."
        ],
        ingredients: [
          { name: "Ground Chicken", quantity: "1", unit: "lb" },
          { name: "Parsley", quantity: "1/4", unit: "cup" },
          { name: "Onion", quantity: "1/2", unit: "medium" },
          { name: "Garlic", quantity: "1", unit: "clove" },
          { name: "Cumin", quantity: "1", unit: "tsp" },
          { name: "Cinnamon", quantity: "1/2", unit: "tsp" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: 324,
        name: "Shakshuka (Poached Eggs in Tomato Sauce)",
        description: "Middle Eastern poached eggs in spiced tomato sauce",
        prepTime: 10,
        cookTime: 20,
        servings: 2,
        calories: 350,
        protein: 20,
        carbs: 20,
        fats: 20,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Heat olive oil in a pan and sauté onions for 5 minutes.",
          "Add chopped tomatoes and spices, cooking for 10 minutes until sauce thickens.",
          "Create small wells in the sauce and crack eggs into each well.",
          "Cover the pan and cook for 5-7 minutes, until eggs are poached.",
          "Garnish with parsley and serve with whole-wheat pita bread."
        ],
        ingredients: [
          { name: "Eggs", quantity: "4", unit: "eggs" },
          { name: "Onion", quantity: "1", unit: "medium" },
          { name: "Tomatoes", quantity: "2", unit: "medium" },
          { name: "Olive Oil", quantity: "2", unit: "tbsp" },
          { name: "Cumin", quantity: "1", unit: "tsp" },
          { name: "Paprika", quantity: "1", unit: "tsp" },
          { name: "Cayenne Pepper", quantity: "1/4", unit: "tsp" }
        ]
      },
      {
        _id: "325",
        name: "Grilled Lamb Chops with Tabbouleh",
        description:" Middle Eastern lamb chops with herbed quinoa salad",
        prepTime: 15,
        cookTime: 20,
        servings: 2,
        calories: 500,
        protein: 45,
        carbs: 30,
        fats: 25,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN "},
        steps: [
          "Marinate lamb chops in olive oil, lemon juice, salt, and pepper for 30 minutes.",
          "Grill lamb chops for 4-5 minutes on each side.",
          "Cook quinoa and combine with parsley, tomatoes, cucumber, salt, and pepper.",
          "Serve the lamb with tabbouleh."
        ],
        ingredients: [
          { name: "Lamb Chops", quantity: "2", unit: "chops" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" },
          { name: "Quinoa", quantity: "1/2", unit: "cup" },
          { name: "Parsley", quantity: "1/4", unit: "cup" },
          { name: "Tomatoes", quantity: "1/4", unit: "cup" },
          { name: "Cucumber", quantity: "1/4", unit: "cup" }
        ]
      },
      {
        _id: "326",
        name: "Chicken and Hummus Bowl",
        description: "Grilled chicken with hummus and quinoa salad",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 400,
        protein: 40,
        carbs: 35,
        fats: 15,
        image: "",
        category: { _id: "2", name:" LUNCH "},
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Grill chicken breast and slice into strips.",
          "Serve chicken over quinoa, with a dollop of hummus.",
          "Add cucumbers and tomatoes, drizzle with olive oil and lemon."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Hummus", quantity: "1/4", unit: "cup" },
          { name: "Quinoa", quantity: "1/2", unit: "cup" },
          { name: "Cucumbers", quantity: "1/4", unit: "cup" },
          { name: "Cherry Tomatoes", quantity: "1/4", unit: "cup" }
        ]
      },
      {
        _id: "327",
        name: "Baked Chicken with Tahini Sauce",
        description: "Middle Eastern spiced chicken with creamy tahini",
        prepTime: 10,
        cookTime: 30,
        servings: 1,
        calories: 400,
        protein: 45,
        carbs: 15,
        fats: 20,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Preheat the oven to 375°F (190°C).",
          "Season chicken with salt, pepper, garlic powder, and cumin.",
          "Bake for 25-30 minutes, or until fully cooked.",
          "Mix tahini with lemon juice and drizzle over the chicken before serving."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Tahini", quantity: "2", unit: "tbsp" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" },
          { name: "Garlic Powder", quantity: "1", unit: "tsp" },
          { name: "Cumin", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "328",
        name: "Fattoush Salad with Grilled Chicken",
        description: "Middle Eastern bread salad with grilled chicken",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 350,
        protein: 35,
        carbs: 30,
        fats: 15,
        image: "",
        category: { _id: "2", name: "LUNCH "},
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Grill chicken breast and slice thinly.",
          "Combine mixed greens, cucumber, tomato, onion, and pita pieces in a bowl.",
          "Drizzle with olive oil, lemon juice, and sumac (optional).",
          "Top with grilled chicken."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Mixed Greens", quantity: "1", unit: "cup" },
          { name: "Cucumber", quantity: "1/2", unit: "medium" },
          { name: "Tomato", quantity: "1", unit: "medium" },
          { name: "Red Onion", quantity: "1/4", unit: "cup" },
          { name: "Whole-Wheat Pita", quantity: "1", unit: "pita" }
        ]
      },
      {
        _id: "329",
        name: "Grilled Salmon with Couscous and Vegetables",
        description: "Middle Eastern-inspired salmon with couscous",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 450,
        protein: 40,
        carbs: 40,
        fats: 20,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Preheat grill to medium-high heat.",
          "Season the salmon with salt and pepper, and grill for 4-5 minutes on each side.",
          "Cook couscous and sauté mixed vegetables in olive oil until tender.",
          "Serve grilled salmon with couscous and vegetables."
        ],
        ingredients: [
          { name: "Salmon Fillet", quantity: "1", unit: "fillet" },
          { name: "Couscous", quantity: "1/2", unit: "cup" },
          { name: "Mixed Vegetables", quantity: "1", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "330",
        name: "Falafel with Quinoa Salad",
        description: "Baked falafel with fresh quinoa salad",
        prepTime: 15,
        cookTime: 25,
        servings: 4,
        calories: 450,
        protein: 20,
        carbs: 45,
        fats: 18,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Blend chickpeas, parsley, tahini, garlic, cumin, lemon juice, salt, and pepper in a food processor until smooth.",
          "Form the mixture into small patties and bake at 375°F (190°C) for 25 minutes.",
          "Combine quinoa, cucumber, tomato, and olive oil in a bowl.",
          "Serve falafel over the quinoa salad."
        ],
        ingredients: [
          { name: "Chickpeas", quantity: "1", unit: "can" },
          { name: "Parsley", quantity: "1/4", unit: "cup" },
          { name: "Tahini", quantity: "2", unit: "tbsp" },
          { name: "Quinoa", quantity: "1/2", unit: "cup" },
          { name: "Cucumber", quantity: "1/4", unit: "cup" },
          { name: "Tomato", quantity: "1/4", unit: "cup" }
        ]
      },
      {
        _id: "331",
        name: "Grilled Chicken with Tabbouleh",
        description: "Herbed tabbouleh with grilled chicken",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 380,
        protein: 35,
        carbs: 35,
        fats: 15,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Grill the chicken breast and slice it thinly.",
          "Prepare the quinoa and mix with parsley, tomatoes, cucumber, olive oil, and lemon juice.",
          "Serve the chicken on top of the tabbouleh."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Quinoa", quantity: "1/2", unit: "cup" },
          { name: "Parsley", quantity: "1/4", unit: "cup" },
          { name: "Tomatoes", quantity: "1/4", unit: "cup" },
          { name: "Cucumber", quantity: "1/4", unit: "cup" }
        ]
      },
      {
        _id: "332",
        name: "Baked Falafel with Greek Yogurt",
        description: "Baked chickpea patties with yogurt dip",
        prepTime: 15,
        cookTime: 30,
        servings: 4,
        calories: 350,
        protein: 15,
        carbs: 40,
        fats: 15,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Blend chickpeas, parsley, onion, garlic, cumin, tahini, and flour until smooth.",
          "Form the mixture into small balls and place them on a baking sheet.",
          "Bake for 25-30 minutes or until golden.",
          "Serve with a side of Greek yogurt."
        ],
        ingredients: [
          { name: "Chickpeas", quantity: "1", unit: "can" },
          { name: "Parsley", quantity: "1/4", unit: "cup" },
          { name: "Onion", quantity: "1/4", unit: "cup" },
          { name: "Tahini", quantity: "1", unit: "tbsp" },
          { name: "Greek Yogurt", quantity: "1/2", unit: "cup" }
        ]
      },
      {
        _id: "333",
        name: "Lamb Kebab with Quinoa",
        description: "Spiced lamb kebabs with quinoa",
        prepTime: 15,
        cookTime: 20,
        servings: 4,
        calories: 450,
        protein: 30,
        carbs: 30,
        fats: 25,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Mix ground lamb, onion, garlic, cumin, olive oil, salt, and pepper in a bowl.",
          "Shape into kebabs and grill for 6-8 minutes on each side until cooked.",
          "Serve with a side of cooked quinoa."
        ],
        ingredients: [
          { name: "Ground Lamb", quantity: "1", unit: "lb" },
          { name: "Onion", quantity: "1", unit: "medium" },
          { name: "Cumin", quantity: "1", unit: "tsp" },
          { name: "Quinoa", quantity: "1/2", unit: "cup" }
        ]
      },
      {
        _id: "334",
        name: "Grilled Fish with Fattoush Salad",
        description: "Grilled fish with Middle Eastern bread salad",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 400,
        protein: 35,
        carbs: 25,
        fats: 20,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Season the fish with olive oil, lemon juice, cumin, paprika, salt, and pepper. Grill for 4-5 minutes on each side.",
          "Mix the greens, tomatoes, cucumber, onion, and pita pieces in a bowl.",
          "Drizzle with olive oil and lemon juice, then top with grilled fish."
        ],
        ingredients: [
          { name: "Fish Fillet", quantity: "1", unit: "fillet" },
          { name: "Mixed Greens", quantity: "1", unit: "cup" },
          { name: "Tomato", quantity: "1/4", unit: "cup" },
          { name: "Cucumber", quantity: "1/4", unit: "cup" },
          { name: "Whole Wheat Pita", quantity: "1", unit: "pita" }
        ]
      },
      {
        _id: "335",
        name: "Quinoa Stuffed Grape Leaves",
        description: "Vegetarian grape leaves stuffed with quinoa",
        prepTime: 20,
        cookTime: 30,
        servings: 4,
        calories: 300,
        protein: 8,
        carbs: 45,
        fats: 10,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Sauté onion and garlic in olive oil for 5 minutes.",
          "Add cooked quinoa, lemon juice, parsley, salt, and pepper to the pan, mixing well.",
          "Place grape leaves flat, add a spoonful of quinoa mixture to each, and roll tightly.",
          "Steam the rolls for 15-20 minutes until tender."
        ],
        ingredients: [
          { name: "Grape Leaves", quantity: "12", unit: "leaves" },
          { name: "Quinoa", quantity: "1/2", unit: "cup" },
          { name: "Onion", quantity: "1/4", unit: "cup" },
          { name: "Parsley", quantity: "1/4", unit: "cup" }
        ]
      },
      {
        _id: "336",
        name: "Chicken Shawarma Salad",
        description: "Middle Eastern chicken salad with tahini dressing",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 400,
        protein: 40,
        carbs: 25,
        fats: 18,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Grill the chicken breast and slice into thin strips.",
          "Toss the mixed greens, cucumber, tomatoes, and chicken in a bowl.",
          "Whisk together tahini, lemon juice, olive oil, salt, and pepper to make the dressing.",
          "Drizzle dressing over the salad and serve."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Mixed Greens", quantity: "2", unit: "cups" },
          { name: "Cucumber", quantity: "1/4", unit: "cup" },
          { name: "Tomatoes", quantity: "1/4", unit: "cup" },
          { name: "Tahini", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "337",
        name: "Eggplant and Chickpea Stew",
        description: "Middle Eastern spiced eggplant and chickpea stew",
        prepTime: 10,
        cookTime: 30,
        servings: 4,
        calories: 350,
        protein: 15,
        carbs: 45,
        fats: 15,
        image: "",
        category: { _id: "2", name:" LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Heat olive oil in a pot and sauté onion for 5 minutes.",
          "Add eggplant and cook for another 5 minutes.",
          "Add tomatoes, chickpeas, cumin, cinnamon, paprika, salt, and pepper. Simmer for 20 minutes."
        ],
        ingredients: [
          { name: "Eggplant", quantity: "1", unit: "medium" },
          { name: "Chickpeas", quantity: "1", unit: "can" },
          { name: "Onion", quantity: "1", unit: "medium" },
          { name: "Cumin", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "338",
        name: "Tahini Chicken Skewers",
        description: "Marinated chicken skewers with tahini",
        prepTime: 15,
        cookTime: 15,
        servings: 4,
        calories: 400,
        protein: 45,
        carbs: 10,
        fats: 20,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Combine tahini, lemon juice, olive oil, garlic, cumin, salt, and pepper in a bowl.",
          "Marinate the chicken cubes in the mixture for 30 minutes.",
          "Thread the chicken onto skewers and grill for 5-7 minutes on each side."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "lb" },
          { name: "Tahini", quantity: "2", unit: "tbsp" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" },
          { name: "Cumin", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "339",
        name: "Beef and Spinach Stuffed Pita",
        description: "Spiced beef and spinach stuffed pita",
        prepTime: 10,
        cookTime: 20,
        servings: 2,
        calories: 450,
        protein: 35,
        carbs: 35,
        fats: 20,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Cook ground beef with onion, cumin, paprika, salt, and pepper in a pan until browned.",
          "Add spinach and cook until wilted.",
          "Stuff the beef and spinach mixture into the pita halves."
        ],
        ingredients: [
          { name: "Ground Beef", quantity: "1/2", unit: "lb" },
          { name: "Spinach", quantity: "1/2", unit: "cup" },
          { name: "Onion", quantity: "1", unit: "medium" },
          { name: "Whole-Wheat Pita", quantity: "1", unit: "pita" }
        ]
      },
      {
        _id: "340",
        name: "Chicken and Vegetable Couscous",
        description: "Grilled chicken with couscous and veggies",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 400,
        protein: 30,
        carbs: 45,
        fats: 15,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "MIDDLE_EASTERN" },
        steps: [
          "Grill the chicken breast and slice into thin strips.",
          "Sauté zucchini and bell pepper in olive oil for 5 minutes.",
          "Combine the couscous, grilled chicken, sautéed vegetables, lemon juice, salt, and pepper."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Couscous", quantity: "1/2", unit: "cup" },
          { name: "Zucchini", quantity: "1/4", unit: "cup" },
          { name: "Bell Pepper", quantity: "1/4", unit: "cup" }
        ]
      },
      {
        _id: "341",
        name: "Chicken and Broccoli Stir-Fry",
        description: "Classic Chinese stir-fry with chicken and broccoli",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        calories: 350,
        protein: 40,
        carbs: 25,
        fats: 15,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "CHINESE" },
        steps: [
          "Heat olive oil in a pan and sauté garlic and ginger for 1 minute.",
          "Add chicken slices and cook until browned.",
          "Add broccoli and sauté for 5 minutes.",
          "Stir in soy sauce, oyster sauce, sesame oil, salt, and pepper. Cook for another 2 minutes.",
          "Serve with a side of brown rice or quinoa."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Broccoli Florets", quantity: "1", unit: "cup" },
          { name: "Soy Sauce (low-sodium)", quantity: "1", unit: "tbsp" },
          { name: "Sesame Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "342",
        name: "Tofu and Vegetable Stir-Fry",
        description: "Vegetarian stir-fry with tofu and fresh veggies",
        prepTime: 15,
        cookTime: 15,
        servings: 2,
        calories: 300,
        protein: 20,
        carbs: 25,
        fats: 18,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "CHINESE" },
        steps: [
          "Press tofu to remove excess moisture, then cube it.",
          "Heat sesame oil in a pan and sauté garlic and ginger for 1 minute.",
          "Add tofu and cook until golden brown.",
          "Add vegetables and sauté for another 5-7 minutes.",
          "Stir in soy sauce, rice vinegar, and sesame seeds. Cook for 2 more minutes."
        ],
        ingredients: [
          { name: "Firm Tofu", quantity: "1", unit: "block" },
          { name: "Bell Peppers", quantity: "1", unit: "cup" },
          { name: "Carrots", quantity: "1", unit: "cup" },
          { name: "Sesame Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "343",
        name: "Beef and Bok Choy Stir-Fry",
        description: "Savory beef and bok choy stir-fry",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        calories: 400,
        protein: 40,
        carbs: 15,
        fats: 20,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "CHINESE" },
        steps: [
          "Heat olive oil in a pan and sauté garlic and ginger for 1 minute.",
          "Add beef slices and cook until browned.",
          "Add bok choy and cook for another 3-5 minutes.",
          "Stir in soy sauce, oyster sauce, hoisin sauce, salt, and pepper. Cook for 2 more minutes."
        ],
        ingredients: [
          { name: "Lean Beef", quantity: "1", unit: "lb" },
          { name: "Bok Choy", quantity: "2", unit: "cups" },
          { name: "Soy Sauce (low-sodium)", quantity: "2", unit: "tbsp" },
          { name: "Hoisin Sauce", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "344",
        name: "Chicken and Cashew Stir-Fry",
        description: "Sweet and savory stir-fry with cashews",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        calories: 450,
        protein: 35,
        carbs: 30,
        fats: 25,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "CHINESE" },
        steps: [
          "Heat sesame oil in a pan and sauté garlic until fragrant.",
          "Add chicken slices and cook until browned.",
          "Add bell peppers, onions, and cashews, and stir-fry for 5 minutes.",
          "Stir in soy sauce, oyster sauce, and honey. Cook for another 2 minutes."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Cashews", quantity: "1/2", unit: "cup" },
          { name: "Bell Peppers", quantity: "1", unit: "cup" },
          { name: "Honey", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "345",
        name: "Egg Drop Soup with Tofu",
        description: "Light Chinese soup with silken tofu and eggs",
        prepTime: 5,
        cookTime: 10,
        servings: 2,
        calories: 200,
        protein: 16,
        carbs: 8,
        fats: 14,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "CHINESE" },
        steps: [
          "Heat chicken broth in a pot until boiling.",
          "Add soy sauce, sesame oil, and white pepper.",
          "Gently add tofu cubes to the broth and cook for 2-3 minutes.",
          "Slowly pour the beaten eggs into the broth while stirring to create egg ribbons.",
          "Garnish with green onions before serving."
        ],
        ingredients: [
          { name: "Silken Tofu", quantity: "1", unit: "block" },
          { name: "Chicken Broth", quantity: "3", unit: "cups" },
          { name: "Eggs", quantity: "2", unit: "eggs" },
          { name: "Green Onions", quantity: "1/4", unit: "cup" }
        ]
      },
      {
        _id: "346",
        name: "Shrimp and Snow Peas Stir-Fry",
        description: "Chinese stir-fry with shrimp and snow peas",
        prepTime: 10,
        cookTime: 10,
        servings: 2,
        calories: 300,
        protein: 40,
        carbs: 12,
        fats: 10,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "CHINESE" },
        steps: [
          "Heat olive oil in a pan and sauté garlic and ginger until fragrant.",
          "Add shrimp and cook until pink, about 3-4 minutes.",
          "Add snow peas and stir-fry for 2-3 minutes.",
          "Stir in soy sauce, oyster sauce, salt, and pepper. Cook for 2 more minutes."
        ],
        ingredients: [
          { name: "Shrimp", quantity: "1", unit: "lb" },
          { name: "Snow Peas", quantity: "1", unit: "cup" },
          { name: "Soy Sauce (low-sodium)", quantity: "1", unit: "tbsp" },
          { name: "Oyster Sauce", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "347",
        name: "Vegetable Fried Rice (Healthy Version)",
        description: "Chinese fried rice with brown rice and veggies",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        calories: 350,
        protein: 12,
        carbs: 50,
        fats: 15,
        image: "",
        category: { _id: "2", name: "LUNCH "},
        cuisine: { name: "CHINESE" },
        steps: [
          "Heat olive oil in a pan and scramble the eggs, then set aside.",
          "In the same pan, sauté carrots, peas, and corn for 5-7 minutes.",
          "Add the cooked rice and soy sauce, mixing well.",
          "Stir in sesame oil, scrambled eggs, and green onions. Cook for another 2 minutes."
        ],
        ingredients: [
          { name: "Brown Rice", quantity: "1", unit: "cup" },
          { name: "Carrots", quantity: "1/2", unit: "cup" },
          { name: "Peas", quantity: "1/2", unit: "cup" },
          { name: "Sesame Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "348",
        name: "Chicken and Vegetable Soup",
        description: "Chinese-inspired chicken vegetable soup",
        prepTime: 10,
        cookTime: 30,
        servings: 4,
        calories: 300,
        protein: 35,
        carbs: 25,
        fats: 8,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "CHINESE" },
        steps: [
          "Heat olive oil in a pot and sauté onion, garlic, carrots, and celery for 5 minutes.",
          "Add shredded chicken, chicken broth, thyme, salt, and pepper.",
          "Bring to a boil, then reduce heat and simmer for 20-30 minutes."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Carrots", quantity: "1", unit: "cup" },
          { name: "Celery", quantity: "1", unit: "cup" },
          { name: "Chicken Broth", quantity: "4", unit: "cups" }
        ]
      },
      {
        _id: "349",
        name: "Mapo Tofu (Light Version)",
        description: "Spicy Chinese tofu with ground meat",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        calories: 350,
        protein: 30,
        carbs: 10,
        fats: 20,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "CHINESE "},
        steps: [
          "Cook the ground pork or chicken in olive oil until browned.",
          "Add ginger, soy sauce, chili paste, and tofu cubes. Stir gently to coat.",
          "Simmer for 10 minutes, then garnish with green onions."
        ],
        ingredients: [
          { name: "Tofu", quantity: "1", unit: "block" },
          { name: "Ground Pork or Chicken", quantity: "1/2", unit: "lb" },
          { name: "Chili Paste", quantity: "1", unit: "tbsp" },
          { name: "Green Onions", quantity: "1/4", unit: "cup" }
        ]
      },
      {
        _id: "350",
        name: "Kung Pao Chicken (Healthy Version)",
        description: "Spicy Chinese chicken stir-fry with peanuts",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        calories: 400,
        protein: 35,
        carbs: 25,
        fats: 20,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "CHINESE" },
        steps: [
          "Heat sesame oil in a pan and sauté garlic for 1 minute.",
          "Add chicken and cook until browned.",
          "Add bell peppers, zucchini, and peanuts. Stir-fry for 5 minutes.",
          "Stir in soy sauce, rice vinegar, and honey, and cook for another 2 minutes."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Bell Peppers", quantity: "1/2", unit: "cup" },
          { name: "Peanuts", quantity: "1/4", unit: "cup" },
          { name: "Honey", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "351",
        name: "Chicken Parmesan (Light Version)",
        description: "Italian baked chicken with marinara and cheese",
        prepTime: 15,
        cookTime: 25,
        servings: 1,
        calories: 380,
        protein: 40,
        carbs: 20,
        fats: 18,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Coat the chicken in beaten egg, then dredge in breadcrumbs mixed with Parmesan cheese.",
          "Heat olive oil in a pan and cook chicken on both sides until golden.",
          "Transfer to a baking sheet, top with marinara sauce and mozzarella cheese, and bake for 15 minutes.",
          "Serve with a side of steamed vegetables or whole wheat pasta."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Whole Wheat Breadcrumbs", quantity: "1/2", unit: "cup" },
          { name: "Marinara Sauce", quantity: "1/2", unit: "cup" },
          { name: "Mozzarella Cheese", quantity: "1/4", unit: "cup" }
        ]
      },
      {
        _id: "352",
        name: "Zucchini Noodles with Pesto Chicken",
        description: "Italian zucchini noodles with pesto and grilled chicken",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 350,
        protein: 40,
        carbs: 15,
        fats: 20,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Heat olive oil in a pan and sauté zucchini noodles for 2-3 minutes.",
          "Toss the zucchini noodles with pesto sauce.",
          "Top with grilled chicken slices and sprinkle with Parmesan cheese.",
          "Serve immediately."
        ],
        ingredients: [
          { name: "Zucchini", quantity: "2", unit: "medium" },
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Basil Pesto", quantity: "1/4", unit: "cup" },
          { name: "Parmesan Cheese", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "353",
        name: "Grilled Salmon with Lemon and Capers",
        description: "Italian-style grilled salmon with lemon and capers",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 400,
        protein: 40,
        carbs: 5,
        fats: 25,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Preheat the grill or pan to medium-high heat.",
          "Drizzle the salmon fillet with olive oil, lemon zest, and juice, and season with salt and pepper.",
          "Grill the salmon for about 4-5 minutes per side until cooked through.",
          "Top with capers and serve with a side of steamed broccoli or quinoa."
        ],
        ingredients: [
          { name: "Salmon Fillet", quantity: "1", unit: "fillet" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" },
          { name: "Capers", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "354",
        name: "Turkey Meatballs in Marinara Sauce",
        description: "Italian turkey meatballs in tomato sauce",
        prepTime: 15,
        cookTime: 30,
        servings: 4,
        calories: 350,
        protein: 35,
        carbs: 20,
        fats: 18,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Mix turkey, egg, breadcrumbs, Parmesan, garlic powder, onion powder, salt, and pepper in a bowl.",
          "Roll into meatballs and bake for 15-20 minutes.",
          "Heat marinara sauce in a pan, then add the meatballs and simmer for 10 minutes.",
          "Serve with whole wheat pasta or zucchini noodles."
        ],
        ingredients: [
          { name: "Ground Turkey", quantity: "1", unit: "lb" },
          { name: "Breadcrumbs", quantity: "1/4", unit: "cup" },
          { name: "Marinara Sauce", quantity: "2", unit: "cups" }
        ]
      },
      {
        _id: "355",
        name: "Eggplant Parmesan (Healthy Version)",
        description: "Italian baked eggplant with marinara and cheese",
        prepTime: 15,
        cookTime: 30,
        servings: 4,
        calories: 300,
        protein: 18,
        carbs: 30,
        fats: 12,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Coat eggplant slices in beaten egg, then dredge in breadcrumbs mixed with Parmesan cheese.",
          "Lay the eggplant slices on a baking sheet, spray lightly with olive oil, and bake for 20 minutes.",
          "Top with marinara sauce and mozzarella cheese, then bake for another 10 minutes until the cheese melts.",
          "Serve with a side of steamed veggies."
        ],
        ingredients: [
          { name: "Eggplant", quantity: "1", unit: "medium" },
          { name: "Whole Wheat Breadcrumbs", quantity: "1/2", unit: "cup" },
          { name: "Mozzarella Cheese", quantity: "1/4", unit: "cup" }
        ]
      },
      {
        _id: "356",
        name: "Grilled Chicken and Arugula Salad",
        description: "Italian grilled chicken salad with arugula",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 350,
        protein: 40,
        carbs: 12,
        fats: 18,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Grill the chicken breast and slice it into thin strips.",
          "Toss arugula, tomatoes, and cucumber in a bowl.",
          "Drizzle with olive oil and balsamic vinegar, then add grilled chicken on top.",
          "Serve immediately."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "1", unit: "breast" },
          { name: "Arugula", quantity: "2", unit: "cups" },
          { name: "Cherry Tomatoes", quantity: "1/4", unit: "cup" }
        ]
      },
      {
        _id: "357",
        name: "Spinach and Ricotta Stuffed Chicken",
        description: "Italian stuffed chicken with spinach and ricotta",
        prepTime: 15,
        cookTime: 30,
        servings: 1,
        calories: 350,
        protein: 45,
        carbs: 5,
        fats: 18,
        image: "",
        category: { _id: "2", name: "LUNCH" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Mix ricotta cheese with sautéed spinach, salt, and pepper.",
          "Stuff the chicken breast with the mixture and secure with toothpicks.",
          "Heat olive oil in a pan and brown the chicken on both sides.",
          "Transfer the chicken to the oven and bake for 20-25 minutes."
        ],
        ingredients:
          [
            { name: "Chicken Breast", quantity: "1", unit: "breast" },
            { name: "Ricotta Cheese", quantity: "1/4", unit: "cup" },
            { name: "Spinach", quantity: "1/4", unit: "cup" },
            { name: "Olive Oil", quantity: "1", unit: "tbsp" }
          ]
        },
        {
          _id:"358",
          name: "Salmon and Tomato Salad",
          description: "Italian salad with grilled salmon and fresh tomatoes",
          prepTime: 10,
          cookTime: 10,
          servings: 1,
          calories: 400,
          protein: 35,
          carbs: 12,
          fats: 25,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "ITALIAN" },
          steps: [
            "Grill the salmon fillet and flake it into pieces.",
            "Toss the mixed greens, tomatoes, and red onion in a bowl.",
            "Drizzle with olive oil and lemon juice, then top with flaked salmon."
          ],
          ingredients: [
            { name: "Salmon Fillet", quantity: "1", unit: "fillet" },
            { name: "Mixed Greens", quantity: "2", unit: "cups" },
            { name: "Cherry Tomatoes", quantity: "1/4", unit: "cup" },
            { name: "Red Onion", quantity: "1/4", unit: "cup" }
          ]
        },
        {
          _id: "359",
          name: "Turkey Bolognese with Zucchini Noodles",
          description: "Italian turkey Bolognese served with zucchini noodles",
          prepTime: 10,
          cookTime: 20,
          servings: 2,
          calories: 400,
          protein: 45,
          carbs: 15,
          fats: 18,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "ITALIAN" },
          steps: [
            "Heat olive oil in a pan and sauté onions and carrots until soft.",
            "Add ground turkey and cook until browned.",
            "Stir in marinara sauce, salt, and pepper, and simmer for 10-15 minutes.",
            "Sauté zucchini noodles for 2-3 minutes, then serve topped with turkey Bolognese."
          ],
          ingredients: [
            { name: "Ground Turkey", quantity: "1", unit: "lb" },
            { name: "Zucchini", quantity: "2", unit: "medium" },
            { name: "Marinara Sauce", quantity: "2", unit: "cups" },
            { name: "Carrots", quantity: "1/2", unit: "cup" }
          ]
        },
        {
          _id: "360",
          name: "Caprese Chicken Salad",
          description: "Italian salad with grilled chicken, mozzarella, and tomatoes",
          prepTime: 10,
          cookTime: 10,
          servings: 1,
          calories: 380,
          protein: 40,
          carbs: 10,
          fats: 20,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "ITALIAN" },
          steps: [
            "Grill the chicken breast and slice it into thin strips.",
            "Arrange the chicken, mozzarella, tomatoes, and basil on a plate.",
            "Drizzle with olive oil, balsamic vinegar, salt, and pepper."
          ],
          ingredients: [
            { name: "Chicken Breast", quantity: "1", unit: "breast" },
            { name: "Fresh Mozzarella", quantity: "1/4", unit: "cup" },
            { name: "Cherry Tomatoes", quantity: "1/4", unit: "cup" },
            { name: "Fresh Basil", quantity: "a handful", unit: "" }
          ]
        },
        {
          _id: "361",
          name: "Chicken Piccata",
          description: "Italian lemon-caper chicken with herbs",
          prepTime: 10,
          cookTime: 20,
          servings: 1,
          calories: 350,
          protein: 45,
          carbs: 10,
          fats: 16,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "ITALIAN" },
          steps: [
            "Season chicken with salt and pepper, then sauté in olive oil and butter until golden.",
            "Remove chicken, then add chicken broth, lemon juice, and capers to the pan. Simmer for 5 minutes.",
            "Return chicken to the pan and cook for 5 more minutes.",
            "Garnish with fresh parsley and serve with quinoa or steamed vegetables."
          ],
          ingredients: [
            { name: "Chicken Breast", quantity: "1", unit: "breast" },
            { name: "Lemon Juice", quantity: "2", unit: "tbsp" },
            { name: "Capers", quantity: "2", unit: "tbsp" },
            { name: "Chicken Broth", quantity: "1/2", unit: "cup" }
          ]
        },
        {
          _id: "362",
          name: "Grilled Chicken with Balsamic Glaze",
          description: "Italian grilled chicken with sweet balsamic reduction",
          prepTime: 5,
          cookTime: 15,
          servings: 1,
          calories: 350,
          protein: 40,
          carbs: 10,
          fats: 15,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "ITALIAN" },
          steps: [
            "Grill the chicken breast until cooked through.",
            "In a small saucepan, simmer balsamic vinegar and honey until it thickens into a glaze.",
            "Drizzle glaze over the grilled chicken, then serve with a side of mixed greens or steamed vegetables."
          ],
          ingredients: [
            { name: "Chicken Breast", quantity: "1", unit: "breast" },
            { name: "Balsamic Vinegar", quantity: "2", unit: "tbsp" },
            { name: "Honey", quantity: "1", unit: "tsp" }
          ]
        },
        {
          _id: "363",
          name: "Tuna and White Bean Salad",
          description: "Italian-inspired tuna and bean salad",
          prepTime: 5,
          cookTime: 0,
          servings: 1,
          calories: 300,
          protein: 35,
          carbs: 30,
          fats: 12,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "ITALIAN" },
          steps: [
            "Mix tuna, white beans, onion, olive oil, lemon juice, and parsley in a bowl.",
            "Season with salt and pepper.",
            "Serve chilled or at room temperature."
          ],
          ingredients: [
            { name: "Canned Tuna", quantity: "1", unit: "can" },
            { name: "White Beans", quantity: "1", unit: "cup" },
            { name: "Red Onion", quantity: "1/2", unit: "medium" }
          ]
        },
        {
          _id: "364",
          name: "Spinach and Ricotta Stuffed Mushrooms",
          description: "Italian stuffed mushrooms with spinach and cheese",
          prepTime: 10,
          cookTime: 25,
          servings: 2,
          calories: 200,
          protein: 15,
          carbs: 10,
          fats: 14,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "ITALIAN" },
          steps: [
            "Preheat oven to 375°F (190°C).",
            "Mix ricotta, sautéed spinach, Parmesan, salt, and pepper.",
            "Stuff mushroom caps with the mixture and drizzle with olive oil.",
            "Bake for 20-25 minutes until mushrooms are tender."
          ],
          ingredients: [
            { name: "Mushroom Caps", quantity: "8", unit: "large" },
            { name: "Ricotta Cheese", quantity: "1/2", unit: "cup" },
            { name: "Spinach", quantity: "1", unit: "cup" }
          ]
        },
        {
          _id: "365",
          name: "Grilled Shrimp with Zucchini and Tomato",
          description: "Italian grilled shrimp with summer vegetables",
          prepTime: 10,
          cookTime: 10,
          servings: 2,
          calories: 300,
          protein: 35,
          carbs: 10,
          fats: 15,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "ITALIAN" },
          steps: [
            "Grill shrimp, zucchini, and tomatoes until shrimp is opaque and vegetables are tender.",
            "Drizzle with olive oil and lemon juice, then season with salt, pepper, and fresh herbs."
          ],
          ingredients: [
            { name: "Shrimp", quantity: "1", unit: "lb" },
            { name: "Zucchini", quantity: "2", unit: "medium" },
            { name: "Cherry Tomatoes", quantity: "1", unit: "cup" }
          ]
        },
        {
          _id: "366",
          name: "Eggplant and Tomato Ragu",
          description: "Italian eggplant-tomato stew",
          prepTime: 10,
          cookTime: 30,
          servings: 4,
          calories: 250,
          protein: 8,
          carbs: 30,
          fats: 12,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "ITALIAN" },
          steps: [
            "Heat olive oil in a pan and sauté onions and garlic.",
            "Add eggplant and cook until softened.",
            "Stir in diced tomatoes, salt, and pepper, and simmer for 15-20 minutes.",
            "Garnish with fresh basil and serve with whole-grain pasta or as a side dish."
          ],
          ingredients: [
            { name: "Eggplant", quantity: "2", unit: "medium" },
            { name: "Diced Tomatoes", quantity: "1", unit: "can" },
            { name: "Fresh Basil", quantity: "a handful", unit: "" }
          ]
        },
        {
          _id: "367",
          name: "Caprese Quinoa Salad",
          description: "Italian Caprese-inspired quinoa salad",
          prepTime: 10,
          cookTime: 15,
          servings: 1,
          calories: 350,
          protein: 15,
          carbs: 35,
          fats: 18,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "ITALIAN" },
          steps: [
            "Cook quinoa according to package instructions.",
            "Mix quinoa with tomatoes, mozzarella, basil, olive oil, and balsamic vinegar.",
            "Season with salt and pepper and serve chilled or at room temperature."
          ],
          ingredients: [
            { name: "Quinoa", quantity: "1", unit: "cup" },
            { name: "Cherry Tomatoes", quantity: "1/2", unit: "cup" },
            { name: "Fresh Mozzarella", quantity: "1/4", unit: "cup" }
          ]
        },
        {
          _id: "368",
          name: "Chicken Alfredo with Zucchini Noodles",
          description: "Italian zucchini noodles with creamy Alfredo chicken",
          prepTime: 10,
          cookTime: 15,
          servings: 1,
          calories: 350,
          protein: 40,
          carbs: 20,
          fats: 20,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "ITALIAN" },
          steps: [
            "Sauté zucchini noodles in olive oil until tender, then set aside.",
            "In the same pan, sauté garlic in olive oil and add cream and Parmesan cheese.",
            "Stir in chicken slices, zucchini noodles, and season with salt and pepper.",
            "Serve with a sprinkle of additional Parmesan."
          ],
          ingredients: [
            { name: "Chicken Breast", quantity: "1", unit: "breast" },
            { name: "Zucchini", quantity: "2", unit: "medium" },
            { name: "Heavy Cream", quantity: "1/4", unit: "cup" }
          ]
        },
        {
          _id: "369",
          name: "Italian Turkey Sausage and Peppers",
          description: "Italian sausage and peppers skillet",
          prepTime: 10,
          cookTime: 20,
          servings: 2,
          calories: 400,
          protein: 40,
          carbs: 20,
          fats: 20,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "ITALIAN" },
          steps: [
            "Slice turkey sausages and cook in olive oil until browned.",
            "Add onions, peppers, and garlic to the pan and sauté until tender.",
            "Season with salt and pepper and serve with whole wheat bread or a side salad."
          ],
          ingredients: [
            { name: "Turkey Sausages", quantity: "2", unit: "sausages" },
            { name: "Bell Peppers", quantity: "2", unit: "medium" },
            { name: "Onion", quantity: "1", unit: "medium" }
          ]
        },
        {
          _id: "370",
          name: "Lentil Soup with Spinach and Tomato",
          description: "Italian lentil soup with greens",
          prepTime: 10,
          cookTime: 35,
          servings: 4,
          calories: 300,
          protein: 20,
          carbs: 45,
          fats: 10,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "ITALIAN" },
          steps: [
            "Sauté onion and garlic in olive oil until soft.",
            "Add lentils, broth, diced tomatoes, salt, and pepper. Bring to a boil, then simmer for 25-30 minutes.",
            "Stir in spinach and cook for another 5 minutes."
          ],
          ingredients: [
            { name: "Lentils", quantity: "1", unit: "cup" },
            { name: "Spinach", quantity: "2", unit: "cups" },
            { name: "Diced Tomatoes", quantity: "1", unit: "can" }
          ]
        },
        {
          _id: "371",
          name: "Grilled Tandoori Chicken",
          description: "Indian spiced yogurt-marinated grilled chicken",
          prepTime: 10,
          cookTime: 30,
          servings: 1,
          calories: 300,
          protein: 45,
          carbs: 5,
          fats: 10,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Mix yogurt with spices, salt, and lemon juice.",
            "Marinate chicken in the mixture for at least 1 hour.",
            "Grill or bake at 375°F (190°C) for 25-30 minutes.",
            "Serve with a side of grilled veggies or a salad."
          ],
          ingredients: [
            { name: "Chicken Breast", quantity: "1", unit: "breast" },
            { name: "Greek Yogurt", quantity: "1/2", unit: "cup" },
            { name: "Garam Masala", quantity: "1", unit: "tsp" }
          ]
        },
        {
          _id: "372",
          name: "Moong Dal Chilla (Lentil Pancakes)",
          description: "Indian savory lentil pancakes",
          prepTime: 15,
          cookTime: 20,
          servings: 2,
          calories: 250,
          protein: 20,
          carbs: 30,
          fats: 5,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN "},
          steps: [
            "Blend soaked dal with ginger, green chili, and salt to make a smooth batter.",
            "Heat a pan, pour batter, and spread like a pancake.",
            "Cook with a little oil until golden brown.",
            "Serve with mint chutney or Greek yogurt."
          ],
          ingredients: [
            { name: "Moong Dal", quantity: "1", unit: "cup" },
            { name: "Ginger", quantity: "1/2", unit: "inch" },
            { name: "Green Chili", quantity: "1", unit: "whole" }
          ]
        },
        {
          _id: "373",
          name: "Paneer Bhurji (Scrambled Cottage Cheese)",
          description: "Indian spiced scrambled cottage cheese",
          prepTime: 10,
          cookTime: 15,
          servings: 1,
          calories: 350,
          protein: 30,
          carbs: 15,
          fats: 20,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Heat oil in a pan, sauté cumin seeds, onions, and chili.",
            "Add tomatoes, turmeric, and cook until soft.",
            "Add crumbled paneer, mix well, and cook for 2 minutes.",
            "Garnish with coriander and serve with whole wheat roti or quinoa."
          ],
          ingredients: [
            { name: "Paneer", quantity: "100", unit: "g" },
            { name: "Onion", quantity: "1/2", unit: "medium" },
            { name: "Tomato", quantity: "1", unit: "medium" }
          ]
        },
        {
          _id: "374",
          name: "Sprouts Salad",
          description: "Indian protein-packed sprout salad",
          prepTime: 5,
          cookTime: 0,
          servings: 1,
          calories: 200,
          protein: 18,
          carbs: 30,
          fats: 2,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Mix sprouts with chopped vegetables.",
            "Add lemon juice and salt.",
            "Toss well and serve fresh."
          ],
          ingredients: [
            { name: "Mixed Sprouts", quantity: "1", unit: "cup" },
            { name: "Cucumber", quantity: "1/2", unit: "medium" },
            { name: "Tomato", quantity: "1", unit: "medium" }
          ]
        },
        {
          _id: "375",
          name: "Egg Bhurji (Spicy Scrambled Eggs)",
          description: "Indian-style scrambled eggs with veggies",
          prepTime: 5,
          cookTime: 10,
          servings: 1,
          calories: 350,
          protein: 30,
          carbs: 5,
          fats: 20,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Heat oil, sauté onions, chili, and tomatoes.",
            "Add turmeric and cook until soft.",
            "Beat eggs and pour into the pan.",
            "Scramble until fully cooked. Serve with whole wheat bread or roti."
          ],
          ingredients: [
            { name: "Eggs", quantity: "3", unit: "whole" },
            { name: "Onion", quantity: "1/2", unit: "medium" },
            { name: "Tomato", quantity: "1", unit: "medium" }
          ]
        },
        {
          _id: "376",
          name: "Grilled Fish Masala",
          description: "Indian spiced grilled fish fillet",
          prepTime: 5,
          cookTime: 15,
          servings: 1,
          calories: 350,
          protein: 40,
          carbs: 5,
          fats: 18,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Rub fish with spices, salt, and lemon juice.",
            "Grill for 10-15 minutes until cooked.",
            "Serve with steamed veggies or quinoa."
          ],
          ingredients: [
            { name: "Fish Fillet", quantity: "1", unit: "fillet" },
            { name: "Turmeric", quantity: "1", unit: "tsp" },
            { name: "Garam Masala", quantity: "1", unit: "tsp" }
          ]
        },
        {
          _id: "377",
          name: "Chickpea and Spinach Stir-fry",
          description: "Indian chickpea and spinach stir-fry",
          prepTime: 10,
          cookTime: 10,
          servings: 2,
          calories: 300,
          protein: 20,
          carbs: 40,
          fats: 8,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Heat oil, sauté cumin seeds and spinach.",
            "Add chickpeas and turmeric, mix well.",
            "Cook for 5 minutes and serve hot."
          ],
          ingredients: [
            { name: "Chickpeas", quantity: "1", unit: "cup" },
            { name: "Spinach", quantity: "1", unit: "cup" },
            { name: "Turmeric", quantity: "1/2", unit: "tsp" }
          ]
        },
        {
          _id: "378",
          name: "Quinoa Khichdi",
          description: "Indian quinoa and lentil dish",
          prepTime: 10,
          cookTime: 15,
          servings: 2,
          calories: 320,
          protein: 25,
          carbs: 45,
          fats: 6,
          image: "",
          category: { _id: "2", name:" LUNCH "},
          cuisine: { name: "INDIAN" },
          steps: [
            "Heat oil, sauté cumin and turmeric.",
            "Add quinoa, dal, and chopped veggies.",
            "Add 2 cups of water, cover, and cook for 15 minutes.",
            "Serve hot."
          ],
          ingredients: [
            { name: "Quinoa", quantity: "1/2", unit: "cup" },
            { name: "Moong Dal", quantity: "1/2", unit: "cup" },
            { name: "Carrot", quantity: "1", unit: "whole" }
          ]
        },
        {
          _id: "739",
          name: "Chicken & Spinach Curry",
          description: "Indian chicken curry with spinach",
          prepTime: 10,
          cookTime: 20,
          servings: 2,
          calories: 380,
          protein: 45,
          carbs: 10,
          fats: 15,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Heat oil, sauté onions, ginger-garlic paste, and tomatoes.",
            "Add chicken and cook for 10 minutes.",
            "Stir in spinach, cover, and cook until soft."
          ],
          ingredients: [
            { name: "Chicken Breast", quantity: "1", unit: "breast" },
            { name: "Spinach", quantity: "1", unit: "cup" },
            { name: "Onion", quantity: "1", unit: "medium" }
          ]
        },
        {
          _id: "380",
          name: "Methi Chicken (Fenugreek Chicken) with Millets",
          description: "Indian chicken curry with fenugreek and millets",
          prepTime: 15,
          cookTime: 30,
          servings: 2,
          calories: 450,
          protein: 50,
          carbs: 40,
          fats: 12,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Heat oil in a pan, sauté onions and ginger-garlic paste until golden.",
            "Add diced chicken and cook until browned.",
            "Add chopped tomatoes, turmeric, cumin, garam masala, and salt. Cook for 10 minutes.",
            "Stir in chopped methi leaves and simmer for another 5 minutes.",
            "Serve hot with cooked millets."
          ],
          ingredients: [
            { name: "Chicken Breast", quantity: "200", unit: "g" },
            { name: "Fresh Methi Leaves", quantity: "1", unit: "cup" },
            { name: "Onion", quantity: "1", unit: "medium" },
            { name: "Tomatoes", quantity: "2", unit: "medium" },
            { name: "Foxtail or Barnyard Millet", quantity: "1/2", unit: "cup" }
          ]
        },
        {
          _id: "381",
          name:" Grilled Chicken Tikka with Brown Rice",
          description: "Indian spiced grilled chicken with brown rice",
          prepTime: 15,
          cookTime: 30,
          servings: 2,
          calories: 450,
          protein: 50,
          carbs: 40,
          fats: 12,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Marinate chicken in yogurt, spices, and lemon juice for 2 hours.",
            "Grill chicken until golden and cooked.",
            "Serve with cooked brown rice and cucumber salad."
          ],
          ingredients: [
            { name: "Chicken Breast", quantity: "200", unit: "g" },
            { name: "Greek Yogurt", quantity: "1/2", unit: "cup" },
            { name: "Brown Rice", quantity: "1/2", unit: "cup" }
          ]
        },
        {
          _id: "382",
          name: "Palak Chicken (Spinach Chicken)",
          description: "Indian chicken curry with spinach",
          prepTime: 10,
          cookTime: 25,
          servings: 2,
          calories: 400,
          protein: 45,
          carbs: 20,
          fats: 12,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Heat oil, sauté onions, and garlic.",
            "Add chicken and cook until golden.",
            "Add tomatoes, spinach puree, and spices. Cook for 15 minutes.",
            "Serve with brown rice or quinoa."
          ],
          ingredients: [
            { name: "Chicken Breast", quantity: "200", unit: "g" },
            { name: "Spinach", quantity: "2", unit: "cups" },
            { name: "Onion", quantity: "1", unit: "medium" }
          ]
        },
        {
          _id: "383",
          name: "Rajma (Kidney Bean Curry) with Brown Rice",
          description: "Indian kidney bean curry with brown rice",
          prepTime: 10,
          cookTime: 30,
          servings: 2,
          calories: 400,
          protein: 25,
          carbs: 60,
          fats: 8,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Heat oil, sauté cumin, onions, and garlic.",
            "Add tomatoes and spices, cook until soft.",
            "Add boiled kidney beans and simmer for 10-15 minutes.",
            "Serve with brown rice."
          ],
          ingredients: [
            { name: "Kidney Beans", quantity: "1", unit: "cup" },
            { name: "Brown Rice", quantity: "1/2", unit: "cup" },
            { name: "Cumin Seeds", quantity: "1", unit: "tsp" }
          ]
        },
        {
          _id: "384",
          name: "Grilled Fish Tikka with Quinoa Salad",
          description: "Indian spiced grilled fish with quinoa salad",
          prepTime: 10,
          cookTime: 20,
          servings: 2,
          calories: 450,
          protein: 50,
          carbs: 40,
          fats: 15,
          image: "",
          category: { _id: "2", name:" LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Marinate fish with turmeric, cumin, lemon juice, and salt.",
            "Grill until cooked.",
            "Toss quinoa with cucumber, tomato, and olive oil.",
            "Serve fish with quinoa salad."
          ],
          ingredients: [
            { name: "Fish Fillet", quantity: "200", unit: "g" },
            { name: "Quinoa", quantity: "1/2", unit: "cup" },
            { name: "Cucumber", quantity: "1/2", unit: "medium" }
          ]
        },
        {
          _id: "385",
          name: "Chicken Keema with Whole Wheat Roti",
          description: "Indian minced chicken curry with whole wheat roti",
          prepTime: 10,
          cookTime: 25,
          servings: 2,
          calories: 500,
          protein: 45,
          carbs: 40,
          fats: 15,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Heat oil, sauté onions, cumin seeds, and garlic paste.",
            "Add minced chicken and cook until browned.",
            "Add tomatoes, spices, and cook for 15 minutes.",
            "Serve with whole wheat roti."
          ],
          ingredients: [
            { name: "Minced Chicken", quantity: "200", unit: "g" },
            { name: "Whole Wheat Roti", quantity: "2", unit: "rotis" },
            { name: "Cumin Seeds", quantity: "1", unit: "tsp" }
          ]
        },
        {
          _id: "386",
          name: "Chana Masala with Brown Rice",
          description: "Indian chickpea curry with brown rice",
          prepTime: 10,
          cookTime: 30,
          servings: 2,
          calories: 400,
          protein: 20,
          carbs: 60,
          fats: 10,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Heat oil, sauté onions, garlic, and tomatoes.",
            "Add chickpeas and spices.",
            "Simmer for 10-15 minutes.",
            "Serve with brown rice."
          ],
          ingredients: [
            { name: "Chickpeas", quantity: "1", unit: "cup" },
            { name: "Brown Rice", quantity: "1/2", unit: "cup" },
            { name: "Cumin Seeds", quantity: "1", unit: "tsp" }
          ]
        },
        {
          _id: "387",
          name: "Egg Curry with Quinoa",
          description: "Indian egg curry with quinoa",
          prepTime: 10,
          cookTime: 20,
          servings: 2,
          calories: 400,
          protein: 35,
          carbs: 40,
          fats: 15,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Heat oil, sauté onions, cumin, and tomatoes.",
            "Add turmeric, garam masala, and salt.",
            "Add boiled eggs and cook for 5 minutes.",
            "Serve with quinoa."
          ],
          ingredients: [
            { name: "Boiled Eggs", quantity: "3", unit: "eggs" },
            { name: "Quinoa", quantity: "1/2", unit: "cup" },
            { name: "Cumin Seeds", quantity: "1", unit: "tsp" }
          ]
        },
        {
          _id: "388",
          name: "Grilled Paneer Tikka with Brown Rice",
          description: "Indian grilled paneer with brown rice",
          prepTime: 10,
          cookTime: 25,
          servings: 2,
          calories: 450,
          protein: 35,
          carbs: 50,
          fats: 15,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Marinate paneer with yogurt and spices.",
            "Grill for 10-15 minutes.",
            "Serve with brown rice and cucumber salad."
          ],
          ingredients: [
            { name: "Paneer", quantity: "100", unit: "g" },
            { name: "Greek Yogurt", quantity: "1/2", unit: "cup" },
            { name: "Brown Rice", quantity: "1/2", unit: "cup" }
          ]
        },
        {
          _id: "389",
          name: "Dal Palak (Lentils with Spinach)",
          description: "Indian lentil and spinach stew",
          prepTime: 10,
          cookTime: 30,
          servings: 2,
          calories: 350,
          protein: 25,
          carbs: 40,
          fats: 8,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Cook dal until soft.",
            "Heat oil, sauté onions, cumin, tomatoes, and spinach.",
            "Add cooked dal and simmer for 5-10 minutes."
          ],
          ingredients: [
            { name: "Moong Dal", quantity: "1/2", unit: "cup" },
            { name: "Spinach", quantity: "1", unit: "cup" },
            { name: "Cumin Seeds", quantity: "1", unit: "tsp" }
          ]
        },
        {
          _id: "390",
          name: "Soya Chunk Curry with Brown Rice",
          description: "Indian soy chunk curry with brown rice",
          prepTime: 10,
          cookTime: 25,
          servings: 2,
          calories: 400,
          protein: 35,
          carbs: 45,
          fats: 10,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Sauté onions, garlic, and tomatoes in oil.",
            "Add boiled soya chunks and spices.",
            "Simmer for 10-15 minutes.",
            "Serve with brown rice."
          ],
          ingredients: [
            { name: "Soya Chunks", quantity: "1", unit: "cup" },
            { name: "Brown Rice", quantity: "1/2", unit: "cup" },
            { name: "Cumin Powder", quantity: "1", unit: "tsp" }
          ]
        },
        {
          _id: "391",
          name: "Grilled Chicken with Dal Tadka & Brown Rice",
          description: "Indian grilled chicken with tempered lentils and rice",
          prepTime: 15,
          cookTime: 30,
          servings: 2,
          calories: 600,
          protein: 65,
          carbs: 55,
          fats: 12,
          image: "",
          category: { _id: "2", name:" LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Cook dal with turmeric, then temper with ghee, cumin, and garlic.",
            "Grill chicken with salt and pepper.",
            "Serve dal with brown rice and grilled chicken."
          ],
          ingredients: [
            { name: "Chicken Breast", quantity: "200", unit: "g" },
            { name: "Toor Dal", quantity: "1/2", unit: "cup" },
            { name: "Brown Rice", quantity: "1/2", unit: "cup" }
          ]
        },
        {
          _id: "392",
          name: "Quinoa Khichdi with Paneer",
          description: "Indian quinoa and lentil dish with paneer",
          prepTime: 10,
          cookTime: 25,
          servings: 2,
          calories: 500,
          protein: 40,
          carbs: 55,
          fats: 10,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Cook quinoa and dal together.",
            "In a pan, heat ghee, add cumin, turmeric, and paneer cubes.",
            "Mix with khichdi and serve."
          ],
          ingredients: [
            { name: "Quinoa", quantity: "1/2", unit: "cup" },
            { name: "Moong Dal", quantity: "1/2", unit: "cup" },
            { name: "Paneer", quantity: "100", unit: "g" }
          ]
        },
        {
          _id: "393",
          name: "Soya Keema with Whole Wheat Roti",
          description: "Indian plant-based minced soy curry with roti",
          prepTime: 10,
          cookTime: 20,
          servings: 2,
          calories: 550,
          protein: 50,
          carbs: 60,
          fats: 8,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Sauté onion, cumin, and ginger-garlic paste.",
            "Add soya, tomato, turmeric, and cook for 10 minutes.",
            "Serve with whole wheat roti."
          ],
          ingredients: [
            { name: "Soya Granules", quantity: "1", unit: "cup" },
            { name: "Whole Wheat Roti", quantity: "2", unit: "rotis" },
            { name: "Cumin", quantity: "1", unit: "tsp" }
          ]
        },
        {
          _id: "394",
          name: "Egg Bhurji with Bajra Roti",
          description: "Indian scrambled eggs with millet flatbread",
          prepTime: 10,
          cookTime: 15,
          servings: 2,
          calories: 500,
          protein: 45,
          carbs: 50,
          fats: 15,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Scramble eggs with onion, tomato, and spices in ghee.",
            "Serve with bajra rotis."
          ],
          ingredients: [
            { name: "Eggs", quantity: "3", unit: "whole" },
            { name: "Bajra Roti", quantity: "2", unit: "rotis" },
            { name: "Onion", quantity: "1", unit: "medium" }
          ]
        },
        {
          _id: "395",
          name: "Chicken Tikka with Millet Pulao",
          description: "Indian grilled chicken with foxtail millet",
          prepTime: 15,
          cookTime: 30,
          servings: 2,
          calories: 580,
          protein: 60,
          carbs: 50,
          fats: 10,
          image: "",
          category: { _id: "2", name:" LUNCH "},
          cuisine: { name: "INDIAN" },
          steps: [
            "Marinate chicken with yogurt, turmeric, and lemon juice for 1 hour.",
            "Grill chicken until cooked.",
            "Cook millet and serve with chicken."
          ],
          ingredients: [
            { name: "Chicken Breast", quantity: "200", unit: "g" },
            { name: "Foxtail Millet", quantity: "1/2", unit: "cup" },
            { name: "Yogurt", quantity: "1/2", unit: "cup" }
          ]
        },
        {
          _id: "396",
          name: "Chana Masala with Quinoa",
          description: "Indian chickpea curry with quinoa",
          prepTime: 10,
          cookTime: 30,
          servings: 2,
          calories: 520,
          protein: 45,
          carbs: 60,
          fats: 8,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Sauté onion and tomato with spices.",
            "Add chickpeas and cook for 10 minutes.",
            "Serve with quinoa."
          ],
          ingredients: [
            { name: "Chickpeas", quantity: "1", unit: "cup" },
            { name: "Quinoa", quantity: "1/2", unit: "cup" },
            { name: "Turmeric", quantity: "1/2", unit: "tsp" }
          ]
        },
        {
          _id: "397",
          name: "Masoor Dal with Grilled Fish",
          description: "Indian lentil dish with grilled fish",
          prepTime: 10,
          cookTime: 30,
          servings: 2,
          calories: 540,
          protein: 50,
          carbs: 45,
          fats: 15,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Cook masoor dal until soft.",
            "Grill fish with spices.",
            "Serve dal with grilled fish."
          ],
          ingredients: [
            { name: "Masoor Dal", quantity: "1/2", unit: "cup" },
            { name: "Fish Fillet", quantity: "200", unit: "g" },
            { name: "Cumin", quantity: "1", unit: "tsp" }
          ]
        },
        {
          _id: "398",
          name: "Vegetable Biryani with Raita",
          description: "Indian spiced rice with mixed vegetables and yogurt sauce",
          prepTime: 15,
          cookTime: 30,
          servings: 2,
          calories: 600,
          protein: 15,
          carbs: 90,
          fats: 20,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Sauté onions, add mixed vegetables and spices.",
            "Add rice and water, cook until done.",
            "Serve with raita."
          ],
          ingredients: [
            { name: "Basmati Rice", quantity: "1", unit: "cup" },
            { name: "Mixed Vegetables", quantity: "1", unit: "cup" },
            { name: "Yogurt", quantity: "1/2", unit: "cup" }
          ]
        },
        {
          _id: "399",
          name: "Paneer Butter Masala with Naan",
          description: "Indian paneer curry in creamy tomato sauce with naan",
          prepTime: 10,
          cookTime: 25,
          servings: 2,
          calories: 700,
          protein: 30,
          carbs: 60,
          fats: 40,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN "},
          steps: [
            "Sauté onions and tomatoes, add spices.",
            "Add paneer and cream, simmer for 10 minutes.",
            "Serve with naan."
          ],
          ingredients: [
            { name: "Paneer", quantity: "200", unit: "g" },
            { name: "Tomato Puree", quantity: "1", unit: "cup" },
            { name: "Cream", quantity: "1/4", unit: "cup" }
          ]
        },
        {
          _id: "400",
          name: "Vegetable Sambar with Rice",
          description: "South Indian lentil stew with vegetables and rice",
          prepTime: 15,
          cookTime: 30,
          servings: 2,
          calories: 500,
          protein: 20,
          carbs: 80,
          fats: 10,
          image: "",
          category: { _id: "2", name: "LUNCH" },
          cuisine: { name: "INDIAN" },
          steps: [
            "Cook lentils and vegetables with spices.",
            "Serve hot with rice."
          ],
          ingredients: [
            { name: "Toor Dal", quantity: "1/2", unit: "cup" },
            { name: "Mixed Vegetables", quantity: "1", unit: "cup" },
            { name: "Rice", quantity: "1", unit: "cup" }
          ]
        }
    ]

    setTimeout(() => {
      setRecipes(allLunchRecipes)
      setLoading(false)
    }, 500)
  }, [])  

  const filteredRecipes = recipes.filter((recipe) => {
    if (
      searchQuery &&
      !recipe.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      !recipe.description.toLowerCase().includes(searchQuery.toLowerCase())
    ) {
      return false
    }

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
      <header className="category-header">
        <h1>Lunch Recipes</h1>
        <p>Energize your midday with these balanced lunch options</p>
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
          <div className="filter-section">
            <div className="search-container">
              <input
                type="search"
                placeholder="Search lunch recipes..."
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
            <div className="no-results">No lunch recipes match your filters. Try adjusting your search criteria.</div>
          ) : (
            <>
              <div className="recipes-grid">
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
    </div>
  )
}

export default LunchPage
