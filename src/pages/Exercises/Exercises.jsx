import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Exercises.css"
import front from "../assets/man-front.png"
import back from "../assets/man-back.png"
import Header from "../../components/Header/Header"

function Exercises() {
  const [selectedMuscle, setSelectedMuscle] = useState(null)
  const navigate = useNavigate()

  const muscleGroups = {
    front: [
      { name: "SHOULDERS", top: "21%", left: "37%" },
      { name: "CHEST", top: "26%", right: "33%" },
      { name: "BICEPS", top: "30%", right: "29%" },
      { name: "FOREARM", top: "38%", left: "32%" },
      { name: "ABS", top: "35%", right: "36.5%" },
      { name: "QUADS", top: "57%", right: "32%" },
    ],
    back: [
      { name: "TRAPS", top: "23%", left: "39%" },
      { name: "TRICEPS", top: "31%", left: "34.5%" },
      { name: "LATS", top: "32%", right: "35%" },
      { name: "LOWER BACK", top: "39%", right: "32%" },
      { name: "GLUTES", top: "46%", left: "40%" },
      { name: "HAMSTRINGS", top: "58%", right: "29%" },
      { name: "CALVES", top: "67%", left: "38%" },
    ],
  }

  const handleMuscleClick = (muscleName) => {
    setSelectedMuscle(muscleName)
    if (muscleName === "SHOULDERS") {
      navigate("/exercises/shoulders")
    } else if (muscleName === "ABS") {
      navigate("/exercises/abs")
    } else if (muscleName === "BICEPS" || muscleName === "TRICEPS") {
      navigate("/exercises/arms")
    } else if (muscleName === "TRAPS" || muscleName === "LATS" || muscleName === "LOWER BACK") {
      navigate("/exercises/back")
    } else if (muscleName === "CHEST") {
      navigate("/exercises/chest")
    } else if (muscleName === "FOREARM") {
      navigate("/excercises/forearm")
    } else if (
      muscleName === "QUADS" ||
      muscleName === "HAMSTRINGS" ||
      muscleName === "CALVES" ||
      muscleName === "GLUTES"
    ) {
      navigate("/exercises/legs")
    }
  }

  return (
    <div className="exercises-page">
      <Header/>

      <div className="anatomy-diagram">
        <div className="body-views">
          {}
          <div className="body-view front">
            <img src={front} alt="Front body view" className="body-image" />
            {muscleGroups.front.map((muscle, index) => (
              <div
                key={`front-${index}`}
                className={`muscle-label ${selectedMuscle === muscle.name ? "active" : ""}`}
                style={{
                  top: muscle.top,
                  left: muscle.left,
                  right: muscle.right,
                }}
                onClick={() => handleMuscleClick(muscle.name)}
              >
                <div className="label-box">{muscle.name}</div>
                <div className="label-line"></div>
              </div>
            ))}
          </div>

          {/* Back View */}
          <div className="body-view back">
            <img src={back} alt="Back body view" className="body-image" />
            {muscleGroups.back.map((muscle, index) => (
              <div
                key={`back-${index}`}
                className={`muscle-label ${selectedMuscle === muscle.name ? "active" : ""}`}
                style={{
                  top: muscle.top,
                  left: muscle.left,
                  right: muscle.right,
                }}
                onClick={() => handleMuscleClick(muscle.name)}
              >
                <div className="label-box">{muscle.name}</div>
                <div className="label-line"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Exercises

