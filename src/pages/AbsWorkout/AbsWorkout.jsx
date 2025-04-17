import "./AbsWorkout.css"
import abs1 from "../assets/abs1.png"
import abs2 from "../assets/abs2.png"
import abs3 from "../assets/abs3.png"
import abs4 from "../assets/abs4.png"
import abs5 from "../assets/abs5.png"
import abs6 from "../assets/abs6.png"
import abs7 from "../assets/abs7.png"
import abs8 from "../assets/abs8.jpeg"
import Header from "../../components/Header/Header"

const workoutExercises = [
  {
    name: "RUSSIAN TWISTS",
    image: abs1,
    indicator: "10-12 REPS",
    indicatorType: "reps",
  },
  {
    name: "HANGING LEG RAISES",
    image: abs2,
  },
  {
    name: "CABLE CRUNCHES",
    image: abs3,
    indicator: "REST TIME",
    indicatorType: "rest",
  },
  {
    name: "PLANK",
    image: abs4,
  },
  {
    name: "HANGING KNEE RAISES",
    image: abs5,
  },
  {
    name: "BICYCLE CRUNCHES",
    image: abs6,
  },
  {
    name: "OBLIQUE SIDE BENDS",
    image: abs7,
  },
  {
    name: "TOE TOUCHES",
    image: abs8,
  },
]

function AbsWorkout() {
  return (
    <div className="abs-workout-page">
     <Header/>

      <div className="workout-label">ABS WORKOUT</div>

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

export default AbsWorkout

