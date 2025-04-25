import React from 'react';
import './Home.css';

const Home = () => {

    const stats = {
        happyStudents: 1200,
        monthlyStreamed: 3000,
        satisfactionRate: 95
    };


    return (
        <div className="hero">
            <div className="content">
                <div className='context'>
                    <h1>Transform Your Fitness Journey with Smart Insights</h1>
                    <p>
                        "We aim to empower individuals by offering personalized tracking and actionable insights, making every step of their fitness journey more effective and engaging."
                    </p>
                </div>
            </div>
            <a className="try-free" href="#login">Try it for free</a>
            {stats ? (
                <div className="stats">
                    <div><span>{stats.happyStudents}<span className='plus'>+</span></span><br />Happy Students</div>
                    <div className="divider">|</div>
                    <div><span>{stats.monthlyStreamed}<span className='plus'>+</span></span><br />Monthly Streamed</div>
                    <div className="divider">|</div>
                    <div><span>{stats.satisfactionRate}<span className='plus'>%</span></span><br />Satisfied</div>
                </div>
            ) : (
                <div className="loading">Loading stats...</div>
            )}
        </div>
    );
};

export default Home;
