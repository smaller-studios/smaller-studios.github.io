import React, {useContext} from "react";
import {Fade} from "react-reveal";
// import emoji from "react-easy-emoji";
import "../right-text.css";
// import landingPerson from "../../assets/lottie/64807-geometric-back";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import picture from "../../assets/images/Telecommuting-cuate.svg"
import StyleContext from "../../contexts/StyleContext";

export default function Brand() {
  const {isDark} = useContext(StyleContext);
  
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                We love your brand
                
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                Specially designed to help your team achieve aesthetic website and branding
                We have tools that help you and your team all free of charge or you can ask us to do it for you

                We will curate a product line that is perfect for your team

                and we’re so confident that you’ll love it that we do all the design and product selection for free.
              </p>
             
            </div>
          </div>
          <div className="greeting-image-div">
              <img
                alt=""
                src={picture}
              ></img>
            
          </div>
        </div>
      </div>
    </Fade>
  );
}
