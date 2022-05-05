import React from "react";

export default function PersonalInfoData({ age }) {
  const personalinfo = [
    {
      icon: "fa-solid fa-cake-candles",
      desc: "Birthday :",
      span: "January 15, 1999",
      style: false,
    },
    {
      icon: "fa-solid fa-user-plus",
      desc: "Age :",
      span: `${age}`,
      style: false,
    },
    {
      icon: "fa-solid fa-graduation-cap",
      desc: "Degree :",
      span: "BS Information Technology",
      style: false,
    },
    {
      icon: "fa-solid fa-envelope",
      desc: "Email :",
      span: "paladbryanj@gmail.com",
      style: false,
    },
    {
      icon: "fa-solid fa-location-dot",
      desc: "Address :",
      span: "Brgy. Banlic Cabuyao",
      style: false,
    },
    {
      icon: "fa-solid fa-phone",
      desc: "Phone :",
      span: "Brgy. Banlic Cabuyao",
      style: false,
    },
    {
      icon: "fa-solid fa-city",
      desc: "City :",
      span: "Laguna",
      style: false,
    },
    {
      icon: "fa-solid fa-laptop",
      desc: "Freelance :",
      span: "Available",
      style: true,
    },
  ];
  return (
    <>
      {personalinfo.map(({ icon, desc, span, style }) => {
        return (
          <div className="info-item padd-15">
            {style ? (
              <p>
                <i class={icon}></i> {desc}
                <span style={{ color: "green" }}>{span}</span>
              </p>
            ) : (
              <>
                <p>
                  <i class={icon}></i> {desc}
                  <span>{span}</span>
                </p>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}
