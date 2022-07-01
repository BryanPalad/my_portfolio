import React from "react";
import "./Portfolio.css";
import Projects from "./Projects";
import Fade from "react-reveal/Fade";
import MiniProjects from "./MiniProjects";

export default function Portfolio() {
  return (
    <section className="portfolio section" id="4">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <Fade bottom>
              <h2>Portfolio</h2>
            </Fade>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <Fade bottom>
              <h2>Mini Projects:</h2>
            </Fade>
          </div>
        </div>
        <MiniProjects />
        <div className="row">
          <div className="portfolio-heading padd-15">
            <Fade bottom>
              <h2>My College Project:</h2>
            </Fade>
          </div>
        </div>
        <Projects />
      </div>
    </section>
  );
}
