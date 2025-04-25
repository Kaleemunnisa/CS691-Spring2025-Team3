import "./PilatesClass.css"
import pilates from "../assets/pilates.jpg"
import Header from "../../components/Header/Header"

const pilatesExercises = [
  ["The Hundred", "Single Leg Stretch", "Corkscrew", "Knee Fold", "Pelvic Curl"],
  ["Roll-Up", "Scissors", "Leg Pull Front", "Spinal Rotation", "Side Leg Raise"],
  ["Roll-Over", "Criss-Cross", "Leg Pull Back", "Shoulder Bridge", "Hip Twist"],
  ["Single Leg Circles", "Saw", "Teaser", "Pilates Swimming", "Side Kick"],
  ["Double LegStretch", "Swan Dive", "Side Kick Series", "Swimming Prep", "Jackknife"],
]

function PilatesClass() {
  return (
    <div className="pilates-class-page">
      <Header />

      <div className="pilates-content">
        <div className="pilates-info">
          <h2>
            CHANGE HAPPENS
            <br />
            THROUGH MOVEMENT
            <br />
            AND
            <br />
            MOVEMENT HEALS
          </h2>
          <p>Stretch,Strengthen,and Relax from Home</p>
        </div>

        <div className="pilates-video-container">
          <div className="video-wrapper">
            <img
              src= {pilates}
              alt="Person demonstrating Pilates pose"
              className="video-preview"
            />
            <button className="play-button">
              <span className="play-icon">▶</span>
              <span className="play-text">Learn</span>
            </button>
            <button className="fullscreen-button">
              <span>⤢</span>
            </button>
          </div>
        </div>
      </div>

      <div className="pilates-exercises">
        {pilatesExercises.map((row, rowIndex) => (
          <div key={rowIndex} className="exercise-row">
            {row.map((exercise, exerciseIndex) => (
              <button key={exerciseIndex} className="exercise-button">
                {exercise}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default PilatesClass

