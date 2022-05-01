import React from "react";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import "./PersonalInfo.css";
import PersonalInfoData from "./PersonalInfoData";

export default function PersonalInfo() {
  const yearAge = 1999;
  const dateNow = new Date();
  const yearOnly = dateNow.getFullYear();
  const age = yearOnly - yearAge;

  return (
    <div className="personal-info padd-15">
      <div className="row">
        <PersonalInfoData age={age}/>
      </div>
      <div className="row">
        <div className="buttons padd-15">
          <Fade bottom>
            {/* for downloading cv */}
          {/* <a href="/images/myw3schoolsimage.jpg" download></a> */}
            <a href="#" className="btn">
              {" "}
              Download CV
            </a>
          </Fade>
          <Link
            activeClass="active"
            to="contact-title"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <Fade bottom>
              <a href="#contact" className="btn hire-me">
                Hire Me
              </a>
            </Fade>
          </Link>
        </div>
      </div>
    </div>
  );
}
