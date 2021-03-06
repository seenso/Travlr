import { Link } from 'react-router-dom';

import "./navbar.scss"


export default function NavBar( {setUser, setBody} ) {

  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser({username:"", email:"" , vacations:[]});
      }
    });
  }

  function handleClick (){
    setBody("vacations")
  }
  
  return (
    <nav className="navBar">
        <div className="wrapper">
              <div className="left">
                <Link className="logo" to="/" ><span>✈️TRAVLR</span></Link> 
              </div>
              <div className="right">
                <Link className="navlink" to="/new"><span>ADD VACATION</span></Link>
                <Link className="navlink" to="/vacations" onClick={handleClick}><span>MY VACATIONS</span></Link> 
                <div className="navlink" onClick={handleLogoutClick}>LOG OUT</div>
              </div>
        </div>
    </nav>
  );
}