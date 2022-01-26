import React from 'react';
import VacationCard from "../VacationCard/VacationCard";
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Button from "react-bootstrap/Button";

import "./vacations.scss"

export default function Vacations({user, body, setBody}) {
const [vacationCard, setVacationCard] = useState("");

  // This deletes a VacationUser instance that has the @current_user.id and the clicked vacation's id. This does not re-render all vacations. The page needs to be reset, then user is taken back to the login page. Once logged back in, changes will show.
  function handleDelete (e) {
    const vacation = e.target.id
    fetch(`/vacation_users/${vacation}`, {
      method:'DELETE'
      })
      .then(res => {
        if(res.ok){
          console.log(res)
          setBody("deleted")
        } else {
        res.json().then(console.log)
        }
      })
    }

    function seePlans (e) {
      setBody("card")
      console.log(e.target.id)
      fetch(`/vacations/${e.target.id}`)
        .then(res => res.json())
        .then(json=>setVacationCard(json))
      }

    function returnToVacations (){
      setBody("vacations")
    }
    
  return (
<<<<<<< HEAD
      <nav className="vacations">
            {body === "vacations" ?
              user.vacations.map((v)=> 
                <VacationCard body={body} setBody={setBody} vacation={v} handleDelete={handleDelete} handleClick={seePlans} buttonText={"See Plans"} key={v.title}/>
              ) : 
                <VacationCard body={body} setBody={setBody} vacation={vacationCard} handleDelete={handleDelete} buttonText={"Return to All Vacations"} handleClick={returnToVacations}/>
                }
      </nav>
=======
    <nav className="vacation-container">
        <Row>
            {user.vacations.map((v)=>
              <div className="vacation-card" id={v.id}>
                  <h2 className="title">{v.title}</h2>
                  <p className="info"> Start Date: {v.start_date} End Date: {v.end_date} </p> 
                  <p className="info"> Budget: $ {v.estimated_budget}</p>                   
                  <p className="info"> Location: {v.location}</p>
                  <p className="info"> Food Options: {v.number_of_food}</p>        
                  <p className="info"> Activities: {v.number_of_activities}</p>       
                  <p className="info"> Participants: </p>
                  <Button 
                    className="button"
                    style={{ backgroundColor: "#3E5C76", margin: "1%"}}
                  >See Plans</Button>
                  <Button 
                    className="button"
                    style={{ backgroundColor: "#3E5C76", margin: "1%"}}
                  >Remove from Vacations</Button>
              </div>)}
        </Row>
    </nav>
>>>>>>> c3bffbe14d8d86542aba135783827e18a78601b0
  );
}