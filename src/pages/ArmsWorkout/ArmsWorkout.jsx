import "./ArmsWorkout.css"
import arms1 from "../assets/chest1.png"
import arms2 from "../assets/chest2.png"
import arms3 from "../assets/chest3.png"
import arms4 from "../assets/chest4.png"
import arms5 from "../assets/chest5.png"
import arms6 from "../assets/chest6.png"
import arms7 from "../assets/chest7.png"
import arms8 from "../assets/chest8.png"
import Header from "../../components/Header/Header"


const workoutExercises = [
  {
    name: "BARBELL CURLS",
    image: arms1,
    indicator: "10-12 REPS",
    indicatorType: "reps",
  },
  {
    name: "HAMMER CURLS",
    image: arms2,
  },
  {
    name: "CLOSE BENCHPRESS",
    image: arms3,
    indicator: "REST TIME",
    indicatorType: "rest",
  },
  {
    name: "TRICEPS DIPS",
    image: arms4,
  },
  {
    name: "CONCENTRATION CURLS",
    image: arms5,
  },
  {
    name: "PREACHER CURLS",
    image: arms6,
  },
  {
    name: "ROPE-TRICEPS",
    image: arms7,
  },
  {
    name: "Overhead Dumbbell Triceps Extension",
    image: arms8,
  },
]

function ArmsWorkout() {
  return (
    <div className="arms-workout-page">
      <Header />

      <div className="workout-label">BICEPS&TRICEPS WORKOUT</div>

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

export default ArmsWorkout

