import React from "react";
import "./Sidebar.css";
import ScrollToTop from "react-scroll-to-top";
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
    <>
    
    <div className="aside">
      <div className="logo">
        <a href="#home" onClick={activehomes}>
          <span> Bryan </span>
        </a>
      </div>
      <div onClick={menu} className="nav-toggler">
        <span></span>
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
            <i className="fa-regular fa-address-card"></i> About
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
      <div className="copyright">Developed by Bryan Palad © {year}</div>
      <span onClick={activehomes}>
        <ScrollToTop smooth
        height={22}
        width={22}
        top={4500}
        />
      </span>
    </div>
    </>
  );
}
