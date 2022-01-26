import React, { useState } from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Select from 'react-select'
import "./newvacation.scss"


export default function NewVacation( { user, userList, setUserList }) {
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [vacation, setVacation] = useState("")
  const [estimated_budget, setEstimated_Budget] = useState("")
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange;
  const [errors, setErrors] = useState([]);
  const [participants, setParticipants] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
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
        }),
    })
    .then((r)=>{
        // console.log(r)
        if (r.ok) {
          r.json().then((vacation) => handleOtherSubmit(vacation));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
    })
  }

  function handleOtherSubmit(vacation){
    participants.map((v) =>{
      fetch("/vacation_users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: v.id,
          vacation_id: vacation.id
        }),
      })
    })
    setVacation(vacation)
  }

  const createOptions = () => {
    return userList.map((u) => ({value: u.username, label: u.username, id: u.id}))
  }

  const handleOnChange = e => {
    setParticipants(Array.isArray(e) ? e : [])
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
