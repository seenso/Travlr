import React from 'react';
import { useState } from 'react';
import Button from "react-bootstrap/Button";


import "./optionscard.scss"


export default function OptionsCard({option, type, name, setBody, body, setVacation, setRemovedItemMsg, setReturnToVacay}) {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(option.likes);
  const [showMore, setShowMore] = useState(`${option.desc.slice(0,50)}...`)
  const [showMoreToggle, setshowMoreToggle] = useState("more")


  function handleDelete (e) {
    console.log("I was clicked to delete food")
    console.log(option)
    setRemovedItemMsg(option.name)
    setReturnToVacay(option.vacation)
    fetch(`/${type}/${option.id}`, {
      method:'DELETE'
      })
      .then(res => {
        if(res.ok){
          console.log(res)
          setBody("deleted")
        } else {
        res.json().then(console.log)
        }
      })
      setBody("deleted")

  }

  function toggleLike (e) {
    console.log(" LIKE clicked")
    console.log(e.target.id)
    if (liked) {
      setLiked(false)
      fetch(`/${type}/${option.id}/dislike`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        }
      })
        .then ((r) => r.json()
        .then((updatedLikes) =>{
            console.log(updatedLikes);
            handleRepullVacations(updatedLikes.vacation.id)
            setLikeCount(updatedLikes.likes)
            }))
      } else {
        setLiked(true)
        // setLikeCount(option.likes+=1)
        fetch(`/${type}/${option.id}/like`, {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          }
        })
        .then ((r) => r.json()
        .then((updatedLikes) => {
          console.log(updatedLikes);
          handleRepullVacations(updatedLikes.vacation.id)
          setLikeCount(updatedLikes.likes)
        }))
      }
  }

  function handleRepullVacations (vacation){
    fetch(`/vacations/${vacation}`)
      .then(res=> res.json())
      .then(json=>setVacation(json))
  }

  function handleShowMore () {
    if (showMoreToggle === "more") {
      setShowMore(`${option.desc}`)
      setshowMoreToggle("less")
    } else {
      setShowMore(`${option.desc.slice(0,50)}...`)
      setshowMoreToggle("more")
    }

  }
  

  return (
    <> 
      {body === "deleted" ? 
      <>  <h1 style={{"textAlign": "center"}}>This {name} Has Been Removed</h1> 
          <div className="col">
            <Button 
              onClick={handleDelete} 
              className="button" 
              id={option.id}
              style={{ backgroundColor: "#3E5C76", margin: "1%", "fontSize":"12px"}}
            >Return to {} Plans {name}</Button>
            </div>
      </>
        :
        <div className="row">
            <div className="container-fluid border" id="option-card">
            <div className="row" >
                <div className="col" id="option-name" style={{"textAlign":"center"}}>
                  <h5 style={{"padding":"10px"}}>{option.name}</h5>
                </div>
                
            </div>
            <div className="row" >
                <div className="col">
                    <h6>Website: <a href={option.url} target="_blank" style={{"fontWeight":"100"}}>{option.url.slice(0,30)}...</a></h6>
                    <h6>Hours: <span style={{"fontWeight":"100"}}>{option.hours}</span></h6>
                    <h6>Address: <span style={{"fontWeight":"100"}}>{option.address}</span></h6>
                    <h6>About: <span style={{"fontWeight":"100"}}>{showMore}</span><span onClick={handleShowMore}>{showMoreToggle}</span></h6>
                    <h6>Estimated Cost: <span style={{"fontWeight":"100"}}>${option.estimated_cost}</span></h6>                 
                </div>
            </div> 
            <div className="row align-items-start" style={{"textAlign":"center"}}>
                <div className="col">
                  <Button 
                    onClick={handleDelete} 
                    className="button" 
                    id={option.id}
                    style={{ backgroundColor: "#3E5C76", margin: "1%", "fontSize":"12px"}}
                  >Delete {name}</Button>
                    {liked ? <Button 
                        onClick={toggleLike} 
                        className="button" 
                        id={option.id}
                        style={{ backgroundColor: "#0D1321", margin: "1%", "fontSize":"12px", color: "white"}}
                        >{likeCount} ???? Voted
                      </Button> :
                      <Button 
                        onClick={toggleLike} 
                        className="button" 
                        id={option.id}
                        style={{ backgroundColor: "#748CAB", margin: "1%", "fontSize":"12px"}}
                        >{likeCount} ???? Vote
                      </Button>}
                </div>
            </div>
          </div>
        </div>}
    </>
  );
}