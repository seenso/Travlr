import { useState } from 'react';
import Form from "react-bootstrap/Form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./newvacation.scss"

export default function NewVacation( { user }) {
  const [title, setTitle] = useState("")
  const [location, setLocation] = useState("")
  const [dateRange, setDateRange] = useState([null, null])
  const [startDate, endDate] = dateRange;
  const [errors, setErrors] = useState([]);

  function handleSubmit({ user, setUser, vacation, setVacation }) {

    fetch("/vacation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            title,
            location,
            // participants,
            startDate,
            endDate
        }),
    }).then((r)=>{
        if (r.ok) {
          r.json().then((vacation) => setVacation(vacation));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
    })
  }


  return (
    <Form className="new-vacations">
      <Form.Group className="container">
        <div className="form-group">
          <h1 className="exampleFormControlInput1">Vacation Name*</h1>
          <input 
            className="input-form" 
            placeholder="What's the occation?"
          />
        </div>
        <div className="form-group">
          <h1 clasName="exampleFormControlInput1">Location*</h1>
          <input 
            className="input-form" 
            placeholder="Where are you going?"
          />
        </div>
        <div className="form-group">
          <h1 className="participants-title">Participants*</h1>
          <input 
            className="input-form" 
            placeholder="Who's coming with?"
          />
        </div>
        <h1 clasName="dates">Start/End Dates*</h1>
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
        <button className="submit-btn">Submit</button>
      </Form.Group>
    </Form>
  );
}