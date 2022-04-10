import React from "react";
import "../Schedule/Schedule.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Schedule() {
  const url = `https://619f39821ac52a0017ba467e.mockapi.io/appointment_details`;

  const [upcoming, setupcoming] = useState([]);
  const [past, setpast] = useState([]);
  const [medical, setmedical] = useState([]);

  const [appointments, setappointments] = useState([]);

  const getAppointments = async () => {
    var result = await axios.get(url);
    //console.log(result);
    let meetings = result.data[0];
    console.log("upcoming", result.data);

    setappointments(result.data);
    setupcoming(meetings["Upcoming Appointments"]);

    setpast(meetings["Post Appointment"]);
    setmedical(meetings["Medical Records"]);
  };

  useEffect(() => {
    getAppointments();
  }, []);

  function showStuff(divId) {
    console.log(divId);

    for (let i = 1; i <= 3; i++) {
      if (divId === i) {
        document.getElementById(i).style.display = "flex";
        document.getElementById(i).style.visibility = "visible";
        document.getElementById("div" + i).style.backgroundColor = "white";
      } else {
        document.getElementById(i).style.display = "none";
        document.getElementById(i).style.visibility = "hidden";
        document.getElementById("div" + i).style.backgroundColor = "aliceblue";
      }
    }
  }

  return (
    <div className="meetingcontainer">
      <div className="schedMenuItem">
        <div id="div1" onClick={() => showStuff(1)}>
          Upcoming Appointments
        </div>
        <div id="div2" onClick={() => showStuff(2)}>
          Past Appointments
        </div>
        <div id="div3" onClick={() => showStuff(3)}>
          Medical Appointments
        </div>
      </div>



      <div className="tabContentPlaceholder">
        {/* <div><span>Root Canel Treatment </span><span>SHow previous Treatment </span></div> */}
        <div id="1" className="tabcontent">
          <div className="tabRecord">
            <h3> {upcoming.Date}</h3>
            <span className="informative">{upcoming.Time}</span>
          </div>
          <div className="vl"></div>
          <div className="tabRecord">
            <span className="informative">Treatment</span>
            <span className="boldName"> {upcoming.Treatment}</span>
          </div>
          <div className="vl"></div>
          <div className="tabRecord">
            <span className="informative">Dentist </span>
            <span className="smallboldName">{upcoming.Dentist}</span>
          </div>{" "}
          <div className="tabRecord">
            <span className="informative">Nurse </span>
            <span className="smallboldName">{upcoming.Nurse}</span>
            </div>
            <div className="tabRecord">
            
              <a href={upcoming.Doc}><span><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>Notes     </span></a>
           
         
          </div>
        </div>
      
        <div id="2" className="tabcontent">
        <div className="tabRecord">
            <h3> {past.Date}</h3>
            <span className="informative">{past.Time}</span>
          </div>
          <div className="vl"></div>
          <div className="tabRecord">
            <span className="informative">Treatment</span>
            <span className="boldName"> {past.Treatment}</span>
          </div>
          <div className="vl"></div>
          <div className="tabRecord">
            <span className="informative">Dentist </span>
            <span className="smallboldName">{past.Dentist}</span>
          </div>{" "}
          <div className="tabRecord">
            <span className="informative">Nurse </span>
            <span className="smallboldName">{past.Nurse}</span>
            </div>
            <div className="tabRecord">
            
              <a href={past.Doc}><span><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>Notes     </span></a>
           
         
          </div>
        </div>
  
        <div id="3" className="tabcontent">
        
          <h2>{medical.status}</h2>
        </div>
      </div>
    </div>
  );
}
