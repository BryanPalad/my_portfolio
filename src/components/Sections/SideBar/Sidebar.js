import React, { useState, useEffect } from "react";
import "./Sidebar.css";
import { Link, animateScroll as scroll } from "react-scroll";
import SidebarData from "./SidebarData";

export default function Sidebar(props) {
  const date = new Date();
  const year = date.getFullYear();
  const [activehome, setActivehome] = useState("active");
  const [activeabout, setActiveabout] = useState("");
  const [activeservices, setActiveservices] = useState("");
  const [activeportfolio, setActiveportfolio] = useState("");
  const [activecontact, setActivecontact] = useState("");
  const [open, setOpen] = useState(document.querySelector(".aside"));

  useEffect(() => {
    function handleResize() {
      if (
        
        window.innerWidth <= 1198) {
        setOpen(document.querySelector(".aside").classList.remove("open"));
      }
    }
    window.addEventListener("resize", handleResize);
  });

  const menu = () => {
    setOpen(document.querySelector(".aside").classList.toggle("open"));
  };
  
  const activehomes = () => {
    setActivehome("active");
    setActiveabout("");
    setActiveservices("");  
    setActiveportfolio("");
    setActivecontact("");
    setOpen(!document.querySelector(".aside").classList.toggle("open"));
    setOpen(document.querySelector(".aside").classList.remove("open"));
  };
  const activeabouts = () => {
    setActivehome("");
    setActiveabout("active");
    setActiveservices("");
    setActiveportfolio("");
    setActivecontact("");
    setOpen(!document.querySelector(".aside").classList.toggle("open"));
  };
  const activeservicess = () => {
    setActivehome("");
    setActiveabout("");
    setActiveservices("active");
    setActiveportfolio("");
    setActivecontact("");
    setOpen(!document.querySelector(".aside").classList.toggle("open"));
  };
  const activeportfolios = () => {
    setActivehome("");
    setActiveabout("");
    setActiveservices("");
    setActiveportfolio("active");
    setActivecontact("");
    setOpen(!document.querySelector(".aside").classList.toggle("open"));
  };
  const activecontacts = () => {
    setActivehome("");
    setActiveabout("");
    setActiveservices("");
    setActiveportfolio("");
    setActivecontact("active");
    setOpen(!document.querySelector(".aside").classList.toggle("open"));
  };

  return (
    <SidebarData
      menu={menu}
      Link={Link}
      year={year}
      activehome={activehome}
      activehomes={activehomes}
      activeabout={activeabout}
      activeabouts={activeabouts}
      activeservices={activeservices}
      activeservicess={activeservicess}
      activeportfolio={activeportfolio}
      activeportfolios={activeportfolios}
      activecontact={activecontact}
      activecontacts={activecontacts}
    />
  );
}
