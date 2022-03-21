import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function PersonalInfo() {

  const yearAge = 1999;
  const dateNow = new Date();
  const yearOnly = dateNow.getFullYear();
  const age = yearOnly - yearAge;

  return (
    <div className="personal-info padd-15">
      <div className="row">
        <div className="info-item padd-15">
          <p><i class="fa-solid fa-cake-candles"></i> Birthday : <span>15th January 1999</span></p>
        </div>
        <div className="info-item padd-15">
          <p><i class="fa-solid fa-user-plus"></i> Age : <span>{age}</span></p>
        </div>
        <div className="info-item padd-15">
         <p><i class="fa-solid fa-graduation-cap"></i> Degree : <span>BSIT</span></p>
        </div>
        <div className="info-item padd-15">
          <p><i class="fa-solid fa-envelope"></i> Email : <span>paladbryanj@gmail.com</span></p>
        </div>
        <div className="info-item padd-15">
          <p><i class="fa-solid fa-location-dot"></i> Address : <span>Brgy. Banlic Cabuyao</span></p>
        </div>
        <div className="info-item padd-15">
          <p><i class="fa-solid fa-phone"></i> Phone : <span>+639455602846</span></p>
        </div>
        <div className="info-item padd-15">
          <p><i class="fa-solid fa-city"></i> City : <span>Laguna</span></p>
        </div>
        <div className="info-item padd-15">
          <p><i class="fa-solid fa-laptop"></i> Freelance : <span>Available</span></p>
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
