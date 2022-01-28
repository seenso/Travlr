import "./home.scss"
import React from "react";


export default function Home( {user} ) {

  
  return (
    <>
    <div className="large-home">
      <div className="home">
          <div className="home-wrapper">
              <div className="home-left">
                <div className="home-left-wrapper">
                  <img className="airport-img" src="https://st.depositphotos.com/1757635/4710/i/600/depositphotos_47106619-stock-photo-businessman-at-the-airport.jpg" alt="landing" />
                </div>
              </div>
              <div className="home-right">
                <div className="home-text-container">
                  <div className="home-title">Hello, {user.username}</div>
                  <div className="home-body">Ready to make your next trip easier to plan, budget, and enjoy with your friends and family?</div>
                  <div className="home-body2">Look no further!</div>
                  <div className="home-body">In this application, you can create new vacations to manage where you and your party will want to stay, eat, and have fun.</div>
                </div>
              </div>
          </div>
      </div>
      <div className="bottom-banner">
        <img className="home-img" src="https://tz-mag-media.s3.ap-southeast-1.amazonaws.com/wp-content/uploads/2021/03/19121251/airbnbs-in-greece.png" alt="landing" />
      </div>
    </div>
    </>
  );
}