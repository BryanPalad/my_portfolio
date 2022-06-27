import React from "react";
import Fade from "react-reveal/Fade";
import "./Skills.css";
import { skillsObj } from "../../../../constants/about";
export default function Skills() {
  return (
    <>
    <div className="skills padd-15">
      <h3 className="title">Technical Skills</h3>
      <div className="row">
        <div className="skill-item padd-15">
          <div className="proficient-skill">
            <h4><i>Proficient in</i></h4>
            <Fade bottom>
              {skillsObj[0].proficient.map((value, index) => {
                return <img key={index} src={`../../../images/skills/${value}`} alt="skills"></img>;
              })}
            </Fade>
          </div>
        </div>
        <div className="skill-item padd-15">
          <div className="basic-skill">
            <h4><i>Basic to Mid Knowledge</i></h4>
            <Fade bottom>
              {skillsObj[1].knowledgeable.map((value, index) => {
                return <img key={index} src={`../../../images/skills/${value}`} alt="skills"></img>;
              })}
            </Fade>
          </div>
        </div>
        <div className="skill-item padd-15">
          <div className="tools-used">
            <h4><i>Database / Tools Used</i></h4>
            <Fade bottom>
              {skillsObj[2].toolsused.map((value, index) => {
                return <img key={index} src={`../../../images/skills/${value}`} alt="skills"></img>;
              })}
            </Fade>
          </div>
        </div>
        <div className="skill-item padd-15">
          <div className="proficient-skill">
            
          </div>
        </div>
        <div className="skill-item padd-15">
          <div className="tools-used">
            <h4><i>Frameworks Used</i></h4>
            <Fade bottom>
              {skillsObj[3].frameworks.map((value, index) => {
                return <img key={index} src={`../../../images/skills/${value}`} alt="skills"></img>;
              })}
            </Fade>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
