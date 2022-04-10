import React from "react";
import "../Attachments/Attachments.css";
import axios from "axios";
import { useState,useEffect } from "react";

export default function Attachments() {

  const url = `https://619f39821ac52a0017ba467e.mockapi.io/Files`;
  const [attachments, setattachments] = useState([]);

  const getAttachments = async () => {
    var result = await axios.get(url);
    setattachments(result.data[0].files);
  };

  useEffect(() => {
    getAttachments();
  }, []);

  return (
    <div className="container">
      <div className="containerTitle">
        <div>
          <b>Files/Documents</b>
        </div>
        <div className="toprightAtt">
          <a>
            {" "}
            <b>Add Files + </b>
          </a>
        </div>
      </div>
      <br />
      <div>
        {attachments.map((attachment, index) => (
          <div key={index} className="attachItemContainer">
            <div className="attachItem">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
              <span style={{marginLeft:"5px"}}>
              {attachment}</span>
            </div>
            <svg
          
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
            <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
