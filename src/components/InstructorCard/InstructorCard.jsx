import "./InstructorCard.css"

function InstructorCard({ name }) {
  return (
    <div className="instructor-card">
      <h3>{name}</h3>
    </div>
  )
}

export default InstructorCard

