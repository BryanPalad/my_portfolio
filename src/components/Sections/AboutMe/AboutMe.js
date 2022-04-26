import React from "react";
import Skills from "./Skills";
import PersonalInfo from "./PersonalInfo";
import Qualifications from "./Qualifications";
import Education from "./Education";
import Experience from "./Experience";
import TrainingsAndCert from "./TrainingsAndCert";
import "./AboutMe.css";
import Fade from "react-reveal/Fade";

export default function AboutMe() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <Fade bottom>
              <h2>About Me</h2>
            </Fade>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <Fade bottom>
                  <h3>
                    I'm Bryan Palad and a<span> Web Developer</span>
                  </h3>
                </Fade>
                <p>BSIT Graduate year 2019 from STI College Calamba,</p>
              </div>
            </div>
            <div className="row">
              <PersonalInfo />
              <Qualifications />
            </div>
            <div className="row">
              <Skills />
            </div>
            <div className="row">
              <Education />
              <div className="expiandcerts">
                <Experience />
                <TrainingsAndCert />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
