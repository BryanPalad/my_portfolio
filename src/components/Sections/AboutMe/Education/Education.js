import React from "react";
import { useSelector } from "react-redux/es/exports";
import { selectEducationInfo } from "../../../../redux/aboutMe/educationSlice";
import "./Education.css";
import Fade from "react-reveal/Fade";

export default function Education() {
  const schoolInfo = useSelector(selectEducationInfo);
  return (
    <div className="education">
      {/* <h3 className="title">Education</h3> */}
      <div className="row">
        <div className="timeline-box-educ">
          <div className="timeline-educ shadow-dark">
            {/* education item start */}
            {schoolInfo.map((item, index) => {
              return (
                <div className="timeline-item-educ" key={index}>
                  <div className="circle-dot-educ"></div>
                  <h3 className="timeline-date-educ">
                    <i className="fa fa-calendar"></i>
                    {item.schoolyear}
                  </h3>
                  <Fade bottom>
                    <h4 className="timeline-title-educ">{item.level}</h4>
                    <div className="education-item">
                      <a href={item.links} target="_blank" rel="noreferrer">
                        <img src={item.images} alt="school"></img>
                      </a>
                      <span className="timeline-text-educ">{item.school}</span>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
