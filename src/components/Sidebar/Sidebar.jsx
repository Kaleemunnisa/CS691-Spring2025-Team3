import { useState, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import "./Sidebar.css"
import userIcon from "../assets/user-icon.png"
import dashboardIcon from "../assets/dashboard-icon.png"
import classesIcon from "../assets/classes-icon.png"
import exercisesIcon from "../assets/exercises-icon.png"
import mealPlanIcon from "../assets/meal-plan-icon.png"
import settingsIcon from "../assets/settings-icon.png"
import logoutIcon from "../assets/logout-icon.png"
import menuIcon from "../assets/menu-icon.png"

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [userData, setUserData] = useState({});
  const location = useLocation()
  const navigate = useNavigate();

  const toggleSidebar = () => {
    // setIsOpen(!isclose) // Removed toggle functionality
  }

  useEffect(() => {
    const user = localStorage.getItem("userData");
    setUserData(JSON.parse(user));

    const handleClickOutside = (event) => {
      const sidebar = document.querySelector(".sidebar")
      const toggle = document.querySelector(".sidebar-toggle")

      if (
        sidebar &&
        toggle &&
        !sidebar.contains(event.target) &&
        !toggle.contains(event.target) &&
        window.innerWidth < 1024
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsOpen(false)
    }
  }, [])

  const logOut = () => {
    localStorage.removeItem("userID");
    localStorage.removeItem("userData");
    navigate("/");
  }

  return (
    <>
      {/* Removed the sidebar toggle button */}
      {/* <button className="sidebar-toggle" onClick={toggleSidebar}> */}
      {/*   <img src={menuIcon || "/placeholder.svg"} alt="Menu" /> */}
      {/* </button> */}

      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-user">
          <div className="user-avatar">
            <img src={userIcon || "/placeholder.svg"} alt="User" />
          </div>
          <span className="username">{userData?.['displayName']}</span>
        </div>
        <div className="gap" />
        <nav className="sidebar-nav">
          <ul>
            <li className={location.pathname === "/" ? "active" : ""}>
              <a href="/">
                <div className="nav-icon">
                  <img src={dashboardIcon || "/placeholder.svg"} alt="Dashboard" />
                </div>
                <span>Dashboard</span>
              </a>
            </li>
            <li className={location.pathname.includes("/classes") ? "active" : ""}>
              <a href="/classes">
                <div className="nav-icon">
                  <img src={classesIcon || "/placeholder.svg"} alt="Classes" />
                </div>
                <span>Classes</span>
              </a>
            </li>
            <li className={location.pathname.includes("/exercises") ? "active" : ""}>
              <a href="/exercises">
                <div className="nav-icon">
                  <img src={exercisesIcon || "/placeholder.svg"} alt="Exercises" />
                </div>
                <span>Exercises</span>
              </a>
            </li>
            <li className={location.pathname.includes("/meal-plan") ? "active" : ""}>
              <a href="/meal-plan">
                <div className="nav-icon">
                  <img src={mealPlanIcon || "/placeholder.svg"} alt="Meal Plan" />
                </div>
                <span>Meal Plan</span>
              </a>
            </li>
            <li className={location.pathname.includes("/settings") ? "active" : ""}>
              <a href="/settings">
                <div className="nav-icon">
                  <img src={settingsIcon || "/placeholder.svg"} alt="Settings" />
                </div>
                <span>Settings</span>
              </a>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <a href="#logout">
            <div className="nav-icon" onClick={logOut}>
              <img src={logoutIcon || "/placeholder.svg"} alt="Logout" />
            </div>
          </a>
        </div>
      </div>
    </>
  )
}

export default Sidebar