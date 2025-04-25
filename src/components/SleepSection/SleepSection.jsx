import "./SleepSection.css"
import BarChart from "../BarChart/BarChart"
import clockIcon from "../assets/clock-icon.png"

function SleepSection() {
  const sleepData = [
    { value: 70 },
    { value: 60 },
    { value: 75 },
    { value: 85 },
    { value: 65 },
    { value: 80 },
    { value: 90 },
  ]

  return (
    <div className="sleep-section">
      <div className="sleep-header">
        <h3>Sleep Time</h3>
        <div className="time-range">
          <button className="time-btn active">W</button>
          <button className="time-btn">M</button>
          <button className="time-btn">Y</button>
        </div>
      </div>

      <div className="sleep-subheader">
        <span>Average Sleep Time</span>
        <img src={clockIcon || "/placeholder.svg"} alt="Clock" className="clock-icon" />
      </div>

      <div className="sleep-chart-container">
        <div className="sleep-times">
          <div>06:00</div>
          <div>13:00</div>
          <div>22:00</div>
        </div>
        <BarChart data={sleepData} color="#4caf50" showDays={true} />
      </div>
    </div>
  )
}

export default SleepSection

