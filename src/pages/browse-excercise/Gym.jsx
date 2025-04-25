import React, { useState } from 'react';
import './Gym.css'; // Ensure you have a CSS file for styling

import ShouldersImg from '../assets/shoulders.jpg';
import ChestImg from '../assets/chest.jpg';


function Gym() {
    const muscleGroups = [
        { name: 'Shoulders', image: ShouldersImg },
        { name: 'Forearms', image: '../assets/forearms.jpg' },
        { name: 'Chest', image: ChestImg },
        { name: 'Biceps', image: '../assets/biceps.jpg' },
        { name: 'Quads', image: '../assets/quads.jpg' },
        { name: 'Traps', image: '../assets/traps.jpg' },
        { name: 'Triceps', image: '../assets/triceps.jpg' },
        { name: 'Glutes', image: '../assets/glutes.jpg' },  
        { name: 'Lats', image: '../assets/lats.jpg' },
        { name: 'Lower Back', image: '../assets/lowerback.jpg' },
        { name: 'Hamstrings', image: '../assets/hamstrings.jpg' },
        { name: 'Calves', image: '../assets/calves.jpg' },
    ];

    const workoutCategories = [
        { name: 'Boxing', trainers: 12 },
        { name: 'Yoga', trainers: 16 },
        { name: 'Cardio', trainers: 11 },
        { name: 'Strength Training', trainers: 10 },
        { name: 'Pilates', trainers: 7 },
        { name: 'CrossFit', trainers: 3 },
        { name: 'Cycling', trainers: 2 },
        { name: 'Martial Arts', trainers: 5 },
        { name: 'Running', trainers: 9 },
        { name: 'Zumba', trainers: 3 },
        { name: 'Stretching', trainers: 13 },
        { name: 'Swimming', trainers: 10 },
    ];

    const [selectedMuscle, setSelectedMuscle] = useState(null);

    return (
        <div className="gym-container">
            <div className="muscle-grid">
                {muscleGroups.map((muscle) => (
                    <button
                        key={muscle.name}
                        onClick={() => setSelectedMuscle(muscle.name)}
                        className={`muscle-card ${selectedMuscle === muscle.name ? 'selected' : ''}`}
                    >
                        <div className="card-content">
                            <div className="image-container">
                                <img 
                                    src={muscle.image} 
                                    alt={muscle.name} 
                                    className="muscle-image"
                                />
                            </div>
                            <h2 className="muscle-name">{muscle.name}</h2>
                        </div>
                    </button>
                ))}
            </div>

            {selectedMuscle && (
                <div className="exercise-section">
                    <h3 className="exercise-title">Exercises for {selectedMuscle}</h3>
                </div>
            )}

            <div className="workout-categories">
                <h2>Workout Categories</h2>
                <div className="category-grid">
                    {workoutCategories.map((category) => (
                        <div key={category.name} className="category-item">
                            {category.name} <span>{category.trainers} Trainers</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gym;
