import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function SignUp( {onLogin}) {
    const [modalShow, setModalShow] = React.useState(false);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let username
    let email
    let password
  
    function handleSubmit(e) {
        e.preventDefault();
        setErrors([]);
        setIsLoading(true);
        fetch("/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            password,
          }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => {
                console.log(err.errors)
                setErrors(err.errors);
            })
        }});
    }

    function handleSetName(e){
        e.preventDefault();
        username = e.target.value
    }

    function handleSetEmail(e){
        e.preventDefault();
        email = e.target.value
    }

    function handleSetPassword(e){
        e.preventDefault();
        password = e.target.value
    }

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Welcome!
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>User Name*</label>
                            <input 
                                type="username" 
                                className="form-control" 
                                id="username-input" 
                                placeholder="Enter User Name" 
                                onChange={handleSetName}
                                autoComplete="off"
                            ></input>
                        </div>
                        <div className="form-group">
                        <label>Email*</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email-input" 
                            placeholder="Enter Email"
                            onChange={handleSetEmail}
                        ></input>
                        </div>
                        <div className="form-group">
                            <label>Password*</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                id="password-input" 
                                placeholder="Password"
                                autoComplete="current-password"
                                onChange={handleSetPassword}
                            ></input>
                        </div>
                        <div>
                            <button type="submit">{isLoading ? "Loading..." : "Log In"}</button>
                        </div>
                        <div>
                            {errors.map((err) => (
                                <div key={err}>{err}</div>
                            ))}
                        </div>
                    </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
            </Modal>
        );
    }
    
    return (
        <>
            <Button variant="primary" onClick={() => setModalShow(true)}>
                Sign Up
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
