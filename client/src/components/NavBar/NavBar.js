import React from 'react'
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';

import "./navbar.scss"


export default function NavBar() {
  
  return (
    <nav className="navBar">
        <Row>
            <div>
                <h1 className="logo">✈️TRAVLR</h1>
                {/* <h2>Hello, {user.name}</h2> */}
                <Link className="navbtn" to="/" ><span>HOME</span></Link> 
                <Link className="navbtn" to="/new"><span>ADD VACATION</span></Link>
                <Link className="navbtn" to="/vacations"><span>MY VACATIONS</span></Link> 
                <div>Logout</div>
            </div>
        </Row>
    </nav>
  );
}