import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import OptionsCard from "../OptionsCard/OptionsCard";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Table from 'react-bootstrap/Table'

import "./vacationcard.scss"


export default function VacationCard({body, setBody, vacation, setVacation, handleDelete, handleClick, buttonText, vacationRequest, setVacationRequest, removedItemMsg, setRemovedItemMsg, seePlans}) {
  const [lodgingModalShow, setLodgingModalShow] = React.useState(false);
  const [foodModalShow, setFoodModalShow] = React.useState(false);
  const [activityModalShow, setActivityModalShow] = React.useState(false);
  const [returnToVacay, setReturnToVacay] = useState("");

  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [lodging, setLodging] = useState(null)
  const [foods, setFoods] = useState(null)
  const [activity, setActivity] = useState(null)

  const navigate = useNavigate()

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
  let foodDesc = ""
  let foodEstimatedCost

  let activityName
  let activityAddress
  let activityUrl
  let activityHours
  let activityDesc = ""
  let activityEstimatedCost

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
          likes: 0,
          vacation_id: Number(e.target.id)
          }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((lodging) => setLodging(lodging));
          seePlans(e)
          setLodgingModalShow(false)
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
                <Form onSubmit={handleSubmitLodging}  id={vacation.id}>
                    <div className="form-group">
                        <label>Name*</label>
                        <input 
                            type="lodgingname" 
                            className="form-control" 
                            id="lodgingname-input" 
                            placeholder="Enter name..." 
                            onChange={handleSetLodgingName}
                            autoComplete="on"
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Address*</label>
                        <input 
                            type="address" 
                            className="form-control" 
                            id="address-input" 
                            placeholder="Enter address..."
                            autoComplete="on"
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
                            autoComplete="on"
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
                            autoComplete="on"
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
                            autoComplete="on"
                            onChange={handleSetLodgingCheckout}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Estimated Cost*</label>
                        <input 
                            type="cost" 
                            className="form-control" 
                            id="cost-input" 
                            placeholder="0"
                            autoComplete="on"
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
                        {props.errors && props.errors.map((err) => (
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
        likes: 0,
        vacation_id: Number(e.target.id)
        }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((foods) => setFoods(foods));
        seePlans(e)
        setFoodModalShow(false)
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
    foodEstimatedCost = e.target.value
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
                <Form onSubmit={handleSubmitFood}  id={vacation.id}>
                    <div className="form-group">
                        <label>Name*</label>
                        <input 
                            type="foodname" 
                            className="form-control" 
                            id="foodname-input" 
                            placeholder="Enter name..." 
                            onChange={handleSetFoodName}
                            autoComplete="on"
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Address*</label>
                        <input 
                            type="address" 
                            className="form-control" 
                            id="address-input" 
                            placeholder="Enter address..."
                            autoComplete="on"
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
                            autoComplete="on"
                            onChange={handleSetFoodUrl}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Hours*</label>
                        <input 
                            type="foodhours" 
                            className="form-control" 
                            id="foodhours-input" 
                            placeholder="00:00AM - 00:00PM"
                            autoComplete="on"
                            onChange={handleSetFoodHours}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Estimated Cost*</label>
                        <input 
                            type="cost" 
                            className="form-control" 
                            id="cost-input" 
                            placeholder="0"
                            autoComplete="on"
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
                        {props.errors && props.errors.map((err) => (
                            <div key={err}>{err}</div>
                        ))}
                    </div>
                </Form>
        </Modal.Body>
        </Modal>
    );
  }

  function handleSubmitActivity(e) {
    e.preventDefault();
    console.log(e.target.id)
    setIsLoading(true);
    fetch("/activities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ 
        name: activityName,
        address: activityAddress,
        url: activityUrl,
        hours: activityHours,
        desc: activityDesc,
        estimated_cost: activityEstimatedCost,
        likes: 0,
        vacation_id: Number(e.target.id)
        }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((activity) => {
          setActivity(activity);
          setVacationRequest(vacationRequest+1)
          seePlans(e)
          setActivityModalShow(false)
        });
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }
  function handleSetActivityName(e){
    e.preventDefault();
    activityName = e.target.value
  }
  function handleSetActivityAddress(e){
    e.preventDefault();
    activityAddress = e.target.value
  }
  function handleSetActivityUrl(e){
    e.preventDefault();
    activityUrl = e.target.value
  }
  function handleSetActivityHours(e){
    e.preventDefault();
    activityHours = e.target.value
  }
  function handleSetActivityCost(e){
    e.preventDefault();
    activityEstimatedCost = e.target.value
  }
  function AddActivityModal(props) {
    return (
        <Modal
            {...props}
            size="m"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
        <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
            New Activity Info:
            </Modal.Title>
        </Modal.Header>
        <Modal.Body>
                <Form onSubmit={handleSubmitActivity} id={vacation.id} >
                    <div className="form-group">
                        <label>Name*</label>
                        <input 
                            type="activityname" 
                            className="form-control" 
                            id="activityname-input" 
                            placeholder="Enter name..." 
                            onChange={handleSetActivityName}
                            autoComplete="on"
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Address*</label>
                        <input 
                            type="address" 
                            className="form-control" 
                            id="address-input" 
                            placeholder="Enter address..."
                            autoComplete="on"
                            onChange={handleSetActivityAddress}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Website*</label>
                        <input 
                            type="url" 
                            className="form-control" 
                            id="url-input" 
                            placeholder="Enter Website..."
                            autoComplete="on"
                            onChange={handleSetActivityUrl}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Hours*</label>
                        <input 
                            type="activityhours" 
                            className="form-control" 
                            id="activityhours-input" 
                            placeholder="00:00AM - 00:00PM"
                            autoComplete="on"
                            onChange={handleSetActivityHours}
                        ></input>
                    </div>
                    <div className="form-group">
                        <label>Estimated Cost*</label>
                        <input 
                            type="cost" 
                            className="form-control" 
                            id="cost-input" 
                            placeholder="0"
                            autoComplete="on"
                            onChange={handleSetActivityCost}
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
                        {props.errors && props.errors.map((err) => (
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
            <>
              <h1 style={{"text-align": "center"}}>{removedItemMsg} Has Been Removed</h1> 
              <div className="col">
              <Button 
                onClick={seePlans} 
                className="button" 
                id={returnToVacay.id}
                style={{ backgroundColor: "#3E5C76", margin: "1%", "font-size":"12px"}}
              >Return to {returnToVacay.title} Plans</Button>
              </div>
            </> :
              <div className="container-fluid border" id="vacation-card">
                <div className="row" >
                    <h4 className="col" id="titleheader">
                      {vacation.title}
                    </h4>
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
                        {/* Participants: {vacation.users.map((p) => 
                          <> {p.username},</>
                        )} */}
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
          <div className="container-fluid border">
            <div className="row" style={{"textAlign":"center"}}>
                {vacation.lodgings && body === "card" ? <div className="col">
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
                  </div> : null}
                {vacation.foods && body === "card" ? <div className="col">
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
                </div> : null}
                {vacation.activities && body === "card" ? <div className="col">
                  <h5>What to do</h5>
                  <Button 
                        className="button" 
                        style={{ backgroundColor: "#3E5C76", margin: "1%"}}
                        onClick={() => setActivityModalShow(true)} 
                  >Add Activity</Button>
                  <AddActivityModal
                    show={activityModalShow}
                    onHide={() => setActivityModalShow(false)}
                  />
                </div> : null}
            </div>
            <div className="row">
                <div className="col" id="vcol">
                {vacation.lodgings && body === "card" ?
                  vacation.lodgings.map((place)=> 
                    <OptionsCard 
                      option={place}
                      key={place.id}
                      name="Lodging"
                      type="lodgings"
                      setBody={setBody}
                      body={body}
                      setVacation={setVacation}
                      removedItemMsg={removedItemMsg}
                      setRemovedItemMsg={setRemovedItemMsg}
                      seePlans={seePlans}
                      setReturnToVacay={setReturnToVacay}
                    />)
                : null            
                  }
                </div>
                <div className="col" id="fcol">
                 {vacation.foods && body === "card" ?
                  vacation.foods.map((f)=> 
                    <OptionsCard
                      option={f}
                      key={f.id}
                      name="Food"
                      type="foods"
                      setBody={setBody}
                      body={body}
                      setVacation={setVacation}
                      removedItemMsg={removedItemMsg}
                      setRemovedItemMsg={setRemovedItemMsg}
                      seePlans={seePlans}
                      setReturnToVacay={setReturnToVacay}
                    />)
                : null            
                }
                </div>
                <div className="col" id="acol">
                 {vacation.activities && body === "card" ?
                  vacation.activities.map((a)=> 
                    <OptionsCard
                      option={a}
                      key={a.id}
                      name="Activity"
                      type="activities"
                      setBody={setBody}
                      body={body}
                      setVacation={setVacation}
                      removedItemMsg={removedItemMsg}
                      setRemovedItemMsg={setRemovedItemMsg}
                      seePlans={seePlans}
                      setReturnToVacay={setReturnToVacay}
                    />)
                    : null            
                    }
                </div>
            </div>
          </div>   
    </nav>
  );
}