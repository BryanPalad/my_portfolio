import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function PersonalInfo() {
  return (
    <div className="personal-info padd-15">
      <div className="row">
        <div className="info-item padd-15">
          <p> Birthday : <span>15 Jan 1999</span></p>
        </div>
        <div className="info-item padd-15">
          <p> Age : <span>23</span></p>
        </div>
        <div className="info-item padd-15">
         <p> Degree : <span>BSIT</span></p>
        </div>
        <div className="info-item padd-15">
          <p> Email : <span>paladbryanj@gmail.com</span></p>
        </div>
        <div className="info-item padd-15">
          <p> Address : <span>Granseville, Brgy. Banlic Cabuyao</span></p>
        </div>
        <div className="info-item padd-15">
          <p> Phone : <span>+639455602846</span></p>
        </div>
        <div className="info-item padd-15">
          <p> City : <span>Laguna</span></p>
        </div>
        <div className="info-item padd-15">
          <p> Freelance : <span>Available</span></p>
        </div>
      </div>
      <div className="row">
        <div className="buttons padd-15">
          <a href="#" className="btn">
            {" "}
            Download CV
          </a>
          <Link
            activeClass="active"
            to="contact-title"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <a href="#contact" className="btn hire-me">
              Hire Me
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
