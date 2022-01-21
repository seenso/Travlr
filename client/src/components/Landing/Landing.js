import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { Col } from 'react-bootstrap';


export default function Landing() {

    return (
        <>
            <div id="landing">
                {/* <img src="some-url" alt="title-image" /> */}
                <h1 className="title">TRAVLR</h1>
                <p>Vacations made easy!</p>
                <Col>
                    <Login />
                    <SignUp />
                </Col>
            </div>
        </>
    )
}

