import "./HeartRateSection.css"
import BarChart from "../BarChart/BarChart"

function HeartRateSection() {
  const heartRateData = [
    { value: 60, day: "M" },
    { value: 80, day: "T" },
    { value: 50, day: "W" },
    { value: 90, day: "R" },
    { value: 70, day: "F" },
    { value: 85, day: "S" },
    { value: 65, day: "S" },
  ]

  return (
    <div className="heart-rate-section">
      <div className="heart-rate-header">
        <h3>Heart Rate</h3>
        <div className="time-range">
          <button className="time-btn active">D</button>
          <button className="time-btn">W</button>
          <button className="time-btn">M</button>
          <button className="time-btn">Y</button>
        </div>
      </div>

      <div className="heart-rate-value">
        <h2>56 - 189 BPM</h2>
      </div>

      <BarChart data={heartRateData} color="#f44336" showDays={true} />
    </div>
  )
}

export default HeartRateSection

