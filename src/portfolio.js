/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Smaller Studios",
  title: "Smaller Studios",
  subTitle: emoji(
    "Smaller Studios is a team of motivated entrepreneurs, engineers and artists set out to focus on how we can better serve the incredible teams that we work with - That being you."
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
  title: "We Create",
  subTitle: "We make websites and tools that help you as well, We have experience in a dozen of technologies,  so if you are super specific we can do it your way.  Our speciality.  Our aim?  To ensure your brand speaks for itself when you leave the room. example of some tech include:",
  
    
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
