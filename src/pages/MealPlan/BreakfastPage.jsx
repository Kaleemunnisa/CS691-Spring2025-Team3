import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import ScrollAnimation from "../../components/ScrollAnimation/ScrollAnimation"
import "./CategoryPage.css"
import B1 from "./Breakfast/101.jpeg"
import B2 from "./Breakfast/102.jpeg"
import B3 from "./Breakfast/103.jpg"
import B4 from "./Breakfast/104.jpg"
import B5 from "./Breakfast/105.jpg"
import B6 from "./Breakfast/106.jpg"
import B7 from "./Breakfast/107.jpg"
import B8 from "./Breakfast/108.jpg"
import B9 from "./Breakfast/109.jpg"
import B10 from "./Breakfast/110.jpg"
import B11 from "./Breakfast/111.jpg"
import B12 from "./Breakfast/112.jpg"
import B13 from "./Breakfast/113.jpg"
import B14 from "./Breakfast/114.jpg"
import B15 from "./Breakfast/115.jpg"
import B16 from "./Breakfast/116.jpg"
import B17 from "./Breakfast/117.jpg"
import B18 from "./Breakfast/118.jpg"
import B19 from "./Breakfast/119.jpg"
import B20 from "./Breakfast/120.jpg"
import B21 from "./Breakfast/121.jpg"
import B22 from "./Breakfast/122.jpg"
import B23 from "./Breakfast/123.jpg"
import B24 from "./Breakfast/124.jpg"
import B25 from "./Breakfast/125.jpg"
import B26 from "./Breakfast/126.jpg"
import B27 from "./Breakfast/127.jpg"
import B28 from "./Breakfast/128.jpg"
import B29 from "./Breakfast/129.jpg"
import B30 from "./Breakfast/130.jpg"
import B31 from "./Breakfast/131.jpg"
import B32 from "./Breakfast/132.jpg"
import B33 from "./Breakfast/133.jpg"
import B34 from "./Breakfast/134.jpg"
import B35 from "./Breakfast/135.jpg"
import B36 from "./Breakfast/136.jpg"
import B37 from "./Breakfast/137.jpg"
import B38 from "./Breakfast/138.jpg"
import B39 from "./Breakfast/139.jpg"
import B40 from "./Breakfast/140.jpg"
import B41 from "./Breakfast/141.jpg"
import B42 from "./Breakfast/142.jpg"
import B43 from "./Breakfast/143.jpg"
import B44 from "./Breakfast/144.jpg"
import B45 from "./Breakfast/145.jpg"
import B46 from "./Breakfast/146.jpg"
import B47 from "./Breakfast/147.jpg"
import B48 from "./Breakfast/148.jpg"
import B49 from "./Breakfast/149.jpg"
import B50 from "./Breakfast/150.jpg"


function BreakfastPage() {
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
    const allBreakfastRecipes = [
      {
        _id: "101",
        name: "Protein-Packed Oatmeal Bowl",
        description: "A hearty breakfast bowl with oats, protein powder, and fresh fruits",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 420,
        protein: 30,
        carbs: 55,
        fats: 12,
        image: B1,
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Bring almond milk to a simmer in a small pot",
          "Add oats and cook for 3-5 minutes, stirring occasionally",
          "Remove from heat and stir in protein powder",
          "Transfer to a bowl and top with sliced banana, berries, and chia seeds",
        ],
        ingredients: [
          { name: "Rolled Oats", quantity: "1/2", unit: "cup" },
          { name: "Protein Powder", quantity: "1", unit: "scoop" },
          { name: "Almond Milk", quantity: "1", unit: "cup" },
          { name: "Banana", quantity: "1", unit: "medium" },
          { name: "Berries", quantity: "1/4", unit: "cup" },
          { name: "Chia Seeds", quantity: "1", unit: "tbsp" },
        ],
      },
      {
        _id: "102",
        name: "Avocado Toast with Poached Eggs",
        description: "Classic avocado toast topped with perfectly poached eggs",
        prepTime: 10,
        cookTime: 5,
        servings: 1,
        calories: 350,
        protein: 15,
        carbs: 30,
        fats: 20,
        image: B2,
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Toast bread until golden brown",
          "Mash avocado and spread on toast",
          "Bring water to a simmer and add vinegar",
          "Poach eggs for 3 minutes",
          "Place eggs on avocado toast and season with salt and pepper",
        ],
        ingredients: [
          { name: "Whole Grain Bread", quantity: "2", unit: "slices" },
          { name: "Avocado", quantity: "1", unit: "medium" },
          { name: "Eggs", quantity: "2", unit: "large" },
          { name: "White Vinegar", quantity: "1", unit: "tbsp" },
          { name: "Salt", quantity: "1/4", unit: "tsp" },
          { name: "Pepper", quantity: "1/4", unit: "tsp" },
        ],
      },
      {
        _id: "103",
        name: "Classic Egg & Turkey Bacon Breakfast",
        description: "A protein-rich breakfast with healthy fats and lean protein.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 400,
        protein: 42,
        carbs: 30,
        fats: 12,
        image: B3,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Cook turkey bacon until crispy.",
          "Scramble eggs in olive oil.",
          "Serve with whole wheat toast."
        ],
        ingredients: [
          { name: "Egg Whites", quantity: "3", unit: "pieces" },
          { name: "Whole Egg", quantity: "1", unit: "piece" },
          { name: "Turkey Bacon", quantity: "2", "unit": "slices" },
          { name: "Whole Wheat Toast", quantity: "1", "unit": "slice" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "104",
        name: "High-Protein Oatmeal with Peanut Butter & Whey",
        description: "A muscle-repairing meal with complex carbs and protein.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 450,
        protein: 50,
        carbs: 40,
        fats: 10,
        image: B4,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Cook oats in water or milk.",
          "Stir in whey protein.",
          "Top with peanut butter."
        ],
        ingredients: [
          { name: "Oats", quantity: "½", unit: "cup" },
          { name: "Whey Protein", quantity: "1", unit: "scoop" },
          { name: "Peanut Butter", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "105",
        name: "Protein Pancakes with Greek Yogurt",
        description: "A low-fat, high-protein pancake for energy and muscle recovery.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 420,
        protein: 45,
        carbs: 40,
        fats: 8,
        image: B5,  
  
        cuisine: { name: "AMERICAN" },
        steps: [
          "Mix whey, oat flour, and egg whites into a batter.",
          "Cook pancakes on a pan.",
          "Serve with Greek yogurt and honey."
        ],
        ingredients: [
          { name: "Whey Protein", quantity: "1", unit: "scoop" },
          { name: "Oat Flour", quantity: "½", unit: "cup" },
          { name: "Egg Whites", quantity: "2", unit: "pieces" },
          { name: "Greek Yogurt", quantity: "½", unit: "cup" },
          { name: "Honey", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "106",
        name: "Scrambled Tofu & Avocado Toast",
        description: "A vegan-friendly, high-protein breakfast with healthy fats.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 420,
        protein: 38,
        carbs: 40,
        fats: 12,
        image: B6,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "VEGAN" },
        steps: [
          "Cook tofu with olive oil, salt, and pepper.",
          "Spread avocado on toast and serve with tofu."
        ],
        ingredients: [
          { name: "Crumpled Tofu", quantity: "½", unit: "cup" },
          { name: "Whole Wheat Toast", quantity: "1", unit: "slice" },
          { name: "Avocado", quantity: "½", unit: "medium" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "107",
        name: "Cottage Cheese & Berry Bowl",
        description: "A low-fat, high-protein breakfast with antioxidants.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 42,
        carbs: 30,
        fats: 8,
        image: B7,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Mix cottage cheese with berries.",
          "Top with almonds."
        ],
        ingredients: [
          { name: "Cottage Cheese", quantity: "1", unit: "cup" },
          { name: "Mixed Berries", quantity: "½", unit: "cup" },
          { name: "Almonds", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "108",
        name: "Turkey & Spinach Egg Muffins",
        description: "A meal-prep-friendly, protein-packed breakfast.",
        prepTime: 10,
        cookTime: 20,
        servings: 1,
        calories: 300,
        protein: 40,
        carbs: 10,
        fats: 10,
        image: B8,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Mix eggs, turkey, and spinach.",
          "Pour into muffin tins and bake at 350°F for 20 minutes."
        ],
        ingredients: [
          { name: "Eggs", quantity: "3", unit: "pieces" },
          { name: "Turkey", quantity: "¼", unit: "cup" },
          { name: "Spinach", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id: "109",
        name: "Whole Wheat French Toast with Greek Yogurt",
        description: "A high-protein twist on a classic breakfast.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 400,
        protein: 38,
        carbs: 40,
        fats: 8,
        image: B9,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Dip bread in egg whites and cook in a pan.",
          "Serve with Greek yogurt and cinnamon."
        ],
        ingredients: [
          { name: "Whole Wheat Bread", quantity: "2", unit: "slices" },
          { name: "Egg Whites", quantity: "2", unit: "pieces" },
          { name: "Greek Yogurt", quantity: "½", unit: "cup" },
          { name: "Cinnamon", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "110",
        name: "Smoked Salmon & Avocado Toast",
        description: "A protein-rich meal with healthy omega-3 fats.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 420,
        protein: 42,
        carbs: 30,
        fats: 12,
        image: B10,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Spread avocado on toast.",
          "Top with smoked salmon."
        ],
        ingredients: [
          { name: "Smoked Salmon", quantity: "50", unit: "g" },
          { name: "Whole Wheat Toast", quantity: "1", unit: "slice" },
          { name: "Avocado", quantity: "½", unit: "medium" }
        ]
      },
      {
        _id: "111",
        name: "Chicken & Egg Breakfast Wrap",
        description: "A muscle-building meal with lean protein and fiber.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 450,
        protein: 50,
        carbs: 40,
        fats: 10,
        image: B11, 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Scramble egg whites and mix with chicken.",
          "Wrap in whole wheat tortilla."
        ],
        ingredients: [
          { name: "Shredded Chicken Breast", quantity: "½", unit: "cup" },
          { name: "Egg Whites", quantity: "2", unit: "pieces" },
          { name: "Whole Wheat Tortilla", quantity: "1", unit: "piece" }
        ]
      },
      {
        _id: "112",
        name: "Quinoa & Egg Breakfast Bowl",
        description: "A high-protein, fiber-rich breakfast.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 430,
        protein: 45,
        carbs: 40,
        fats: 10,
        image: B12,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Cook quinoa and mix with scrambled eggs."
        ],
        ingredients: [
          { name: "Cooked Quinoa", quantity: "½", unit: "cup" },
          { name: "Whole Egg", quantity: "1", unit: "piece" },
          { name: "Egg Whites", quantity: "2", unit: "pieces" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "113",
        name: "Egg & Cheese Breakfast Sandwich",
        description: "A muscle-building breakfast with lean protein and complex carbs.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 400,
        protein: 35,
        carbs: 40,
        fats: 12,
        image: B13,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Scramble eggs in olive oil.",
          "Toast the English muffin and add cheese.",
          "Assemble and serve warm."
        ],
        ingredients: [
          { name: "Whole Wheat English Muffin", quantity: "1", unit: "piece" },
          { name: "Egg Whites", quantity: "2", unit: "pieces" },
          { name: "Whole Egg", quantity: "1", unit: "piece" },
          { name: "Cheddar Cheese", quantity: "1", unit: "slice" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "114",
        name: "High-Protein Blueberry Pancakes",
        description: "A protein-packed twist on a classic pancake recipe.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 420,
        protein: 42,
        carbs: 45,
        fats: 6,
        image: B14, 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Mix oat flour, whey protein, and egg whites into a batter.",
          "Fold in blueberries and cook pancakes on a pan."
        ],
        ingredients: [
          { name: "Oat Flour", quantity: "½", unit: "cup" },
          { name: "Whey Protein", quantity: "1", unit: "scoop" },
          { name: "Blueberries", quantity: "½", unit: "cup" },
          { name: "Egg Whites", quantity: "2", unit: "pieces" }
        ]
      },
      {
        _id: "115",
        name: "Chicken & Avocado Breakfast Wrap",
        description: "A protein-dense breakfast with healthy fats and fiber.",
        prepTime: 5,
        cookTime: 2,
        servings: 1,
        calories: 450,
        protein: 48,
        carbs: 40,
        fats: 10,
        image: B15,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Warm up the tortilla.",
          "Fill with shredded chicken and mashed avocado."
        ],
        ingredients: [
          { name: "Shredded Chicken Breast", quantity: "½", unit: "cup" },
          { name: "Avocado", quantity: "½", unit: "medium" },
          { name: "Whole Wheat Tortilla", quantity: "1", unit: "piece" }
        ]
      },
      {
        _id: "116",
        name: "Baked Protein Oatmeal",
        description: "A muscle-repairing meal with slow-digesting carbs.",
        prepTime: 5,
        cookTime: 20,
        servings: 1,
        calories: 430,
        protein: 45,
        carbs: 40,
        fats: 10,
        image: B16,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Mix all ingredients and bake at 350°F for 20 minutes."
        ],
        ingredients: [
          { name: "Oats", quantity: "½", unit: "cup" },
          { name: "Whey Protein", quantity: "1", unit: "scoop" },
          { name: "Egg White", quantity: "1", unit: "piece" },
          { name: "Chopped Nuts", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "117",
        name: "Turkey Sausage & Scrambled Eggs",
        description: "A low-fat, high-protein breakfast for muscle growth.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 410,
        protein: 44,
        carbs: 10,
        fats: 18,
        image: B17,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Cook turkey sausages.",
          "Scramble eggs in olive oil and serve with sausages."
        ],
        ingredients: [
          { name: "Turkey Sausages", quantity: "2", unit: "pieces" },
          { name: "Egg Whites", quantity: "3", unit: "pieces" },
          { name: "Whole Egg", quantity: "1", unit: "piece" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "118",
        name: "High-Protein Breakfast Hash",
        description: "A nutrient-dense breakfast with lean protein and fiber.",
        prepTime: 5,
        cookTime: 15,
        servings: 1,
        calories: 450,
        protein: 42,
        carbs: 40,
        fats: 12,
        image: B18,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Cook ground turkey in olive oil.",
          "Add sweet potatoes and sauté.",
          "Top with a fried egg."
        ],
        ingredients: [
          { name: "Diced Sweet Potatoes", quantity: "½", unit: "cup" },
          { name: "Lean Ground Turkey", quantity: "½", unit: "cup" },
          { name: "Egg", quantity: "1", unit: "piece" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "119",
        name: "Protein Waffles with Almond Butter",
        description: "A high-energy breakfast with complex carbs.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 420,
        protein: 46,
        carbs: 38,
        fats: 10,
        image: B19, 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Mix oat flour, protein powder, and egg white into batter.",
          "Cook in a waffle iron.",
          "Top with almond butter."
        ],
        ingredients: [
          { name: "Oat Flour", quantity: "½", unit: "cup" },
          { name: "Whey Protein", quantity: "1", unit: "scoop" },
          { name: "Egg White", quantity: "1", unit: "piece" },
          { name: "Almond Butter", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "120",
        name: "Salmon & Whole Wheat Bagel",
        description: "A high-protein breakfast with omega-3s.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 450,
        protein: 45,
        carbs: 40,
        fats: 10,
        image: B20,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Toast the bagel.",
          "Spread cream cheese and top with salmon."
        ],
        ingredients: [
          { name: "Smoked Salmon", quantity: "50", unit: "g" },
          { name: "Whole Wheat Bagel", quantity: "1", unit: "piece" },
          { name: "Cream Cheese", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "121",
        name: "Egg & Spinach Breakfast Casserole",
        description: "A high-protein, make-ahead breakfast.",
        prepTime: 5,
        cookTime: 20,
        servings: 1,
        calories: 350,
        protein: 40,
        carbs: 15,
        fats: 10,
        image: B21,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Mix eggs, spinach, and feta cheese.",
          "Bake at 350°F for 20 minutes."
        ],
        ingredients: [
          { name: "Egg Whites", quantity: "4", unit: "pieces" },
          { name: "Spinach", quantity: "½", unit: "cup" },
          { name: "Feta Cheese", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id: "122",
        name: "Peanut Butter & Banana Protein Toast",
        description: "A quick breakfast with muscle-building protein.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 400,
        protein: 38,
        carbs: 42,
        fats: 10,
        image: B22, 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Toast bread, spread peanut butter, and top with banana."
        ],
        ingredients: [
          { name: "Whole Wheat Toast", quantity: "1", unit: "slice" },
          { name: "Peanut Butter", quantity: "1", unit: "tbsp" },
          { name: "Banana", quantity: "½", unit: "medium" }
        ]
      },
      {
        _id: "123",
        name: "Steak & Egg Scramble",
        description: "A muscle-building, high-protein breakfast with lean beef.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 450,
        protein: 50,
        carbs: 8,
        fats: 18,
        image: B23,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Heat olive oil in a pan and cook steak for 3–4 minutes.",
          "Add diced bell peppers and cook for 2 more minutes.",
          "Scramble eggs into the pan and cook until done.",
          "Season with salt and pepper, then serve hot."
        ],
        ingredients: [
          { name: "Lean Sirloin Steak", quantity: "3", unit: "oz" },
          { name: "Egg Whites", quantity: "2", unit: "pieces" },
          { name: "Whole Egg", quantity: "1", unit: "piece" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" },
          { name: "Diced Bell Peppers", quantity: "¼", unit: "cup" },
          { name: "Salt", quantity: "to taste", unit: "" },
          { name: "Pepper", quantity: "to taste", unit: "" }
        ]
      },
      {
        _id: "124",
        name: "Cottage Cheese & Berry Power Bowl",
        description: "A low-fat, high-protein breakfast with antioxidants.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 400,
        protein: 45,
        carbs: 35,
        fats: 10,
        image: B24,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "In a bowl, add cottage cheese.",
          "Top with mixed berries, chia seeds, and almonds.",
          "Stir and enjoy!"
        ],
        ingredients: [
          { name: "Low-Fat Cottage Cheese", quantity: "1", unit: "cup" },
          { name: "Mixed Berries", quantity: "½", unit: "cup" },
          { name: "Chia Seeds", quantity: "1", unit: "tbsp" },
          { name: "Almonds", quantity: "1", unit: "tbsp", note: "chopped" }
        ]
      },
      {
        _id: "125",
        name: "Turkey & Spinach Omelette",
        description: "A lean, protein-packed meal with fiber and vitamins.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 380,
        protein: 44,
        carbs: 5,
        fats: 15,
        image: B25,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Heat olive oil in a pan.",
          "Cook turkey for 2 minutes, then add spinach.",
          "Pour eggs over and cook until firm.",
          "Fold and serve warm."
        ],
        ingredients: [
          { name: "Egg Whites", quantity: "3", unit: "pieces" },
          { name: "Whole Egg", quantity: "1", unit: "piece" },
          { name: "Turkey Breast", quantity: "2", unit: "oz", note: "diced" },
          { name: "Spinach", quantity: "¼", unit: "cup", note: "chopped" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "126",
        name: "Peanut Butter & Protein Toast",
        description: "A quick, high-energy breakfast for muscle recovery.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 450,
        protein: 48,
        carbs: 38,
        fats: 12,
        image: B26,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Toast the bread.",
          "Mix whey protein with a little water to make a spread.",
          "Spread peanut butter and protein paste on toast."
        ],
        ingredients: [
          { name: "Whole Wheat Bread", quantity: "1", unit: "slice" },
          { name: "Peanut Butter", quantity: "2", unit: "tbsp" },
          { name: "Whey Protein", quantity: "1", unit: "scoop" }
        ]
      },
      {
        _id: "127",
        name: "Sweet Potato & Egg Hash",
        description: "A fiber-rich, protein-packed breakfast for gym-goers.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 430,
        protein: 42,
        carbs: 40,
        fats: 10,
        image: B27,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Heat olive oil in a pan and cook sweet potatoes for 5 minutes.",
          "Add onions and bell peppers, cooking for another 3 minutes.",
          "Scramble eggs into the pan and cook until done.",
          "Season and serve."
        ],
        ingredients: [
          { name: "Diced Sweet Potatoes", quantity: "½", unit: "cup" },
          { name: "Whole Egg", quantity: "1", unit: "piece" },
          { name: "Egg Whites", quantity: "2", unit: "pieces" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" },
          { name: "Chopped Onions", quantity: "¼", unit: "cup" },
          { name: "Chopped Bell Peppers", quantity: "¼", unit: "cup" },
          { name: "Salt", quantity: "to taste", unit: "" },
          { name: "Pepper", quantity: "to taste", unit: "" }
        ]
      },
      {
        _id: "128",
        name: "Chicken & Avocado Breakfast Bowl",
        description: "A high-protein, healthy fat-packed meal for muscle recovery.",
        prepTime: 5,
        cookTime: 15,
        servings: 1,
        calories: 450,
        protein: 50,
        carbs: 40,
        fats: 12,
        image: B28,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Cook quinoa as per instructions and set aside.",
          "Dice grilled chicken and mix with quinoa.",
          "Top with mashed avocado and drizzle with olive oil.",
          "Season with salt and pepper, then serve."
        ],
        ingredients: [
          { name: "Grilled Chicken Breast", quantity: "3", unit: "oz", note: "diced" },
          { name: "Avocado", quantity: "½", unit: "medium", note: "mashed" },
          { name: "Cooked Quinoa", quantity: "½", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" },
          { name: "Salt", quantity: "to taste", unit: "" },
          { name: "Pepper", quantity: "to taste", unit: "" }
        ]
      },
      {
        _id: "129",
        name: "Egg & Turkey Bacon Breakfast Wrap",
        description: "A protein-packed, quick breakfast for muscle growth.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 420,
        protein: 44,
        carbs: 38,
        fats: 12,
        image: B29,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Cook turkey bacon in a pan until crispy.",
          "Scramble eggs and cook until firm.",
          "Place eggs, turkey bacon, and cheese in the tortilla.",
          "Roll up the wrap and serve warm."
        ],
        ingredients: [
          { name: "Whole Wheat Tortilla", quantity: "1", unit: "piece" },
          { name: "Egg Whites", quantity: "2", unit: "pieces" },
          { name: "Whole Egg", quantity: "1", unit: "piece" },
          { name: "Turkey Bacon", quantity: "2", unit: "slices" },
          { name: "Shredded Cheddar Cheese", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "130",
        name: "Greek Yogurt & Granola Power Bowl",
        description: "A protein-rich, probiotic-packed meal for gut health.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 420,
        protein: 45,
        carbs: 40,
        fats: 10,
        image: B30, 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "GREEK" },
        steps: [
          "Add Greek yogurt to a bowl.",
          "Top with granola, flaxseeds, and mixed berries.",
          "Stir and enjoy!"
        ],
        ingredients: [
          { name: "Greek Yogurt", quantity: "1", unit: "cup", note: "plain, low-fat" },
          { name: "Granola", quantity: "½", unit: "cup", note: "low sugar" },
          { name: "Flaxseeds", quantity: "1", unit: "tbsp" },
          { name: "Mixed Berries", quantity: "½", unit: "cup", note: "strawberries, blueberries" }
        ]
      },
      {
        _id: "131",
        name: "Protein-Packed Banana Pancakes",
        description: "A muscle-repairing, energy-boosting breakfast.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 450,
        protein: 46,
        carbs: 42,
        fats: 8,
        image: B31,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Mix oat flour, whey protein, mashed banana, and egg whites.",
          "Cook pancakes on a non-stick pan until golden brown.",
          "Serve with a drizzle of honey or peanut butter (optional)."
        ],
        ingredients: [
          { name: "Oat Flour", quantity: "½", unit: "cup" },
          { name: "Whey Protein", quantity: "1", unit: "scoop" },
          { name: "Banana", quantity: "1", unit: "medium", note: "mashed" },
          { name: "Egg Whites", quantity: "2", unit: "pieces" }
        ]
      },
      {
        _id: "132",
        name: "Salmon & Egg Scramble",
        description: "A high-protein, omega-3-rich breakfast.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 430,
        protein: 48,
        carbs: 6,
        fats: 18,
        image: B32, 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "AMERICAN" },
        steps: [
          "Heat olive oil in a pan and sauté onions.",
          "Add eggs and scramble until firm.",
          "Mix in smoked salmon and serve warm."
        ],
        ingredients: [
          { name: "Smoked Salmon", quantity: "2", unit: "oz" },
          { name: "Egg Whites", quantity: "2", unit: "pieces" },
          { name: "Whole Egg", quantity: "1", unit: "piece" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" },
          { name: "Diced Onions", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id: "133",
        name: "Italian Egg Frittata",
        description: "A protein-rich, low-carb breakfast packed with nutrients.",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 420,
        protein: 45,
        carbs: 10,
        fats: 20,
        image: B33,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Sauté spinach and cherry tomatoes in olive oil.",
          "Whisk eggs with ricotta cheese, then pour over the veggies in a skillet.",
          "Cook for 2 minutes, then transfer to the oven for 10–12 minutes.",
          "Serve warm."
        ],
        ingredients: [
          { name: "Whole Eggs", quantity: "2", unit: "pieces" },
          { name: "Egg Whites", quantity: "2", unit: "pieces" },
          { name: "Ricotta Cheese", quantity: "¼", unit: "cup", note: "low-fat" },
          { name: "Chopped Spinach", quantity: "½", unit: "cup" },
          { name: "Cherry Tomatoes", quantity: "¼", unit: "cup", note: "halved" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" },
          { name: "Salt", quantity: "to taste", unit: "" },
          { name: "Pepper", quantity: "to taste", unit: "" }
        ]
      },
      {
        _id: "134",
        name: "Italian Bruschetta with Poached Eggs",
        description: "A classic Italian breakfast, rich in fiber and protein.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 400,
        protein: 36,
        carbs: 38,
        fats: 10,
        image: B34,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Toast the bread.",
          "Mix diced tomatoes, balsamic vinegar, and olive oil.",
          "Top toast with the tomato mixture and poached eggs.",
          "Garnish with fresh basil."
        ],
        ingredients: [
          { name: "Whole Grain Bread", quantity: "2", unit: "slices" },
          { name: "Large Tomato", quantity: "1", unit: "piece", note: "diced" },
          { name: "Balsamic Vinegar", quantity: "1", unit: "tbsp" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" },
          { name: "Poached Eggs", quantity: "2", unit: "pieces" },
          { name: "Fresh Basil Leaves", quantity: "to taste", unit: "" }
        ]
      },
      {
        _id: "135",
        name: "Ricotta & Honey Toast",
        description: "A sweet yet protein-packed breakfast.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 25,
        carbs: 40,
        fats: 8,
        image: B35,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Toast the bread.",
          "Spread ricotta cheese over the toast.",
          "Drizzle honey and sprinkle walnuts on top."
        ],
        ingredients: [
          { name: "Whole Wheat Bread", quantity: "1", unit: "slice" },
          { name: "Ricotta Cheese", quantity: "2", unit: "tbsp" },
          { name: "Honey", quantity: "1", unit: "tsp" },
          { name: "Chopped Walnuts", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "136",
        name: "Cornetto (Italian Croissant)",
        description: "A traditional Italian breakfast pastry.",
        prepTime: 15,
        cookTime: 20,
        servings: 1,
        calories: 350,
        protein: 8,
        carbs: 45,
        fats: 12,
        image: B36,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Mix yeast, sugar, and warm milk. Let it sit for 10 minutes.",
          "Add flour and butter, kneading into a dough. Let it rise.",
          "Roll and shape into croissants, then bake at 375°F (190°C) for 15–20 minutes."
        ],
        ingredients: [
          { name: "All-Purpose Flour", quantity: "1", unit: "cup" },
          { name: "Yeast", quantity: "1", unit: "tsp" },
          { name: "Sugar", quantity: "1", unit: "tbsp" },
          { name: "Butter", quantity: "1", unit: "tbsp" },
          { name: "Milk", quantity: "½", unit: "cup" },
          { name: "Vanilla Extract", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "137",
        name: "Savory Ricotta Pancakes",
        description: "Soft, protein-rich pancakes with an Italian twist.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 430,
        protein: 45,
        carbs: 42,
        fats: 9,
        image: B37,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Mix all ingredients into a batter.",
          "Cook on a non-stick pan until golden brown.",
          "Serve with honey or fresh berries."
        ],
        ingredients: [
          { name: "Oat Flour", quantity: "½", unit: "cup" },
          { name: "Ricotta Cheese", quantity: "¼", unit: "cup", note: "low-fat" },
          { name: "Whey Protein", quantity: "1", unit: "scoop" },
          { name: "Egg White", quantity: "1", unit: "piece" },
          { name: "Baking Powder", quantity: "½", unit: "tsp" }
        ]
      },
      {
        _id: "138",
        name: "Pane e Marmellata (Bread & Jam)",
        description: "A simple yet classic Italian breakfast.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 250,
        protein: 6,
        carbs: 45,
        fats: 3,
        image: B38, 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Toast the bread.",
          "Spread fruit jam on top and serve."
        ],
        ingredients: [
          { name: "Whole Grain Bread", quantity: "1", unit: "slice" },
          { name: "Fruit Jam", quantity: "1", unit: "tbsp", note: "low sugar" }
        ]
      },
      {
        _id: "139",
        name: "Italian Egg & Cheese Sandwich",
        description: "A high-protein, low-carb breakfast.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 420,
        protein: 38,
        carbs: 36,
        fats: 12,
        image: B39,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Cook the egg sunny-side up.",
          "Toast the English muffin and place the egg and cheese inside.",
          "Serve warm."
        ],
        ingredients: [
          { name: "Whole Grain English Muffin", quantity: "1", unit: "piece" },
          { name: "Egg", quantity: "1", unit: "piece" },
          { name: "Provolone Cheese", quantity: "1", unit: "slice" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "140",
        name: "Cappuccino & Whole Grain Biscotti",
        description: "A light breakfast with fiber and energy.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 280,
        protein: 12,
        carbs: 38,
        fats: 6,
        image: B40, 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Brew a cappuccino.",
          "Serve with biscotti for dipping."
        ],
        ingredients: [
          { name: "Whole Grain Biscotti", quantity: "1", unit: "piece" },
          { name: "Cappuccino", quantity: "1", unit: "cup", note: "made with skim milk" }
        ]
      },
      {
        _id: "141",
        name: "Scrambled Eggs with Parmesan",
        description: "A protein-packed breakfast with healthy fats.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 410,
        protein: 40,
        carbs: 5,
        fats: 18,
        image: B41,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Scramble eggs in olive oil.",
          "Add Parmesan cheese and stir until melted.",
          "Serve warm."
        ],
        ingredients: [
          { name: "Whole Eggs", quantity: "2", unit: "pieces" },
          { name: "Grated Parmesan Cheese", quantity: "¼", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "142",
        name: "Italian Chia Pudding",
        description: "A high-protein, omega-3-rich meal.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 300,
        protein: 25,
        carbs: 35,
        fats: 8,
        image: B42,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Mix all ingredients and let sit overnight in the fridge.",
          "Serve with fresh berries."
        ],
        ingredients: [
          { name: "Almond Milk", quantity: "½", unit: "cup" },
          { name: "Chia Seeds", quantity: "2", unit: "tbsp" },
          { name: "Honey", quantity: "1", unit: "tbsp" },
          { name: "Vanilla Extract", quantity: "¼", unit: "tsp" }
        ]
      },
      {
        _id: "143",
        name: "Sfogliatella (Italian Pastry with Ricotta Filling)",
        description: "A crispy, layered pastry filled with a slightly sweet ricotta mixture.",
        prepTime: 15,
        cookTime: 20,
        servings: 1,
        calories: 380,
        protein: 12,
        carbs: 50,
        fats: 15,
        image: B43,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Preheat oven to 375°F (190°C).",
          "Mix ricotta, honey, and cinnamon.",
          "Cut puff pastry into small squares, place ricotta filling inside, and fold into a triangle.",
          "Brush with egg yolk and bake for 15-20 minutes."
        ],
        ingredients: [
          { name: "Puff Pastry", quantity: "2", unit: "sheets" },
          { name: "Ricotta Cheese", quantity: "½", unit: "cup" },
          { name: "Honey", quantity: "1", unit: "tbsp" },
          { name: "Cinnamon", quantity: "¼", unit: "tsp" },
          { name: "Egg Yolk", quantity: "1", unit: "piece", note: "for brushing" }
        ]
      },
      {
        _id: "144",
        name: "Farinata (Savory Chickpea Pancake)",
        description: "A protein-rich, gluten-free Italian pancake.",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 320,
        protein: 15,
        carbs: 40,
        fats: 10,
        image: B44,
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Mix all ingredients and let sit for 30 minutes.",
          "Heat a pan, pour the batter, and cook until golden brown.",
          "Serve with herbs or cheese."
        ],
        ingredients: [
          { name: "Chickpea Flour", quantity: "1", unit: "cup" },
          { name: "Water", quantity: "1¼", unit: "cups" },
          { name: "Olive Oil", quantity: "2", unit: "tbsp" },
          { name: "Salt", quantity: "½", unit: "tsp" },
          { name: "Rosemary", quantity: "½", unit: "tsp" }
        ]
      },
      {
        _id: "145",
        name: "Panettone (Italian Sweet Bread)",
        description: "A festive and fluffy Italian bread.",
        prepTime: 15,
        cookTime: 40,
        servings: 1,
        calories: 360,
        protein: 9,
        carbs: 60,
        fats: 8,
        image: B45,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Mix yeast with warm milk and sugar, then let sit.",
          "Add flour and butter, knead into a dough.",
          "Let rise, then bake at 350°F (175°C) for 30–40 minutes."
        ],
        ingredients: [
          { name: "Flour", quantity: "2", unit: "cups" },
          { name: "Yeast", quantity: "1", unit: "tsp" },
          { name: "Sugar", quantity: "¼", unit: "cup" },
          { name: "Milk", quantity: "½", unit: "cup" },
          { name: "Butter", quantity: "1", unit: "tbsp" },
          { name: "Raisins", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id: "146",
        name: "Stracciatella Soup (Italian Egg Drop Soup)",
        description: "A warm, protein-packed breakfast soup.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 280,
        protein: 35,
        carbs: 3,
        fats: 12,
        image: B46,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Heat broth, then slowly whisk in beaten eggs.",
          "Stir in Parmesan cheese and serve warm."
        ],
        ingredients: [
          { name: "Chicken Broth", quantity: "2", unit: "cups" },
          { name: "Eggs", quantity: "2", unit: "pieces" },
          { name: "Parmesan Cheese", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id: "147",
        name: "Italian Yogurt Bowl with Nuts & Honey",
        description: "A high-protein, probiotic-rich breakfast.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 320,
        protein: 30,
        carbs: 35,
        fats: 6,
        image: B47,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Mix yogurt with honey and top with almonds."
        ],
        ingredients: [
          { name: "Greek Yogurt", quantity: "1", unit: "cup" },
          { name: "Honey", quantity: "1", unit: "tbsp" },
          { name: "Almonds", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id: "148",
        name: "Torta di Mele (Italian Apple Cake)",
        description: "A light and fruity breakfast treat.",
        prepTime: 10,
        cookTime: 20,
        servings: 1,
        calories: 340,
        protein: 10,
        carbs: 55,
        fats: 6,
        image: B48,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Mix flour, egg, and milk into a batter.",
          "Fold in apple slices and bake at 350°F (175°C) for 20 minutes."
        ],
        ingredients: [
          { name: "Flour", quantity: "1", unit: "cup" },
          { name: "Egg", quantity: "1", unit: "piece" },
          { name: "Apple", quantity: "1", unit: "piece", note: "sliced" },
          { name: "Milk", quantity: "¼", unit: "cup" },
          { name: "Honey", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "149",
        name: "Italian Tuna & Avocado Toast",
        description: "A protein-packed breakfast with omega-3s.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 380,
        protein: 42,
        carbs: 35,
        fats: 9,
        image: B49,  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Mash avocado and mix with lemon juice.",
          "Spread on toast and top with tuna."
        ],
        ingredients: [
          { name: "Whole Grain Bread", quantity: "1", unit: "slice" },
          { name: "Avocado", quantity: "½", unit: "piece" },
          { name: "Canned Tuna", quantity: "1", unit: "can", note: "in water" },
          { name: "Lemon Juice", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "150",
        name: "Piadina with Ricotta & Spinach",
        description: "An Italian flatbread stuffed with healthy fillings.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 350,
        protein: 30,
        carbs: 40,
        fats: 7,
        image: B50, 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Spread ricotta on flatbread, top with spinach.",
          "Fold in half and lightly toast."
        ],
        ingredients: [
          { name: "Whole Wheat Flatbread", quantity: "1", unit: "piece" },
          { name: "Ricotta Cheese", quantity: "¼", unit: "cup" },
          { name: "Spinach", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "151",
        name: "High-Protein Italian Omelet",
        description: "A muscle-building breakfast with healthy fats.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 400,
        protein: 42,
        carbs: 5,
        fats: 16,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Sauté mushrooms, then add whisked eggs.",
          "Cook until set, then sprinkle mozzarella on top."
        ],
        ingredients: [
          { name: "Egg Whites", quantity: "3", unit: "pieces" },
          { name: "Whole Egg", quantity: "1", unit: "piece" },
          { name: "Mozzarella Cheese", quantity: "¼", unit: "cup" },
          { name: "Mushrooms", quantity: "¼", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "152",
        name: "Zabaione (Italian Custard)",
        description: "A rich, creamy, protein-packed custard.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 320,
        protein: 30,
        carbs: 20,
        fats: 10,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "DESSERT" },
        cuisine: { name: "ITALIAN" },
        steps: [
          "Whisk egg yolks with honey.",
          "Slowly add warm milk, stirring constantly."
        ],
        ingredients: [
          { name: "Egg Yolks", quantity: "2", unit: "pieces" },
          { name: "Honey", quantity: "1", unit: "tbsp" },
          { name: "Warm Milk", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id: "153",
        name: "Shakshuka (Poached Eggs in Spiced Tomato Sauce)",
        description: "A high-protein, antioxidant-rich dish.",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 350,
        protein: 28,
        carbs: 20,
        fats: 15,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MIDDLE EASTERN" },
        steps: [
          "Sauté onions and garlic in olive oil.",
          "Add tomatoes and spices, simmer for 10 minutes.",
          "Crack eggs into the sauce and cook until set."
        ],
        ingredients: [
          { name: "Eggs", quantity: "2", unit: "pieces" },
          { name: "Diced Tomatoes", quantity: "1", unit: "cup" },
          { name: "Onion", quantity: "½", unit: "piece", note: "chopped" },
          { name: "Garlic", quantity: "1", unit: "clove", note: "minced" },
          { name: "Cumin", quantity: "½", unit: "tsp" },
          { name: "Paprika", quantity: "½", unit: "tsp" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "154",
        name: "Ful Medames (Mashed Fava Beans with Olive Oil & Spices)",
        description: "A fiber-packed, plant-based protein meal.",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 420,
        protein: 30,
        carbs: 45,
        fats: 12,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MIDDLE EASTERN" },
        steps: [
          "Mash fava beans, mix with olive oil, lemon juice, garlic, and cumin.",
          "Serve warm with whole wheat pita."
        ],
        ingredients: [
          { name: "Cooked Fava Beans", quantity: "1", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Lemon", quantity: "½", unit: "piece", note: "juiced" },
          { name: "Cumin", quantity: "½", unit: "tsp" },
          { name: "Garlic", quantity: "1", unit: "clove", note: "minced" }
        ]
      },
      {
        _id: "155",
        name: "Labneh with Za’atar & Olive Oil",
        description: "A high-protein, probiotic-rich dish.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 35,
        carbs: 40,
        fats: 8,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MIDDLE EASTERN" },
        steps: [
          "Spread labneh on a plate.",
          "Drizzle with olive oil and sprinkle with za’atar.",
          "Serve with pita."
        ],
        ingredients: [
          { name: "Labneh", quantity: "½", unit: "cup" },
          { name: "Za’atar Spice", quantity: "1", unit: "tsp" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" },
          { name: "Whole Wheat Pita", quantity: "1", unit: "piece" }
        ]
      },
      {
        _id: "156",
        name: "Manakish (Middle Eastern Flatbread with Thyme & Cheese)",
        description: "A balanced meal with protein and healthy fats.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 400,
        protein: 30,
        carbs: 45,
        fats: 12,
        image: "https://example.com/image.png", 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MIDDLE EASTERN" },
        steps: [
          "Spread feta on the flatbread.",
          "Sprinkle za’atar and drizzle olive oil.",
          "Bake at 350°F for 10 minutes."
        ],
        ingredients: [
          { name: "Whole Wheat Flatbread", quantity: "1", unit: "piece" },
          { name: "Feta Cheese", quantity: "¼", unit: "cup" },
          { name: "Za’atar", quantity: "1", unit: "tsp" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "157",
        name: "Hummus with Whole Wheat Toast",
        description: "A plant-based protein breakfast.",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 380,
        protein: 28,
        carbs: 50,
        fats: 10,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MIDDLE EASTERN" },
        steps: [
          "Blend all ingredients until smooth.",
          "Serve with whole wheat toast."
        ],
        ingredients: [
          { name: "Chickpeas", quantity: "½", unit: "cup", note: "blended" },
          { name: "Tahini", quantity: "1", unit: "tbsp" },
          { name: "Lemon", quantity: "½", unit: "piece", note: "juiced" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "158",
        name: "Middle Eastern Scrambled Eggs with Sumac",
        description: "A high-protein, antioxidant-rich dish.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 340,
        protein: 30,
        carbs: 5,
        fats: 15,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MIDDLE EASTERN" },
        steps: [
          "Sauté onions in olive oil.",
          "Add whisked eggs and sumac, cook until scrambled."
        ],
        ingredients: [
          { name: "Eggs", quantity: "2", unit: "pieces" },
          { name: "Onion", quantity: "½", unit: "piece", note: "chopped" },
          { name: "Sumac", quantity: "1", unit: "tsp" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "159",
        name: "Date & Almond Energy Bowl",
        description: "A high-carb, high-energy breakfast.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 400,
        protein: 32,
        carbs: 50,
        fats: 10,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MIDDLE EASTERN" },
        steps: [
          "Mix dates and almonds into yogurt."
        ],
        ingredients: [
          { name: "Dates", quantity: "5", unit: "pieces", note: "chopped" },
          { name: "Almonds", quantity: "¼", unit: "cup" },
          { name: "Greek Yogurt", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "160",
        name: "Fattet Hummus (Yogurt & Chickpea Bowl with Pita Chips)",
        description: "A protein-rich, creamy dish.",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 420,
        protein: 35,
        carbs: 50,
        fats: 10,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MIDDLE EASTERN" },
        steps: [
          "Mix yogurt and chickpeas, top with toasted pita chips."
        ],
        ingredients: [
          { name: "Chickpeas", quantity: "½", unit: "cup" },
          { name: "Greek Yogurt", quantity: "½", unit: "cup" },
          { name: "Whole Wheat Pita", quantity: "1", unit: "piece", note: "toasted" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "161",
        name: "Balaleet (Sweet Vermicelli with Scrambled Eggs)",
        description: "A balanced, high-carb breakfast.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 380,
        protein: 28,
        carbs: 50,
        fats: 8,
        image: "https://example.com/image.png", 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MIDDLE EASTERN" },
        steps: [
          "Cook vermicelli, then stir in honey and cinnamon.",
          "Scramble an egg separately and serve on top."
        ],
        ingredients: [
          { name: "Whole Wheat Vermicelli", quantity: "½", unit: "cup" },
          { name: "Egg", quantity: "1", unit: "piece" },
          { name: "Honey", quantity: "1", unit: "tsp" },
          { name: "Cinnamon", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "162",
        name: "Pistachio & Fig Oatmeal",
        description: "A fiber-rich, muscle-repair breakfast.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 390,
        protein: 30,
        carbs: 50,
        fats: 8,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MIDDLE EASTERN" },
        steps: [
          "Cook oats in milk.",
          "Stir in figs and top with pistachios."
        ],
        ingredients: [
          { name: "Oats", quantity: "½", unit: "cup" },
          { name: "Milk", quantity: "½", unit: "cup" },
          { name: "Figs", quantity: "2", unit: "pieces", note: "chopped" },
          { name: "Pistachios", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "163",
        name: "Huevos Rancheros (Eggs on Corn Tortillas with Salsa)",
        description: "A protein-packed breakfast with fiber and healthy fats.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 400,
        protein: 30,
        carbs: 35,
        fats: 15,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Heat tortillas and set aside.",
          "Fry eggs in olive oil until desired doneness.",
          "Spread black beans on tortillas, top with eggs and salsa.",
          "Garnish with avocado."
        ],
        ingredients: [
          { name: "Eggs", quantity: "2", unit: "pieces" },
          { name: "Corn Tortillas", quantity: "2", unit: "small" },
          { name: "Black Beans", quantity: "½", unit: "cup", note: "cooked" },
          { name: "Salsa", quantity: "½", unit: "cup", note: "tomatoes, onions, cilantro" },
          { name: "Olive Oil", quantity: "1", unit: "tbsp" },
          { name: "Avocado", quantity: "½", unit: "piece", note: "sliced" }
        ]
      },
      {
        _id: "164",
        name: "Chilaquiles with Chicken & Eggs",
        description: "A high-protein, high-energy meal for muscle recovery.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 450,
        protein: 40,
        carbs: 45,
        fats: 12,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Toss tortilla chips with salsa in a pan.",
          "Add chicken and mix well.",
          "Top with scrambled eggs and queso fresco."
        ],
        ingredients: [
          { name : "Scrambled Eggs", quantity: "2", unit: "pieces" },
          { name: "Tortilla Chips", quantity: "1", unit: "cup", note: "baked" },
          { name: "Shredded Chicken", quantity: "½", unit: "cup", note: "cooked" },
          { name: "Salsa Verde", quantity: "½", unit: "cup" },
          { name: "Queso Fresco", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "165",
        name: "Mexican Scrambled Eggs (Huevos a la Mexicana)",
        description: "A simple, high-protein breakfast with essential nutrients.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 320,
        protein: 28,
        carbs: 10,
        fats: 15,
        image: "https://example.com/image.png", 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Sauté onion, tomato, and jalapeño in olive oil.",
          "Add eggs and scramble until fully cooked."
        ],
        ingredients: [
          { name: "Eggs", quantity: "2", unit: "pieces" },
          { name: "Tomato", quantity: "½", unit: "piece", note: "chopped" },
          { name: "Onion", quantity: "¼", unit: "piece", note: "chopped" },
          { name: "Jalapeño", quantity: "½", unit: "piece", note: "chopped" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "166",
        name: "Nopalitos con Huevo (Scrambled Eggs with Cactus)",
        description: "A fiber-rich, anti-inflammatory breakfast.",
        prepTime: 10,
        cookTime: 5,
        servings: 1,
        calories: 330,
        protein: 28,
        carbs: 12,
        fats: 14,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Sauté onions and nopal in olive oil.",
          "Add eggs and scramble until cooked."
        ],
        ingredients: [
          { name: "Eggs", quantity: "2", unit: "pieces" },
          { name: "Cooked Nopal", quantity: "½", unit: "cup" },
          { name: "Onion", quantity: "¼", unit: "piece", note: "chopped" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "167",
        name: "Black Bean & Avocado Toast (Mexican Style)",
        description: "A high-fiber, plant-based protein breakfast.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 380,
        protein: 32,
        carbs: 45,
        fats: 10,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Spread mashed black beans and avocado on toast.",
          "Drizzle with lime juice."
        ],
        ingredients: [
          { name: "Whole Wheat Toast", quantity: "1", unit: "slice" },
          { name: "Black Beans", quantity: "½", unit: "cup", note: "mashed" },
          { name: "Avocado", quantity: "½", unit: "piece", note: "mashed" },
          { name: "Lime Juice", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "168",
        name: "Tacos de Huevo (Egg & Cheese Breakfast Tacos)",
        description: "A balanced meal with protein and healthy fats.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 400,
        protein: 30,
        carbs: 40,
        fats: 12,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Scramble eggs and place them in tortillas.",
          "Top with cheese and salsa."
        ],
        ingredients: [
          { name: "Eggs", quantity: "2", unit: "pieces" },
          { name: "Corn Tortillas", quantity: "2", unit: "small" },
          { name: "Shredded Cheese", quantity: "¼", unit: "cup" },
          { name: "Salsa", quantity: "½", unit: "cup" }
        ]
      },
      {
        _id: "169",
        name: "Oatmeal with Cinnamon & Chia Seeds (Avena con Canela y Chia)",
        description: "A muscle-repairing, fiber-rich breakfast.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 350,
        protein: 30,
        carbs: 50,
        fats: 8,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Cook oats in almond milk.",
          "Stir in cinnamon and chia seeds."
        ],
        ingredients: [
          { name: "Oats", quantity: "½", unit: "cup" },
          { name: "Almond Milk", quantity: "1", unit: "cup" },
          { name: "Cinnamon", quantity: "1", unit: "tsp" },
          { name: "Chia Seeds", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "170",
        name: "Mexican Protein Bowl (Chicken, Eggs & Beans)",
        description: "A high-protein, muscle-building meal.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 450,
        protein: 42,
        carbs: 40,
        fats: 12,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Mix all ingredients in a bowl and serve."
        ],
        ingredients: [
          { name: "Scrambled Egg", quantity: "1", unit: "piece" },
          { name: "Shredded Chicken", quantity: "½", unit: "cup" },
          { name: "Black Beans", quantity: "½", unit: "cup" },
          { name: "Salsa", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "171",
        name: "Molletes (Beans & Cheese on Whole Wheat Bread)",
        description: "A fiber and protein-rich breakfast for sustained energy.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 420,
        protein: 35,
        carbs: 45,
        fats: 12,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Spread beans on the bread, top with cheese.",
          "Bake until cheese melts."
        ],
        ingredients: [
          { name: "Whole Wheat Roll", quantity: "1", unit: "piece" },
          { name: "Refried Black Beans", quantity: "½", unit: "cup" },
          { name: "Shredded Cheese", quantity: "¼", unit: "cup" }
        ]
      },
      {
        _id: "172",
        name: "Mexican Omelet with Peppers & Cheese",
        description: "A protein-packed breakfast with muscle-repair nutrients.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 380,
        protein: 32,
        carbs: 15,
        fats: 15,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "MEXICAN" },
        steps: [
          "Sauté onions and peppers in olive oil.",
          "Add beaten eggs, cook until set, and fold with cheese."
        ],
        ingredients: [
          { name: "Eggs", quantity: "2", unit: "pieces" },
          { name: "Bell Pepper", quantity: "½", unit: "piece", note: "chopped" },
          { name: "Onion", quantity: "¼", unit: "piece", note: "chopped" },
          { name: "Shredded Cheese", quantity: "¼", unit: "cup" },
          { name: "Olive Oil", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "173",
        name: "Omelette aux Fines Herbes (Herb Omelet)",
        description: "A classic high-protein French dish that provides essential nutrients for muscle recovery.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 280,
        protein: 22,
        carbs: 2,
        fats: 20,
        image: "https://example.com/image.png", 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "FRENCH" },
        steps: [
          "Beat eggs in a bowl and stir in herbs.",
          "Melt butter in a pan over medium heat.",
          "Pour the egg mixture into the pan and cook until set."
        ],
        ingredients: [
          { name: "Eggs", quantity: "3", unit: "pieces" },
          { name: "Chives", quantity: "1", unit: "tbsp", note: "chopped" },
          { name: "Parsley", quantity: "1", unit: "tbsp", note: "chopped" },
          { name: "Tarragon", quantity: "1", unit: "tbsp", note: "chopped" },
          { name: "Butter", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "174",
        name: "Croissant with Almond Filling",
        description: "A high-carb, high-fat breakfast for sustained energy throughout the day.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 400,
        protein: 8,
        carbs: 45,
        fats: 20,
        image: "https://example.com/image.png", 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "FRENCH" },
        steps: [
          "Serve croissant warm, optionally adding almond butter on top."
        ],
        ingredients: [
          { name: "Almond Croissant", quantity: "1", unit: "piece" },
          { name: "Almond Butter", quantity: "1", unit: "tbsp", note: "optional" }
        ]
      },
      {
        _id: "175",
        name: "Quiche Lorraine (Bacon & Cheese Quiche)",
        description: "A high-protein, rich breakfast that can be prepped in advance.",
        prepTime: 15,
        cookTime: 30,
        servings: 6,
        calories: 450,
        protein: 30,
        carbs: 20,
        fats: 30,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "FRENCH" },
        steps: [
          "Preheat oven to 375°F.",
          "Whisk together eggs, cream, and cheese.",
          "Add chopped bacon to the pie crust and pour the egg mixture over.",
          "Bake for 25-30 minutes until set."
        ],
        ingredients: [
          { name: "Eggs", quantity: "2", unit: "pieces" },
          { name: "Cooked Bacon", quantity: "½", unit: "cup", note: "chopped" },
          { name: "Gruyère Cheese", quantity: "¼", unit: "cup", note: "grated" },
          { name: "Heavy Cream", quantity: "½", unit: "cup" },
          { name: "Pie Crust", quantity: "1", unit: "small" }
        ]
      },
      {
        _id: "176",
        name: "Pain Perdu (French Toast)",
        description: "A high-protein, delicious breakfast that provides complex carbs for energy.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 350,
        protein: 12,
        carbs: 50,
        fats: 10,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "FRENCH" },
        steps: [
          "Whisk egg with vanilla and cinnamon.",
          "Dip bread slices into egg mixture and cook in a pan with a little butter.",
          "Serve with maple syrup."
        ],
        ingredients: [
          { name: "Whole-Grain Bread", quantity: "2", unit: "slices" },
          { name: "Egg", quantity: "1", unit: "piece" },
          { name: "Vanilla Extract", quantity: "1", unit: "tsp" },
          { name: "Cinnamon", quantity: "¼", unit: "tsp" },
          { name: "Maple Syrup", quantity: "1", unit: "tbsp", note: "optional" }
        ]
      },
      {
        _id: "177",
        name: "Yogurt with Honey & Fresh Berries (Yogourt au Miel et Baies)",
        description: "A light yet protein-rich option with fiber and antioxidants.",
        prepTime: 5,
        cookTime: 0,
        servings: 1,
        calories: 200,
        protein: 15,
        carbs: 25,
        fats: 7,
        image: "https://example.com/image.png", 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "FRENCH" },
        steps: [
          "Combine yogurt, honey, and berries.",
          "Serve chilled."
        ],
        ingredients: [
          { name: "Greek Yogurt", quantity: "1", unit: "cup" },
          { name: "Honey", quantity: "1", unit: "tbsp" },
          { name: "Mixed Berries", quantity: "½", unit: "cup", note: "strawberries, blueberries, etc." }
        ]
      },
      {
        _id: "178",
        name: "Croissant Sandwich with Egg & Cheese",
        description: "A balanced, protein-packed breakfast with healthy fats and carbs.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 350,
        protein: 15,
        carbs: 30,
        fats: 20,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "FRENCH" },
        steps: [
          "Scramble the egg and melt the cheese on top.",
          "Slice croissant in half, then fill with egg and cheese."
        ],
        ingredients: [
          { name: "Croissant", quantity: "1", unit: "piece" },
          { name: "Scrambled Egg", quantity: "1", unit: "piece" },
          { name: "Cheese", quantity: "1", unit: "slice", note: "Gruyère or Brie" },
          { name: "Butter", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "179",
        name: "Tartine de Beurre (French Buttered Bread)",
        description: "A simple, high-fat French breakfast ideal for gym-goers who need sustained energy.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 300,
        protein: 4,
        carbs: 35,
        fats: 18,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "FRENCH" },
        steps: [
          "Toast the baguette and spread butter.",
          "Add jam if desired."
        ],
        ingredients: [
          { name: "French Baguette", quantity: "1", unit: "slice" },
          { name: "Unsalted Butter", quantity: "1", unit: "tbsp" },
          { name: "Jam", quantity: "1", unit: "tsp", note: "optional" }
        ]
      },
      {
        _id: "180",
        name: "Salade de Fruits (Fresh Fruit Salad)",
        description: "A light, nutrient-packed breakfast with vitamins and antioxidants.",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 250,
        protein: 2,
        carbs: 60,
        fats: 0,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "FRENCH" },
        steps: [
          "Combine all fruits in a bowl.",
          "Garnish with mint and serve chilled."
        ],
        ingredients: [
          { name: "Apple", quantity: "1", unit: "piece", note: "chopped" },
          { name: "Banana", quantity: "1", unit: "piece", note: "sliced" },
          { name: "Orange", quantity: "1", unit: "piece", note: "peeled" },
          { name: "Grapes", quantity: "½", unit: "cup" },
          { name: "Mint", quantity: "1", unit: "tbsp", note: "chopped" }
        ]
      },
      {
        _id: "181",
        name: "Baked Eggs in Avocado (Œufs au Plat dans l'Avocat)",
        description: "A high-protein, healthy fat breakfast that supports muscle recovery.",
        prepTime: 5,
        cookTime: 12,
        servings: 1,
        calories: 320,
        protein: 16,
        carbs: 15,
        fats: 25,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "FRENCH" },
        steps: [
          "Slice avocado in half and remove the pit.",
          "Scoop out a little of the flesh to create space for eggs.",
          "Crack an egg into each avocado half and bake at 350°F for 10-12 minutes."
        ],
        ingredients: [
          { name: "Eggs", quantity: "2", unit: "pieces" },
          { name: "Avocado", quantity: "1", unit: "piece" },
          { name: "Salt", quantity: "to taste", unit: "" },
          { name: "Pepper", quantity: "to taste", unit: "" }
        ]
      },
      {
        _id: "182",
        name: "Crêpes with Ricotta & Berries",
        description: "A light yet filling breakfast option that provides balanced macros.",
        prepTime: 10,
        cookTime: 5,
        servings: 1,
        calories: 350,
        protein: 18,
        carbs: 40,
        fats: 15,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "FRENCH" },
        steps: [
          "Spread ricotta cheese on crêpes.",
          "Add berries and drizzle with honey.",
          "Roll up and serve."
        ],
        ingredients: [
          { name: "Crêpes", quantity: "2", unit: "pieces" },
          { name: "Ricotta Cheese", quantity: "½", unit: "cup" },
          { name: "Mixed Berries", quantity: "½", unit: "cup" },
          { name: "Honey", quantity: "1", unit: "tbsp", note: "optional" }
        ]
      },
      {
        _id: "183",
        name: "Pad Thai with Tofu",
        description: "A balanced, protein-rich breakfast with healthy fats and carbs.",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 450,
        protein: 25,
        carbs: 60,
        fats: 15,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "THAI" },
        steps: [
          "Cook rice noodles according to package instructions.",
          "Stir-fry tofu in a pan with tamarind paste, fish sauce, and sugar.",
          "Scramble the egg into the pan with tofu, then toss in the cooked noodles.",
          "Garnish with peanuts, cilantro, and lime."
        ],
        ingredients: [
          { name: "Rice Noodles", quantity: "100", unit: "g" },
          { name: "Firm Tofu", quantity: "100", unit: "g", note: "cubed" },
          { name: "Egg", quantity: "1", unit: "piece" },
          { name: "Tamarind Paste", quantity: "1", unit: "tbsp" },
          { name: "Fish Sauce", quantity: "1", unit: "tbsp" },
          { name: "Sugar", quantity: "1", unit: "tbsp" },
          { name: "Peanuts", quantity: "1", unit: "tbsp", note: "crushed" },
          { name: "Fresh Cilantro", quantity: "to taste", unit: "", note: "for garnish" },
          { name: "Lime", quantity: "to taste", unit: "", note: "for garnish" }
        ]
      },
      {
        _id: "184",
        name: "Khao Tom (Thai Rice Soup with Pork or Chicken)",
        description: "A protein-rich, soothing breakfast that provides quick energy.",
        prepTime: 10,
        cookTime: 20,
        servings: 2,
        calories: 350,
        protein: 28,
        carbs: 40,
        fats: 10,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "THAI" },
        steps: [
          "Cook the rice in chicken broth until soft.",
          "Sauté minced garlic and onion in a little oil, then add the ground pork or chicken.",
          "Add fish sauce and mix well.",
          "Combine the cooked meat and rice in the broth, then simmer for 10 minutes.",
          "Garnish with fresh cilantro."
        ],
        ingredients: [
          { name: "Jasmine Rice", quantity: "½", unit: "cup" },
          { name: "Ground Pork or Chicken", quantity: "100", unit: "g" },
          { name: "Fish Sauce", quantity: "1", unit: "tbsp" },
          { name: "Garlic", quantity: "1", unit: "clove", note: "minced" },
          { name: "Onion", quantity: "½", unit: "piece", note: "chopped" },
          { name: "Chicken Broth", quantity: "2", unit: "cups" },
          { name: "Fresh Cilantro", quantity: "to taste", unit: "", note: "for garnish" }
        ]
      },
      {
        _id: "185",
        name: "Kai Jeow (Thai-style Omelet)",
        description: "A protein-packed, fluffy omelet ideal for muscle repair.",
        prepTime: 5,
        cookTime: 5,
        servings: 1,
        calories: 280,
        protein: 18,
        carbs: 2,
        fats: 22,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "THAI" },
        steps: [
          "Beat the eggs with fish sauce, soy sauce, and sugar.",
          "Heat oil in a pan and pour in the egg mixture.",
          "Fry until the edges are golden brown and crispy."
        ],
        ingredients: [
          { name: "Eggs", quantity: "3", unit: "pieces" },
          { name: "Fish Sauce", quantity: "1", unit: "tbsp" },
          { name: "Soy Sauce", quantity: "1", unit: "tsp" },
          { name: "Sugar", quantity: "1", unit: "tsp" },
          { name: "Oil", quantity: "1", unit: "tbsp", note: "for frying" }
        ]
      },
      {
        _id: "186",
        name: "Jok (Thai Congee with Minced Pork)",
        description: "A warm, hearty breakfast for muscle recovery with carbs and protein.",
        prepTime: 10,
        cookTime: 20,
        servings: 2,
        calories: 400,
        protein: 25,
        carbs: 45,
        fats: 15,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "THAI" },
        steps: [
          "Cook the rice in chicken broth until soft and mushy.",
          "Cook the minced pork with ginger and soy sauce until browned.",
          "Crack the egg into the porridge and stir gently.",
          "Combine the rice, pork, and egg mixture and cook for 5 more minutes."
        ],
        ingredients: [
          { name: "Jasmine Rice", quantity: "½", unit: "cup" },
          { name: "Ground Pork", quantity: "100", unit: "g" },
          { name: "Chicken Broth", quantity: "2", unit: "cups" },
          { name: "Egg", quantity: "1", unit: "piece" },
          { name: "Ginger", quantity: "1", unit: "tsp", note: "minced" },
          { name: "Soy Sauce", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "187",
        name: "Thai Chicken and Avocado Salad",
        description: "A refreshing, nutrient-packed salad for gym-goers.",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 350,
        protein: 30,
        carbs: 15,
        fats: 20,
        image: "https://example.com/image.png", 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "THAI" },
        steps: [
          "Toss grilled chicken, avocado, cucumber, and herbs together.",
          "Drizzle with fish sauce and lime juice."
        ],
        ingredients: [
          { name: "Grilled Chicken Breast", quantity: "100", unit: "g", note: "sliced" },
          { name: "Avocado", quantity: "1", unit: "piece", note: "sliced" },
          { name: "Cucumber", quantity: "½", unit: "piece", note: "sliced" },
          { name: "Fish Sauce", quantity: "1", unit: "tbsp" },
          { name: "Lime Juice", quantity: "1", unit: "tbsp" },
          { name: "Fresh Mint", quantity: "to taste", unit: "", note: "for garnish" },
          { name: "Cilantro", quantity: "to taste", unit: "", note: "for garnish" }
        ]
      },
      {
        _id: "188",
        name: "Thai Mango Sticky Rice (Khao Niew Mamuang)",
        description: "A sweet breakfast that provides energy with carbs and antioxidants.",
        prepTime: 10,
        cookTime: 30,
        servings: 2,
        calories: 350,
        protein: 5,
        carbs: 65,
        fats: 8,
        image: "https://example.com/image.png", 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "THAI" },
        steps: [
          "Cook the glutinous rice in a steamer.",
          "Mix coconut milk with sugar and warm it in a pan.",
          "Serve rice topped with sliced mango and drizzle with coconut milk."
        ],
        ingredients: [
          { name: "Glutinous Rice", quantity: "1", unit: "cup" },
          { name: "Ripe Mango", quantity: "1", unit: "piece", note: "sliced" },
          { name: "Coconut Milk", quantity: "¼", unit: "cup" },
          { name: "Sugar", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "189",
        name: "Thai Style Pancakes (Khanom Krok)",
        description: "A healthy, protein-packed breakfast with a twist of sweetness.",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        calories: 300,
        protein: 6,
        carbs: 50,
        fats: 10,
        image: "https://example.com/image.png", 
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "THAI" },
        steps: [
          "Mix rice flour, coconut milk, egg, and sugar to form a batter.",
          "Spoon batter into a hot pan and cook on both sides.",
          "Sprinkle with shredded coconut and serve."
        ],
        ingredients: [
          { name: "Rice Flour", quantity: "½", unit: "cup" },
          { name: "Coconut Milk", quantity: "¼", unit: "cup" },
          { name: "Egg", quantity: "1", unit: "piece" },
          { name: "Sugar", quantity: "1", unit: "tbsp" },
          { name: "Shredded Coconut", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "190",
        name: "Thai Spicy Beef Salad (Yum Nua)",
        description: "A flavorful, protein-packed salad that boosts metabolism and promotes muscle repair.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 350,
        protein: 30,
        carbs: 15,
        fats: 15,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "THAI" },
        steps: [
          "Slice grilled beef and combine with cucumber, onion, and herbs.",
          "Drizzle with fish sauce and lime juice."
        ],
        ingredients: [
          { name: "Lean Beef", quantity: "100", unit: "g", note: "grilled" },
          { name: "Cucumber", quantity: "1", unit: "piece", note: "sliced" },
          { name: "Red Onion", quantity: "½", unit: "piece", note: "sliced" },
          { name: "Fish Sauce", quantity: "1", unit: "tbsp" },
          { name: "Lime Juice", quantity: "1", unit: "tbsp" },
          { name: "Fresh Mint", quantity: "to taste", unit: "", note: "for garnish" }
        ]
      },
      {
        _id: "191",
        name: "Thai Coconut Soup (Tom Kha Gai)",
        description: "A flavorful, immune-boosting breakfast with healthy fats and protein.",
        prepTime: 5,
        cookTime: 15,
        servings: 1,
        calories: 300,
        protein: 25,
        carbs: 10,
        fats: 20,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "THAI" },
        steps: [
          "Bring coconut milk to a simmer and add chicken, lemongrass, and lime leaves.",
          "Cook for 10 minutes, then add fish sauce and cilantro."
        ],
        ingredients: [
          { name: "Chicken Breast", quantity: "100", unit: "g", note: "sliced" },
          { name: "Coconut Milk", quantity: "1", unit: "cup" },
          { name: "Fish Sauce", quantity: "1", unit: "tbsp" },
          { name: "Lemongrass", quantity: "1", unit: "stalk", note: "crushed" },
          { name: "Kaffir Lime Leaves", quantity: "2", unit: "pieces" },
          { name: "Fresh Cilantro", quantity: "to taste", unit: "", note: "for garnish" }
        ]
      },
      {
        _id: "192",
        name: "Thai Sweet Potato & Tofu Stir-fry",
        description: "A plant-based, high-protein breakfast with healthy carbs and fats.",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 400,
        protein: 18,
        carbs: 45,
        fats: 18,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "THAI" },
        steps: [
          "Stir-fry sweet potato cubes in sesame oil until soft.",
          "Add tofu and soy sauce, cooking for an additional 5 minutes.",
          "Garnish with peanuts."
        ],
        ingredients: [
          { name: "Sweet Potato", quantity: "1", unit: "medium", note: "cubed" },
          { name: "Firm Tofu", quantity: "100", unit: "g", note: "cubed" },
          { name: "Soy Sauce", quantity: "1", unit: "tbsp" },
          { name: "Sesame Oil", quantity: "1", unit: "tsp" },
          { name: "Chopped Peanuts", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "193",
        name: "Moong Dal Chilla (Lentil Pancake)",
        description: "A high-protein, high-fiber breakfast option that provides sustained energy.",
        prepTime: 10,
        cookTime: 20,
        servings: 2,
        calories: 250,
        protein: 15,
        carbs: 30,
        fats: 8,
        image: "https://example.com/image.png",  // Replace with an actual image URL if available
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "INDIAN" },
        steps: [
          "Soak the moong dal overnight and grind it into a smooth batter.",
          "Mix in chopped vegetables, ginger, and green chili.",
          "Heat a non-stick pan and spread the batter into pancakes, cooking until golden brown on both sides."
        ],
        ingredients: [
          { name: "Moong Dal", quantity: "1", unit: "cup", note: "yellow split lentils" },
          { name: "Green Chili", quantity: "1", unit: "piece", note: "finely chopped" },
          { name: "Ginger", quantity: "1", unit: "tbsp", note: "grated" },
          { name: "Onion", quantity: "1", unit: "piece", note: "chopped" },
          { name: "Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "194",
        name: "Vegetable Upma",
        description: "A balanced, savory dish packed with protein, fiber, and vitamins.",
        prepTime: 10,
        cookTime: 15,
        servings: 2,
        calories: 280,
        protein: 7,
        carbs: 50,
        fats: 8,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "INDIAN" },
        steps: [
          "Roast the semolina in a pan until lightly golden.",
          "Heat oil in a pan and add mustard and cumin seeds.",
          "Add chopped vegetables and sauté for a few minutes.",
          "Add water and bring to a boil, then stir in the semolina.",
          "Cook until the water is absorbed, then serve."
        ],
        ingredients: [
          { name: "Semolina", quantity: "1", unit: "cup", note: "rava" },
          { name: "Mixed Vegetables", quantity: "1", unit: "cup", note: "carrots, peas, beans" },
          { name: "Mustard Seeds", quantity: "1", unit: "tsp" },
          { name: "Cumin Seeds", quantity: "1", unit: "tsp" },
          { name: "Oil", quantity: "1", unit: "tbsp" },
          { name: "Green Chili", quantity: "1", unit: "piece", note: "chopped" }
        ]
      },
      {
        _id: "195",
        name: "Poha (Flattened Rice)",
        description: "A light, protein-rich breakfast with good carbs for energy.",
        prepTime: 5,
        cookTime: 15,
        servings: 2,
        calories: 300,
        protein: 6,
        carbs: 50,
        fats: 10,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "INDIAN" },
        steps: [
          "Rinse the poha and set it aside.",
          "Heat oil in a pan, add mustard seeds, turmeric powder, and sauté onions and potatoes.",
          "Add the poha, salt, and cook for a few minutes.",
          "Garnish with coriander and serve."
        ],
        ingredients: [
          { name: "Poha", quantity: "1", unit: "cup", note: "flattened rice" },
          { name: "Potato", quantity: "1", unit: "small", note: "diced" },
          { name: "Onion", quantity: "1", unit: "piece", note: "chopped" },
          { name: "Mustard Seeds", quantity: "1", unit: "tsp" },
          { name: "Turmeric Powder", quantity: "1", unit: "tsp" },
          { name: " Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "196",
        name: "Masala Oats",
        description: "A fiber and protein-rich breakfast that boosts metabolism.",
        prepTime: 5,
        cookTime: 15,
        servings: 1,
        calories: 280,
        protein: 8,
        carbs: 40,
        fats: 9,
        image: "https://example.com/image.png",  // Replace with an actual image URL if available
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "INDIAN" },
        steps: [
          "Heat oil in a pan, add cumin seeds, and sauté vegetables.",
          "Add oats, water, and salt, and cook until the oats are soft.",
          "Garnish with cilantro and serve."
        ],
        ingredients: [
          { name: "Oats", quantity: "1", unit: "cup" },
          { name: "Mixed Vegetables", quantity: "1", unit: "cup", note: "carrot, peas, beans" },
          { name: "Cumin Seeds", quantity: "1", unit: "tsp" },
          { name: "Ginger", quantity: "1", unit: "tsp", note: "grated" },
          { name: "Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "197",
        name: "Scrambled Paneer (Indian Cottage Cheese)",
        description: "A protein-packed, low-carb breakfast ideal for muscle building.",
        prepTime: 5,
        cookTime: 10,
        servings: 1,
        calories: 300,
        protein: 20,
        carbs: 8,
        fats: 22,
        image: "https://example.com/image.png",  // Replace with an actual image URL if available
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "INDIAN" },
        steps: [
          "Crumble the paneer into small pieces.",
          "Heat oil in a pan and sauté onions, tomatoes, and green chili.",
          "Add the crumbled paneer and cook for a few minutes until well mixed."
        ],
        ingredients: [
          { name: "Paneer", quantity: "100", unit: "g", note: "cottage cheese" },
          { name: "Onion", quantity: "1", unit: "piece", note: "chopped" },
          { name: "Tomato", quantity: "1", unit: "piece", note: "chopped" },
          { name: "Green Chili", quantity: "1", unit: "piece", note: "chopped" },
          { name: "Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "198",
        name: "Dosa with Coconut Chutney",
        description: "A light breakfast that’s full of protein and healthy fats.",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 300,
        protein: 8,
        carbs: 40,
        fats: 12,
        image: "https://example.com/image.png",  // Replace with an actual image URL if available
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "INDIAN" },
        steps: [
          "Prepare the dosa batter and cook a thin, crispy dosa on a griddle.",
          "Serve with coconut chutney."
        ],
        ingredients: [
          { name: "Dosa", quantity: "1", unit: "piece", note: "fermented rice and lentil crepe" },
          { name: "Coconut Chutney", quantity: "2", unit: "tbsp" }
        ]
      },
      {
        _id: "199",
        name: "Chana Chaat (Chickpea Salad)",
        description: "A protein-packed, high-fiber breakfast salad to boost energy levels.",
        prepTime: 10,
        cookTime: 0,
        servings: 1,
        calories: 300,
        protein: 15,
        carbs: 40,
        fats: 10,
        image: "https://example.com/image.png",  // Replace with an actual image URL if available
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "INDIAN" },
        steps: [
          "Mix the chickpeas with chopped vegetables.",
          "Add lemon juice and chaat masala, toss well, and serve."
        ],
        ingredients: [
          { name: "Boiled Chickpeas", quantity: "1", unit: "cup" },
          { name: "Onion", quantity: "½", unit: "piece", note: "chopped" },
          { name: "Tomato", quantity: "1", unit: "piece", note: "chopped" },
          { name: "Cucumber", quantity: "1", unit: "piece", note: "chopped" },
          { name: "Lemon Juice", quantity: "1", unit: "tbsp" },
          { name: "Chaat Masala", quantity: "1", unit: "tsp" }
        ]
      },
      {
        _id: "200",
        name: "Aloo Paratha with Yogurt",
        description: "A wholesome, filling breakfast that combines carbs, protein, and healthy fats.",
        prepTime: 15,
        cookTime: 15,
        servings: 1,
        calories: 350,
        protein: 8,
        carbs: 50,
        fats: 15,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "INDIAN" },
        steps: [
          "Stuff the paratha with boiled, mashed potatoes, and roll it out.",
          "Cook the paratha with ghee on both sides.",
          "Serve with a side of plain yogurt."
        ],
        ingredients: [
          { name: "Whole Wheat Paratha", quantity: "1", unit: "piece", note: "flatbread" },
          { name: "Potato", quantity: "1", unit: "medium", note: "boiled and mashed" },
          { name: "Ghee", quantity: "1", unit: "tbsp", note: "for cooking" },
          { name: "Plain Yogurt", quantity: "1", unit: "cup" }
        ]
      },
      {
        _id: "201",
        name: "Vegetable Thepla",
        description: "A nutritious, protein-packed flatbread that supports muscle growth.",
        prepTime: 10,
        cookTime: 15,
        servings: 1,
        calories: 250,
        protein: 8,
        carbs: 40,
        fats: 8,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "INDIAN" },
        steps: [
          "Mix the flour, chopped spinach, grated carrot, and spices into a dough.",
          "Roll out the dough into thin flatbreads and cook on a hot griddle with a little oil."
        ],
        ingredients: [
          { name: "Whole Wheat Flour", quantity: "1", unit: "cup" },
          { name: "Spinach", quantity: "½", unit: "cup", note: "chopped" },
          { name: "Carrot", quantity: "1", unit: "piece", note: "grated" },
          { name: "Cumin Powder", quantity: "1", unit: "tsp" },
          { name: "Ginger Powder", quantity: "1", unit: "tsp" },
          { name: "Oil", quantity: "1", unit: "tbsp" }
        ]
      },
      {
        _id: "202",
        name: "Idli with Sambar",
        description: "A light, protein-rich breakfast with complex carbs for energy.",
        prepTime: 10,
        cookTime: 10,
        servings: 1,
        calories: 250,
        protein: 10,
        carbs: 45,
        fats: 5,
        image: "https://example.com/image.png",  
        category: { _id: "1", name: "BREAKFAST" },
        cuisine: { name: "INDIAN" },
        steps: [
          "Steam the idlis.",
          "Heat sambar and serve it with the idlis."
        ],
        ingredients: [
          { name: "Idlis", quantity: "2", unit: "pieces", note: "steamed rice cakes" },
          { name: "Sambar", quantity: "1", unit: "cup", note: "lentil soup with vegetables" }
        ]
      },
    ]

    setTimeout(() => {
      setRecipes(allBreakfastRecipes)
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
  }

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
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
        <h1>Breakfast Recipes</h1>
        <p>Start your day with these nutritious breakfast options</p>
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
                placeholder="Search breakfast recipes..."
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
            <div className="no-results">
              No breakfast recipes match your filters. Try adjusting your search criteria.
            </div>
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

export default BreakfastPage
