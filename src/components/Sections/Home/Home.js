import React from "react";
import "./Home.css";
import Typical from "react-typical";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Hello, my name is <span className="name">Bryan Palad</span>
            </h3>
            <h3 className="my-profession">
              I'm a
              <span className="typing" style={{ fontSize: "28px" }}>
                <Typical
                  wrapper="h3.my-profession"
                  loop={Infinity}
                  steps={[
                    " Enthusiastic Dev 😀",
                    1000,
                    " Gamer 😀 ",
                    1000,
                    " Web Developer 😀",
                    1000,
                    " Aspiring Full Stack Dev 😀",
                    1000,
                  ]}
                />
              </span>
            </h3>
            <p>
              I'm a BSIT Graduate who seeks for a challenging career with a
              progressive organization that provides an opportunity to
              capitalize my programming/technical skills and ASPIRING FULL STACK
              WEB DEVELOPER in my future career.
            </p>
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
          <div className="home-img padd-15">
            <div className="profile-pic"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
