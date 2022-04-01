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
              On The Job Training (Teletech Customer Care Management Philippines Inc.)
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
          </div>
        </div>
      </div>
    </div>
  );
}
