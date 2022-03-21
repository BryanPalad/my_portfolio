import React from "react";
import "./Sidebar.css";

export default function SidebarData({
  menu,
  Link,
  activehome,
  activehomes,
  activeabout,
  activeabouts,
  activeservices,
  activeservicess,
  activeportfolio,
  activeportfolios,
  activecontact,
  activecontacts,
  year
}) {
  return (
    <div className="aside">
      <div className="logo">
        <a href="#">
          <span>BS</span>IT
        </a>
      </div>
      <div className="nav-toggler">
        <span onClick={menu}></span>
      </div>
      <ul className="nav">
        <Link
          activeClass="active"
          to="home section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li>
            <a href="#home" className={activehome} onClick={activehomes}>
              <i className="fa fa-home"></i> Home
            </a>
          </li>
        </Link>
        <Link
          activeClass="active"
          to="about section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li>
            <a href="#about" className={activeabout} onClick={activeabouts}>
              <i className="fa fa-user"></i> About
            </a>
          </li>
        </Link>
        <Link
          activeClass="active"
          to="service section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li>
            <a
              href="#services"
              className={activeservices}
              onClick={activeservicess}
            >
              <i className="fa fa-list"></i> Services
            </a>
          </li>
        </Link>
        <Link
          activeClass="active"
          to="portfolio section"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li>
            <a
              href="#portfolio"
              className={activeportfolio}
              onClick={activeportfolios}
            >
              <i className="fa fa-briefcase"></i> Portfolio
            </a>
          </li>
        </Link>
        <Link
          activeClass="active"
          to="contact-title"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <li>
            <a
              href="#contact"
              className={activecontact}
              onClick={activecontacts}
            >
              <i className="fa fa-comments"></i> Contact
            </a>
          </li>
        </Link>
      </ul>
      <div className="copyright">Copyright © {year}</div>
    </div>
  );
}
