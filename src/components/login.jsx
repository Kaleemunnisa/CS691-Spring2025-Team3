import Nav from './nav/Nav';
import Home from '../Home';
import Class from './class/Class';
import Exercise from './exercise/Exercise';
import MealMastery from './meal-plan/MealMastery';
import Mix from './mix/Mix';
import Footer from './footer/footer';
import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react';
import './Login.css'

export function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        const userID = localStorage.getItem("userID");
        if(userID != null) {
            navigate("/");
        }
    }, [navigate]);
    return (
        <div className='home'>
            <Nav/>
            <Home />
            <Class />
            <Exercise />
            <MealMastery />
            <Mix/>
            <Footer/>
        </div>
    )
}