import googleIcon from "../../../components/assets/google.png"
import appleIcon from "../../../components/assets/apple.png"
import emailIcon from "../../../components/assets/gmail.png"

function ConnectedAccountsSection({ connectedAccounts, handleAccountAction }) {
  return (
    <div className="settings-section connected-accounts-section">
      <h3>
        <span className="accounts-icon">👤</span>
        Connected Accounts
      </h3>
      <p className="section-description">Manage accounts connected to your profile</p>

      <div className="account-list">
        <div className="account-item">
          <div className="account-info">
            <img src={googleIcon || "/placeholder.svg?height=24&width=24"} alt="Google" className="account-icon" />
            <div className="account-details">
              <div className="account-name">Google</div>
              {connectedAccounts.google.connected && (
                <div className="account-email">User {connectedAccounts.google.user}</div>
              )}
            </div>
          </div>
          <button
            className={`account-action-button ${connectedAccounts.google.connected ? "disconnect" : "connect"}`}
            onClick={() => handleAccountAction("google", connectedAccounts.google.connected ? "disconnect" : "connect")}
          >
            {connectedAccounts.google.connected ? "Disconnect" : "Connect"}
          </button>
        </div>

        <div className="account-item">
          <div className="account-info">
            <img src={appleIcon || "/placeholder.svg?height=24&width=24"} alt="Apple" className="account-icon" />
            <div className="account-details">
              <div className="account-name">Apple</div>
              {connectedAccounts.apple.connected ? (
                <div className="account-email">User {connectedAccounts.apple.user}</div>
              ) : (
                <div className="account-status">Not Connected</div>
              )}
            </div>
          </div>
          <button
            className={`account-action-button ${connectedAccounts.apple.connected ? "disconnect" : "connect"}`}
            onClick={() => handleAccountAction("apple", connectedAccounts.apple.connected ? "disconnect" : "connect")}
          >
            {connectedAccounts.apple.connected ? "Disconnect" : "Connect"}
          </button>
        </div>

        <div className="account-item">
          <div className="account-info">
            <img src={emailIcon || "/placeholder.svg?height=24&width=24"} alt="Email" className="account-icon" />
            <div className="account-details">
              <div className="account-name">Email</div>
              <div className="account-email">User {connectedAccounts.email.user}</div>
            </div>
          </div>
          <button
            className={`account-action-button primary ${connectedAccounts.email.isPrimary ? "active" : ""}`}
            onClick={() => handleAccountAction("email", "primary")}
          >
            Primary
          </button>
        </div>
      </div>
    </div>
  )
}

export default ConnectedAccountsSection
