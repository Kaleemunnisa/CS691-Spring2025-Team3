import "./BackWorkout.css"
import back1 from "../assets/back1.png"
import back2 from "../assets/back2.png"
import back3 from "../assets/back3.png"
import back4 from "../assets/back4.png"
import back5 from "../assets/back5.png"
import back6 from "../assets/back6.png"
import back7 from "../assets/back7.png"
import back8 from "../assets/back8.png"
import Header from "../../components/Header/Header"

const workoutExercises = [
  {
    name: "DEADLIFTS",
    image: back1,
    indicator: "10-12 REPS",
    indicatorType: "reps",
  },
  {
    name: "LAT PULLDOWN",
    image: back2,
  },
  {
    name: "BARBELL ROWS",
    image: back3,
    indicator: "REST TIME",
    indicatorType: "rest",
  },
  {
    name: "SEATED CABLE ROWS",
    image: back4,
  },
  {
    name: "T-BAR ROWS",
    image: back5,
  },
  {
    name: "SINGLE-ARM ROWS",
    image: back6,
  },
  {
    name: "REVERSE FLYS",
    image: back7,
  },
  {
    name: "FACE PULLS",
    image: back8,
  },
]

function BackWorkout() {
  return (
    <div className="back-workout-page">
      <Header/>

      <div className="workout-label">BACK WORKOUT</div>

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

export default BackWorkout

