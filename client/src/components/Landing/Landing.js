import React from "react";
import { Row, Col } from "react-bootstrap";
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

import "./landing.scss"

export default function Landing( { onLogin, setVacationRequest, vacationRequest }) {

    return (
        <div>
            <div className="landing-container" id="landing">
                <Col className="column">
                    <Row>
                        {/* <img className="background" src="https://cdn2.photostockeditor.com/c/0701/mountain-landscape-photography-of-silhouette-of-mountains-during-daytime-mountain%20range-mountain%20range-image.jpg" alt="landing" /> */}
                        <h1 className="landing-title">TRAVLR</h1>
                        <h2>Vacations made easy!</h2>
                    </Row>
                    <Row>
                        <div className="landing-buttons">
                            <Login onLogin={onLogin}/>
                            <SignUp 
                                onLogin={onLogin}
                                vacationRequest={vacationRequest} setVacationRequest={setVacationRequest}
                            />
                        </div>
                    </Row>
                </Col>
            </div>
        </div>
    )
}

