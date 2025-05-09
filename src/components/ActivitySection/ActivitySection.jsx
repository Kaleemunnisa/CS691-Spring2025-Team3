import "./ActivitySection.css"
import BarChart from "../BarChart/BarChart"

function ActivitySection({ mockData }) {
  const moveData = mockData?.moveData || [
    { name: "1", value: 65 },
    { name: "2", value: 85 },
    { name: "3", value: 70 },
    { name: "4", value: 90 },
    { name: "5", value: 75 },
    { name: "6", value: 95 },
    { name: "7", value: 80 },
    { name: "8", value: 85 },
    { name: "9", value: 70 },
    { name: "10", value: 90 },
    { name: "11", value: 75 },
    { name: "12", value: 95 },
    { name: "13", value: 80 },
    { name: "14", value: 85 },
  ]

  const exerciseData = mockData?.exerciseData || [
    { name: "1", value: 60 },
    { name: "2", value: 80 },
    { name: "3", value: 65 },
    { name: "4", value: 85 },
    { name: "5", value: 70 },
    { name: "6", value: 90 },
    { name: "7", value: 75 },
    { name: "8", value: 80 },
    { name: "9", value: 65 },
    { name: "10", value: 85 },
    { name: "11", value: 70 },
    { name: "12", value: 90 },
    { name: "13", value: 75 },
    { name: "14", value: 80 },
  ]

  const goalData = mockData?.goalData || [
    { name: "1", value: 70 },
    { name: "2", value: 90 },
    { name: "3", value: 75 },
    { name: "4", value: 95 },
    { name: "5", value: 80 },
    { name: "6", value: 100 },
    { name: "7", value: 85 },
    { name: "8", value: 90 },
    { name: "9", value: 75 },
    { name: "10", value: 95 },
    { name: "11", value: 80 },
    { name: "12", value: 100 },
    { name: "13", value: 85 },
    { name: "14", value: 90 },
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
            <span className="chart-value">{mockData?.steps || 7275} Steps</span>
          </div>
          <div className="chart-wrapper">
            <BarChart data={moveData} dataKey="value" xAxisKey="name" />
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header">
            <h3 className="exercise">Exercise</h3>
            <span className="chart-value">{mockData?.exerciseHours || 12} of 12 hr</span>
          </div>
          <div className="chart-wrapper">
            <BarChart data={exerciseData} dataKey="value" xAxisKey="name" />
          </div>
        </div>

        <div className="chart-container">
          <div className="chart-header">
            <h3 className="goal">Goal</h3>
            <span className="chart-value">{mockData?.caloriesBurned || 750} cal</span>
          </div>
          <div className="chart-wrapper">
            <BarChart data={goalData} dataKey="value" xAxisKey="name" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ActivitySection
