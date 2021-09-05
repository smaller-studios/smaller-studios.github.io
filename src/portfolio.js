/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Sibongumusa Lungelo",
  title: "Sibongumusa",
  subTitle: emoji(
    "A developer who loves to transform ideas into reality using code. The path of a self-taught developer can be scary and intimidating. For me, getting into code turned out to be the right choice anyways: When the responsibility for your growth, career and learning sits 100% on your own shoulders, you also completely own your wins."
  ),
  // resumeLink:
  //   "",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/S-codes14",
  linkedin: "https://www.linkedin.com/in/sibongumusa-lungelo-28268220a/",
  gmail: "smlmnguni14@gmail.com",
  instagram: "https://www.instagram.com/s.codes14/",
  facebook: "https://www.facebook.com/sbongumusa.sbongumusa.5/",
  twitter: "https://twitter.com/s_codes14",
  // stackoverflow: "https://stackoverflow.com/users/15496696/sibongumusa-lungelo",
  // upwork: "https://www.upwork.com/freelancers/~013f1fd3a5fd8cb440",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ etc."
    ),
    emoji(
      "⚡ Quick to learn new technologies"
    ),
    emoji(
      "⚡ Effective problem solving skills that can be used in the work place"
    ),
    emoji(
      "⚡ other essential/recommended/optional web development skills are: Web page animation, Web development expertise, Web Design, Front-end web languages, Website creation, Web App Development, Website development, Web development technologies."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fab fa-envira"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "65%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};


const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+27 729846089",
  email_address: "smlmnguni14@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "s_codes14", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  // educationInfo,
  techStack,
  // workExperiences,
  openSource,
  // bigProjects,
  // achievementSection,
  // blogSection,
  // talkSection,
  contactInfo,
  twitterDetails
};
