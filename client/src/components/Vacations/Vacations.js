import React from 'react';
import { Row } from 'react-bootstrap';

import "./vacations.scss"


export default function Vacations({user}) {
  console.log(user.vacations.map(v=>console.log(v.title)))
  return (
    <nav className="vacation-container">
        <Row>
            {user.vacations.map((v)=>
              <div className="card" id={v.id}>
                  <h2 className="title">{v.title}</h2>
                  <p className="info"> Start Date: {v.start_date} End Date: {v.end_date} </p> 
                  <p className="info"> Budget: $ {v.estimated_budget}</p>                   
                  <p className="info"> Location: {v.location}</p>
                  <p className="info"> Food Options: {v.number_of_food}</p>        
                  <p className="info"> Activities: {v.number_of_activities}</p>       
                  <p className="info"> Participants: </p>
                  <button className="button">See Plans</button>
                  <button className="button">Remove from Vacations</button>
              </div>)}
        </Row>
    </nav>
  );
}