import React from "react";
import Fade from "react-reveal/Fade";
import "./Experience.css";

export default function Experience() {
  return (
    <div className="experience padd-15">
      <h3 className="title">Experience</h3>
      <div className="row">
        <div className="timeline-box padd-15">
          <div className="timeline shadow-dark">
            {/* <!-- TIMELINE ITEM --> */}
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-date">
                <i className="fa fa-calendar"></i> Oct. 15 2019 - Jan. 15 2022
                (2yrs & 3 months)
              </h3>
              <Fade bottom>
                <h4 className="timeline-title">
                 Admin Office Staff
                </h4>
                <p className="timeline-text">
                 <b>Quality Management System (QMS) Assistant</b> - in charge of incoming and outgoing of raw materials through ERP system.
                </p>
                <p className="timeline-text">
                  <b>Inventory Controller</b> - in charge of incoming and outgoing of raw materials through ERP system.
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
