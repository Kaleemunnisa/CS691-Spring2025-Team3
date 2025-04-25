import "./AyurvedicClass.css"
import ayurvedic from "../assets/ayurvedic.jpg"
import Header from "../../components/Header/Header"

const ayurvedicExercises = [
  ["Chair Pose", "Dolphin Pose", "Sage Pose", "Wheel Pose", "Flutter Kicks"],
  ["Plank Pose", "Sphinx Pose", "Bridge Pose", "Leg Raises", "Wall Sits"],
  ["Tree Pose", "Goddess Pose", "Fish Pose", "Jumping Jacks", "Calf Raises"],
  ["Reverse Warrior", "Forward Fold", "Eagle Pose", "Deadlifts", "Mountain Pose"],
  ["Pigeon Pose", "Standing Split", "Moon Salutation", "Chin-Ups", "Crow Pose"],
]

function AyurvedicClass() {
  return (
    <div className="ayurvedic-class-page">
      <Header />
      
      <div className="ayurvedic-content">
        <div className="ayurvedic-info">
          <h2>
            IN AYURVEDIC HEALING
            <br />
            WELLNESS IS A REFLECTION
            <br />
            OF THE STATE OF
            <br />
            YOUR MIND
          </h2>
          <p>Stretch,Strengthen,and Relax from Home</p>
        </div>

        <div className="ayurvedic-video-container">
          <div className="video-wrapper">
            <img
              src= {ayurvedic}
              alt="People doing handstands in gym"
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

      <div className="ayurvedic-exercises">
        {ayurvedicExercises.map((row, rowIndex) => (
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

export default AyurvedicClass

