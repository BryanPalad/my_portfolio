import React from "react";
import "./Education.css";
import Fade from "react-reveal/Fade";

export default function Education() {
  return (
    <div className="education padd-15">
      <h3 className="title">Education</h3>
      <div className="row">
        <div className="timeline-box padd-15">
          <div className="timeline shadow-dark">
            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-date">
                <i className="fa fa-calendar"></i> SY. 2015- 2019
              </h3>
              <Fade bottom>
                <h4 className="timeline-title">College Level</h4>

                <a
                  href="https://www.sti.edu/campuses-details.asp?campus_id=CAL"
                  target="_blank"
                >
                  <img src="../../../images/STI.png"></img>
                </a>
                <p className="timeline-text" id="school">
                  Bachelor of Science in Information Technology
                </p>
              </Fade>
            </div>

            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-date">
                <i className="fa fa-calendar"></i> SY. 2011- 2015
              </h3>
              <Fade bottom>
                <h4 className="timeline-title">Secondary Level</h4>
                <a
                  href="http://stvincentcollege.edu.ph/index.html"
                  target="_blank"
                >
                  <img src="../../../images/svcc.jpg"></img>
                </a>
                <p className="timeline-text">
                  Saint Vincent College of Cabuyao
                </p>
              </Fade>
            </div>

            <div className="timeline-item">
              <div className="circle-dot"></div>
              <h3 className="timeline-date">
                <i className="fa fa-calendar"></i> SY. 2004- 2011
              </h3>
              <Fade bottom>
                <h4 className="timeline-title">Primary Level</h4>
                <a href="https://www.sjiscph.com/" target="_blank">
                  <img src="../../../images/sjisc.webp"></img>
                </a>
                <p className="timeline-text">
                  Saint Jerome Integrated School of Cabuyao
                </p>
              </Fade>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
