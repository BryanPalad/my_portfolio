import React from "react";
import Fade from "react-reveal/Fade";

export default function MiniProjects() {
  const miniproject = [
    {
      images: "images/portfolio/Calculator.PNG",
      demo: "https://reactjscalculator1.netlify.app/",
      github: "https://github.com/BryanPalad/calculator_reactjs",
      title: 'Calculator',
    },
    {
      images: "images/portfolio/Tesla-clone.PNG",
      demo: "https://teslacloneui.netlify.app/",
      github: "https://github.com/BryanPalad/Tesla-clone",
      title: 'Tesla Clone',
    },
    {
      images: "images/portfolio/Expense.PNG",
      demo: "https://expensetrackermini.netlify.app/",
      github: "https://github.com/BryanPalad/expenses_tracker_redux",
      title: 'Expense Tracker',
    },
    {
      images: "images/portfolio/Cryptoverse.PNG",
      demo: "https://cryptoversemini.netlify.app/",
      github: "https://github.com/BryanPalad/Cryptoverse",
      title: 'Cryptoverse',
    },
  ];
  return (
    <div className="row">
      <Fade bottom>
        {miniproject.map(({ images, demo, github, title }) => {
          return (
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={images} alt="portfolio"/>
                  <h2>{title}</h2>
                  {/* <div className="links">
                    <a className="view-demo" href={demo} target="_blank" rel="noreferrer">
                      Demo <i className="fa-solid fa-eye"></i>
                    </a>
                    <a className="view-git" href={github} target="_blank" rel="noreferrer">
                      Github <i className="fab fa-github"></i>
                    </a>
                  </div> */}
                  <div className="card-buttons">
                    <div className="card-items">
                      <a href={demo} target="_blank" rel="noreferrer">
                      <h3 className="live">Live Demo</h3>
                      <i className="fa-solid fa-eye"></i>
                      </a>
                    </div>
                    <div className="card-items">
                    <a href={github} target="_blank" rel="noreferrer">
                      <h3 className="live">Github</h3>
                      <i className="fab fa-github"></i>
                      </a>
                    </div>
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
