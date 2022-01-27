import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select'
import "./newvacation.scss"


export default function NewVacation( { user, userList, setUserList, participants, setParticipants, vacation, setVacation }) {
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [estimated_budget, setEstimated_Budget] = useState("")
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange;
  const [errors, setErrors] = useState([]);

  // console.log("PARTICIPANTS IN NEW VACATION", participants) // gave arr of [] of obj w participants. username = participant.value

  function handleSubmit(e) {
    console.log("E IN HANDLESUBMIT IN NEWVACATION", e)
    e.preventDefault();
    // CREATE VACATION
    fetch("/vacations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            start_date: startDate,
            end_date: endDate,
            location,
            estimated_budget,
            number_of_food: 0,
            number_of_activities: 0
        })
    })
    .then((r)=>{
        if (r.ok) {
          // console.log("IS THIS THE CURRENT VACATION?", vacation) // gave arr of all vacations
          // CREATE VACATION_USER RECORD FOR EACH PARTICIPANT              
          participants.map((p) =>{
            fetch("/vacation_users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                user_id: p.id,
                vacation_id: vacation.length+1
              }),
            })
          })
          // UPDATE VACATION STATE
          setVacation(vacation)
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
    })
  }

  const createOptions = () => {
    return userList.map((u) => ({value: u.username, label: u.username, id: u.id}))
  }

  const handleOnChange = e => {
    // e is an [] of objs with id: #, label: participantsName, value: participantsName
    setParticipants(e)
  };
 
  return (
    <Form className="new-vacations" onSubmit={handleSubmit}>
      <Form.Group className="container">
        <div className="form-group">
          <h1 className="new-vacation-text">Vacation Name*</h1>
          <input 
            className="input-form" 
            placeholder="What's the occasion?"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <h1 className="new-vacation-text">Location*</h1>
          <input 
            className="input-form" 
            placeholder="Where are you going?"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="form-group">
          <h1 className="new-vacation-text">Estimated Budget*</h1>
          <input 
            className="input-form" 
            placeholder="Where are you going?"
            value={estimated_budget}
            onChange={(e) => setEstimated_Budget(e.target.value)}
          />
        </div>
        <div className="form-group">
          <h1 className="new-vacation-text">Participants*</h1>
          <Select 
            isMulti 
            className="basic-multi-select"
            classNamePrefix="select"
            value={participants}
            options={createOptions()} 
            onChange={handleOnChange}
          />
        </div>
        <h1 className="dates">Start/End Dates*</h1>
        <DatePicker
          selectsRange={true}
          startDate={startDate}
          endDate={endDate}
          dateFormat='yyyy-MM-dd'
          onChange={(update) => {
            setDateRange(update);
          }}
          isClearable={true}
        />
        <Button 
          type="submit"
          className="button"
          style={{ backgroundColor: "#3E5C76", margin: "1%"}}
        >Submit</Button>
      </Form.Group>
    </Form>
  );
}
