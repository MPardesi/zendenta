import React from "react";
import "../Patientdetails/Patientdetails.css";

export default function Patientdetails( data ) {
  
  let patient= data.data;

  return (
    <div className="patient">
      <div className="profilecontainer">
        <div className="left">
          <div className="avatar"> 
            <img  src="./User.webp"/>
          </div>
          <br />
          <label>{patient.name}</label>
          <br />
          <span>{patient["e-email"]}</span>
          <br />
          <div className="past-upcoming">
          <b>{patient.Past}</b> &nbsp;
          <br />
          <span>Past</span>
          &nbsp;&nbsp;
          <span>|</span>
          &nbsp;&nbsp;
          <b>{patient.Upcoming}</b> &nbsp;
          <br />
          <span>Upcoming</span> 
          </div> 
          <button className="sendmessage">Send Message</button>
        </div>
      </div>
      <div className="vertical-line"></div>
      <div>
        
        <div className="right">
          <div className="col3">
            <div>
              <label>Gender</label>
              <br />
              <span>{patient.Gender}</span>
            </div>
            <div>
              <label>Birth Date</label> <br />
              <span>{patient["Birthday"]}</span>
            </div>
            <div>
              <label>Phone Number</label> <br />
              <span>{patient["Phone Number"]}</span>
            </div>
          </div>
          <div>
            <div>
              <div className="col3">
                <div>
                  <label>Street Address</label> <br></br>
                  <span>{patient["Street Address"]}</span>
                </div>
                <div>
                  <label>City </label>
                  <br />
                  <span>patient.City</span>
                </div>
                <div>
                  <label>Zip Code</label> <br />
                  <span>{patient["ZIP Code"]}</span>
                </div>
              </div>
            </div>
            <div></div>
          </div>

          <div className="col3">
            <div>
              <label>Member Status</label> <br></br>
              <span>{patient["Member Status"]}</span>
            </div>
            <div>
              <label>Registered Date </label>
              <br />
              <span>{patient["Register Date"]}</span>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
