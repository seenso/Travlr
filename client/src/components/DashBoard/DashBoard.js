import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import NewVacation from "../NewVacation/NewVacation";
import Vacations from "../Vacations/Vacations"; 
import { useState } from 'react';

import "./dashboard.scss"
import React from 'react';


export default function DashBoard({ user, setUser, vacation, setVacation, userList, setUserList }) {
  const [body, setBody] = useState("vacations");


  return (
    <Router>
        <div className="container">
            <NavBar setUser={setUser} setBody={setBody}/>
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home user={user}/>} />
                    <Route exact path="/new" element={
                      <NewVacation 
                        user={user} 
                        setUser={setUser}
                        vacation={vacation}
                        setVacation={setVacation}
                        userList={userList}
                        setUserList={setUserList}
                      />
                    } />
                    <Route exact path="/vacations" element={<Vacations user={user} setBody={setBody} body={body}/> } />
                </Routes>
            </div>
        </div>
    </Router>
  );
}

