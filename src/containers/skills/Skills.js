import React, {useContext} from "react";
import "./Skills.css";
// import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
// import { skillsSection} from "../../portfolio";

// import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import You from "../../assets/lottie/industrial-workers";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  var skills = [ "We have tools that help you and your team all free of charge or you can ask us to do it for you ", "We will curate a product line that is perfect for your team" , "and we’re so confident that you’ll love it that we do all the design and product selection for free." ]
  // if (!skillsSection.display) {
  //   return null;
  // }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade left duration={1000}>
          <div className="skills-image-div">
            {/* {illustration.animated ? (
              <DisplayLottie animationData={codingPerson} />
            ) : ( */}
              {/* <img
                alt="Man Working"
                src={require("../../assets/images/hero.jpeg")}
              ></img> */}
              <DisplayLottie animationData={You} />

            {/* )} */}
          </div>
        </Fade>
        <Fade right duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {"We Love Your Brand"}{" "}
            </h1>
            <br/>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {
                "Specially designed to help your team achieve aesthetic website and branding"
              }
            </p>
            <br/>
            {/* <SoftwareSkill /> */}
            <div>
              
              {skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
