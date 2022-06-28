import React from "react";
import Fade from "react-reveal/Fade";
import { useSelector } from "react-redux";
import { selectMiniProject } from "../../../redux/portfolio/miniProjectsSlice";
export default function MiniProjects() {
  const miniprojectObj = useSelector(selectMiniProject);
  return (
    <div className="row">
      <Fade bottom>
        {miniprojectObj.map((item, index) => {
          return (
            <div className="portfolio-item padd-15" key={index}>
              <div className="portfolio-item-inner shadow-dark">
                <div className="portfolio-img">
                  <img src={item.images} alt="portfolio"/>
                  <video className="clip" loop muted autoPlay controls = ''>
                      <source src={item.clip} type="video/mp4"/>
                      <source src={item.clip} type="video/ogg"/>
                  </video>
                  <h2>{item.title}</h2>
                  <div className="card-buttons">
                    <div className="card-items">
                      <a href={`${item.demo}`} target="_blank" rel="noreferrer">
                      <h3 className="live">Live Demo</h3>
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                      </a>
                    </div>
                    <div className="card-items">
                    <a href={`${item.github}`} target="_blank" rel="noreferrer">
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
