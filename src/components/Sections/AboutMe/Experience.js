import React from "react";

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
                <i className="fa fa-calendar"></i> Oct 2019 - Jan 2022
              </h3>
              <h4 className="timeline-title">QMS (Document Controller) / Inventory Controller </h4>
              <p className="timeline-text">
                Triple Star Packaging Corporation
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
