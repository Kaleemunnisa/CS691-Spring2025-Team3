import "./ActivitySection.css"
import BarChart from "../BarChart/BarChart"

function ActivitySection() {
  const moveData = [
    { value: 65 },
    { value: 85 },
    { value: 70 },
    { value: 90 },
    { value: 75 },
    { value: 95 },
    { value: 80 },
    { value: 85 },
    { value: 70 },
    { value: 90 },
    { value: 75 },
    { value: 95 },
    { value: 80 },
    { value: 85 },
  ]

  const exerciseData = [
    { value: 60 },
    { value: 80 },
    { value: 65 },
    { value: 85 },
    { value: 70 },
    { value: 90 },
    { value: 75 },
    { value: 80 },
    { value: 65 },
    { value: 85 },
    { value: 70 },
    { value: 90 },
    { value: 75 },
    { value: 80 },
  ]

  const goalData = [
    { value: 70 },
    { value: 90 },
    { value: 75 },
    { value: 95 },
    { value: 80 },
    { value: 100 },
    { value: 85 },
    { value: 90 },
    { value: 75 },
    { value: 95 },
    { value: 80 },
    { value: 100 },
    { value: 85 },
    { value: 90 },
  ]

  return (
    <div className="activity-section">
      <div className="time-range">
        <button className="time-btn">D</button>
        <button className="time-btn active">W</button>
        <button className="time-btn">M</button>
        <button className="time-btn">6M</button>
        <button className="time-btn">Y</button>
      </div>

      <div className="activity-charts">
        <div className="chart-container">
          <div className="chart-header">
            <h3 className="move">Move</h3>
            <span className="chart-value">7275 Steps</span>
          </div>
          <BarChart data={moveData} color="#ff4d8f" />
        </div>

        <div className="chart-container">
          <div className="chart-header">
            <h3 className="exercise">Exercise</h3>
            <span className="chart-value">12 of 12 hr</span>
          </div>
          <BarChart data={exerciseData} color="#ffc107" />
        </div>

        <div className="chart-container">
          <div className="chart-header">
            <h3 className="goal">Goal</h3>
            <span className="chart-value">750 cal</span>
          </div>
          <BarChart data={goalData} color="#4dd0e1" />
        </div>
      </div>
    </div>
  )
}

export default ActivitySection

