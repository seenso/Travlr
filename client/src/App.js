import React, { useEffect, useState } from "react";
import Landing from "./components/Landing/Landing";
import DashBoard from './components/DashBoard/DashBoard';
import "./app.scss"

export default function App() {
  const [user, setUser] = useState(null)
  const [userList, setUserList] = useState(null)
  const [vacation, setVacation] = useState(null)


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      // console.log(r)
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch("/users").then((r) => {
      // console.log(r)
      if (r.ok) {
        r.json().then((userList) => setUserList(userList));
      }
    });
  }, []);



  useEffect(() => {
    fetch("/vacations").then((r) => {
      if (r.ok) {
        r.json().then((vacation) => setVacation(vacation));
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
      <DashBoard 
        setUser={setUser} 
        user={user} 
        vacation={vacation} 
        setVacation={setVacation}
        userList={userList}
        setUserList={setUserList}
      />
    </div>
  )

}