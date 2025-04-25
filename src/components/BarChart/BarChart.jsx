import "./BarChart.css"

function BarChart({ data, color, showDays = false }) {

  const displayData = data.slice(-14)

  return (
    <div className="bar-chart">
      {displayData.map((item, index) => (
        <div key={index} className="bar-column">
          <div
            className="bar"
            style={{
              height: `${item.value}%`,
              backgroundColor: color,
            }}
          ></div>
          {showDays && item.day && <div className="day-label">{item.day}</div>}
        </div>
      ))}
    </div>
  )
}

export default BarChart

