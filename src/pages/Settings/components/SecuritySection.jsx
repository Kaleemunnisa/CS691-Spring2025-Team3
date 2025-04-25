function SecuritySection({ passwordData, handlePasswordChange, handleUpdatePassword }) {
  return (
    <div className="settings-section security-section">
      <h2>Settings</h2>

      <div className="settings-tab">
        <button className="tab-button active">Security</button>
      </div>

      <div className="password-section">
        <h3>
          <span className="password-icon">🔑</span>
          Password
        </h3>
        <p className="section-description">Update your own password to keep your account secure</p>

        <form onSubmit={handleUpdatePassword}>
          <div className="form-group">
            <input
              type="password"
              name="currentPassword"
              placeholder="Current Password"
              value={passwordData.currentPassword}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              name="newPassword"
              placeholder="New Password"
              value={passwordData.newPassword}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="form-group confirm-password">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new Password"
              value={passwordData.confirmPassword}
              onChange={handlePasswordChange}
            />
          </div>

          <div className="update-button-container">
            <button type="submit" className="update-button">
              Update Password
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SecuritySection
