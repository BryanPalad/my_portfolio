import React from "react";
import Fade from "react-reveal/Fade";
import "./Skills.css";
import { useSelector } from "react-redux";
import { selectSkills } from "../../../../redux/aboutMe/skillsSlice";

export default function Skills() {
  const skills = useSelector(selectSkills);
  return (
    <>
    <div className="skills padd-15">
      <h3 className="title">Technical Skills</h3>
      <div className="row">
        <div className="skill-item padd-15">
          <div classname="proficient-skill">
            <h4><i>Proficient in</i></h4>
            <Fade bottom>
              {skills[0].proficient.map((value, index) => {
                return <img key={index} src={`../../../images/skills/${value}`} alt="skills"></img>;
              })}
            </Fade>
          </div>
        </div>
        <div className="skill-item padd-15">
          <div className="basic-skill">
            <h4><i>Basic to Mid Knowledge</i></h4>
            <Fade bottom>
              {skills[1].knowledgeable.map((value, index) => {
                return <img key={index} src={`../../../images/skills/${value}`} alt="skills"></img>;
              })}
            </Fade>
          </div>
        </div>
        <div className="skill-item padd-15">
          <div className="tools-used">
            <h4><i>Database / Tools Used</i></h4>
            <Fade bottom>
              {skills[2].toolsused.map((value, index) => {
                return <img key={index} src={`../../../images/skills/${value}`} alt="skills"></img>;
              })}
            </Fade>
          </div>
        </div>
        <div className="skill-item padd-15">
          <div classname="proficient-skill">
            
          </div>
        </div>
        <div className="skill-item padd-15">
          <div className="tools-used">
            <h4><i>Frameworks Used</i></h4>
            <Fade bottom>
              {skills[3].frameworks.map((value, index) => {
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
