import React, { useState } from 'react';
import OptionsCard from "../OptionsCard/OptionsCard";
import "./vacationcard.scss"

export default function VacationCard({body, vacation, handleDelete, handleClick, buttonText, setParticipants, participants}) {
  
  
  // console.log("Vacation in VacationCard", vacation)
  // console.log("Participants in VacationCard", participants)

  function addParticipant() {
    console.log('addParticipant has been invoked in VacationCard!!!!!');

  }
  return (
    <nav className="vacation-container">
          {body === "deleted" ? 
            <div>This vacation has been removed!</div> :
              <div className="container-fluid border" id="vacation-card">
                <div className="row" >
                    <div className="col" id="titleheader">
                      {vacation.title}
                    </div>
                </div>
                <div className="row" >
                    <div className="col">
                        Start Date: {vacation.start_date} <br/>
                        Location: {vacation.location}<br/>
                        Budget: ${vacation.estimated_budget} <br/>                  
                    </div> 
                    <div className="col">
                        End Date: {vacation.end_date}<br/>
                        Food Options: {vacation.number_of_food} <br/>   
                        Activities: {vacation.number_of_activities} <br/> 
                    </div>
                </div> 
                <div className="row" >
                    <div className="col">
                        Participants: {participants.map((p) => 
                          <div className="participants">{p.value}</div>
                        )}
                    </div>
                  </div>
                <div className="row align-items-start" id="clickers">
                    <div className="col">
                      <button onClick={handleClick} className="button" id={vacation.id}>{buttonText}</button>
                      <button onClick={handleDelete} className="button" id={vacation.id}>Remove from Vacations</button>
                      <button onClick={addParticipant} className="button" id={vacation.id}>Add Participant</button>
                    </div>
                </div>
              </div>
          }
          <table className="table" id="render-options">
            <thead>
              <tr>
                {vacation.lodgings && body === "card" ? <th scope="col">Where to Stay</th> : null}
                {vacation.foods && body === "card" ? <th scope="col">Places to Eat</th> : null}
                {vacation.activities && body === "card" ? <th scope="col">What to Do</th> : null}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                {vacation.lodgings && body === "card" ?
                vacation.lodgings.map((place)=> 
                <OptionsCard option={place} key={place.id}/>)
                : null            
                }
                </td>
                <td>
                 {vacation.foods && body === "card" ?
                vacation.foods.map((f)=> 
                <OptionsCard option={f} key={f.id}/>)
                : null            
                }
                </td>
                <td>
                 {vacation.activities && body === "card" ?
                vacation.activities.map((a)=> 
                <OptionsCard option={a} key={a.id}/>)
                : null            
                }
                </td>
              </tr>
            </tbody>
          </table>   
    </nav>
  );
}