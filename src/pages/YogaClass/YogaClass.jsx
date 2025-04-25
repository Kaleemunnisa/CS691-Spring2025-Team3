import "./YogaClass.css"
import yoga from "../assets/yoga.jpg"
import Header from "../../components/Header/Header"

const yogaPoses = [
  ["Surya Namaskar", "Vajrasana", "Malasana", "Garudasana", "Marichyasana"],
  ["Tadasana", "Shavasana", "Padmasana", "Utkatasana", "Salabhasana"],
  ["Vrikshasana", "Ustrasana", "Bakasana", "Sukhasana", "Ananda Balasana"],
  ["Bhujangasana", "Trikonasana", "Anjaneyasana", "Virasana", "Virabhadrasana1"],
  ["Dhanurasana", "Marjariasana", "Navasana", "Halasana", "Virabhadrasana2"],
]

function YogaClass() {
  return (
    <div className="yoga-class-page">
      <Header />

      <div className="yoga-content">
        <div className="yoga-info">
          <h2>
            UNLOCK
            <br />
            FLEXIBILITY WITH
            <br />
            VIRTUAL YOGA
          </h2>
          <p>Stretch,Strengthen,and Relax from Home</p>
        </div>

        <div className="yoga-video-container">
          <div className="video-wrapper">
            <img
              src= {yoga}
              alt="Yoga instructor demonstrating pose"
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

      <div className="yoga-poses">
        {yogaPoses.map((row, rowIndex) => (
          <div key={rowIndex} className="pose-row">
            {row.map((pose, poseIndex) => (
              <button key={poseIndex} className="pose-button">
                {pose}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default YogaClass

