import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NumberPicker from "react-widgets/NumberPicker";
import "react-widgets/styles.css";
import Select from 'react-select'

import "./newvacation.scss"


export default function NewVacation( { user, userList, setUserList, vacationRequest, setVacationRequest }) {
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [vacation, setVacation] = useState("")
  const [estimated_budget, setEstimated_Budget] = useState("")
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange;
  const [number_of_food, setNumber_of_food] = useState(0)
  const [number_of_activities, setNumber_of_activities] = useState(0)
  const [errors, setErrors] = useState([]);
  const [participants, setParticipants] = useState([])
  
  const navigate = useNavigate()

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
            number_of_food,
            number_of_activities,
        }),
    })
    .then((r)=>{
        if (r.ok) {
          r.json().then((vacation) => {
            handleOtherSubmit(vacation);
            setVacationRequest(vacationRequest+1)
            navigate("/vacations")
          })
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
      <Form.Group className="vacation-container">
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
        <div className="number-group">
          <Row>
            <h1>How Many Do You Want To Visit?</h1>
            <div className="number-left">
              <h5 className="new-vacation-text">Food*</h5>
              <NumberPicker
                  className="number-picker"
                  value={number_of_food}
                  onChange={value => setNumber_of_food(value)}
                />
            </div>
            <div className="number-right">
                <h5 className="new-vacation-text">Activities*</h5>
                <NumberPicker
                  className="number-picker"
                  value={number_of_activities}
                  onChange={value => setNumber_of_activities(value)}
                />
            </div>
            </Row>
        </div>
        <div className="form-group">
          <h1 className="new-vacation-text">Estimated Budget*</h1>
          <input 
            className="input-form" 
            placeholder="Per person budget?"
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
