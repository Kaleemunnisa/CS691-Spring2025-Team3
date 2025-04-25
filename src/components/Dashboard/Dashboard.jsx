import "./Dashboard.css"
import Header from "../Header/Header"
import ActivitySection from "../ActivitySection/ActivitySection"
import SleepSection from "../SleepSection/SleepSection"
import HeartRateSection from "../HeartRateSection/HeartRateSection"
import CaloriesSection from "../CaloriesSection/CaloriesSection"

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <Header />
      </div>

      <div className="dashboard-content">
        <div className="dashboard-main">
          <ActivitySection />
        </div>

        <div className="dashboard-side">
          <SleepSection />

          <div className="dashboard-bottom-row">
            <HeartRateSection />
            <CaloriesSection />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

