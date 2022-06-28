import React from "react";
import "./Qualifications.css";
import { useSelector } from "react-redux";
import { selectQualifications } from "../../../../redux/about/qualificationsSlice";
export default function Qualifications() {
  const qualificationsObj = useSelector(selectQualifications);
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
