import React, { useEffect, useState } from "react";
// import { BrowserRouter as Router } from 'react-router-dom';

import Landing from "./components/Landing/Landing";
import DashBoard from './components/DashBoard/DashBoard';
import "./app.scss"

export default function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      // console.log(r)
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);


  if (!user) return (
    <div className="App">
      <Landing onLogin={setUser} />
    </div>
  )
  
  return (
    <div className="App">
      <DashBoard setUser={setUser} user={user} />
    </div>
  )

}