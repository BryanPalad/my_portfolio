import React from "react";

export default function Skills() {
  return (
    <div className="skills padd-15">
      <div className="row">
        <div className="skill-item padd-15">
          <h5>HTML</h5>
          <div className="progress">
            <div className="progress-in" style={{ width: "76%" }}></div>
            <div className="skill-percent">76%</div>
          </div>
        </div>
        <div className="skill-item padd-15">
          <h5>CSS</h5>
          <div className="progress">
            <div className="progress-in" style={{ width: "86%" }}></div>
            <div className="skill-percent">86%</div>
          </div>
        </div>
        <div className="skill-item padd-15">
          <h5>JS</h5>
          <div className="progress">
            <div className="progress-in" style={{ width: "66%" }}></div>
            <div className="skill-percent">66%</div>
          </div>
        </div>
        <div className="skill-item padd-15">
          <h5>PHP</h5>
          <div className="progress">
            <div className="progress-in" style={{ width: "96%" }}></div>
            <div className="skill-percent">96%</div>
          </div>
        </div>
      </div>
    </div>
  );
}
