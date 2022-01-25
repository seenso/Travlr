import { useState } from 'react';

export default function SignUp( {onLogin}) {
    const [signUpVisible, setSignUpVisible] = useState(false)
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    function showSignUp() {
        // console.log("SHOW")
        setSignUpVisible(true)
    }


    function handleClose() {
        setSignUpVisible(false)
    }
  
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
    
    return (
        <>
            <button onClick={showSignUp}>Create New Account</button>
            {showSignUp &&
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
                        <label>Email</label>
                        <input 
                            type="email" 
                            className="form-control" 
                            id="email-input" 
                            placeholder="Enter Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                        <button type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
                    </div>
                    <div>
                        {errors.map((err) => (
                        <div key={err}>{err}</div>
                        ))}
                    </div>
                </form>
            }
        </>
    )
}
