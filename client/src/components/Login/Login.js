import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./login.scss"


export default function Login( { onLogin }) {
    const [modalShow, setModalShow] = React.useState(false);
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    let username
    let password

    
    function handleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((user) => onLogin(user));
          } else {
            r.json().then((err) => setErrors(err.errors));
          }
        });
    }
    
    function handleSetName(e){
        e.preventDefault();
        username = e.target.value
    }

    function handleSetPassword(e){
        e.preventDefault();
        password = e.target.value
    }

    function MyVerticallyCenteredModal(props) {
        return (
            <Modal
                {...props}
                size="m"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Welcome Back!
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
                            <Button 
                                style={{ backgroundColor: "#3E5C76", margin: "1%"}}
                                type="submit"
                            >{isLoading ? "Loading..." : "Log In"}
                            </Button>
                        </div>
                        <div>
                            {errors.map((err) => (
                                <div key={err}>{err}</div>
                            ))}
                        </div>
                    </Form>
            </Modal.Body>
            </Modal>
        );
    }

    return (
        <>
            <Button 
                className="login-button" 
                variant="primary" 
                style={{ backgroundColor: "#3E5C76", margin: "1%"}}
                onClick={() => setModalShow(true)
            }>
                Login
            </Button>

            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </>
    )
}
