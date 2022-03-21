import React from "react";
import "./Portfolio.css";
import Projects from "./Projects";

export default function Portfolio() {
  return (
    <section className="portfolio section" id="portfolio">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <h2>Portfolio</h2>
          </div>
        </div>
        <div className="row">
          <div className="portfolio-heading padd-15">
            <h2>My Last Projects:</h2>
          </div>
        </div>
        <Projects/>
      </div>
    </section>
  );
}
