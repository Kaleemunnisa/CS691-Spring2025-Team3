import "./ChestWorkout.css"
import chest1 from "../assets/chest1.png"
import chest2 from "../assets/chest2.png"
import chest3 from "../assets/chest3.png"
import chest4 from "../assets/chest4.png"
import chest5 from "../assets/chest5.png"
import chest6 from "../assets/chest6.png"
import chest7 from "../assets/chest7.png"
import chest8 from "../assets/chest8.png"
import Header from "../../components/Header/Header"


const workoutExercises = [
  {
    name: "BARBELL BENCHPRESS",
    image: chest1,
    indicator: "10-12 REPS",
    indicatorType: "reps",
  },
  {
    name: "DUMBBELL PRESS",
    image: chest2,
  },
  {
    name: "DIPS",
    image: chest3,
    indicator: "REST TIME",
    indicatorType: "rest",
  },
  {
    name: "CABLE FLYS",
    image: chest4,
  },
  {
    name: "MACHINE CHESTPRESS",
    image: chest5,
  },
  {
    name: "PEC DECK MACHINE",
    image: chest6,
  },
  {
    name: "PUSHUPS",
    image: chest7,
  },
  {
    name: "SVEND PRESS",
    image: chest8,
  },

]

function ChestWorkout() {
  return (
    <div className="chest-workout-page">
      <Header />

      <div className="workout-label">CHEST WORKOUT</div>

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

export default ChestWorkout

