import React from 'react'
// import { BrowserRouter as Router } from 'react-router-dom';

import Landing from "./components/Landing/Landing";
import DashBoard from './components/DashBoard/DashBoard';
import "./app.scss"

export default function App() {

   // const [user, setUser] = useState(null)

  // useEffect(() => {
  //   // auto-login
  //   fetch("/me").then((r) => {
  //     if (r.ok) {
  //       r.json().then((user) => setUser(user));
  //     }
  //   });
  // }, []);

  // COMMENTED OUT - WAITING FOR BACKEND
  // if (!user) return (
  //   <div className="App">
  //     <Landing onLogin={setUser} />
  //   </div>
  // )
  // return (
  //   <div className="App">
  //     <Dashboard setUser={setUser} user={user} />
  //   </div>
  // )

 
  return (
      <div className="app">
        <DashBoard />
        {/* <Landing /> */}
      </div>
  );
}