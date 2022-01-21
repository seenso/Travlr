import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from "../NavBar/NavBar";
import NewVacation from "../NewVacation/NewVacation";
import Vacations from "../Vacations/Vacations"; 

import "./dashboard.scss"


export default function DashBoard() {
  
  return (
    <Router>
        <div className="container">
            <NavBar />
            <div className="content">
                <Routes>
                    <Route exact path="/new">
                        <NewVacation />
                    </Route>
                    <Route exact path="/vacations">
                        <Vacations /> 
                    </Route>
                </Routes>
            </div>
        </div>
    </Router>
  );
}

