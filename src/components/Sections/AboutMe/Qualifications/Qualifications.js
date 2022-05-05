import React from "react";
import "./Qualifications.css";
export default function Qualifications() {
  const qualifications = [
    { info: "✔ Dedicated and hardworking individual" },
    { info: "✔ Highly adaptable, well disciplined and keen on details" },
    { info: "✔ Fast learner and have a strong will to learn" },
    { info: "✔ Able to be a good leader and a follower" },
  ];
  return (
    <div className="qualifications padd-15">
      <div className="row">
        <div className="qualifications-info">
          {qualifications.map(({ info }) => {
            return <h3>{info}</h3>;
          })}
        </div>
      </div>
    </div>
  );
}
