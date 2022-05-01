import React from "react";

export default function PersonalInfoData({age}) {
  return (
    <>
      <div className="info-item padd-15">
        <p>
          <i class="fa-solid fa-cake-candles"></i> Birthday :{" "}
          <span>January 15, 1999</span>
        </p>
      </div>
      <div className="info-item padd-15">
        <p>
          <i class="fa-solid fa-user-plus"></i> Age : <span>{age}</span>
        </p>
      </div>
      <div className="info-item padd-15">
        <p>
          <i class="fa-solid fa-graduation-cap"></i> Degree :{" "}
          <span>BS Information Technology</span>
        </p>
      </div>
      <div className="info-item padd-15">
        <p>
          <i class="fa-solid fa-envelope"></i> Email :{" "}
          <span>paladbryanj@gmail.com</span>
        </p>
      </div>
      <div className="info-item padd-15">
        <p>
          <i class="fa-solid fa-location-dot"></i> Address :{" "}
          <span>Brgy. Banlic Cabuyao</span>
        </p>
      </div>
      <div className="info-item padd-15">
        <p>
          <i class="fa-solid fa-phone"></i> Phone :{" "}
          <span>+63-945-560-2846</span>
        </p>
      </div>
      <div className="info-item padd-15">
        <p>
          <i class="fa-solid fa-city"></i> City : <span>Laguna</span>
        </p>
      </div>
      <div className="info-item padd-15">
        <p>
          <i class="fa-solid fa-laptop"></i> Freelance :{" "}
          <span style={{ color: "green" }}>Available</span>
        </p>
      </div>
    </>
  );
}
