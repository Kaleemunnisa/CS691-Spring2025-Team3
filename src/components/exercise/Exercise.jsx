import React from 'react';
import './Exercise.css';
import heroImage from '../assets/exercise-bg.jpg'; 

const Exercise = () => {
  return (
    <div id="exercise" className="exercise-page">
      <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
        <div className="hero-content-wrapper">
          <div className="hero-text">
            <h1>Exercise for every individual</h1>
            <p>
              We have a detailed and tailored plan for every user according to the schedule of the user and the details provided by the user preferences
            </p>
          </div>
          <button className="browse-btn">Browse Exercise</button>
        </div>
      </div>

      <div className="features-container">
        <div className="feature-card">
          <h2>Stay Active, Stay Connected</h2>
          <p>We offer a comprehensive fitness platform that includes personalized workout tracking</p>
        </div>

        <div className="feature-card">
          <h2>Exercise anytime</h2>
          <p>We offer a comprehensive fitness platform that includes personalized workout tracking</p>
        </div>

        <div className="feature-card">
          <h2>Empower Your Journey</h2>
          <p>We offer a comprehensive fitness platform that includes personalized workout tracking</p>
        </div>

        <div className="feature-card">
          <h2>Elevate Your Routine</h2>
          <p>We offer a comprehensive fitness platform that includes personalized workout tracking</p>
        </div>
      </div>
    </div>
  );
};

export default Exercise; 