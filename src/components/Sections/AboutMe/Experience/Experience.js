import React from "react";
import Fade from "react-reveal/Fade";
import "./Experience.css";
import { experienceObj } from "../../../../constants/about";
export default function Experience() {
  return (
    <div className="experience">
      {/* <h3 className="title">Experience</h3> */}
      <div className="row">
        <div className="timeline-box">
          <div className="timeline shadow-dark">
            {/* <!-- TIMELINE ITEM --> */}
            {experienceObj.map(
              (item, index) => {
                return (
                  <div className="timeline-item" key={index}>
                    <div className="circle-dot"></div>
                    <h3 className="timeline-date">
                      <i className="fa fa-calendar"></i> {item.date}
                    </h3>
                    <Fade bottom>
                      <h4 className="timeline-title">{item.position}</h4>
                      <p className="timeline-text" style={{marginBottom: '20px'}}>
                        <b>{item.titleDesc1}</b> - {item.desc1}
                      </p>
                      {item.desc2 && item.titleDesc2 ? (
                        <p className="timeline-text">
                          <b>{item.titleDesc2}</b> - {item.desc2}
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
