import { ICover } from "./service.content";

export interface IFee {
  title: string;
  price: string;
  points: string[];
}

//Hero Images
import frontendImg from "@/assets/images/training/frontend.jpg";
import backendImg from "@/assets/images/training/basic-compt.jpg";
import dataAnalyticsImg from "@/assets/images/training/data-analytics.jpg";
import graphicDeisgn from "@/assets/images/training/uiux.jpg";
import uiuxImg from "@/assets/images/training/uiux2.jpg";
import animationImg from "@/assets/images/training/D1.jpg";
import basicComptImg from "@/assets/images/training/C2.jpg";

//==========================================================Hero====================================
export const frontendHero = {
  title: "Take a Course on Frontend Development",
  subtitle: "Learn",
  description:
    "Learn the fundamentals of frontend development, including HTML, CSS, JavaScript, and popular frameworks like React.js. Explore real-world projects and receive hands-on experience.",
  cta: "Get Started",
  background: frontendImg,
};

export const backendHero = {
  title: "Take a Course on Backend Development",
  subtitle: "Learn",
  description:
    "Learn the fundamentals of backend development, including server-side programming languages, databases, and APIs. Explore real-world projects and receive hands-on experience.",
  cta: "Get Started",
  background: backendImg,
};

export const dataAnalyticsHero = {
  title: "Take a Course on Data Analytics",
  subtitle: "Learn",
  description:
    "Learn data analytics, including data manipulation, analysis, and visualization. Explore real-world projects and receive hands-on experience.",
  cta: "Get Started",
  background: dataAnalyticsImg,
};

export const graphicDesignHero = {
  title: "Take a Course on Graphic Design",
  subtitle: "Learn",
  description:
    "Learn graphic design, including design principles, typography, and layout techniques. Explore real-world projects and receive hands-on experience.",
  cta: "Get Started",
  background: graphicDeisgn,
};

export const uiuxHero = {
  title: "Take a Course on UI/UX Design",
  subtitle: "Learn",
  description:
    "Learn UI/UX design, including user research, wireframing, prototyping, and usability testing. Explore real-world projects and receive hands-on experience.",
  cta: "Get Started",
  background: uiuxImg,
};

export const animationHero = {
  title: "Take a Course on Animation",
  subtitle: "Learn",
  description:
    "Learn animation, including 2D and 3D animation techniques, and animation software. Explore real-world projects and receive hands-on experience.",
  cta: "Get Started",
  background: animationImg,
};

export const basicComptHero = {
  title: "Take a Course on Basic Computing",
  subtitle: "Learn",
  description:
    "Learn basic computing, including programming in Python, and data structures and algorithms. Explore real-world projects and receive hands-on experience.",
  cta: "Get Started",
  background: basicComptImg,
};

//========================================================Outline=====================================
export const frontendDevelopmentOutline: ICover[] = [
  {
    title: "HTML & CSS",
    description:
      "Introduction to HTML structure and styling with CSS, including layout techniques.",
  },
  {
    title: "JavaScript Basics",
    description: "Core concepts, DOM manipulation, and event handling.",
  },
  {
    title: "Responsive Design",
    description:
      "Building websites that work across different devices using media queries and frameworks like Bootstrap.",
  },
  {
    title: "CSS Preprocessors",
    description: "Using Sass or LESS for more efficient styling.",
  },
  {
    title: "JavaScript Frameworks",
    description:
      "Introduction to popular frameworks like React.js, Angular, or Vue.js.",
  },
  {
    title: "Version Control",
    description:
      "Using Git and GitHub for project management and collaboration.",
  },
  {
    title: "Web Performance Optimization",
    description: "Techniques for improving site load times and performance.",
  },
  {
    title: "Cross-Browser Compatibility",
    description:
      "Ensuring consistent design and functionality across different browsers.",
  },
  {
    title: "Accessibility",
    description:
      "Making web content accessible to all users, including those with disabilities.",
  },
  {
    title: "Testing and Debugging",
    description: "Tools and methods for testing and debugging frontend code.",
  },
];

export const backendDevelopmentOutline: ICover[] = [
  {
    title: "Server-Side Programming Languages",
    description:
      "Introduction to languages like Node.js, Python, Ruby, or PHP.",
  },
  {
    title: "Databases",
    description:
      "Understanding relational databases (SQL) and NoSQL databases (MongoDB).",
  },
  {
    title: "RESTful APIs",
    description: "Designing and implementing RESTful services.",
  },
  {
    title: "Authentication & Authorization",
    description:
      "Implementing secure user authentication and role-based access control.",
  },
  {
    title: "MVC Architecture",
    description: "Understanding the Model-View-Controller framework.",
  },
  {
    title: "Server Management",
    description:
      "Basics of deploying and managing servers, using services like AWS, Heroku, or DigitalOcean.",
  },
  {
    title: "Web Security",
    description:
      "Learning about common security practices, such as encryption, CSRF, and SQL injection prevention.",
  },
  {
    title: "Microservices Architecture",
    description:
      "Introduction to breaking down applications into smaller, manageable services.",
  },
  {
    title: "Real-time Communication",
    description: "Implementing WebSockets and real-time data transfer.",
  },
  {
    title: "Testing & Debugging",
    description:
      "Unit testing, integration testing, and debugging backend code.",
  },
];

export const dataAnalyticsOutline: ICover[] = [
  {
    title: "Introduction to Data Analytics",
    description: "Overview of the data analytics lifecycle.",
  },
  {
    title: "Data Collection",
    description:
      "Methods for gathering data, including surveys, web scraping, and APIs.",
  },
  {
    title: "Data Cleaning",
    description: "Techniques for cleaning and preparing data for analysis.",
  },
  {
    title: "Exploratory Data Analysis (EDA)",
    description: "Using statistical methods to explore data sets.",
  },
  {
    title: "Data Visualization",
    description:
      "Creating visual representations of data using tools like Tableau, Power BI, or Matplotlib.",
  },
  {
    title: "Statistical Analysis",
    description:
      "Understanding and applying statistical methods to analyze data.",
  },
  {
    title: "Machine Learning Basics",
    description: "Introduction to machine learning concepts and algorithms.",
  },
  {
    title: "Predictive Analytics",
    description: "Using historical data to predict future trends.",
  },
  {
    title: "Data Interpretation & Reporting",
    description: "Turning data insights into actionable business strategies.",
  },
  {
    title: "Data Security & Privacy",
    description:
      "Understanding the importance of data security and compliance with regulations.",
  },
];

export const graphicDesignOutline: ICover[] = [
  {
    title: "Fundamentals of Design",
    description:
      "Basic principles such as color theory, typography, and composition.",
  },
  {
    title: "Design Software",
    description: "Proficiency in Adobe Photoshop, Illustrator, and InDesign.",
  },
  {
    title: "Branding & Identity Design",
    description:
      "Creating logos, business cards, and other branding materials.",
  },
  {
    title: "Layout Design",
    description: "Designing layouts for print and digital media.",
  },
  {
    title: "Illustration Techniques",
    description: "Basics of creating digital illustrations.",
  },
  {
    title: "Web & App Design",
    description:
      "Creating graphics and layouts specifically for websites and mobile applications.",
  },
  {
    title: "Photo Editing & Retouching",
    description: "Techniques for enhancing and manipulating photos.",
  },
  {
    title: "Vector Graphics",
    description: "Creating and editing vector-based graphics.",
  },
  {
    title: "Packaging Design",
    description: "Designing product packaging.",
  },
  {
    title: "Portfolio Development",
    description:
      "Building a professional portfolio showcasing your design work.",
  },
];

export const uiuxDesignOutline: ICover[] = [
  {
    title: "Introduction to UI/UX",
    description:
      "Overview of user interface and user experience design principles.",
  },
  {
    title: "User Research",
    description: "Conducting user interviews, surveys, and usability testing.",
  },
  {
    title: "Wireframing & Prototyping",
    description:
      "Creating wireframes and interactive prototypes using tools like Figma or Adobe XD.",
  },
  {
    title: "Design Systems",
    description: "Developing consistent and reusable design components.",
  },
  {
    title: "Interaction Design",
    description: "Designing interactive elements that enhance user engagement.",
  },
  {
    title: "User Flows & Journey Mapping",
    description: "Mapping out user interactions and experiences.",
  },
  {
    title: "Usability Testing",
    description: "Techniques for testing and improving user interfaces.",
  },
  {
    title: "Accessibility",
    description: "Designing with accessibility in mind to cater to all users.",
  },
  {
    title: "Responsive Design",
    description:
      "Ensuring designs work well on various screen sizes and devices.",
  },
  {
    title: "Collaboration & Handoff",
    description:
      "Working with developers to translate designs into functional products.",
  },
];

export const animationOutline: ICover[] = [
  {
    title: "Principles of Animation",
    description:
      "Understanding the fundamental principles of animation, such as timing, squash and stretch, and anticipation.",
  },
  {
    title: "2D Animation",
    description:
      "Creating 2D animations using software like Adobe Animate or Toon Boom.",
  },
  {
    title: "3D Animation",
    description:
      "Basics of 3D modeling, rigging, and animation using tools like Blender or Maya.",
  },
  {
    title: "Motion Graphics",
    description:
      "Designing and animating motion graphics for videos and presentations.",
  },
  {
    title: "Character Animation",
    description: "Bringing characters to life through movement and expression.",
  },
  {
    title: "Storyboarding",
    description: "Planning animations with storyboards.",
  },
  {
    title: "Visual Effects (VFX)",
    description: "Adding special effects to animations or live-action footage.",
  },
  {
    title: "Sound Design",
    description: "Integrating sound effects and music into animations.",
  },
  {
    title: "Post-Production",
    description: "Editing and refining animations in post-production.",
  },
  {
    title: "Portfolio Development",
    description: "Creating a portfolio to showcase your animation skills.",
  },
];

export const basicComputerKnowledgeOutline: ICover[] = [
  {
    title: "Introduction to Computers",
    description:
      "Understanding the components of a computer and how they work.",
  },
  {
    title: "Operating Systems",
    description: "Basics of operating systems like Windows, macOS, and Linux.",
  },
  {
    title: "File Management",
    description: "Organizing, saving, and retrieving files on a computer.",
  },
  {
    title: "Internet Basics",
    description: "Using web browsers, search engines, and email.",
  },
  {
    title: "Word Processing",
    description:
      "Creating and editing documents using Microsoft Word or Google Docs.",
  },
  {
    title: "Spreadsheets",
    description:
      "Using Microsoft Excel or Google Sheets for data management and analysis.",
  },
  {
    title: "Presentations",
    description:
      "Creating presentations using Microsoft PowerPoint or Google Slides.",
  },
  {
    title: "Basic Troubleshooting",
    description: "Common computer problems and how to solve them.",
  },
  {
    title: "Digital Citizenship",
    description: "Understanding responsible and safe use of the internet.",
  },
  {
    title: "Introduction to Coding",
    description:
      "Basics of programming using simple coding languages like Scratch or Python.",
  },
];

//============================================================Payment Plan =======================================================//

// Frontend Development
export const frontendDevelopmentPlans: IFee[] = [
  {
    title: "3 Months",
    price: "120,000 Naira",
    points: [
      "HTML & CSS basics",
      "Introduction to JavaScript",
      "Building simple responsive websites",
      "Introduction to Bootstrap and basic frameworks",
      "Version control with Git and GitHub basics",
    ],
  },
  {
    title: "6 Months",
    price: "220,000 Naira",
    points: [
      "Advanced HTML & CSS techniques",
      "JavaScript advanced topics and DOM manipulation",
      "Responsive design with CSS Grid and Flexbox",
      "JavaScript frameworks introduction (React.js)",
      "Basic web performance optimization",
      "Cross-browser compatibility techniques",
    ],
  },
  {
    title: "9 Months",
    price: "350,000 Naira",
    points: [
      "Mastering responsive design",
      "Advanced JavaScript frameworks (React.js, Vue.js)",
      "Web performance optimization techniques",
      "Accessibility and SEO best practices",
      "Testing and debugging frontend applications",
      "Building a full-stack web application with frontend integration",
    ],
  },
];

// Backend Development
export const backendDevelopmentPlans: IFee[] = [
  {
    title: "3 Months",
    price: "130,000 Naira",
    points: [
      "Introduction to server-side programming (Node.js or Python)",
      "Basic database concepts (SQL and NoSQL)",
      "Understanding RESTful APIs",
      "Simple authentication and authorization",
      "Deploying a basic web server",
    ],
  },
  {
    title: "6 Months",
    price: "230,000 Naira",
    points: [
      "Advanced server-side programming",
      "Complex database operations and optimizations",
      "Building and consuming RESTful APIs",
      "Security practices in web development",
      "Introduction to microservices architecture",
    ],
  },
  {
    title: "9 Months",
    price: "350,000 Naira",
    points: [
      "Full-stack application development",
      "Advanced database management and scaling",
      "Real-time data processing (WebSockets)",
      "Advanced web security techniques",
      "Testing and debugging complex backend systems",
      "Deploying and managing large-scale applications",
    ],
  },
];

// Data Analytics
export const dataAnalyticsPlans: IFee[] = [
  {
    title: "3 Months",
    price: "100,000 Naira",
    points: [
      "Introduction to data analytics concepts",
      "Basic data collection methods",
      "Data cleaning and preparation",
      "Exploratory data analysis (EDA)",
      "Basic data visualization using tools like Excel",
    ],
  },
  {
    title: "6 Months",
    price: "200,000 Naira",
    points: [
      "Advanced data collection and management",
      "Statistical analysis techniques",
      "Data visualization with advanced tools (Tableau, Power BI)",
      "Introduction to predictive analytics",
      "Basic machine learning concepts",
    ],
  },
  {
    title: "9 Months",
    price: "300,000 Naira",
    points: [
      "Advanced machine learning algorithms",
      "Predictive modeling and data interpretation",
      "Data-driven decision making",
      "Data security and privacy compliance",
      "Advanced data visualization and reporting",
      "Building and managing large datasets",
    ],
  },
];

// Graphic Design
export const graphicDesignPlans: IFee[] = [
  {
    title: "3 Months",
    price: "110,000 Naira",
    points: [
      "Introduction to design principles",
      "Basic skills in Adobe Photoshop and Illustrator",
      "Creating simple logos and branding materials",
      "Introduction to typography and color theory",
      "Basic photo editing and retouching",
    ],
  },
  {
    title: "6 Months",
    price: "210,000 Naira",
    points: [
      "Advanced design techniques",
      "Layout design for print and digital media",
      "Web and app design basics",

      "Web and app design basics",
      "Creating vector graphics",
      "Introduction to packaging design",
    ],
  },
  {
    title: "9 Months",
    price: "320,000 Naira",
    points: [
      "Mastering branding and identity design",
      "Advanced illustration techniques",
      "Complex web and app design projects",
      "Building a professional design portfolio",
      "Advanced photo manipulation and retouching",
      "Specialized design projects like motion graphics",
    ],
  },
];

// UI/UX Design
export const uiuxDesignPlans: IFee[] = [
  {
    title: "3 Months",
    price: "120,000 Naira",
    points: [
      "Introduction to UI/UX design principles",
      "Basic wireframing and prototyping",
      "User research methods",
      "Introduction to design systems",
      "Creating simple user flows",
    ],
  },
  {
    title: "6 Months",
    price: "220,000 Naira",
    points: [
      "Advanced wireframing and prototyping",
      "Usability testing techniques",
      "Responsive design for different devices",
      "Designing interactive elements",
      "Collaborating with developers for design handoff",
    ],
  },
  {
    title: "9 Months",
    price: "330,000 Naira",
    points: [
      "Comprehensive UI/UX design projects",
      "Advanced design systems and pattern libraries",
      "Creating complex user journeys",
      "Mastering accessibility in design",
      "Building a UI/UX design portfolio",
      "Advanced user research and testing",
    ],
  },
];

// Animation
export const animationPlans: IFee[] = [
  {
    title: "3 Months",
    price: "130,000 Naira",
    points: [
      "Introduction to animation principles",
      "Basic 2D animation techniques",
      "Creating simple motion graphics",
      "Storyboarding basics",
      "Introduction to character animation",
    ],
  },
  {
    title: "6 Months",
    price: "240,000 Naira",
    points: [
      "Advanced 2D animation projects",
      "Introduction to 3D animation",
      "Motion graphics for videos and presentations",
      "Character animation with detailed movements",
      "Adding sound design to animations",
    ],
  },
  {
    title: "9 Months",
    price: "350,000 Naira",
    points: [
      "Mastering 3D animation and modeling",
      "Advanced character animation",
      "Special effects and visual effects (VFX)",
      "Comprehensive animation projects",
      "Building an animation portfolio",
      "Advanced post-production techniques",
    ],
  },
];

// Basic Computer Knowledge
export const basicComputerKnowledgePlans: IFee[] = [
  {
    title: "3 Months",
    price: "80,000 Naira",
    points: [
      "Introduction to computer components",
      "Operating systems basics (Windows, macOS)",
      "File management and organization",
      "Internet basics and email usage",
      "Introduction to word processing",
    ],
  },
  {
    title: "6 Months",
    price: "150,000 Naira",
    points: [
      "Advanced file management",
      "Spreadsheets basics with Excel",
      "Creating presentations with PowerPoint",
      "Basic troubleshooting and problem solving",
      "Introduction to digital citizenship",
    ],
  },
  {
    title: "9 Months",
    price: "220,000 Naira",
    points: [
      "Comprehensive computer literacy skills",
      "Advanced spreadsheet and data management",
      "Mastering presentation skills",
      "Advanced troubleshooting techniques",
      "Introduction to coding and programming concepts",
    ],
  },
];

// Advanced Computer Knowledge
export const advancedComputerKnowledgePlans: IFee[] = [
  {
    title: "3 Months",
    price: "100,000 Naira",
    points: [
      "Advanced operating systems (Linux, macOS)",
      "Networking basics and configurations",
      "Advanced file management and automation",
      "Introduction to coding (Python or JavaScript)",
      "Basic cybersecurity awareness",
    ],
  },
  {
    title: "6 Months",
    price: "200,000 Naira",
    points: [
      "Advanced networking and security",
      "System administration and server management",
      "Data management and backup strategies",
      "Introduction to cloud computing",
      "Advanced troubleshooting and problem-solving",
    ],
  },
  {
    title: "9 Months",
    price: "320,000 Naira",
    points: [
      "Mastering system administration",
      "Advanced cybersecurity techniques",
      "Comprehensive coding and scripting skills",
      "Cloud computing and virtualization",
      "Advanced data management and recovery",
      "Building and managing IT infrastructure",
    ],
  },
];
