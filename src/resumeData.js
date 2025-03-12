const resumeData = {
  name: "Parth Lakhani",
  role: "Full Stack Developer",
  roleDescription:
    "Experienced Full Stack Developer with a demonstrated history of working in the IT industry. While working as a Software developer I have worked in various technologies following agile methodologies with weekly sprints. Gained knowledge working in Frontend and Backend. Exploring new technologies and concepts every day, always open to new opportunities.",
  socialLinks: [
    {
      name: "github",
      url: "https://github.com/parthlakhanii",
      className: "fab fa-github",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/parthlakhanii/",
      className: "fab fa-linkedin-in",
    },
    {
      name: "email",
      url: "mailto:pmlakhani55@gmail.com",
      className: "fas fa-envelope",
    },
  ],
  aboutme:
    "A seasoned software developer with over 5 years of experience at SAP, proficient in Angular, React, JavaScript, and Java. Specializing in crafting innovative solutions that blend technical expertise with creative flair, driven by a passion for continuous learning and user-centric design. Committed to pushing the boundaries of innovation and making a lasting impact through work.",
  address: "Toronto, Ontario",
  email: "pmlakhani55@gmail.com",
  phone: "+1 519 971 1765",
  education: [
    {
      UniversityName: "University of Windsor",
      specialization: "Master of Applied Computing",
      MonthOfPassing: "May",
      YearOfPassing: "2021",
    },
    {
      UniversityName: "A. D. Patel Institute of Technology",
      specialization: "Information Technology",
      MonthOfPassing: "May",
      YearOfPassing: "2018",
    },
  ],
  work: [
    {
      CompanyName: "SAP",
      position: "Intermediate Software Developer",
      YearOfStarting: "2023",
      MonthOfStarting: "April",
      MonthOfLeaving: "Present",
      description: [
        "Implement address validation within SAP Commerce Cloud, integrating backend services and frontend components to ensure accurate data, streamline processing, and boost operational efficiency by 25%.",
        "Establish a comprehensive testing strategy, including integration tests, unit tests (JUnit, Jest), and end-to-end tests (Cypress, Karate) to improve test coverage, code reliability, and system stability.",
        "Create detailed documentation and knowledge-sharing resources, streamlining onboarding for new developers.",
      ],
    },
    {
      CompanyName: "SAP",
      position: "Software Developer",
      YearOfStarting: "2021",
      MonthOfStarting: "April",
      MonthOfLeaving: "2023",
      YearOfLeaving: "August",
      description: [
        "Built a no-code/low-code data mapping tool that automated data transformation between source and target systems. Improved integration efficiency by 30% through dynamic URI, header, and payload transformations.",
        "Led the full development cycle, from design to implementation and testing, ensuring robust and scalable solutions.",
        "Developed a customer ticketing solution with integrated chat support using SAP Spartacus (Angular, TypeScript, RxJS, NgRx), enhancing customer engagement and reducing response time by 20%",
      ],
    },
    {
      CompanyName: "SAP",
      position: "Front-End Developer Intern",
      YearOfStarting: "2020",
      MonthOfStarting: "October",
      MonthOfLeaving: "2021",
      YearOfLeaving: "August",
      description: [
        "Developed the CSV product import-export feature for B2B users in Spartacus, reducing bulk product upload time by 98% and minimizing manual effort in SAP Commerce Cloud.",
        "Gained proficiency in JavaScript, TypeScript, Angular, and RxJS, with a focus on front-end development, unit testing, and end-to-end testing.",
        "Specialized in building reusable Angular components, and actively participated in code reviews and knowledge sharing",
      ],
    },
    {
      CompanyName: "SRKay Consulting Group",
      position: "Associate Software Developer",
      YearOfStarting: "2018",
      MonthOfStarting: "January",
      MonthOfLeaving: "July",
      YearOfLeaving: "2019",
      description: [
        "Collaborated on designing and implementing separate eCommerce portals for job seekers and hirers on the SCIKEY platform using React, Node.js, TypeScript, JavaScript, Java, and Angular",
        "Optimized MongoDB queries to manage over 100,000 resume records, enhancing data integrity and reducing query response times by 40%.",
        "Collaborated with cross-functional teams to integrate frontend and backend for a seamless experience for 50,000+ users.",
        "Developed Fresume, a dynamic digital resume generator that transforms user-provided data into a visually appealing, structured resume.",
      ],
    },
  ],
  skills: {
    "Frontend Development": [
      { name: "React.js", icon: "fab fa-react" },
      { name: "JavaScript (ES6+)", icon: "fab fa-js" },
      { name: "TypeScript", icon: "fas fa-code" },
      { name: "HTML5/CSS3", icon: "fab fa-html5" },
      { name: "Angular", icon: "fab fa-angular" },
      { name: "Redux", icon: "fas fa-layer-group" },
    ],
    "Backend Development": [
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Java", icon: "fab fa-java" },
      { name: "Express.js", icon: "fas fa-server" },
      { name: "RESTful APIs", icon: "fas fa-plug" },
      { name: "Python", icon: "fab fa-python" },
      { name: "OpenAPI", icon: "fas fa-book-open" },
    ],
    "Databases & Cloud": [
      { name: "MongoDB", icon: "fas fa-database" },
      { name: "PostgreSQL", icon: "fas fa-database" },
      { name: "MySQL", icon: "fas fa-database" },
      { name: "Azure", icon: "fab fa-microsoft" },
      { name: "Firebase", icon: "fas fa-cloud" },
    ],
    "DevOps & Tools": [
      { name: "Docker", icon: "fab fa-docker" },
      { name: "Jenkins", icon: "fab fa-jenkins" },
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "CI/CD Pipelines", icon: "fas fa-infinity" },
      { name: "Linux & Shell Scripting", icon: "fas fa-terminal" },
    ],
    "Software Engineering & Best Practices": [
      { name: "Agile/Scrum", icon: "fas fa-users-cog" },
      { name: "System Design", icon: "fas fa-network-wired" },
      { name: "Microservices Architecture", icon: "fas fa-cubes" },
      { name: "Design Patterns", icon: "fas fa-project-diagram" },
      { name: "Code Reviews", icon: "fas fa-search" },
    ],
    "Testing & Performance Optimization": [
      { name: "Unit Testing (Jest, JUnit)", icon: "fas fa-vial" },
      {
        name: "End-to-End Testing (Cypress, Karate)",
        icon: "fas fa-microscope",
      },
      { name: "Integration Testing", icon: "fas fa-puzzle-piece" },
      { name: "Performance Optimization", icon: "fas fa-tachometer-alt" },
      { name: "Security Best Practices", icon: "fas fa-lock" },
    ],
  },
  portfolio: [
    {
      name: "Expense Tracker",
      description:
        "[Work in Progress] Personal finance tracker with React and Node.js, integrating CSV uploads, expense-sharing tools, and financial services APIs, and designed an intuitive UI for real-time expense visualization and data syncing, reducing manual input by over 90%",
      imgUrl: `${process.env.PUBLIC_URL}/images/expense_tracker.jpg`,
      github: "https://github.com/parthlakhanii/expenses",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "News Aggregator",
      description:
        "A news aggregator platform, processing data from multiple sources, implementing a React/Material UI card interface, and creating APIs for personalized user content",
      imgUrl: `${process.env.PUBLIC_URL}/images/news-aggregator.png`,
      url: "https://parthlakhanii.github.io/news-aggregator",
      github: "https://github.com/parthlakhanii/news-aggregator",
      technologies: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "Web Search Engine",
      description:
        "Implemented concept of Trie and tree for providing prompt suggestions to end user while searching and spell check by extracting and then comparing each word of searched query with available dictionary",
      imgUrl: `${process.env.PUBLIC_URL}/images/WSE.png`,
      github: "https://github.com/parthlakhanii/webSearch-backend",
      technologies: ["Java", "Angular"],
    },
    {
      name: "Diet-Mate",
      description:
        "Python and Angular based Diet Management System with a simple but efficient daily Nutrition tracker",
      imgUrl: `${process.env.PUBLIC_URL}/images/DM.png`,
      github: "https://gitlab.cs.uwindsor.ca/lakha117/diet-mate-webapp",
      technologies: ["Angular", "Python", "Postgres"],
    },
  ],
};

export default resumeData;
