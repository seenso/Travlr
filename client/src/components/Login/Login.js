import React, { useState } from "react";

export default function Login( { onLogin }) {
    const [loginVisible, setLoginVisible] = useState(false)
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function showLogin() {
        setLoginVisible(true)
    }

    function handleClose() {
        setLoginVisible(false)
    }

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


    return (
        <>
            <div id="login">
                <button onClick={showLogin}>Log In</button>
                {showLogin &&
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>User Name</label>
                        <input 
                            type="username" 
                            className="form-control" 
                            id="username-input" 
                            placeholder="Enter User Name" 
                            value={username}
                            onChange={(e) => setUserName(e.target.value)}
                            autoComplete="off"
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="password" 
                            className="form-control" 
                            id="password-input" 
                            placeholder="Password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
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
                </form>
            }
            </div>
        </>
    )
}
