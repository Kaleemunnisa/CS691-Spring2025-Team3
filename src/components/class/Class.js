import React, { useEffect, useState } from 'react';
import './Class.css';
import img1 from '../assets/pose1.jpg';
import img2 from '../assets/pose2.jpg';
import img3 from '../assets/pose3.jpg';
import img4 from '../assets/pose4.jpg';
import { useNavigate} from 'react-router-dom';

const classesData = [
    {
        title: "Yoga",
        description: "Experience the flow of the movement and breath that energizes your body and calms mind",
        image: img1
    },
    {
        title: "Meditation",
        description: "Perfect for beginners and experienced practitioners, our sessions help you cultivate peace and reduce stress",
        image: img2
    },
    {
        title: "Pilates",
        description: "Strengthen and tone with our dynamic Pilates classes, designed to improve core stability and posture",
        image: img3 
    },
    {
        title: "Guided Programs",
        description: "We have a structured plan for every single individual on the basis of proficiency (beginner or professional)",
        image: img4
    }
];

const Class = () => {
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
            setAnimate(true);
    }, []);

    const navigate = useNavigate();

    return (
        <div id="class" className={ `classes-container ${animate ? 'fade-in' : ''}`}>
            <h1>Your Healthy Partner</h1>
            <p>Our online yoga, meditation, pilates and guided wellness programs are designed to support you at every stage of your Fitness journey</p>
            <button href="#yoga" onClick={() => navigate('#yoga')}>Browse Classes</button>
            <div className="classes-grid">
                {classesData.map((classItem, index) => (
                    <div className="class-card" key={index}>
                        <img src={classItem.image} alt={classItem.title} />
                        <div className="overlay">
                            <h2>{classItem.title}</h2>
                            <p>{classItem.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Class;
