import React from "react";
import Fade from "react-reveal/Fade";
import "./Skills.css";

export default function Skills() {
  const proficient = ["html.png", "css.png", "javascript.png", "bootstrap.png"];
  const knowledgeable = ["react.png", "php.png", "c-sharp.png", "vuejs.png"];
  const toolsused = ["github.png", "vscode.png", "mysql.png"];
  return (
    <div className="skills padd-15">
      <h3 className="title">Technical Skills</h3>
      <div className="row">
        <div className="skill-item padd-15">
          <div classname="proficient-skill">
            <h4><i>Proficient in</i></h4>
            <Fade bottom>
              {proficient.map((value, index) => {
                return <img key={index} src={`../../../images/${value}`} alt="skills"></img>;
              })}
            </Fade>
          </div>
        </div>
        <div className="skill-item padd-15">
          <div className="basic-skill">
            <h4><i>Basic Knowledge</i></h4>
            <Fade bottom>
              {knowledgeable.map((value, index) => {
                return <img key={index} src={`../../../images/${value}`} alt="skills"></img>;
              })}
            </Fade>
          </div>
        </div>
        <div className="skill-item padd-15">
          <div className="tools-used">
            <h4><i>Database / Tools Used</i></h4>
            <Fade bottom>
              {toolsused.map((value, index) => {
                return <img key={index} src={`../../../images/${value}`} alt="skills"></img>;
              })}
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
}
