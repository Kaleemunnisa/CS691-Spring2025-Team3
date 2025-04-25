import "./MeditationClass.css"
import meditation from "../assets/meditation.jpg"
import Header from "../../components/Header/Header"

const meditationTechniques = [
  ["Focused Attention", "Breath Awareness", "Vipassana", "Sound Bath", "Insight"],
  ["Mindfulness", "Transcendental", "Yoga Nidra", "Nada Yoga", "Breath Counting"],
  ["Loving-Kindness", "Mantra", "Chakra Meditation", "Tonglen", "Heart-Centered"],
  ["Body Scan", "Walking", "Visualization", "Taoist", "Shikantaza"],
  ["Guided", "Zen Meditation", "Candle Gazing", "Kundalini", "Pranayama"],
]

function MeditationClass() {
  return (
    <div className="meditation-class-page">
      <Header />

      <div className="meditation-content">
        <div className="meditation-info">
          <h2>
            INSPIRATION
            <br />
            FOR
            <br />
            JOYFUL LIVING
          </h2>
          <p>Stretch,Strengthen,and Relax from Home</p>
        </div>

        <div className="meditation-video-container">
          <div className="video-wrapper">
            <img src={meditation} alt="Person meditating" className="video-preview" />
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

      <div className="meditation-techniques">
        {meditationTechniques.map((row, rowIndex) => (
          <div key={rowIndex} className="technique-row">
            {row.map((technique, techniqueIndex) => (
              <button key={techniqueIndex} className="technique-button">
                {technique}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MeditationClass

