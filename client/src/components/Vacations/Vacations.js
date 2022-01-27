import React, { useState } from 'react';
import VacationCard from "../VacationCard/VacationCard";
import { Row } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./vacations.scss"

export default function Vacations({user, body, setBody, participants, vacation}) {
  const [vacationCard, setVacationCard] = useState("");

  // This deletes a VacationUser instance that has the @current_user.id and the clicked vacation's id. This does not re-render all vacations. The page needs to be reset, then user is taken back to the login page. Once logged back in, changes will show.
  function handleDelete (e) {
    const vacation = e.target.id
    fetch(`/vacation_users/${vacation}`, {
      method:'DELETE'
      })
      .then(res => {
        if(res.ok){
          setBody("deleted")
        } else {
        res.json().then(console.log)
        }
      })
  }

  function seePlans (e) {
    setBody("card")
    // console.log(e.target.id)
    fetch(`/vacations/${e.target.id}`)
      .then(res => res.json())
      .then(json=>setVacationCard(json))
  }

  function returnToVacations (){
    setBody("vacations")
  }

  console.log("USER IN VACATION.JS", user)
  console.log("PARTICIPANTS IN VACATION.JS", participants)
    
  return (
      <nav className="vacations">
            {body === "vacations" ?
              user.vacations.map((v)=> 
                <VacationCard body={body} setBody={setBody} vacation={v} handleDelete={handleDelete} handleClick={seePlans} buttonText={"See Plans"} key={v.title} participants={participants}
                />
              ) : 
                <VacationCard body={body} setBody={setBody} vacation={vacationCard} handleDelete={handleDelete} buttonText={"Return to All Vacations"} handleClick={returnToVacations}  participants={participants}
                />
                }
      </nav>
  );
}