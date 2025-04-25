"use client"

function PreferencesSection({ darkMode, toggleDarkMode }) {
  return (
    <div className="settings-section preferences-section">
      <div className="app-preferences">
        <h3>
          <span className="preferences-icon">⚙️</span>
          <span className="dark-mode-icon">🌞</span>
          App Preferences
        </h3>

        <div className="preference-item">
          <span>Dark mode</span>
          <label className="toggle-switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="toggle-slider"></span>
          </label>
        </div>
      </div>
    </div>
  )
}

export default PreferencesSection
