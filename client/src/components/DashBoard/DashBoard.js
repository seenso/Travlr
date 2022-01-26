import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from "../NavBar/NavBar";
import NewVacation from "../NewVacation/NewVacation";
import Vacations from "../Vacations/Vacations"; 
import { useState } from 'react';

import "./dashboard.scss"
import React from 'react';


export default function DashBoard({ setUser, user }) {
  const [body, setBody] = useState("vacations");


  return (
    <Router>
        <div className="container">
            <NavBar setUser={setUser} setBody={setBody}/>
            <div className="content">
                <Routes>
                    <Route exact path="/new" element={<NewVacation />} />
                    <Route exact path="/vacations" element={<Vacations user={user} setBody={setBody} body={body}/> } />
                </Routes>
            </div>
        </div>
    </Router>
  );
}

