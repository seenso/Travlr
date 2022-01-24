import React from 'react'
import { Row, Col } from 'react-bootstrap';

import "./newvacation.scss"


export default function NewVacation() {
  
  return (
    <nav className="new-vacay-container">
      <div className="wrapper">
        <Col>
          <form>
            <div className="form-group">
              <h1 clasName="exampleFormControlInput1">Vacation Name*</h1>
              <input className="input-form" placeholder="Where are you going?"/>
            </div>
            <div className="form-group">
              <h2 className="participants-title">Participants*</h2>
              <select className="friends-list">
                {/* will map over friends table to create options */}
                <option>Place Holder</option>
                <option>Place Holder</option>
                <option>Place Holder</option>
                <option>Place Holder</option>
                <option>Place Holder</option>
              </select>
            </div>
            <button className="submit-btn">Submit</button>
          </form>
        </Col>
      </div>
    </nav>
  );
}