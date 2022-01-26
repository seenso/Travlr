import React from "react";
import { Row, Col } from "react-bootstrap";
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

import "./landing.scss"

export default function Landing( { onLogin }) {

    return (
        <>
            <div className="landing-container" id="landing">
                <Col className="column">
                    <Row>
                        {/* <img src="" alt="landing" /> */}
                        <h1 className="landing-title">TRAVLR</h1>
                        <h2>Vacations made easy!</h2>
                    </Row>
                    <Row>
                        <div className="landing-buttons">
                            <Login onLogin={onLogin}/>
                            <SignUp onLogin={onLogin}/>
                        </div>
                    </Row>
                </Col>
            </div>
        </>
    )
}

