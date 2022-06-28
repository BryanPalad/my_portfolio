import React from "react";
import Fade from "react-reveal/Fade";
import "./TrainingsAndCert.css";
import { useSelector } from "react-redux";
import {selectTrainingsAndCerts} from '../../../../redux/about/trainingsAndCertSlice';

export default function TrainingsAndCert() {
  const trainingsandcertsObj = useSelector(selectTrainingsAndCerts);
  return (
    <div className="trainings">
      {/* <h3 className="title">Trainings & Certifications</h3> */}
      <div className="row">
        <div className="timeline-box">
          <div className="timeline shadow-dark">
            {/* <!-- TIMELINE ITEM --> */}
            {trainingsandcertsObj.map((item, index) => {
              return (
                <div className="timeline-item" key={index}>
                  <div className="circle-dot"></div>
                  <h3 className="timeline-date">
                    <i className="fa fa-calendar"></i> {item.date}
                  </h3>
                  <Fade bottom>
                    <h4 className="timeline-title">{item.title} </h4>
                    <p className="timeline-text">{item.desc}</p>
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
                  <a
                    href="https://www.simplilearn.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="../images/trainings/simplilearn.png"
                      alt="Simplilearn"
                      style={{ width: "150px" }}
                      title="Simplilearn"
                    ></img>
                  </a>
                </h4>
                <p className="timeline-text">
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

            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-date">
                <i className="fa fa-calendar"></i> May 2022
              </h3>
              <Fade bottom>
                <h4 className="timeline-title">
                    <img
                      src="../images/trainings/modernresolve.png"
                      alt="modernresolve"
                      style={{ width: "150px", marginBottom: '-15px'}}
                      title="Modern Resolve"
                    ></img>
                </h4>
                <p className="timeline-text">
                  <div className="mdr">
                    <a href="COE_MDR.pdf" target="_blank">
                      Modern Code Camp (Advanced Web Development)
                    </a>
                  </div>
                </p>
              </Fade>
            </div>

            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-date">
                <i className="fa fa-calendar"></i> June 2022
              </h3>
              <Fade bottom>
                <h4 className="timeline-title">
                  <a
                    href="https://www.mygreatlearning.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src="../images/trainings/greatLearning.png"
                      alt="Great Learning"
                      style={{ width: "150px" }}
                      title="Great Learning"
                    ></img>
                  </a>
                </h4>
                <p className="timeline-text">
                  <div className="simplilearn">
                    <a href="PHP_Cert.pdf" target="_blank">
                      PHP Course
                    </a>
                    <br />
                    <a href="Java_Cert.pdf" target="_blank">
                      Java Course
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
