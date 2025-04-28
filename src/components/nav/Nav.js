import React, { useState } from 'react';
import axios from 'axios';
import './Nav.css';
import LoginModal from '../login/login';

const Nav = () => {
    const navClass = 'navbar'; 
    const [activeNav, setActiveNav] = useState('#');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleJoinUsClick = () => {
        setIsModalOpen(true);
    };

    const handleLogin = async (username, password) => {
        try {
            const response = await axios.post('http://localhost:5000/api/auth/login', { username, password });
            localStorage.setItem('token', response.data.token);
            setIsLoggedIn(true);
            setIsModalOpen(false);
            alert('Login successful!');
        } catch (error) {
            console.error('Login failed:', error);
            alert('Login failed. Please check your credentials.');
        }
    };

    const handleRegister = async (username, password) => {
        try {
            await axios.post('http://localhost:5000/api/auth/register', { username, password });
            alert('Registration successful! Please login.');
        } catch (error) {
            console.error('Registration failed:', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <nav className={navClass}>
            <div className="nav-links">
                    <a href='#class' 
                    onClick={() => setActiveNav('#class')} 
                    className={activeNav === '#class' ? 'active' : ''}>Classes</a>
                    <a href="#exercise" 
                    onClick={() => setActiveNav('#exercise')} 
                    className={activeNav === '#exercise' ? 'active' : ''}>Exercise</a>
                    <a href="#mealmastery" 
                    onClick={() => setActiveNav('#mealmastery')} 
                    className={activeNav === '#mealmastery' ? 'active' : ''}>Meal-plan</a>
            </div>
            <div className="nav-title">Eat & Fit</div>
            <div className="nav-signup">
                {isLoggedIn ? (
                    <button>Welcome!</button>
                ) : (
                    <button onClick={handleJoinUsClick}>JoinUs</button>
                )}
            </div>
            {isModalOpen && <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} onLogin={handleLogin} onRegister={handleRegister} />}
        </nav>
    );
};

export default Nav; 