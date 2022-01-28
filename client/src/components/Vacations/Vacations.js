import React from 'react';
import VacationCard from "../VacationCard/VacationCard";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import "./vacations.scss"

export default function Vacations({user, body, setBody, vacationRequest, setVacationRequest, participants, vacation}) {
const [vacationCard, setVacationCard] = useState("");
const [removedItemMsg, setRemovedItemMsg] = useState("");
const [returnToVacay, setReturnToVacay] = useState("");

const navigate = useNavigate()

  console.log(setVacationRequest)

  // This deletes a VacationUser instance that has the @current_user.id and the clicked vacation's id. This does not re-render all vacations. The page needs to be reset, then user is taken back to the login page. Once logged back in, changes will show.
  function handleDelete (e) {
    const vacation = e.target.id
    setBody("deleted")
    setRemovedItemMsg(e.target.title)
    setReturnToVacay(user)
    console.log(e)
    fetch(`/vacation_users/${vacation}`, {
      method:'DELETE'
      })
      .then(res => {
        if(res.ok){
          console.log(res)
          setBody("deleted")
          setVacationRequest(vacationRequest+1)
          setRemovedItemMsg(e.target.title)
        } else {
        res.json().then(console.log)
        }
      })
    }

    function seePlans (e) {
      console.log(returnToVacay.email)
      console.log(e)
      console.log(removedItemMsg)
      console.log(body)
      if (returnToVacay.email) {
        setBody("vacations")
      } else {setBody("card")
      console.log(e.target.id)
      fetch(`/vacations/${e.target.id}`)
        .then(res => res.json())
        .then(json=>setVacationCard(json))}
        setReturnToVacay("");
      }

      function returnToVacations (){
        setBody("vacations")
      }
    
  return (
      <nav className="vacations">
            {body === "vacations" && body !="deleted" ?
              user.vacations.map((v)=> 
                <VacationCard 
                  body={body} 
                  setBody={setBody} 
                  vacation={v} 
                  handleDelete={handleDelete} 
                  handleClick={seePlans}
                  // handleReturnToPrior={returnToVacations}
                  buttonText={"See Plans"} 
                  key={v.title}
                  vacationRequest={vacationRequest}
                  setVacationRequest={setVacationRequest}
                  seePlans={seePlans}
                  returnToVacay={returnToVacay}
                  setReturnToVacay={setReturnToVacay}
                />
                ) : 
                <VacationCard 
                  body={body} 
                  setBody={setBody} 
                  vacation={vacationCard}
                  setVacation={setVacationCard} 
                  handleDelete={handleDelete} 
                  buttonText={"Return to All Vacations"} 
                  handleClick={returnToVacations}
                  // handleReturnToPrior={seePlans}
                  removedItemMsg={removedItemMsg}
                  setRemovedItemMsg={setRemovedItemMsg}
                  seePlans={seePlans}
                  vacationRequest={vacationRequest}
                  setVacationRequest={setVacationRequest}
                  returnToVacay={returnToVacay}
                  setReturnToVacay={setReturnToVacay}
                />
                }
      </nav>
  );
}