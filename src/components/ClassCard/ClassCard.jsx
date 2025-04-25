import { useNavigate } from "react-router-dom"
import "./ClassCard.css"

function ClassCard({ title, image, alt }) {
  const navigate = useNavigate()

  const handleClick = () => {
    if (title === "YOGA") {
      navigate("/classes/yoga")
    } else if (title === "MEDITATION") {
      navigate("/classes/meditation")
    } else if (title === "PILATES") {
      navigate("/classes/pilates")
    } else if (title === "AYURVEDIC") {
      navigate("/classes/ayurvedic")
    }
  }

  return (
    <div className="class-card" onClick={handleClick}>
      <div className="class-card-image">
        <img src={image || "/placeholder.svg"} alt={alt} />
        <div className="class-card-overlay">
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default ClassCard