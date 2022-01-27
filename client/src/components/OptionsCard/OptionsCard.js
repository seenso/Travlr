import React from 'react';
import { useState } from 'react';
import Button from "react-bootstrap/Button";


import "./optionscard.scss"


export default function OptionsCard({option}) {

  function handleClick () {
    console.log("I was clicked to edit food")
  }

  function handleDelete () {
    console.log("I was clicked to delete food")
  }

  return (
    <nav className="options-container">
          <div className="container-fluid border" id="option-card">
            <div className="row" >
                <h5 className="col" id="option-name">
                  {option.name}
                </h5>
                <div className="col" id="likes">
                ❤️️
                </div>
            </div>
            <div className="row" >
                <div className="col">
                    Website:<br/>
                    <a href={option.url} target="_blank">{option.url}</a><br/>
                    Hours: {option.hours} <br/>
                    Address: {option.address} <br/>
                    About: {option.desc}<br/>
                    Estimated Cost: ${option.estimated_cost}<br/>                  
                </div>
            </div> 
            <div className="row align-items-start" id="clickers">
                <div className="col">
                  <Button 
                    onClick={handleClick} 
                    className="button" 
                    id={option.id}
                    style={{ backgroundColor: "#3E5C76", margin: "1%"}}
                  >Edit Food</Button>
                  <Button 
                    onClick={handleDelete} 
                    className="button" 
                    id={option.id}
                    style={{ backgroundColor: "#3E5C76", margin: "1%"}}
                  >Delete Food</Button>
                </div>
            </div>
          </div>
    </nav>
  );
}