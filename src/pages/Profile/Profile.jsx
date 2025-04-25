import { useState, useEffect } from "react"
import Sidebar from "../../components/Sidebar/Sidebar"
import "./Profile.css"

function Profile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    gender: "Male",
    height: "",
    weight: "",
    email: "",
    phone: "",
  })

  const [greeting, setGreeting] = useState("")

  useEffect(() => {
    const hour = new Date().getHours()
    let greetingText = "Good "

    if (hour < 12) {
      greetingText += "Morning"
    } else if (hour < 18) {
      greetingText += "Afternoon"
    } else {
      greetingText += "Evening"
    }

    setGreeting(greetingText)

    const savedUserData = localStorage.getItem("userData")
    if (savedUserData) {
      setFormData(JSON.parse(savedUserData))
    }
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleGenderChange = (e) => {
    setFormData({
      ...formData,
      gender: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    localStorage.setItem("userData", JSON.stringify(formData))
    alert("Profile updated successfully!")
  }

  return (
    <div className="profile-page">
      <Sidebar />

      <div className="profile-content">
        <div className="profile-header">
          <h1>Hi User, {greeting}</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="profile-grid">
            <div className="profile-section personal-info">
              <h2>Personal Information</h2>

              <div className="form-group">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group age-input">
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleInputChange}
                  min="1"
                  max="120"
                />
              </div>

              <div className="gender-section">
                <h3>Gender</h3>
                <div className="radio-group">
                  <div className="radio-option">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="Male"
                      checked={formData.gender === "Male"}
                      onChange={handleGenderChange}
                    />
                    <label htmlFor="male">Male</label>
                  </div>

                  <div className="radio-option">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="Female"
                      checked={formData.gender === "Female"}
                      onChange={handleGenderChange}
                    />
                    <label htmlFor="female">Female</label>
                  </div>

                  <div className="radio-option">
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      value="Other"
                      checked={formData.gender === "Other"}
                      onChange={handleGenderChange}
                    />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
              </div>
            </div>

            <div className="profile-section body-measurements">
              <h2>Body Measurements</h2>

              <div className="form-group">
                <input
                  type="text"
                  name="height"
                  placeholder="Height (cm)"
                  value={formData.height}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="weight"
                  placeholder="Weight (lbs/kgs)"
                  value={formData.weight}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div className="profile-section contact-info">
              <h2>Contact Information</h2>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          <div className="save-button-container">
            <button type="submit" className="save-button">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Profile
