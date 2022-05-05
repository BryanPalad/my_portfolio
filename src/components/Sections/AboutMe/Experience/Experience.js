import React from "react";
import Fade from "react-reveal/Fade";
import "./Experience.css";

export default function Experience() {
  const experience = [
    {
      date: `Oct. 15 2019 - Jan. 15 2022 (2yrs & 3 months)`,
      position: "Admin Office Staff",
      titleDesc1: "Quality Management System (QMS) Assistant",
      titleDesc2: "Inventory Controller",
      desc1:
        "in charge of incoming and outgoing of raw materials through ERP system.",
      desc2:
        "in charge of incoming and outgoing of raw materials through ERP system.",
    },
  ];
  return (
    <div className="experience padd-15">
      <h3 className="title">Experience</h3>
      <div className="row">
        <div className="timeline-box padd-15">
          <div className="timeline shadow-dark">
            {/* <!-- TIMELINE ITEM --> */}
            {experience.map(
              ({ date, position, titleDesc1, titleDesc2, desc1, desc2 }) => {
                return (
                  <div className="timeline-item">
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">
                      <i className="fa fa-calendar"></i> {date}
                    </h3>
                    <Fade bottom>
                      <h4 className="timeline-title">{position}</h4>
                      <p className="timeline-text">
                        <b>{titleDesc1}</b> - {desc1}
                      </p>
                      {desc2 && titleDesc2 ? (
                        <p className="timeline-text">
                          <b>{titleDesc2}</b> - {desc2}
                        </p>
                      ) : (
                        <></>
                      )}
                    </Fade>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
