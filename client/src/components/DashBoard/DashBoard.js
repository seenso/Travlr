import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import NavBar from "../NavBar/NavBar";
import NewVacation from "../NewVacation/NewVacation";
import Vacations from "../Vacations/Vacations"; 

import "./dashboard.scss"


export default function DashBoard({ setUser }) {

  return (
    <Router>
        <div>I'm the DASHBOARD</div>
        <div className="container">
            <NavBar setUser={setUser}/>
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

