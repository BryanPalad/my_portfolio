import React from "react";
import "./Services.css";
import Fade from "react-reveal/Fade";
export default function Services() {  
  const services = [
    { icon: 'fa fa-mobile-alt', title: 'Web Development', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque'},
    { icon: 'fa fa-laptop-code', title: 'Responsive Web Design', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque'},
    { icon: 'fa fa-palette', title: 'Web Development', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque'},
    { icon: 'fa fa-code', title: 'Web Development', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque'},
    { icon: 'fa fa-search', title: 'Web Development', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque'},
    { icon: 'fa fa-bullhorn', title: 'Web Development', desc: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil velit ab itaque'}
  ]
  return (
    <section className="service section" id="services">
      <div className="container">
        <div className="row">
          <div className="section-title padd-15">
            <Fade bottom>
              <h2>Services</h2>
            </Fade>
          </div>
        </div>
        <div className="row">
          {services.map(({icon, title,desc}) => {
            return <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className={icon}></i>
              </div>
              <Fade bottom>
                <h4>{title}</h4>
                <p>{desc}</p>
              </Fade>
            </div>
          </div>
          })}
        </div>
      </div>
    </section>
  );
}
