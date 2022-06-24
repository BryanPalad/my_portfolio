import React from "react";
import Fade from "react-reveal/Fade";
export default function MiniProjects() {
  const miniproject = [
    {
      images: "images/portfolio/Calculator.PNG",
      demo: "https://reactjscalculator1.netlify.app/",
      github: "https://github.com/BryanPalad/calculator_reactjs",
      title: 'Simple Calculator',
      clip: 'videos/calculatorClip.webm'
    },
    {
      images: "images/portfolio/Tesla-clone.PNG",
      demo: "https://teslacloneui.netlify.app/",
      github: "https://github.com/BryanPalad/Tesla-clone",
      title: 'Tesla Clone',
      clip: 'videos/tesla.webm'
    },
    {
      images: "images/portfolio/Expense.PNG",
      demo: "https://expensetrackermini.netlify.app/",
      github: "https://github.com/BryanPalad/expenses_tracker_redux",
      title: 'Expense Tracker',
      clip: 'videos/expense.webm'
    },
    {
      images: "images/portfolio/Weather App.PNG",
      demo: "https://miniweather-news-app.netlify.app/",
      github: "https://github.com/BryanPalad/Weather-News-App",
      title: 'Weather/News App',
      clip: 'videos/weather.webm'
    },
    {
      images: "images/portfolio/Cryptoverse.PNG",
      demo: "https://cryptoversemini.netlify.app/",
      github: "https://github.com/BryanPalad/Cryptoverse",
      title: 'Cryptoverse',
      clip: 'videos/cryptoverse.webm'
    },
  ];
  return (
    <div className="row">
      <Fade bottom>
        {miniproject.map(({ images, demo, github, title, clip}) => {
          return (
            <div className="portfolio-item padd-15">
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={images} alt="portfolio"/>
                  <video className="clip" loop muted autoPlay controls = ''>
                      <source src={clip} type="video/mp4"/>
                      <source src={clip} type="video/ogg"/>
                  </video>
                  <h2>{title}</h2>
                  <div className="card-buttons">
                    <div className="card-items">
                      <a href={demo} target="_blank" rel="noreferrer">
                      <h3 className="live">Live Demo</h3>
                      <i class="fa-solid fa-arrow-up-right-from-square"></i>
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
