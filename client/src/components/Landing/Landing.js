import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { Col } from 'react-bootstrap';


export default function Landing( { onLogin }) {

    return (
        <>
            <div className="container" id="landing">
                {/* <img src="" alt="landing" /> */}
                <h1 className="title">TRAVLR</h1>
                <p>Vacations made easy!</p>
                <Col>
                    <Login onLogin={onLogin}/>
                    <SignUp onLogin={onLogin}/>
                </Col>
            </div>
        </>
    )
}

