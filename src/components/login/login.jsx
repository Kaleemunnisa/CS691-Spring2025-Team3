import React, { useState, useEffect, useMemo } from 'react';
import './login.css';
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { OAuthProvider } from "firebase/auth";
import google from '../assets/google.png';
import apple from '../assets/apple.png';
import img1 from "../assets/login.jpg";
import img2 from "../assets/signup.jpg";
import { useNavigate } from 'react-router-dom';

const LoginModal = ({ isOpen, onClose, onLogin, onRegister, onGoogleLogin, onFacebookLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [isLogin, setIsLogin] = useState(true);
    const [error, setError] = useState('');
    const provider = useMemo(() => new GoogleAuthProvider(), []);
    const appleProvider = useMemo(() => new OAuthProvider('apple.com'), []);
    const navigate = useNavigate()

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
        return () => document.body.classList.remove('no-scroll');
    }, [isOpen]);

    useEffect(() => {
        const firebaseConfig = {
            apiKey: "AIzaSyCX8Z8pqqvcpkOxH8kZcN89gi8NrRygjbY",
            authDomain: "eat-and-fit-18.firebaseapp.com",
            projectId: "eat-and-fit-18",
            storageBucket: "eat-and-fit-18.firebasestorage.app",
            messagingSenderId: "275251542630",
            appId: "1:275251542630:web:0aef73e3620485f2b10ba7",
            measurementId: "G-RHYYTW2N4S"
        };
        
        // Initialize Firebase
        initializeApp(firebaseConfig);

        appleProvider.addScope('email');
        appleProvider.addScope('name');


        const loadGoogleAPI = () => {
            if (window.gapi) {
                window.gapi.load('client:auth2', () => {
                    window.gapi.auth2.init({
                        client_id: process.env.GOOGLE_CLIENT_ID,
                    });
                });
            } else {
                console.error('Google API not loaded');
            }
        };

        loadGoogleAPI();
    }, [provider, appleProvider]);

    const handleGoogleLogin = async () => {
        const auth = getAuth();
        signInWithPopup(auth, provider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            const user = result.user;

            localStorage.setItem("userID", token);
            localStorage.setItem("userData", JSON.stringify(user));
            navigate("/");
        }).catch((error) => {
            setError(error.message);
            // Optionally log for debugging:
            // console.error(error);
        });
    };

    const handleAppleLogin = async () => { 
        const auth = getAuth();
        signInWithPopup(auth, appleProvider)
        .then((result) => {
            const user = result.user;
            const credential = OAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            const idToken = credential.idToken;
        }).catch((error) => {
            setError(error.message);
            // Optionally log for debugging:
            // console.error(error);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isLogin) {
                const response = await fetch('/api/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password }),
                });
                const data = await response.json();
                if (response.ok) {
                    console.log('Login successful:', data);
                } else {
                    console.error('Login failed:', data.error);
                }
            } else {
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username, password, firstname, lastname }),
                });
                const data = await response.json();
                if (response.ok) {
                    console.log('Registration successful:', data);
                } else {
                    console.error('Registration failed:', data.error);
                }
            }
        } catch (error) {
            console.error('Error during submit:', error);
        }
    };

    if (!isOpen) return null;

    return (
        <div id="login" className="login-container">
            <div className="modal-overlay">
                <div className="modal">
                    <div className="modal-content">
                        <div className="image-div">
                            <img src={isLogin ? img1 : img2} alt="Description" />
                        </div>
                        <div className="form-div" style={{ flex: '1' }}>
                            <button className="close-button" onClick={onClose}>x</button>
                            <h2>{isLogin ? 'Login' : 'Register'}</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    {!isLogin && (
                                        <div className="name-inputs">
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                value={firstname}
                                                onChange={(e) => setFirstname(e.target.value)}
                                                required
                                            />
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                value={lastname}
                                                onChange={(e) => setLastname(e.target.value)}
                                                required
                                            />
                                        </div>
                                    )}
                                    <input
                                        type="text"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button type="submit" className="primary-button">
                                        {isLogin ? 'Login' : 'Register'}
                                    </button>
                                </div>

                                <div className="divider">
                                    <span>or continue with</span>
                                </div>

                                <div className="social-login">
                                    <button 
                                        type="button" 
                                        className="social-button google-btn"
                                        onClick={handleGoogleLogin}
                                    >
                                        <img src={google} alt="Google" />
                                    </button>
                                    <button 
                                        type="button" 
                                        className="social-button apple-btn"
                                        onClick={handleAppleLogin}
                                    >
                                        <img src={apple} alt="apple" />
                                    </button>
                                </div>
                            </form>
                            <div className="toggle-form">
                                <p>
                                    {isLogin ? "Don't have an account? " : "Already have an account? "}
                                    <button 
                                        className="toggle-button" 
                                        onClick={() => setIsLogin(!isLogin)}
                                    >
                                        {isLogin ? 'Register here' : 'Login here'}
                                    </button>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginModal;
