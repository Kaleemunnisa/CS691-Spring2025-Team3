import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function AuthLoading() {
    const navigate = useNavigate();

    useEffect(()=>{
        checkAuthState();
    }, []);

    const checkAuthState = () => {
        const userID = localStorage.getItem("userID");
        if(userID == null) {
            navigate("/login");
        } else {
            navigate("/dashboard");
        }
    }

    return (
        <span>AuthLoading</span>
    );
}