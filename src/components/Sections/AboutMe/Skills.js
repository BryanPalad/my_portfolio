import React from "react";

export default function Skills() {
  return (
    <div className="skills padd-15">
      <h3 className="title">Technical Skills</h3>
      <div className="row">
        <div className="skill-item padd-15">
          <div classname="proficient-skill">
            <h4>Proficient in</h4>
            <img src="../../../images/html.png"></img>
            <img src="../../../images/css.png"></img>
            <img src="../../../images/javascript.png"></img>
            <img src="../../../images/bootstrap.png"></img>
          </div>
        </div>
        <div className="skill-item padd-15">
          <div className="basic-skill">
            <h4>Basic Knowledge</h4>
            <img src="../../../images/react.png"></img>
            <img src="../../../images/vuejs.png"></img>
            <img src="../../../images/c-sharp.png"></img>
            <img src="../../../images/php.png"></img>
          </div>
        </div>
        <div className="skill-item padd-15">
          <div className="tools-used">
            <h4>Tools Used</h4>
            <img src="../../../images/vscode.png"></img>
            <img src="../../../images/github.png"></img>
            <img src="../../../images/mysql.png"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
