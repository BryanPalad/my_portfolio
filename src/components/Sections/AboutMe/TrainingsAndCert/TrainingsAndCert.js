import React from "react";
import Fade from "react-reveal/Fade";
import "./TrainingsAndCert.css";

export default function TrainingsAndCert() {
  const trainingsandcerts = [
    {
      date: "Dec 2019 - March 2019",
      title: "Desktop Support",
      desc: "On The Job Training (Teletech Customer Care Management Philippines Inc.) Sta Rosa. Laguna Branch",
    },
    {
      date: "March 2019",
      title: "National Certification II (TESDA)",
      desc: "Computer Systems Servicing (STI College Calamba)",
    },
  ];
  return (
    <div className="trainings padd-15">
      <h3 className="title">Trainings & Certifications</h3>
      <div className="row">
        <div className="timeline-box padd-15">
          <div className="timeline shadow-dark">
            {/* <!-- TIMELINE ITEM --> */}
            {trainingsandcerts.map(({ date, title, desc }) => {
              return (
                <div className="timeline-item">
                  <div className="circle-dot"></div>
                  <h3 className="timeline-date">
                    <i className="fa fa-calendar"></i> {date}
                  </h3>
                  <Fade bottom>
                    <h4 className="timeline-title">{title} </h4>
                    <p className="timeline-text">{desc}</p>
                  </Fade>
                </div>
              );
            })}
            {/* with links */}
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-date">
                <i className="fa fa-calendar"></i> March - April 2022
              </h3>
              <Fade bottom>
                <h4 className="timeline-title">
                  <a href="https://www.simplilearn.com/" target="_blank">
                    <img
                      src="../images/simplilearn.png"
                      alt="Simplilearn"
                      style={{ width: "30%" }}
                      title="Simplilearn"
                    ></img>
                  </a>
                </h4>
                <p className="timeline-text">
                  {/* <a href='.pdf' download=".pdf"> */}
                  <div className="simplilearn">
                    <a href="JavaScript.pdf" target="_blank">
                      Javascript Course
                    </a>
                    <br />
                    <a href="ReactJs.pdf" target="_blank">
                      React Js Course
                    </a>
                  </div>
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
