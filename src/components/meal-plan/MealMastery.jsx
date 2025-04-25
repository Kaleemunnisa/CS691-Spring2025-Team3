import React, { useState, useEffect } from 'react';
import './MealMastery.css';
import img1 from "../assets/meal-1.jpg";
import img2 from "../assets/meal-2.jpg";
import img3 from "../assets/meal-3.jpg";

const MealMastery = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const SkeletonCard = () => (
    <div className="card skeleton">
      <div className="skeleton-image"></div>
      <div className="card-content">
        <div className="skeleton-line title"></div>
        <div className="skeleton-line text"></div>
      </div>
    </div>
  );

  return (
    <div id="mealmastery" className="container">
      {isLoading ? (
        <div className="skeleton-title"></div>
      ) : (
        <h1>Meal Mastery</h1>
      )}
      
      {isLoading ? (
        <div className="skeleton-description">
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
          <div className="skeleton-line"></div>
        </div>
      ) : (
        <p className="description">
          Explore our Meal Plan page for tailored meal plans designed for weight loss, muscle gain, or general health...
        </p>
      )}
      
      <div className="cards">
        {isLoading ? (
          <>
            <SkeletonCard />
            <SkeletonCard />
            <SkeletonCard />
          </>
        ) : (
          <>
            <div className="card">
              <img src={img1} alt="Recipes" />
              <div className="card-content">
                <h2>Recipes</h2>
                <p>Delicious, healthy meal ideas</p>
              </div>
            </div>
            <div className="card">
              <img src={img2} alt="Build Your Own Bowl" />
              <div className="card-content">
                <h2>Build Your Own Bowl</h2>
                <p>Customize meals to your taste</p>
              </div>
            </div>
            <div className="card">
              <img src={img3} alt="Upload Images" />
              <div className="card-content">
                <h2>Upload Images</h2>
                <p>Instant nutritional analysis from photos</p>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MealMastery;