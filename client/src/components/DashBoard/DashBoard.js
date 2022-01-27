import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import NewVacation from "../NewVacation/NewVacation";
import Vacations from "../Vacations/Vacations"; 
import Landing from "../Landing/Landing";
import React, { useState } from 'react';

import "./dashboard.scss"

export default function DashBoard({ user, setUser, userList, setUserList, vacation, setVacation, onLogin }) {
  // vacation is alllll the vacations
  const [body, setBody] = useState("vacations");
  const [participants, setParticipants] = useState([])

  console.log("Participants in Dashboard", participants)
  console.log("Vacation in Dashboard", vacation)

  return (
    <Router>
        <div className="container">
            <NavBar setUser={setUser} setBody={setBody}/>
            <div className="content">
                <Routes>
                    <Route exact path="/" element={user ? <Home user={user}/> : <Landing user={user} onLogin={onLogin}/>} />

                    <Route exact path="/new" element={
                      <NewVacation 
                        user={user} 
                        setUser={setUser}
                        vacation={vacation}
                        setVacation={setVacation}
                        userList={userList}
                        setUserList={setUserList}
                        participants={participants}
                        setParticipants={setParticipants}
                      />
                    } />
                    <Route exact path="/vacations" element={
                      <Vacations 
                        user={user} 
                        body={body} 
                        setBody={setBody} 
                        participants={participants}
                        vacation={vacation}
                      /> 
                    } />
                </Routes>
            </div>
        </div>
    </Router>
  );
}

