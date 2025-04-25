import { useState, useEffect } from "react"
import Sidebar from "../../components/Sidebar/Sidebar"
import SecuritySection from "./components/SecuritySection"
import PreferencesSection from "./components/PreferencesSection"
import ConnectedAccountsSection from "./components/ConnectedAccountsSection"
import "./Settings.css"

function Settings() {
  const [greeting, setGreeting] = useState("")
  const [darkMode, setDarkMode] = useState(true)
  const [passwordData, setPasswordData] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  })

  // Connected accounts state
  const [connectedAccounts, setConnectedAccounts] = useState({
    google: {
      connected: true,
      user: "user@gmail.com",
    },
    apple: {
      connected: false,
      user: "",
    },
    email: {
      connected: true,
      user: "user@example.com",
      isPrimary: true,
    },
  })

  useEffect(() => {
    // Set greeting based on time of day
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

    // Check if dark mode preference exists in localStorage
    const savedDarkMode = localStorage.getItem("darkMode")
    if (savedDarkMode) {
      setDarkMode(savedDarkMode === "true")
    }
  }, [])

  // Update dark mode in localStorage when changed
  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString())
    // Apply dark mode to body
    if (darkMode) {
      document.body.classList.add("dark-mode")
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkMode])

  const handlePasswordChange = (e) => {
    const { name, value } = e.target
    setPasswordData({
      ...passwordData,
      [name]: value,
    })
  }

  const handleUpdatePassword = (e) => {
    e.preventDefault()

    // Validate passwords
    if (!passwordData.currentPassword) {
      alert("Please enter your current password")
      return
    }

    if (passwordData.newPassword !== passwordData.confirmPassword) {
      alert("New passwords do not match")
      return
    }

    if (passwordData.newPassword.length < 8) {
      alert("Password must be at least 8 characters long")
      return
    }

    // Password update logic would go here
    alert("Password updated successfully!")

    // Clear form
    setPasswordData({
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    })
  }

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  const handleAccountAction = (account, action) => {
    const updatedAccounts = { ...connectedAccounts }

    if (action === "connect") {
      updatedAccounts[account].connected = true
      updatedAccounts[account].user = account === "apple" ? "user@icloud.com" : ""
    } else if (action === "disconnect") {
      updatedAccounts[account].connected = false
      updatedAccounts[account].user = ""
    } else if (action === "primary") {
      // Set all accounts to non-primary first
      Object.keys(updatedAccounts).forEach((key) => {
        if (updatedAccounts[key].hasOwnProperty("isPrimary")) {
          updatedAccounts[key].isPrimary = false
        }
      })
      // Then set the selected account as primary
      updatedAccounts[account].isPrimary = true
    }

    setConnectedAccounts(updatedAccounts)
  }

  return (
    <div className="settings-page">
      <Sidebar />

      <div className="settings-content">
        <div className="settings-header">
          <h1>Hi User, {greeting}</h1>
        </div>

        <div className="settings-grid">
          <SecuritySection
            passwordData={passwordData}
            handlePasswordChange={handlePasswordChange}
            handleUpdatePassword={handleUpdatePassword}
          />

          <PreferencesSection darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <ConnectedAccountsSection connectedAccounts={connectedAccounts} handleAccountAction={handleAccountAction} />
        </div>
      </div>
    </div>
  )
}

export default Settings
