import React from "react";
import "./App.css";
import Doctordetail from "./Component/Doctordetails/Doctordetail";
import Patientdetails from "./Component/Patientdetails/Patientdetails";
import Attachments from "./Component/Attachments/Attachments";
import Schedule from "./Component/Schedule/Schedule";
import Notes from "./Component/Notes/notes.js";
import Axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [patientData, setpatientData] = useState([]);
  const [doctorDetail, setDoctorDetail] = useState([]);

  const patientDetails = async () => {
    const url = `https://619f39821ac52a0017ba467e.mockapi.io/patientDetails`;
    var result = await Axios.get(url);
    setpatientData(result.data[0]);
    console.log("patientDetails", result);
  };

  const getDoctorDetail = async () => {
    const url = `https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails`;
    var result = await Axios.get(url);
    setDoctorDetail(result.data[0]);
  };

  useEffect(() => {
    patientDetails();
    getDoctorDetail();
  }, []);

  function toggleSidebar() {
    document.querySelector("body").classList.toggle("active");
  }

  return (
    <div className="wrapper">
      <div className="sidebar">
        <div className="image">
          <img
            id="logoImg"
            className="logoImg"
            src="./Dental.png"
            style={{ height: "50px", width: "50px" }}
          />
          <h2 style={{ color: "midnightblue" }}>Zendenta</h2>
          <h6 style={{ color: "gray" }}>Cabut gigi tanpa sakit</h6>
        </div>
        <ul>
          <li>
            <a href="#">
              <span className="item">Overview</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item">Calender</span>
            </a>
          </li>
          <li>
            <a href="#" className="active">
              <span className="item" onClick={patientDetails}>
                Patient List
              </span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item">Messages</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item">Payment information</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="item">Settings</span>
            </a>
          </li>
        </ul>
        <Doctordetail doctorDetail={doctorDetail} />
      </div>

      <div className="section">
        <div className="topnavbar">
          <div className="hamburger">
            
            <a href="#">
              <span
                className="glyphicon glyphicon-menu-hamburger"
                onClick={toggleSidebar}
              > </span>
            </a>
          </div>
        </div>
        <div className="upperSection">
          <Patientdetails data={patientData} />
          <Notes doctorDetail={doctorDetail} />
        </div>
        <div className="lowerSection">
          <Schedule />
          <Attachments />
        </div>
      </div>
    </div>
  );
}

export default App;
