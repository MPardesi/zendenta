import React from "react";
import useCollapse from "react-collapsed";
import "../Doctordetails/Doctordetail.css";

export default function Doctordetail(doctorDetail) {
  const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

  function handleCollapse() {
    var coll = document.getElementsByClassName("collapseIcon");
    var i;

    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  }

  return (
    <div className="collapsible">
      <span>
        {" "}
        <i className="fa fa-info-circle"></i>
        &nbsp; Help ?
      </span>
      <hr />
      <div className="header">
        <div className="docavatar">
          <img src="./User.webp" />
        </div>
        <div className="docName">
          <span>{doctorDetail.doctorDetail.name}</span>
          <br />
          <span>{doctorDetail.doctorDetail.specification}</span>
        </div>
        <div {...getToggleProps()} className="collapseIcon">
          <b>{isExpanded ? "-" : "+"}</b>
        </div>
      </div>
      <div {...getCollapseProps()}>
        <div className="content">
          {doctorDetail.doctorDetail.name}
          <br />
        </div>
      </div>
    </div>
  );
}
