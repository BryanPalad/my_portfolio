import React from "react";

export default function TrainingsAndCert() {
  return (
    <div className="trainings padd-15">
      <h3 className="title">Trainings & Certifications</h3>
      <div className="row">
        <div className="timeline-box padd-15">
          <div className="timeline shadow-dark">
            {/* <!-- TIMELINE ITEM --> */}
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-date">
                <i className="fa fa-calendar"></i> Dec 2019 - March 2019 
              </h3>
              <h4 className="timeline-title">Desktop Support </h4>
              <p className="timeline-text">
              On The Job Training (Teletech Customer Care Management Philippines Inc.) Sta Rosa. Laguna Branch
              </p>
            </div>
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-date">
                <i className="fa fa-calendar"></i> March 2019
              </h3>
              <h4 className="timeline-title">National Certification II (TESDA)</h4>
              <p className="timeline-text">
              Computer Systems Servicing (STI College Calamba)
              </p>
            </div>
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-date">
                <i className="fa fa-calendar"></i> March 2022
              </h3>
              <h4 className="timeline-title"><a href="https://www.simplilearn.com/" target="_blank"><img src="../images/simplilearn.png" 
              alt="Simplilearn" style={{width: '30%'}} title="Simplilearn"></img></a></h4>
              <p className="timeline-text">
                {/* <a href='.pdf' download=".pdf"> */}
                <div className="simplilearn">
              <a href="JavaScript.pdf" target="_blank">Javascript for Beginners</a><br/>
              <a href="JavaScript.pdf" target="_blank">React Js for Beginners</a>
              </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
