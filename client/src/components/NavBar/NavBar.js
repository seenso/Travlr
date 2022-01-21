import React from 'react'
import { Link } from 'react-router-dom';

import "./navbar.scss"


export default function NavBar() {
  
  return (
    <nav className="navBar">
        <div className="wrapper">
              <div className="left">
                {/* <h2>Hello, {user.name}</h2> */}
                <Link className="logo" to="/" ><span>✈️TRAVLR</span></Link> 
              </div>
              <div className="right">
                <Link className="navlink" to="/new"><span>ADD VACATION</span></Link>
                <Link className="navlink" to="/vacations"><span>MY VACATIONS</span></Link> 
                <button>Logout</button>
              </div>
        </div>
    </nav>
  );
}