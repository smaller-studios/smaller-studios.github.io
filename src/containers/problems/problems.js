import React, {useContext} from "react";
import "../skills/Skills.css";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
// import codingPerson from "../../assets/lottie/7471-personal";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import design from "../../assets/images/Telecommuting-pana.svg"
// import ReactReadMoreReadLess from "react-read-more-read-less";

export default function Problem() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            <img
                alt="design"
                src={design}
              ></img>
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              We love problems
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
             The problem is that teams compromise their brands’s potential with subpar Website, either because they don’t have a design, or don’t understand the vast complexities of developing.<br/>We believe that the ability to get stunning branded websites should not be reserved for the few, but should be democratized with no barrier to entry.
            </p>
           
          </div>
        </Fade>
      </div>
    </div>
  );
}
