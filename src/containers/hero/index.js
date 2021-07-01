import React from "react";
import "./index.css";
import Typed from 'react-typed';
import hero from "../../assets/images/smaller.svg"

function index() {
  return (
    <div class="Hero__HeroContainer-b98oqm-0 kvYdOK" background_color="#f2babd">
      <div>
        <h1><Typed className="font-weight-light"
          strings={['Just seat back and relax because ...','We are Creativity', 'We make design', 'We solve problems', 'We create ...', 'We create Software', 'We create Software For You', 'We create tools that help you create software']}
          backSpeed={40} typeSpeed={40} backDelay={1555}></Typed></h1>
        {/* <a href="start/" class="Hero__CTAButton-b98oqm-1 gJuuYA">
          Let's start
        </a> */}
      </div>
      <img src={hero} alt="Smaller is Creativity, And creates custom websites for you" />
    </div>
  );
}

export default index;
