import "./CaloriesSection.css"
import BarChart from "../BarChart/BarChart"
import caloriesIcon from "../assets/calories-icon.png"
import proteinIcon from "../assets/protein-icon.png"
import carbsIcon from "../assets/carbs-icon.png"
import fiberIcon from "../assets/fiber-icon.png"

function CaloriesSection() {
  const caloriesData = [
    { value: 70, day: "M" },
    { value: 85, day: "T" },
    { value: 75, day: "W" },
    { value: 90, day: "R" },
    { value: 95, day: "F" },
    { value: 80, day: "S" },
    { value: 85, day: "S" },
  ]

  return (
    <div className="calories-section">
      <div className="calories-header">
        <div className="calories-info">
          <div className="calories-title">
            <h3>Count Your Daily Calories</h3>
            <img src={caloriesIcon || "/placeholder.svg"} alt="Calories" className="calories-icon" />
          </div>
          <div className="calories-stats">
            <div>Eaten 1400 Cal</div>
            <div>500 Kcal Left</div>
          </div>
        </div>
        <div className="time-range">
          <button className="time-btn active">W</button>
          <button className="time-btn">M</button>
          <button className="time-btn">Y</button>
        </div>
      </div>

      <div className="nutrition-chart">
        <div className="nutrition-list">
          <div className="nutrition-item">
            <div className="nutrition-icon protein">
              <img src={proteinIcon || "/placeholder.svg"} alt="Protein" />
            </div>
            <span>Protein</span>
          </div>
          <div className="nutrition-item">
            <div className="nutrition-icon carbs">
              <img src={carbsIcon || "/placeholder.svg"} alt="Carbs" />
            </div>
            <span>Carbs</span>
          </div>
          <div className="nutrition-item">
            <div className="nutrition-icon fiber">
              <img src={fiberIcon || "/placeholder.svg"} alt="Fiber" />
            </div>
            <span>Fiber</span>
          </div>
        </div>

        <BarChart data={caloriesData} color="#ff9800" showDays={true} />
      </div>
    </div>
  )
}

export default CaloriesSection

