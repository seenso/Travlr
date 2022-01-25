import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import { Col } from 'react-bootstrap';



export default function Landing() {

    function click() {
        alert("CLICK")
    }

    return (
        <>
            <div className="container" id="landing">
            <div>I'm the Landing</div>
                {/* <img src="some-url" alt="title-image" /> */}
                <h1 className="title">TRAVLR</h1>
                <p>Vacations made easy!</p>
                <div onClick={click}>
                    <Login />
                </div>
                <div>
                    <SignUp />
                </div>
            </div>
        </>
    )
}

