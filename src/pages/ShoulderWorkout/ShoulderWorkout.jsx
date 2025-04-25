import "./ShoulderWorkout.css"
import overHeadPress from "../assets/shoulder1.png"
import dumbellShoulder from "../assets/shoulder2.png"
import lateralRaises from "../assets/shoulder3.png"
import arnoldPress from "../assets/shoulder4.png"
import pecDec from "../assets/shoulder5.png"
import frontRaises from "../assets/shoulder6.png"
import cableLateralRaises from "../assets/shoulder7.png"
import uprightRows from "../assets/shoulder8.png"
import Header from "../../components/Header/Header"


const workoutExercises = [
  {
    name: "OVERHEAD PRESS",
    image: overHeadPress,
    indicator: "10-12 REPS",
    indicatorType: "reps",
  },
  {
    name: "DUMBELL SHOULDER",
    image: dumbellShoulder,
    indicator: "10-12 REPS",
    indicatorType: "reps",
  },
  {
    name: "LATERAL RAISES",
    image: lateralRaises,
    indicator: "10-12 REPS",
    indicatorType: "reps",
  },
  {
    name: "ARNOLD PRESS",
    image: arnoldPress,
    indicator: "10-12 REPS",
    indicatorType: "reps",
  },
  {
    name: "REVERSE PEC-DECK FLY",
    image: pecDec,
    indicator: "10-12 REPS",
    indicatorType: "reps",
  },
  {
    name: "FRONT RAISES",
    image: frontRaises,
    indicator: "10-12 REPS",
    indicatorType: "reps",
  },
  {
    name: "CABLE LATERAL RAISES",
    image: cableLateralRaises,
    indicator: "10-12 REPS",
    indicatorType: "reps",
  },
  {
    name: "UPRIGHT ROWS",
    image: uprightRows,
    indicator: "10-12 REPS",
    indicatorType: "reps",
  },
]

function ShoulderWorkout() {
  return (
    <div className="shoulder-workout-page">
      <Header />

      <div className="workout-label">SHOULDER WORKOUT</div>

      <div className="exercises-grid">
        {workoutExercises.map((exercise, index) => (
          <div key={index} className="exercise-card">
            <div className="exercise-image-container">
              <img src={exercise.image || "/placeholder.svg"} alt={exercise.name} className="exercise-image" />
              <div className="exercise-overlay">
                <h3>{exercise.name}</h3>
                {exercise.indicator && (
                  <div className={`indicator ${exercise.indicatorType}`}>
                    {exercise.indicatorType === "reps" && (
                      <div className="reps-icon">
                        <div className="circle-icon">⟳</div>
                      </div>
                    )}
                    {exercise.indicatorType === "rest" && (
                      <div className="rest-icon">
                        <div className="clock-icon">⏱</div>
                      </div>
                    )}
                    {exercise.indicator}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ShoulderWorkout

