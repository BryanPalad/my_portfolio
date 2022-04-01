import React from "react";

export default function Projects() {
  return (
    <div className="row">
      <div className="portfolio-item padd-15">
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img">
            <img
              src="images/portfolio/FernandezDentalClinic.PNG"
              alt="portfolio"
            />
            <div className="links">
            <a className="view-demo" href="https://github.com/BryanPalad/Cryptoverse" target="_blank">Demo <i className="fa-solid fa-eye"></i></a>
            <a className="view-git" href="https://github.com/BryanPalad/Cryptoverse" target="_blank">Github <i className="fab fa-github"></i></a>
            </div>
          </div>
        </div>
      </div>
      <div className="portfolio-item padd-15">
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img">
            <img src="images/portfolio/FDC_dashboard.PNG" alt="portfolio" />
          </div>
        </div>
      </div>
      <div className="portfolio-item padd-15">
        <div className="portfolio-item-inner shadow-dark">
          <div className="portfolio-img">
            <img src="images/portfolio/Cryptoverse.PNG" alt="portfolio" />
          </div>
        </div>
      </div>
    </div>
  );
}
