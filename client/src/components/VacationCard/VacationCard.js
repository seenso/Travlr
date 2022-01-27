import React, { useState } from "react";
import OptionsCard from "../OptionsCard/OptionsCard";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./vacationcard.scss"


export default function VacationCard({body, vacation, handleDelete, handleClick, buttonText}) {
  const [lodgingModalShow, setLodgingModalShow] = React.useState(false);
  const [foodModalShow, setFoodModalShow] = React.useState(false);
  const [activityModalShow, setActivityModalShow] = React.useState(false);

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lodging, setLodging] = useState(null)
  const [foods, setFoods] = useState(null)


  let lodgingName
  let lodgingAddress
  let lodgingUrl
  let check_in
  let check_out
  let lodgingEstimatedCost

  let foodName
  let foodAddress
  let foodUrl
  let foodHours
  let foodDesc
  let foodEstimatedCost


  function handleSubmitLodging(e) {
      e.preventDefault();
      setIsLoading(true);
      fetch("/lodgings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          name: lodgingName,
          address: lodgingAddress,
          url: lodgingUrl,
          check_in,
          check_out,
          estimated_cost: lodgingEstimatedCost,
          likes: 0
          }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((lodging) => setLodging(lodging));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
  }
  function handleSetLodgingName(e){
    e.preventDefault();
    lodgingName = e.target.value
  }
  function handleSetLodgingAddress(e){
    e.preventDefault();
    lodgingAddress = e.target.value
  }
  function handleSetLodgingUrl(e){
    e.preventDefault();
    lodgingUrl = e.target.value
  }
  function handleSetLodgingCheckin(e){
    e.preventDefault();
    check_in = e.target.value
  }
  function handleSetLodgingCheckout(e){
    e.preventDefault();
    check_out = e.target.value
  }
  function handleSetLodgingCost(e){
    e.preventDefault();
    lodgingEstimatedCost = e.target.value
  }
  function AddLodgingModal(props) {
    return (
        <Modal
            {...props}
            size="m"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            New Lodging Info:
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form onSubmit={handleSubmitLodging}>
                    <div className="form-group">
                        <label>Name*</label>
                        <input 
                            type="lodgingname" 
                            className="form-control" 
                            id="lodgingname-input" 
                            placeholder="Enter name..." 
                            onChange={handleSetLodgingName}
                            autoComplete="off"
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Address*</label>
                        <input 
                            type="address" 
                            className="form-control" 
                            id="address-input" 
                            placeholder="Enter address..."
                            autoComplete="off"
                            onChange={handleSetLodgingAddress}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Website*</label>
                        <input 
                            type="url" 
                            className="form-control" 
                            id="url-input" 
                            placeholder="Enter Website..."
                            autoComplete="off"
                            onChange={handleSetLodgingUrl}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Check-In Time*</label>
                        <input 
                            type="checkin" 
                            className="form-control" 
                            id="checkin-input" 
                            placeholder="00:00AM"
                            autoComplete="off"
                            onChange={handleSetLodgingCheckin}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Check-Out Time*</label>
                        <input 
                            type="checkin" 
                            className="form-control" 
                            id="checkin-input" 
                            placeholder="00:00PM"
                            autoComplete="off"
                            onChange={handleSetLodgingCheckout}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Estimated Cost*</label>
                        <input 
                            type="cost" 
                            className="form-control" 
                            id="cost-input" 
                            placeholder="$0"
                            autoComplete="off"
                            onChange={handleSetLodgingCost}
                        ></input>
                    </div>
                    <div>
                        <Button 
                            style={{ backgroundColor: "#3E5C76", margin: "1%"}}
                            type="submit"
                        >{isLoading ? "Loading..." : "Submit"}
                        </Button>
                    </div>
                    <div>
                        {errors.map((err) => (
                            <div key={err}>{err}</div>
                        ))}
                    </div>
                </Form>
        </Modal.Body>
        </Modal>
    );
  }


  function handleSubmitFood(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        name: foodName,
        address: foodAddress,
        url: foodUrl,
        hours: foodHours,
        desc: foodDesc,
        estimated_cost: foodEstimatedCost,
        likes: 0
        }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((foods) => setFoods(foods));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  function handleSetFoodName(e){
    e.preventDefault();
    foodName = e.target.value
  }
  function handleSetFoodAddress(e){
    e.preventDefault();
    foodAddress = e.target.value
  }
  function handleSetFoodUrl(e){
    e.preventDefault();
    foodUrl = e.target.value
  }
  function handleSetFoodHours(e){
    e.preventDefault();
    foodHours = e.target.value
  }
  function handleSetFoodCost(e){
    e.preventDefault();
    handleSetFoodCost = e.target.value
  }
  function AddFoodModal(props) {
    return (
        <Modal
            {...props}
            size="m"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            New Food Info:
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form onSubmit={handleSubmitFood}>
                    <div className="form-group">
                        <label>Name*</label>
                        <input 
                            type="foodname" 
                            className="form-control" 
                            id="foodname-input" 
                            placeholder="Enter name..." 
                            onChange={handleSetFoodName}
                            autoComplete="off"
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Address*</label>
                        <input 
                            type="address" 
                            className="form-control" 
                            id="address-input" 
                            placeholder="Enter address..."
                            autoComplete="off"
                            onChange={handleSetFoodAddress}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Website*</label>
                        <input 
                            type="url" 
                            className="form-control" 
                            id="url-input" 
                            placeholder="Enter Website..."
                            autoComplete="off"
                            onChange={handleSetFoodUrl}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Check-In Time*</label>
                        <input 
                            type="foodhours" 
                            className="form-control" 
                            id="foodhours-input" 
                            placeholder="00:00AM - 00:00PM"
                            autoComplete="off"
                            onChange={handleSetFoodHours}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Estimated Cost*</label>
                        <input 
                            type="cost" 
                            className="form-control" 
                            id="cost-input" 
                            placeholder="$0"
                            autoComplete="off"
                            onChange={handleSetFoodCost}
                        ></input>
                    </div>
                    <div>
                        <Button 
                            style={{ backgroundColor: "#3E5C76", margin: "1%"}}
                            type="submit"
                        >{isLoading ? "Loading..." : "Submit"}
                        </Button>
                    </div>
                    <div>
                        {errors.map((err) => (
                            <div key={err}>{err}</div>
                        ))}
                    </div>
                </Form>
        </Modal.Body>
        </Modal>
    );
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
                        Participants:
                    </div>
                  </div>
                <div className="row align-items-start" id="clickers">
                    <div className="col">
                      <Button 
                        onClick={handleClick} 
                        className="button" 
                        id={vacation.id}
                        style={{ backgroundColor: "#3E5C76", margin: "1%"}}
                      >{buttonText}</Button>
                      <Button 
                        onClick={handleDelete} 
                        className="button" 
                        id={vacation.id}
                        style={{ backgroundColor: "#3E5C76", margin: "1%"}}
                      >Remove from Vacations</Button>
                    </div>
                </div>
              </div>
          }
          <table className="table" id="render-options">
            <thead>
              <tr>
                {vacation.lodgings && body === "card" ? <th scope="col">
                  <h5>Where To Stay</h5>
                  <Button 
                    className="button" 
                    style={{ backgroundColor: "#3E5C76", margin: "1%"}}
                    onClick={() => setLodgingModalShow(true)} 
                  >Add Lodging</Button>
                  <AddLodgingModal
                    show={lodgingModalShow}
                    onHide={() => setLodgingModalShow(false)}
                  />
                  </th> : null}
                {vacation.foods && body === "card" ? <th scope="col">
                  <h5>Where To Eat</h5>
                  <Button 
                        className="button" 
                        style={{ backgroundColor: "#3E5C76", margin: "1%"}}
                        onClick={() => setFoodModalShow(true)} 
                  >Add Food</Button>
                  <AddFoodModal
                    show={foodModalShow}
                    onHide={() => setFoodModalShow(false)}
                  />
                </th> : null}
                {vacation.activities && body === "card" ? <th scope="col">
                  <h5>What to do</h5>
                  <Button 
                        onClick={activityModalShow} 
                        className="button" 
                        style={{ backgroundColor: "#3E5C76", margin: "1%"}}
                  >Add Activity</Button>
                </th> : null}
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