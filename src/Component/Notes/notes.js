import React from "react";
import "../Notes/notes.css";

export default function Notes(doctorDetail) {
  // const url = `https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails`;
  // const [doctorDetail, setDoctorDetail] = useState([]);
console.log(doctorDetail);
  var today = new Date();
  var date = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  // const getDoctorDetail = async () => {
  //   var result = await axios.get(url);
  //   setDoctorDetail(result.data[0]);
  // };

  // useEffect(() => {
  //   getDoctorDetail();
  // }, []);

  return (
    <div className="container">
      <div className="notes">
        <p>Notes</p>
    
          <a>See all</a>
   
      </div>

      <div className="notesItem">
        <ul>
          <li>- This patient is lorem ipsum dolor sit amet</li>
          <li>- Lorem ipsum dolor sit amet</li>
          <li>- has alergic history with Cataflam</li>
        </ul>
        <button className="btnSubmit">save notes</button>
      </div>

      <div className="notetsDoctInfo">
        <div>
          <span >Lorem ipsum dolor sit amet</span>
        </div>
        <span className="informative">{doctorDetail.doctorDetail.name}</span>
        
        <span className="informative" style={{
float: "right"}}>{date}</span>
        <br />
        <span className="informative">{doctorDetail.doctorDetail.specification}</span>
      </div>
    </div>
  );
}
