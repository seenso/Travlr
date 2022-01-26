import React from 'react';
import { useState } from 'react';

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
                <div className="col" id="option-name">
                  {option.name}
                </div>
                <div className="col" id="likes">
                ❤️️
                </div>
            </div>
            <div className="row" >
                <div className="col">
                    Website: {option.url}
                    Hours: {option.hours} <br/>
                    Address: {option.address} <br/>
                    About: {option.desc}<br/>
                    Estimated Cost: ${option.estimated_cost} <br/>                  
                </div>
            </div> 
            <div className="row align-items-start" id="clickers">
                <div className="col">
                  <button onClick={handleClick} className="button" id={option.id}>Edit Food</button>
                  <button onClick={handleDelete} className="button" id={option.id}>Delete Food</button>
                </div>
            </div>
          </div>
    </nav>
  );
}