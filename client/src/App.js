import React, { useEffect, useState } from "react";
import Landing from "./components/Landing/Landing";
import DashBoard from './components/DashBoard/DashBoard';
import "./app.scss"

export default function App() {
  const [user, setUser] = useState({username:"", email:"" , vacations:[]})
  const [userList, setUserList] = useState([])
  const [vacation, setVacation] = useState(null)
  const [isLoading, setIsLoading] = useState(false);
  const [vacationRequest, setVacationRequest] = useState(0)


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
  }, [vacationRequest]);

  
  useEffect(() => {
    fetch("/users").then((r) => {
      // console.log(r)
      if (r.ok) {
        r.json().then((userList) => setUserList(userList));
      }
    });
  }, [vacationRequest]);

  useEffect(() => {
    setIsLoading(true)
    fetch("/vacations").then((r) => {
      if (r.ok) {
        console.log("Vacations Fetched!")
        r.json().then((vacation) => setVacation(vacation));
        setIsLoading(false)
      }
    });
  }, [vacationRequest]);

  // console.log(user)
  // console.log(isLoading)

  if (!user.username && !isLoading) return (
    <div className="App">
      <Landing onLogin={setUser} vacationRequest={vacationRequest} setVacationRequest={setVacationRequest}/>
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
        vacationRequest={vacationRequest}
        setVacationRequest={setVacationRequest}
        onLogin={setUser}
      />
    </div>
  )

}