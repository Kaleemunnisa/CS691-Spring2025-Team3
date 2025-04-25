import "./Header.css"
import React, { useState, useEffect } from 'react';

function Header() {
  const [userData, setUserData] = useState({});

  useEffect(()=>{
    const userData = localStorage.getItem("userData");
    setUserData(JSON.parse(userData));
  }, []);

  return (
    <header className="header">
      <div className="user-greeting">
        <div className="user-avatar">
          <img src="/placeholder.svg" alt="User" />
        </div>
        <h1>Hi {userData?.displayName ? userData?.displayName : 'User'}, Good Evening</h1>
      </div>
    </header>
  )
}

export default Header

