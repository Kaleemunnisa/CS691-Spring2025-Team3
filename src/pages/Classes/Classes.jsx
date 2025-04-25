import "./Classes.css"
import ClassCard from "../../components/ClassCard/ClassCard"
// import InstructorCard from "../../components/InstructorCard/InstructorCard"
import meditation from "../assets/meditation.jpg"
import yoga from "../assets/yoga.jpg"
import pilates from "../assets/pilates.jpg"
import ayurvedic from "../assets/ayurvedic.jpg"
import Header from "../../components/Header/Header"

const classesData = [
  {
    title: "MEDITATION",
    image: meditation,
    alt: "Person meditating at sunset",
  },
  {
    title: "YOGA",
    image: yoga,
    alt: "Person in bridge pose",
  },
  {
    title: "PILATES",
    image: pilates,
    alt: "Person in pilates pose",
  },
  {
    title: "AYURVEDIC",
    image: ayurvedic,
    alt: "Person in standing split pose",
  },
]

// const instructorsData = [
//   {
//     name: "GATTU SUNNY ROHITH",
//   },
//   {
//     name: "PRAFULLANATH DIVI",
//   },
//   {
//     name: "HARSHA AREPALLI",
//   },
//   {
//     name: "CHAITANYA CHOWDARY",
//   },
// ]

function Classes() {
  return (
    <div className="classes-page">
      <Header/>

      <div className="classes-grid">
        {classesData.map((classItem, index) => (
          <ClassCard key={index} title={classItem.title} image={classItem.image} alt={classItem.alt} />
        ))}
      </div>

      {/* <div className="instructors-section">
        <h2>INSTRUCTORS</h2>
        <div className="instructors-grid">
          {instructorsData.map((instructor, index) => (
            <InstructorCard key={index} name={instructor.name} />
          ))}
        </div>
      </div> */}
    </div>
  )
} 

export default Classes

