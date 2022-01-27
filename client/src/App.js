import React, { useEffect, useState } from "react";
import Landing from "./components/Landing/Landing";
import DashBoard from './components/DashBoard/DashBoard';
import "./app.scss"

export default function App() {
  const [user, setUser] = useState({ username:"", email:"" , vacations:[]})
  const [userList, setUserList] = useState([])
  const [vacation, setVacation] = useState(null)
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    // auto-login
    setIsLoading(true)
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
        setIsLoading(false)
      } else {
        setIsLoading(false)
      }
    });
  }, []);

  console.log("WHAT IS THE USER IN APP.JS?", user) // user = default user state

  
  useEffect(() => {
    fetch("/users").then((r) => {
      if (r.ok) {
        r.json().then((userList) => setUserList(userList));
      }
    });
  }, []);

  console.log("WHAT IS USERLIST IN APP.JS?", userList)

  useEffect(() => {
    fetch("/vacations").then((r) => {
      if (r.ok) {
        r.json().then((vacation) => setVacation(vacation));
        // vacation here is set fine
      }
    });
  }, []);



  if (!user.username && !isLoading) return (
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
        onLogin={setUser}
      />
    </div>
  )

}