import React from "react";
import { Row, Col } from "react-bootstrap";
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';

import "./landing.scss"

export default function Landing( { onLogin, setVacationRequest, vacationRequest }) {

    return (
        <div>
            <div className="landing-container" id="landing">
                    <div className="landing">
                        <div className="left">
                            <div className="wrapper">
                                <div className="intro">
                                    <div className="intro__text__container">
                                        <h1 className="intro__text">TRAVLR</h1>
                                    </div>
                                </div>
                                    <div className="intro__text__container">
                                        <h2 className="intro__text">Vacations made easy!</h2>
                                    </div>
                                <div className="login-wrapper">
                                    <Login onLogin={onLogin}/>
                                    <SignUp 
                                        onLogin={onLogin}
                                        vacationRequest={vacationRequest} setVacationRequest={setVacationRequest}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="right">
                            <div className="imgContainer">
                                <img 
                                className="background" 
                                src="https://cdn.shopify.com/s/files/1/0032/2446/9568/products/Collection_Luggage_CarryOn_OceanBlue_900x.png?v=1632403044" 
                                alt="landing" 
                                />
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    )
}

