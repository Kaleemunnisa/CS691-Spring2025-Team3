import "./LegsWorkout.css"
import leg1 from "../assets/leg1.png"
import leg2 from "../assets/leg2.png"
import leg3 from "../assets/leg3.png"
import leg4 from "../assets/leg4.png"
import leg5 from "../assets/leg5.png"
import leg6 from "../assets/leg6.png"
import leg7 from "../assets/leg7.png"
import leg8 from "../assets/leg8.png"
import Header from "../../components/Header/Header"


const workoutExercises = [
  {
    name: "SQUATS",
    image: leg1,
    indicator: "10-12 REPS",
    indicatorType: "reps",
  },
  {
    name: "BULGARIAN SQUATS",
    image: leg2,
  },
  {
    name: "ROMANIAN DEADLIFTS",
    image: leg3,
    indicator: "REST TIME",
    indicatorType: "rest",
  },
  {
    name: "LEG PRESS",
    image: leg4,
  },
  {
    name: "HIP THRUSTS",
    image: leg5,
  },
  {
    name: "CALF RAISES",
    image: leg6,
  },
  {
    name: "WALKING LUNGES",
    image: leg7,
  },
  {
    name: "HACK SQUAT MACHINE",
    image: leg8,
  },
]

function LegsWorkout() {
  return (
    <div className="legs-workout-page">
      <Header />

      <div className="workout-label">LEGS&GLUTES WORKOUT</div>

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

export default LegsWorkout

