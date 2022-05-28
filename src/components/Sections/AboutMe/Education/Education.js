import React from "react";
import "./Education.css";
import Fade from "react-reveal/Fade";

export default function Education() {
  const schoolObj = [
    {
      schoolyear: "SY. 2015- 2019",
      level: "College Level",
      school: "BS Information Technology",
      links: "https://www.sti.edu/campuses-details.asp?campus_id=CAL",
      images: "../../../images/STI.png",
    },
    {
      schoolyear: "SY. 2011- 2015",
      level: "Secondary Level",
      school: "Saint Vincent College of Cabuyao",
      links: "http://stvincentcollege.edu.ph/index.html",
      images: "../../../images/svcc.jpg",
    },
    {
      schoolyear: "SY. 2004- 2011",
      level: "Primary Level",
      school: "Saint Jerome Integrated School of Cabuyao",
      links: "https://www.sjiscph.com/",
      images: "../../../images/sjisc.webp",
    },
  ];
  return (
    <div className="education padd-15">
      <h3 className="title">Education</h3>
      <div className="row">
        <div className="timeline-box padd-15">
          <div className="timeline shadow-dark">
            {/* education item start */}
            {schoolObj.map(({ schoolyear, level, school, links, images }) => {
              return (
                <div className="timeline-item">
                  <div className="circle-dot"></div>
                  <h3 className="timeline-date">
                    <i className="fa fa-calendar"></i>
                    {schoolyear}
                  </h3>
                  <Fade bottom>
                    <h4 className="timeline-title">{level}</h4>
                    <div className="education-item">
                      <a href={links} target="_blank" rel="noreferrer">
                        <img src={images} alt="school"></img>
                      </a>
                      <span className="timeline-text">{school}</span>
                    </div>
                  </Fade>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
