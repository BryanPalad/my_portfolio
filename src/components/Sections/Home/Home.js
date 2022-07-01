import React from "react";
import "./Home.css";
import Typical from "react-typical";
import { Link } from "react-scroll";
import Fade from "react-reveal/Fade";
import HomeData from "./HomeData";
export default function Home() {
  const name = '<Bryan Palad/>'
  return (
    <section name='home' className="home section" id="1">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <Fade bottom>
              <h3 className="hello">
                Hi, my name is <span className="name">{name}</span>
              </h3>
              <h3 className="my-profession">
                I'm a
                <span className="typing" style={{ fontSize: "25px" }}>
                  <Typical
                    wrapper="h3.my-profession"
                    loop={Infinity}
                    steps={[
                      " Front-End Developer",
                      1000,
                      " BSIT Graduate",
                      1000,
                      " Aspiring Full Stack Dev",
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
                <a href="#about" id="hiremebtn" className="btn hire-me arrow">
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
