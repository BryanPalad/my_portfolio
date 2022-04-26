import React from "react";
import "./Services.css";
import Fade from "react-reveal/Fade";
export default function Services() {
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
          {/* <!--Service item Start --> */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-mobile-alt"></i>
              </div>
              <Fade bottom>
                <h4>Web Development</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil velit ab itaque.
                </p>
              </Fade>
            </div>
          </div>
          {/* <!--Service item End --> */}
          {/* <!--Service item Start --> */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-laptop-code"></i>
              </div>
              <Fade bottom>
                <h4>Responsive Web Design</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil velit ab itaque.
                </p>
              </Fade>
            </div>
          </div>
          {/* <!--Service item End --> */}
          {/* <!--Service item Start --> */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-palette"></i>
              </div>
              <Fade bottom>
                <h4>Web Design</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil velit ab itaque.
                </p>
              </Fade>
            </div>
          </div>
          {/* <!--Service item End --> */}
          {/* <!--Service item Start --> */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-code"></i>
              </div>
              <Fade bottom>
                <h4>Web Design</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil velit ab itaque.
                </p>
              </Fade>
            </div>
          </div>
          {/* <!--Service item End --> */}
          {/* <!--Service item Start --> */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-search"></i>
              </div>
              <Fade bottom>
                <h4>Web Design</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil velit ab itaque.
                </p>
              </Fade>
            </div>
          </div>
          {/* <!--Service item End --> */}
          {/* <!--Service item Start --> */}
          <div className="service-item padd-15">
            <div className="service-item-inner">
              <div className="icon">
                <i className="fa fa-bullhorn"></i>
              </div>
              <Fade bottom>
                <h4>Web Design</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nihil velit ab itaque.
                </p>
              </Fade>
            </div>
          </div>
          {/* <!--Service item End --> */}
        </div>
      </div>
    </section>
  );
}
