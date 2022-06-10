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
      icon: "fa-solid fa-person",
      desc: "Status :",
      span: "Single",
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
      span: "+63-945-560-2846",
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
      desc: "Occupation :",
      span: "Open for a Job",
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
                {span === 'Employed' ? (
                  <span style={{color: 'red'}}>{span}</span>
                ):(<span style={{color: 'green'}}>{span}</span>)}
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
