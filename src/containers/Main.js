import React, {Component} from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Problem from "./problems/problems"
import Brand from "./brand/brand"
import Skills from "./skills/Skills";
import Footer from "../components/footer/Footer";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import {StyleProvider} from "../contexts/StyleContext";
import "./Main.css";
export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDark: true
    };
  }

  componentDidMount() {
    if (localStorage.getItem("isDark") === null) {
      const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
      localStorage.setItem("isDark", darkPref.matches);
    }
    this.setState({isDark: JSON.parse(localStorage.getItem("isDark"))});
  }
  changeTheme = () => {
    this.setState({isDark: !this.state.isDark}, () => {
      localStorage.setItem("isDark", this.state.isDark);
    });
  };

  render() {
    return (
      <div className={this.state.isDark ? "dark-mode" : null}>
        <StyleProvider
          value={{isDark: this.state.isDark, changeTheme: this.changeTheme}}
        >
          <Header />
          <Greeting />
          <Problem />
          <Brand />
          <Skills />
          {/* <StackProgress /> */}
          {/* <Education /> */}
          {/* <WorkExperience /> */}
          {/* <Projects /> */}
          {/* <StartupProject /> */}
          {/* <Achievement /> */}
          {/* <Blogs /> */}
          {/* <Talks /> */}
          <Twitter />
          {/* <Profile /> */}
          <Footer />
          <Top />
        </StyleProvider>
      </div>
    );
  }
}
