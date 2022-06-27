import React, { useState } from "react";
import "./styleswitch.css";
import {themeColorsObj} from '../../constants/styleswitch';
export default function Styleswitch() {

  const [open, setOpen] = useState(
    document.querySelector(".style-switcher-toggler")
  );

  const styleSwitcherToggle = () => {
    setOpen(document.querySelector(".style-switcher").classList.toggle("open"));

    window.addEventListener("scroll", () => {
      if (
        document.querySelector(".style-switcher").classList.contains("open")
      ) {
        document.querySelector(".style-switcher").classList.remove("open");
      }
    });
  };

  // For Day and Night Theme //
  const [dn, setDn] = useState("fa-moon");
  const dayNight = () => {
    setDn("fa-sun");
    document.body.classList.toggle("dark");
    if (dn === "fa-sun") {
      setDn("fa-moon");
      document.body.classList.toggle("sun");
    }
  };

  // For theme colors //
  const alternateStyles = document.querySelectorAll(".alternate-style");
  function setActiveStyle(color) {
    alternateStyles.forEach((style) => {
      if (color === style.getAttribute("title")) {
        style.removeAttribute("disabled");
      } else {
        style.setAttribute("disabled", "true");
      }
    });
  }

  return (
    <div className="style-switcher">
      <div className="style-switcher-toggler s-icon">
        <i
          onClick={styleSwitcherToggle}
          title="Theme Colors"
          className="fas fa-cog fa-spin"
        ></i>
      </div>
      <div className="day-night s-icon">
        <i
          onClick={dayNight}
          title={dn === "fa-moon" ? "Dark Mode" : "Light Mode"}
          className={`fas ${dn}`}
        ></i>
      </div>
      <h4>Theme Colors</h4>
      <div className="colors">
        {themeColorsObj.map((item, index) => {
          return (
            <span
              key={index}
              className={item.colorTheme}
              onClick={() => setActiveStyle(`${item.color}`)}
            ></span>
          );
        })}
      </div>
    </div>
  );
}
