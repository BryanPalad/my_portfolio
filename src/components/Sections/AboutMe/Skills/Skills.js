import React from "react";
import Fade from "react-reveal/Fade";
import "./Skills.css";
export default function Skills() {
  const proficient = ["html.png", "css.png", "javascript.png"];
  const knowledgeable = ["c-sharp.png", "php.png","react.png","vuejs.png"];
  const toolsused = ["mysql.png","vscode.png","github.png"];
  const frameworks = ["bootstrap.png", "mui.png", 'antdesign.png'];
  return (
    <>
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
            <h4><i>Basic to Mid Knowledge</i></h4>
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
        <div className="skill-item padd-15">
          <div classname="proficient-skill">
            
          </div>
        </div>
        <div className="skill-item padd-15">
          <div className="tools-used">
            <h4><i>Frameworks Used</i></h4>
            <Fade bottom>
              {frameworks.map((value, index) => {
                return <img key={index} src={`../../../images/${value}`} alt="skills"></img>;
              })}
            </Fade>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
