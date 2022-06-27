import React from "react";
import "./Qualifications.css";
import { qualificationsObj } from "../../../../constants/about";
export default function Qualifications() {

  return (
    <div className="qualifications padd-15">
      <div className="row">
        <div className="qualifications-info">
          {qualificationsObj.map((item, index) => {
            return <h3 key={index}>{item.info}</h3>;
          })}
        </div>
      </div>
    </div>
  );
}
