import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import React, { useEffect, useState } from "react"
import Sidebar from "./components/Sidebar/Sidebar"
import Dashboard from "./components/Dashboard/Dashboard"
import Classes from "./pages/Classes/Classes"
import Exercises from "./pages/Exercises/Exercises"
import Profile from "./pages/Profile/Profile"
import YogaClass from "./pages/YogaClass/YogaClass"
import MeditationClass from "./pages/MeditationClass/MeditationClass"
import PilatesClass from "./pages/PilatesClass/PilatesClass"
import AyurvedicClass from "./pages/AyurvedicClass/AyurvedicClass"
import ShoulderWorkout from "./pages/ShoulderWorkout/ShoulderWorkout"
import AbsWorkout from "./pages/AbsWorkout/AbsWorkout"
import ArmsWorkout from "./pages/ArmsWorkout/ArmsWorkout"
import BackWorkout from "./pages/BackWorkout/BackWorkout"
import ChestWorkout from "./pages/ChestWorkout/ChestWorkout"
import LegsWorkout from "./pages/LegsWorkout/LegsWorkout"
import ForearmWorkout from "./pages/ForearmWorkout/ForearmWorkout"
import MealPlan from "./pages/MealPlan/MealPlan"
import { Login } from './components/login.jsx';
import { AuthLoading } from './components/AuthLoading.jsx';
import MealCategories from './components/Meal/MealCategories/MealCategories'
import BreakfastPage from "./pages/MealPlan/BreakfastPage"
import LunchPage from "./pages/MealPlan/LunchPage"
import DinnerPage from "./pages/MealPlan/DinnerPage"
import ProteinShakesPage from "./pages/MealPlan/ProteinShakesPage"
import SnacksPage from "./pages/MealPlan/SnacksPage"
import DessertsPage from "./pages/MealPlan/DessertsPage"
import RecipeSearchPage from "./pages/MealPlan/RecipeSearchPage"
import Settings from "./pages/Settings/Settings"
import "./App.css"


function App() {
  const [showSideBar, setShowSideBar] = useState(false);

  useEffect(()=>{
    setInterval(checkSideBar.bind(this));
  }, []);

  const checkSideBar = () => {
    const userID = localStorage.getItem("userID");
    setShowSideBar(userID != null);
  };

  return (
    <Router>
      <div className="app">
        { showSideBar && <Sidebar /> }
        <Routes>
          <Route path="/" element={<AuthLoading />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/classes/yoga" element={<YogaClass />} />
          <Route path="/classes/meditation" element={<MeditationClass />} />
          <Route path="/classes/pilates" element={<PilatesClass />} />
          <Route path="/classes/ayurvedic" element={<AyurvedicClass />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/exercises/shoulders" element={<ShoulderWorkout />} />
          <Route path="/exercises/abs" element={<AbsWorkout />} />
          <Route path="/exercises/arms" element={<ArmsWorkout />} />
          <Route path="/exercises/back" element={<BackWorkout />} />
          <Route path="/exercises/chest" element={<ChestWorkout />} />
          <Route path="/exercises/legs" element={<LegsWorkout />} />
          <Route path="/excercises/forearm" element={<ForearmWorkout/>} />
          <Route path="/meal-plan" element={<MealPlan/>} />
          <Route path="/meal-categories" element={<MealCategories />} />
          <Route path="/meal-plan/breakfast" element={<BreakfastPage />} />
          <Route path="/meal-plan/lunch" element={<LunchPage />} />
          <Route path="/meal-plan/dinner" element={<DinnerPage />} />
          <Route path="/meal-plan/snacks" element={<SnacksPage />} />
          <Route path="/meal-plan/protein-shakes" element={<ProteinShakesPage />} />
          <Route path="/meal-plan/desserts" element={<DessertsPage />} />
          <Route path="/meal-plan/recipe-search" element={<RecipeSearchPage />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

