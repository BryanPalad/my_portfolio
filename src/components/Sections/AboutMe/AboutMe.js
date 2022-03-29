import React from "react";
import Skills from "./Skills";
import PersonalInfo from "./PersonalInfo";
import Qualifications from "./Qualifications";
import Education from "./Education";
import Experience from "./Experience";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>About Me</h2>
          </div>
        </div>
        <div className="row">
          <div className="about-content padd-15">
            <div className="row">
              <div className="about-text padd-15">
                <h3>
                  I'm Bryan Palad and<span> Web Developer</span>
                </h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
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
              <Experience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
