import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Landing from "../Landing/Landing";
import NewVacation from "../NewVacation/NewVacation";
import Vacations from "../Vacations/Vacations"; 

import { useState } from 'react';

import "./dashboard.scss"
import React from 'react';


export default function DashBoard({ 
  user, setUser, 
  vacation, setVacation, 
  userList, setUserList, 
  onLogin, 
  vacationRequest, setVacationRequest 
}) {
  const [body, setBody] = useState("vacations");
  const [participants, setParticipants] = useState([])

  return (
    <Router>
        <div className="container">
            <NavBar setUser={setUser} setBody={setBody}/>
            <div className="content">
                <Routes>
                    <Route exact path="/" element={
                      user ? <Home user={user}/> : <Landing user={user} onLogin={onLogin}/>
                      } />
                    <Route exact path="/new" element={
                      <NewVacation 
                        user={user} 
                        setUser={setUser}
                        vacation={vacation}
                        setVacation={setVacation}
                        userList={userList}
                        setUserList={setUserList}
                        vacationRequest={vacationRequest}
                        setVacationRequest={setVacationRequest}
                        participants={participants}
                        setParticipants={setParticipants}
                      />
                    } />
                    <Route exact path="/vacations" element={
                      <Vacations 
                        vacationRequest={vacationRequest} 
                        setVacationRequest={setVacationRequest} 
                        user={user} 
                        setBody={setBody} 
                        body={body}
                        vacation={vacation}
                        participants={participants}
                      /> 
                    } />
                </Routes>
            </div>
        </div>
    </Router>
  );
}

