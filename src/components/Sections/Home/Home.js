import React from "react";
import "./Home.css";
import Typical from "react-typical";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import HomeData from "./HomeData";

export default function Home() {

  return (
    <section className="home section" id="1">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <Fade bottom>
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
                      " Web Developer 💻",
                      1000,
                      " Aspiring Full Stack Dev ⏳",
                      1000,
                      " IT Graduate 🎓",
                      1000,
                    ]}
                  />
                </span>
              </h3>
            </Fade>
            <HomeData/>
            <Link
              activeClass="active"
              to="about section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <Fade bottom>
                <a href="#about" id="hiremebtn" className="btn hire-me">
                  Learn More
                </a>
                
              </Fade>
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
