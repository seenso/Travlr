import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import NewVacation from "../NewVacation/NewVacation";
import Vacations from "../Vacations/Vacations"; 

import "./dashboard.scss"


export default function DashBoard({ user, setUser, vacation, setVacation }) {


  return (
    <Router>
        <div className="container">
            <NavBar setUser={setUser}/>
            <div className="content">
                <Routes>
                    <Route exact path="/" element={<Home user={user}/>} />
                    <Route exact path="/new" element={
                      <NewVacation 
                        user={user} 
                        setUser={setUser}
                        vacation={vacation}
                        setVacation={setVacation}
                      />
                    } />
                    <Route exact path="/vacations" element={<Vacations /> } />
                </Routes>
            </div>
        </div>
    </Router>
  );
}

