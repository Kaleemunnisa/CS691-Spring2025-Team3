import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';


jest.mock('./components/Sidebar/Sidebar', () => () => <div>Sidebar</div>);
jest.mock('./components/Dashboard/Dashboard', () => () => <div>Dashboard</div>);
jest.mock('./components/login', () => ({ Login: () => <div>Login</div> }));
jest.mock('./components/AuthLoading', () => ({ AuthLoading: () => <div>Loading...</div> }));
jest.mock('./pages/Profile/Profile', () => () => <div>Profile</div>);
jest.mock('./pages/Classes/Classes', () => () => <div>Classes</div>);

describe('App Component', () => {
  beforeEach(() => {
    localStorage.clear(); 
  });

  test('renders AuthLoading component on root path', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  test('renders Login component on /login path', () => {
    window.history.pushState({}, 'Login', '/login');
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test('renders Profile component on /profile path', () => {
    localStorage.setItem('userID', '123'); // Simulate user logged in
    window.history.pushState({}, 'Profile', '/profile');
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByText(/Profile/i)).toBeInTheDocument();
  });

  test('renders Sidebar when user is logged in', () => {
    localStorage.setItem('userID', '123'); // Simulate user logged in
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByText(/Sidebar/i)).toBeInTheDocument();
  });

  test('does not render Sidebar when user is not logged in', () => {
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.queryByText(/Sidebar/i)).not.toBeInTheDocument();
  });

  test('renders Classes component on /classes path', () => {
    localStorage.setItem('userID', '123'); // Simulate user logged in
    window.history.pushState({}, 'Classes', '/classes');
    render(
      <Router>
        <App />
      </Router>
    );
    expect(screen.getByText(/Classes/i)).toBeInTheDocument();
  });

  // Add more tests for other routes and components as needed...
});