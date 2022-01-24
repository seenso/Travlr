import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from "../NavBar/NavBar";
import NewVacation from "../NewVacation/NewVacation";
import Vacations from "../Vacations/Vacations"; 

import "./dashboard.scss"


export default function DashBoard() {



  function handleLogOut (){
    console.log("LOGGED OUT!")
  }
  
  return (
    <Router>
        <div className="container">
            <NavBar handleLogOut={handleLogOut}/>
            <div className="content">
                <Routes>
                    <Route exact path="/new" element={<NewVacation />} />
                    <Route exact path="/vacations" element={<Vacations /> } />
                </Routes>
            </div>
        </div>
    </Router>
  );
}

