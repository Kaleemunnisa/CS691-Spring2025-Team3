import "./ForearmWorkout.css"
import forearm1 from "../assets/1.JPG"
import forearm2 from "../assets/2.JPG"
import forearm3 from "../assets/3.JPG"
import forearm4 from "../assets/4.JPG"
import forearm5 from "../assets/5.JPG"
import forearm6 from "../assets/6.JPG"
import forearm7 from "../assets/7.JPG"
import forearm8 from "../assets/8.JPG"
import Header from "../../components/Header/Header"

const workoutExercises = [
  {
    name: "WRIST CURLS",
    image: forearm1,
    indicator: "10-12 REPS",
    indicatorType: "reps",
  },
  {
    name: "PALMS DOWN",
    image: forearm2,
  },
  {
    name: "REVERSE CURLS",
    image: forearm3,
    indicator: "REST TIME",
    indicatorType: "rest",
  },
  {
    name: "ZOTTAM CURLS",
    image: forearm4,
  },
  {
    name: "HAMMER CURLS",
    image: forearm5,
  },
  {
    name: "WRIST ROLLER",
    image: forearm6,
  },
  {
    name: "TOWEL PULLUPS",
    image: forearm7,
  },
  {
    name: "DEAD HANGS",
    image: forearm8,
  },
]

function ForearmWorkout() {
  return (
    <div className="forearm-workout-page">
      <Header />
      <div className="workout-label">FOREARM WORKOUT</div>

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

export default ForearmWorkout

