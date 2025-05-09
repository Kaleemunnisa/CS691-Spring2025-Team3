import { useState, useEffect } from "react"
import "./Dashboard.css"
import Header from "../Header/Header"
import ActivitySection from "../ActivitySection/ActivitySection"
import SleepSection from "../SleepSection/SleepSection"
import HeartRateSection from "../HeartRateSection/HeartRateSection"
import CaloriesSection from "../CaloriesSection/CaloriesSection"
import { useCalories } from "../../context/CalorieContext"

function Dashboard() {
  const { getTotalCaloriesToday } = useCalories()
  const [loading, setLoading] = useState(true)
  const [syncing, setSyncing] = useState(false)
  const [synced, setSynced] = useState(false)
  const [showFullDashboard, setShowFullDashboard] = useState(false)
  const [caloriesConsumed, setCaloriesConsumed] = useState(0)
  const [mockData, setMockData] = useState(null)
  // Removed unused syncCount state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const updateCalories = () => {
      const total = getTotalCaloriesToday()
      setCaloriesConsumed(total)
    }
    updateCalories()
  }, [getTotalCaloriesToday, synced])

  const generateMockData = () => {
    // Generate mock data for activity, sleep, and heart rate with increasing values
    const previousSteps = mockData?.activity?.steps || 7000
    const previousExerciseHours = mockData?.activity?.exerciseHours || 10
    const previousCaloriesBurned = mockData?.activity?.caloriesBurned || 700

    // Increase values by a random amount each sync
    const newSteps = previousSteps + Math.floor(Math.random() * 500) + 100
    const newExerciseHours = Math.min(24, previousExerciseHours + Math.floor(Math.random() * 3) + 1)
    const newCaloriesBurned = previousCaloriesBurned + Math.floor(Math.random() * 100) + 50

    // Generate increasing data for charts
    const generateIncreasingData = (previousData, minIncrease, maxIncrease, baseMin, baseMax) => {
      if (previousData) {
        return previousData.map((item) => ({
          value: Math.min(100, item.value + Math.floor(Math.random() * maxIncrease) + minIncrease),
        }))
      } else {
        return Array.from({ length: 14 }, () => ({
          value: Math.floor(Math.random() * (baseMax - baseMin)) + baseMin,
        }))
      }
    }

    // Generate sleep data with increasing values
    const generateSleepData = () => {
      const days = ["M", "T", "W", "R", "F", "S", "S"]
      if (mockData?.sleep?.sleepData) {
        return mockData.sleep.sleepData.map((item, index) => ({
          value: Math.min(100, item.value + Math.floor(Math.random() * 10) + 1),
          day: days[index],
        }))
      } else {
        return days.map((day) => ({
          value: Math.floor(Math.random() * 30) + 60,
          day,
        }))
      }
    }

    // Generate heart rate data with increasing values
    const generateHeartRateData = () => {
      const days = ["M", "T", "W", "R", "F", "S", "S"]
      if (mockData?.heartRate?.heartRateData) {
        return mockData.heartRate.heartRateData.map((item, index) => ({
          value: Math.min(100, item.value + Math.floor(Math.random() * 10) + 1),
          day: days[index],
        }))
      } else {
        return days.map((day) => ({
          value: Math.floor(Math.random() * 30) + 60,
          day,
        }))
      }
    }

    return {
      activity: {
        steps: newSteps,
        exerciseHours: newExerciseHours,
        caloriesBurned: newCaloriesBurned,
        moveData: generateIncreasingData(mockData?.activity?.moveData, 2, 8, 60, 100),
        exerciseData: generateIncreasingData(mockData?.activity?.exerciseData, 1, 6, 60, 90),
        goalData: generateIncreasingData(mockData?.activity?.goalData, 3, 10, 70, 100),
      },
      sleep: {
        averageSleep: `${Math.floor(Math.random() * 3) + 6}h ${Math.floor(Math.random() * 59)}m`,
        sleepData: generateSleepData(),
      },
      heartRate: {
        range: `${Math.floor(Math.random() * 10) + 50} - ${Math.floor(Math.random() * 20) + 180} BPM`,
        heartRateData: generateHeartRateData(),
      },
    }
  }

  const handleSync = () => {
    setSyncing(true)
    // Simulate syncing process
    setTimeout(() => {
      const generatedMockData = generateMockData()
      setMockData(generatedMockData)
      setSyncing(false)
      setSynced(true)
      setShowFullDashboard(true) // Show full dashboard after syncing
    }, 2000)
  }

  if (loading) {
    return (
      <div className="dashboard-container loading">
        <div className="loading-spinner"></div>
        <p>Loading dashboard data...</p>
      </div>
    )
  }

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <Header />
      </div>

      {/* Sync button moved below header and centered */}
      <div className="sync-button-container">
        <button
          className={`sync-button ${syncing ? "syncing" : ""} ${synced ? "synced" : ""}`}
          onClick={handleSync}
          disabled={syncing}
        >
          <span className={`sync-icon ${syncing ? "rotating" : ""}`}>⟳</span>
          {syncing ? "Syncing..." : synced ? "Synced" : "Sync Now"}
        </button>
      </div>

      {!synced ? (
        <div className="sync-container">
          <div className="sync-card">
            <h2>Welcome to Your Fitness Dashboard</h2>
            <p>Sync your data to view your fitness metrics and calorie information.</p>
            <p>Today's calories: {caloriesConsumed}</p>
          </div>
        </div>
      ) : (
        <div className="dashboard-content">
          {showFullDashboard && (
            <div className="dashboard-main">
              <ActivitySection mockData={mockData?.activity} />
            </div>
          )}

          <div className={`dashboard-side ${!showFullDashboard ? "full-width" : ""}`}>
            {showFullDashboard && <SleepSection mockData={mockData?.sleep} />}

            <div className={`dashboard-bottom-row ${!showFullDashboard ? "full-width" : ""}`}>
              {showFullDashboard && <HeartRateSection mockData={mockData?.heartRate} />}
              <CaloriesSection />
            </div>

            {!showFullDashboard && (
              <button className="show-more-button" onClick={() => setShowFullDashboard(true)}>
                Show More Metrics
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
