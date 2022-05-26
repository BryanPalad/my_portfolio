import React from "react";
import Fade from "react-reveal/Fade";

export default function MiniProjects() {
  const miniproject = [
    {
      images: "images/portfolio/Calculator.PNG",
      demo: "https://reactjscalculator1.netlify.app/",
      github: "https://github.com/BryanPalad/calculator_reactjs",
    },
    {
      images: "images/portfolio/Tesla-clone.PNG",
      demo: "https://teslacloneui.netlify.app/",
      github: "https://github.com/BryanPalad/Tesla-clone",
    },
    {
      images: "images/portfolio/ExpenseTracker.PNG",
      demo: "https://cryptoversemini.netlify.app/",
      github: "https://github.com/BryanPalad/expense_tracker",
    },
    {
      images: "images/portfolio/Cryptoverse.PNG",
      demo: "https://cryptoversemini.netlify.app/",
      github: "https://github.com/BryanPalad/Cryptoverse",
    },
    
  ];
  return (
    <div className="row">
      <Fade bottom>
        {miniproject.map(({ images, demo, github }) => {
          return (
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={images} alt="portfolio" />
                  <div className="links">
                    <a className="view-demo" href={demo} target="_blank" rel="noreferrer">
                      Demo <i className="fa-solid fa-eye"></i>
                    </a>
                    <a className="view-git" href={github} target="_blank" rel="noreferrer">
                      Github <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Fade>
    </div>
  );
}
