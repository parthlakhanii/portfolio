const resumeData = {
  name: "Parth Lakhani",
  role: "Software Engineer",
  roleDescription:
    "Crafting scalable, high-performance web applications at the intersection of frontend and backend development. Passionate about building solutions that are not just functional, but transformative. Thriving in agile environments with a commitment to continuous learning and innovation.",
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
    "With 5+ years of experience spanning SAP Commerce Cloud and enterprise solutions, I specialize in building scalable, user-centric applications using React, Angular, TypeScript, Java, and Node.js. My expertise bridges modern frontend frameworks with robust backend architectures, delivering seamless digital experiences. Passionate about clean code, performance optimization, and collaborative innovation.",
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
        "Designed and implemented core features in SAP Commerce Cloud including address validation and delivery options using TypeScript, React, and backend Java services",
        "Collaborated with backend teams to build scalable APIs in Java (Spring Boot), enabling seamless data flow and improving system performance by 25%",
        "Built and maintained comprehensive test infrastructure using JUnit, Jest, Cypress, and Karate, significantly increasing test coverage and stability across environments",
        "Participated in architectural planning and performance reviews for new frontend modules with focus on security, reusability, and exceptional user experience",
        "Contributed to code reviews and documentation to support cross-team collaboration and faster developer onboarding",
      ],
    },
    {
      CompanyName: "SAP",
      position: "Software Developer",
      YearOfStarting: "2021",
      MonthOfStarting: "August",
      MonthOfLeaving: "April",
      YearOfLeaving: "2023",
      description: [
        "Led frontend development for a no-code data mapping tool and customer service chat dashboard using Angular, RxJS, and NgRx, reducing customer ticket resolution time by 20%",
        "Contributed backend logic in Node.js and Java, integrating with third-party APIs and handling complex payload transformations",
        "Collaborated with design teams to improve usability in complex enterprise dashboards; implemented clean UI architecture and accessibility standards",
        "Experimented with automation and data workflows using Python for internal tooling and reporting",
        "Participated in performance testing and optimization, focusing on high-load workflows across customer-facing tools",
      ],
    },
    {
      CompanyName: "SAP",
      position: "Front-End Developer Intern",
      YearOfStarting: "2020",
      MonthOfStarting: "October",
      MonthOfLeaving: "July",
      YearOfLeaving: "2021",
      description: [
        "Built B2B frontend tools using Angular, contributing to SAP Spartacus (open-source) with focus on CSV import/export and dashboard tooling",
        "Improved performance and reliability of bulk upload flows, reducing processing time by 98%",
        "Created reusable components and integrated with backend services in Java, building cross-stack knowledge and collaboration skills",
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
        "Designed and implemented full-stack job portal features for 50K+ users using React, Angular, Node.js, and Java",
        "Built backend microservices for dynamic resume parsing and job matching; optimized MongoDB queries for 40% API performance improvement",
        "Supported deployment pipelines and CI/CD integration, improving team velocity and release stability",
        "Delivered customer-facing features with emphasis on UI clarity, responsiveness, and engagement",
      ],
    },
  ],
  skills: {
    "Frontend Development": [
      { name: "React.js", icon: "fab fa-react", color: "#61DAFB" },
      { name: "Angular", icon: "fab fa-angular", color: "#DD0031" },
      { name: "TypeScript", icon: "fas fa-code", color: "#3178C6" },
      { name: "JavaScript (ES6+)", icon: "fab fa-js", color: "#F7DF1E" },
      { name: "HTML5/CSS3", icon: "fab fa-html5", color: "#E34F26" },
      { name: "Redux/NgRx", icon: "fas fa-layer-group", color: "#764ABC" },
    ],
    "Backend Development": [
      { name: "Java/Spring Boot", icon: "fab fa-java", color: "#007396" },
      { name: "Node.js", icon: "fab fa-node-js", color: "#339933" },
      { name: "Python", icon: "fab fa-python", color: "#3776AB" },
      { name: "RESTful APIs", icon: "fas fa-plug", color: "#009688" },
      { name: "GraphQL", icon: "fas fa-project-diagram", color: "#E10098" },
      { name: "Microservices", icon: "fas fa-cubes", color: "#00897B" },
    ],
    "Testing & Quality": [
      { name: "Jest/JUnit", icon: "fas fa-vial", color: "#C21325" },
      { name: "Cypress", icon: "fas fa-microscope", color: "#17202C" },
      { name: "Karate", icon: "fas fa-flask", color: "#FF6C37" },
      { name: "Playwright", icon: "fas fa-theater-masks", color: "#2EAD33" },
      { name: "Vitest", icon: "fas fa-check-circle", color: "#729B1B" },
      {
        name: "Integration Testing",
        icon: "fas fa-puzzle-piece",
        color: "#4A90E2",
      },
    ],
    "Databases & Cloud": [
      { name: "MongoDB", icon: "fas fa-database", color: "#47A248" },
      { name: "PostgreSQL", icon: "fas fa-database", color: "#4169E1" },
      { name: "MySQL", icon: "fas fa-database", color: "#4479A1" },
      { name: "Azure", icon: "fab fa-microsoft", color: "#0078D4" },
    ],
    "DevOps & Tools": [
      { name: "Docker", icon: "fab fa-docker", color: "#2496ED" },
      { name: "Jenkins", icon: "fab fa-jenkins", color: "#D24939" },
      { name: "Git", icon: "fab fa-git-alt", color: "#F05032" },
      { name: "CI/CD", icon: "fas fa-infinity", color: "#00C7B7" },
      { name: "Kubernetes", icon: "fas fa-dharmachakra", color: "#326CE5" },
      { name: "Postman", icon: "fas fa-paper-plane", color: "#FF6C37" },
    ],
    "Best Practices": [
      { name: "Agile/Scrum", icon: "fas fa-users-cog", color: "#0052CC" },
      { name: "Code Reviews", icon: "fas fa-search", color: "#5C6AC4" },
      {
        name: "WCAG Accessibility",
        icon: "fas fa-universal-access",
        color: "#4A90E2",
      },
      { name: "OWASP Security", icon: "fas fa-lock", color: "#ED2939" },
      {
        name: "Design Patterns",
        icon: "fas fa-project-diagram",
        color: "#9C27B0",
      },
      {
        name: "Performance Optimization",
        icon: "fas fa-tachometer-alt",
        color: "#FF9800",
      },
    ],
  },
  portfolio: [
    {
      name: "Expense Tracker",
      description:
        "[Work in Progress] Personal finance tracker with React and Node.js, integrating CSV uploads, expense-sharing tools, and financial services APIs, and designed an intuitive UI for real-time expense visualization and data syncing, reducing manual input by over 90%",
      imgUrl: `${process.env.PUBLIC_URL}/images/expense_tracker.jpg`,
      url: "https://appexpenses.vercel.app",
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
