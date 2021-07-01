/* Change this file to get your personal Portfolio */

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
  animated: false // set to false to use static SVG
};

const greeting = {
  username: "",
  title: emoji(" We ❤️ Problems"),
  subTitle: emoji(
    "The problem is that teams compromise their brands’s potential with subpar Website, either because they don’t have a design, or don’t understand the vast complexities of developing.We believe that the ability to get stunning branded websites should not be reserved for the few, but should be democratized with no barrier to entry."
  ),
  resumeLink:
    "",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "",
  linkedin: "",
  gmail: "",
  gitlab: "",
  facebook: "",
  medium: "",
  stackoverflow: "",
  // Instagram and Twitter are also supported in the links!
  display: false // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "We Love Your Brand",
  subTitle: "Specially designed to help your team achieve aesthetic website and branding",
  skills: [
    emoji(
      "#We have tools that help you and your team all free of charge or you can ask us to do it for you"
    ),
    emoji("#We will curate a product line that is perfect for your team"),
    emoji(
      "#and we’re so confident that you’ll love it that we do all the design and product selection for free."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  // softwareSkills: [
  //   {
  //     skillName: "",
  //     fontAwesomeClassname: ""
  //   },
  //   {
  //     skillName: "",
  //     fontAwesomeClassname: ""
  //   },
  //   {
  //     skillName: "",
  //     fontAwesomeClassname: ""
  //   },
  //   {
  //     skillName: "",
  //     fontAwesomeClassname: ""
  //   },
  //   {
  //     skillName: "",
  //     fontAwesomeClassname: ""
  //   },
  //   {
  //     skillName: "",
  //     fontAwesomeClassname: ""
  //   },
  //   {
  //     skillName: "",
  //     fontAwesomeClassname: ""
  //   },
  //   {
  //     skillName: "",
  //     fontAwesomeClassname: ""
  //   },
  //   {
  //     skillName: "",
  //     fontAwesomeClassname: ""
  //   },
  //   {
  //     skillName: "",
  //     fontAwesomeClassname: ""
  //   },
  //   {
  //     skillName: "",
  //     fontAwesomeClassname: ""
  //   },
  //   {
  //     skillName: "",
  //     fontAwesomeClassname: ""
  //   },
  //   {
  //     skillName: "",
  //     fontAwesomeClassname: ""
  //   }
  // ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "",
      logo: require(""),
      subHeader: "",
      duration: "",
      desc: "",
      descBullets: [
        "",
        ""
      ]
    },
    {
      schoolName: "",
      logo: require(""),
      subHeader: "",
      duration: "",
      desc:
        "",
      descBullets: [""]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "", //Insert stack or technology you have experience in
      progressPercentage: "" //Insert relative proficiency in percentage
    },
    {
      Stack: "",
      progressPercentage: ""
    },
    {
      Stack: "",
      progressPercentage: ""
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "",
      company: "",
      companylogo: require(""),
      date: "",
      desc:
        "",
      descBullets: [
        "",
        ""
      ]
    },
    {
      role: "",
      company: "",
      companylogo: require(""),
      date: "",
      desc:
        ""
    },
    {
      role: "",
      company: "",
      companylogo: require(""),
      date: "",
      desc:
        ""
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "",
  subtitle: "",
  projects: [
    {
      image: require(""),
      projectName: "",
      projectDesc: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require(""),
      projectName: "",
      projectDesc: "",
      footerLink: [
        {
          name: "",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji(""),
  subtitle:
    "",

  achievementsCards: [
    {
      title: "",
      subtitle:
        "",
      image: require(""),
      footerLink: [
        {
          name: "",
          url:
            ""
        },
        {
          name: "",
          url:
            ""
        },
        {
          name: "",
          url:
            ""
        }
      ]
    },
    {
      title: "",
      subtitle:
        "",
      image: require(""),
      footerLink: [
        {
          name: "",
          url:
            ""
        }
      ]
    },

    {
      title: "",
      subtitle: "",
      image: require(""),
      footerLink: [
        {name: "", url: ""},
        {
          name: "",
          url: ""
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "",
  subtitle:
    "",

  blogs: [
    {
      url:
        "",
      title: "",
      description:
        ""
    },
    {
      url: "",
      title: "",
      description:
        ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "",
  subtitle: emoji(
    ""
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji(""),
  subtitle: "",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji(""),
  subtitle:
    "",
  number: "",
  email_address: ""
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
