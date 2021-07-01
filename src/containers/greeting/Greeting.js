import React, {useContext} from "react";
// import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.css";
import Personal from "../../assets/lottie/personal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
// import SocialMedia from "../../components/socialMedia/SocialMedia";
// import Button from "../../components/button/Button";

// import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  // if (!greeting.displayGreeting) {
  //   return null;
  // }
  return (
    // <Fade bottom duration={1000} distance="40px">

      <div className="greet-main" id="greeting">
        <div className="greeting-main">
    {/* <Fade left duration={1550}> */}

          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {"We ❤️ Problems"}{" "}
                <span className="wave-emoji">{emoji("")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {"The problem is that teams compromise their brands’s potential with subpar Website, either because they don’t have a design, or don’t understand the vast complexities of developing.We believe that the ability to get stunning branded websites should not be reserved for the few, but should be democratized with no barrier to entry."}
              </p>
              {/* <SocialMedia /> */}
              <div className="button-greeting-div">
                {/* <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                /> */}
              </div>
            </div>
          </div>
    {/* </Fade> */}
          

        {/* <Fade left duration={1500}> */}

          <div className="greeting-image-div">
            {/* {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : ( */}
              {/* <img
                alt=""
                src={require("../../assets/images/StarStuff.jpeg")}
              ></img> */}
              <DisplayLottie animationData={Personal} />

            {/* )} */}
          </div>
          {/* </Fade/> */}
        </div>
      </div>
  );
}
