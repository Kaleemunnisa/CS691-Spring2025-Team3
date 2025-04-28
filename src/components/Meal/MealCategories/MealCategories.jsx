import {  useState } from "react"
import { useNavigate } from "react-router-dom"
import "./MealCategories.css"
import B1 from "../../assets/B1.jpg"
import L1 from "../../assets/L1.jpg"
import D1 from "../../assets/D1.jpg"
import S1 from "../../assets/S1.jpg"
import PS1 from "../../assets/P1.jpg"
import DE1 from "../../assets/DE1.jpg"

function MealCategories() {
  const [searchQuery, setSearchQuery] = useState("")
  const navigate = useNavigate()

  const categories = [
    {
      _id: "1",
      name: "BREAKFAST",
      image: B1,
      path: "/meal-plan/breakfast",
    },
    {
      _id: "2",
      name: "LUNCH",
      image:
        L1,
      path: "/meal-plan/lunch",
    },
    {
      _id: "3",
      name: "DINNER",
      image:
        D1,
      path: "/meal-plan/dinner",
    },
    {
      _id: "4",
      name: "SNACKS",
      image:
        S1,
      path: "/meal-plan/snacks",
    },
    {
      _id: "5",
      name: "PROTEIN SHAKES",
      image:
        PS1,
      path: "/meal-plan/protein-shakes",
    },
    {
      _id: "6",
      name: "DESSERTS",
      image:
        DE1,
      path: "/meal-plan/desserts",
    },
    {
      _id: "7",
      name: "Recipe Search",
      description: "Search for recipes",
      image: "/cookbook-ingredients.png",
      path: "/recipe-search",
    },
  ]

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
  }

  const filteredCategories = categories.filter((category) => {
    if (searchQuery && !category.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false
    }
    return true
  })

  const handleCategoryClick = (categoryPath) => {
    navigate(categoryPath)
  }

  return (
    <div className="meal-categories">
      <div className="filter-section">
        <div className="search-container">
          <input
            type="search"
            placeholder="Search meal categories..."
            className="search-input"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="categories-status">
        {filteredCategories.length === 0 ? (
          <p className="no-results">No categories match your search. Try adjusting your search term.</p>
        ) : (
          <p className="results-count">Showing {filteredCategories.length} categories</p>
        )}
      </div>

      <div className="categories-grid">
        {filteredCategories.map((category) => (
          <div className="category-item" key={category._id} onClick={() => handleCategoryClick(category.path)}>
            <img src={category.image || "/placeholder.svg"} alt={category.name} className="category-image" />
            <div className="category-overlay">
              <h3>{category.name}</h3>
              <p className="category-description">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MealCategories

