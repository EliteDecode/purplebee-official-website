import { ServicesProps } from "@/types/commonTypes";
import {
  ExpertiseDetailProps,
  InterviewsProps,
  NavbarLinksProps,
  NavbarMiniLinksProps,
  TechnologySetProps,
  TestimonialsProps,
} from "@/types/majorTypes";

//Navbar Icons
import companyImage from "@/assets/images/navbar/navbar_company.jpg";
import industriesImage from "@/assets/images/navbar/navbar_industries.jpg";
import servicesImage from "@/assets/images/navbar/navbar_services.jpg";
import trainingImage from "@/assets/images/navbar/navbar_training.jpg";
import projectsImage from "@/assets/images/navbar/navbar_projects.jpg";

//Services Icons
import consultationImage from "@/assets/images/services/consultion.png";
import digitalMarketingImage from "@/assets/images/services/digital-marketting.png";
import projectManagementImage from "@/assets/images/services/management.png";
import softwareImage from "@/assets/images/services/software.png";
import techtrainingImage from "@/assets/images/services/training.png";
import workspaceImage from "@/assets/images/services/workspace.png";

//Patners Icons
import ekitiImage from "@/assets/images/patners/eklogo.png";
import grace4impactImage from "@/assets/images/patners/grace4Impact.png";
import hustImage from "@/assets/images/patners/hust.png";
import oesImage from "@/assets/images/patners/oes.png";
import pbresultImage from "@/assets/images/patners/pbresult.png";

//Testimonial Images
import ajayiTestimonials from "@/assets/images/testimonials/ajayi.jpg";
import balogunTestimonial from "@/assets/images/testimonials/balogun.jpg";
import dapo from "@/assets/images/testimonials/Dr-Dapo.jpg";
import eimpact from "@/assets/images/patners/grace4Impact.png";

//Latest Events
import mtt from "@/assets/images/events/3mtt.jpg";
import kidsbootcamp from "@/assets/images/events/kidsbootcamp.png";
import pbfoundation from "@/assets/images/events/pbfoundation.png";

//Interview Covers
import interview1 from "@/assets/images/testimonials/vid1.png";
import interview2 from "@/assets/images/testimonials/vid2.png";

//Technology Set Icons
import {
  FaAngular,
  FaAws,
  FaCss3Alt,
  FaFigma,
  FaGoogle,
  FaHtml5,
  FaJava,
  FaJsSquare,
  FaLaravel,
  FaMicrosoft,
  FaNode,
  FaPhp,
  FaReact,
  FaVuejs,
  FaWordpress,
} from "react-icons/fa";
import {
  SiAdobephotoshop,
  SiAdobexd,
  SiDjango,
  SiDrupal,
  SiExpress,
  SiFlask,
  SiFlutter,
  SiHeroku,
  SiJoomla,
  SiKotlin,
  SiMagento,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiSketch,
  SiSqlite,
  SiSwift,
  SiTypescript,
} from "react-icons/si";

//Expertise Images
import ecommerceImage from "@/assets/images/expertise/ecommerce.jpg";
import elearningImage from "@/assets/images/expertise/elearning.jpg";
import healthcareImage from "@/assets/images/expertise/healthcare.jpg";

//======================================================================  Contents ========================================================================================//

//Navbars

export const NavbarLinks: NavbarLinksProps[] = [
  {
    title: "Industries",
    width: "w-[700px]",
    image: industriesImage,
    description:
      "We cut accross industries and provide customized solutions for each industry.",
    links: [
      {
        title: "Education",
        path: "/industry/education",
      },
      {
        title: "Technology",
        path: "/industry/technology",
      },
      {
        title: "Healthcare",
        path: "/industry/healthcare",
      },
      {
        title: "Agriculture",
        path: "/industry/agriculture",
      },
    ],
  },
  {
    title: "Services",
    width: "w-[800px]",
    image: companyImage,
    description:
      "We offer a wide range of services to meet the diverse needs of our clients.",
    links: [
      {
        title: "Software Development",
        path: "/services/software-development",
      },
      {
        title: "Technical Training",
        path: "/services/technical-training",
      },
      {
        title: "Project Management",
        path: "/services/project-management",
      },
      {
        title: "Conducive Workspace",
        path: "/services/conducive-workspace",
      },
      {
        title: "Technical Consultation",
        path: "/services/technical-consultation",
      },
      {
        title: "Digital Marketing",
        path: "/services/digital-marketing",
      },
    ],
  },
  {
    title: "Company",
    width: "w-[700px]",
    image: trainingImage,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing  elit. Totam, commodi?",
    links: [
      {
        title: "About",
        path: "/company/about",
      },
      {
        title: "Careers",
        path: "/company/careers",
      },
    ],
  },
  {
    title: "Training",
    width: "w-[800px]",
    image: servicesImage,
    description:
      "We provide training in various technologies and tools for our clients.",
    links: [
      {
        title: "Frontend Development",
        path: "/training/frontend-development",
      },
      {
        title: "Backend Development",
        path: "/training/backend-development",
      },
      {
        title: "Data Analytics",
        path: "/training/data-analytics",
      },
      {
        title: "UIUX Design",
        path: "/training/uiux-design",
      },
      {
        title: "Animation",
        path: "/training/animation",
      },
      {
        title: "Graphics Design",
        path: "/training/graphics-design",
      },
      {
        title: "Basic Computer Knowledge",
        path: "/training/basic-computer-knowledge",
      },
    ],
  },
  {
    title: "Projects",
    width: "w-[900px]",
    image: projectsImage,
    description:
      "Over time weve completed many projects for our clients, and we are proud of our achievements.",
    links: [
      {
        title: "Pbresult Software",
        path: "https://ekiti.pbresultvault.com/",
      },
      {
        title: "Eimpact Health Tracking Software",
        path: "https://eimpactchart.com/#/auth/sign-in/default",
      },
      {
        title: "Ekiti State Exams",
        path: "https://school.eksexams.com/",
      },
      {
        title: "Tinyteeth Official Website",
        path: "https://thetinyteeth.com/",
      },
      {
        title: "Hillside University Website",
        path: "https://hust.edu.ng",
      },
      {
        title: "Hillside University Staff Portal",
        path: "https://staff.hust.edu.ng",
      },
      {
        title: "Fam Craft Web Platform",
        path: "https://famcraft.ng",
      },
      {
        title: "Spring of Life School Portal",
        path: "https://springlife.purplebeetech.com ",
      },
    ],
  },
];

export const projects = [
  {
    title: "Projects",
    width: "w-[900px]",
    image: servicesImage,
    description:
      "We provide training in various technologies and tools for our clients.",
    links: [
      {
        title: "Pbresult Software",
        path: "https://ekiti.pbresultvault.com/",
      },
      {
        title: "Eimpact Health Tracking Software",
        path: "https://eimpactchart.com/#/auth/sign-in/default",
      },
      {
        title: "Ekiti State Exams",
        path: "https://school.eksexams.com/",
      },
      {
        title: "Tinyteeth Official Website",
        path: "https://thetinyteeth.com/",
      },
      {
        title: "Hillside University Website",
        path: "https://hust.edu.ng",
      },
      {
        title: "Fam Craft Web Platform",
        path: "https://famcraft.ng",
      },
      {
        title: "Spring of Life School Portal",
        path: "https://springlife.purplebeetech.com ",
      },
    ],
  },
];

export const MiniBarLinks: NavbarMiniLinksProps[] = [
  {
    title: "Projects",
    path: "/",
  },
  {
    title: "Testimonials",
    path: "/about-us",
  },
  {
    title: "Technologies",
    path: "/contact-us",
  },
];

//LatestEvents

export const LatestEvents = [
  {
    title: "3 Million Technical Talent (3MTT)",
    description:
      "The 3MTT. The 3 Million Technical Talent (3MTT) programme, a critical part of the Renewed Hope agenda, is aimed at building Nigerias technical talent backbone to power our digital economy and position Nigeria as a net talent exporter. Purplebee Tech was selected as one of the Ekiti state facilitators for this programme contributing to the success of the agenda.",
    cover: mtt,
  },
  {
    title: "Summer Coding Camp",
    description:
      "A summer coding camp is a 8-week program focused on introducing young people to computer science through the practice of coding and computer programming. It is designed to educate, inspire, and engage students in the coding process.",
    cover: kidsbootcamp,
  },
  {
    title: "PurpleBee Summer School",
    description:
      "Purplebee Summer School is a 3-day summer school designed to introduce students to the world of technology and programming. The school is designed to provide students with the necessary skills and knowledge to explore and develop their talents in the field of computer science.",
    cover: pbfoundation,
  },
];

//Services

export const ServicesRendered: ServicesProps[] = [
  {
    title: "Software Development",
    description:
      "Providing end-to-end software development services to build scalable and robust applications tailored to your business needs.",
    icon: softwareImage,
  },
  {
    title: "Technical Consultation",
    description:
      "Offering expert advice and strategic guidance to help you navigate complex technological challenges and achieve your goals.",
    icon: consultationImage,
  },
  {
    title: "Technical Training",
    description:
      "Delivering comprehensive training programs to enhance your team’s skills in the latest web development technologies and best practices.",
    icon: techtrainingImage,
  },
  {
    title: "Conducive Workspace",
    description:
      "Creating collaborative and productive workspaces equipped with the necessary tools and technologies to foster innovation and teamwork.",
    icon: workspaceImage,
  },
  {
    title: "Digital Marketing",
    description:
      "Implementing strategic digital marketing solutions to increase your online presence, engage with your audience, and drive business growth.",
    icon: digitalMarketingImage,
  },
  {
    title: "Project Management",
    description:
      "Providing expert project management services to ensure your projects are delivered on time, within budget, and to the highest standards.",
    icon: projectManagementImage,
  },
];

// Partners

export const AboutPatners: ServicesProps[] = [
  {
    title: "HUST",
    abbr: "Okiemesi, Ekiti, Nigeria",
    description:
      "Hillside University of Science and Technology, a premier institution dedicated to foster excellence.",
    icon: hustImage,
  },

  {
    title: "EKSG EXAMS",
    abbr: "Ekiti, Nigeria",
    description:
      "Ministry of Education, Ekiti State Government. Overseeing and regulating and examinations within the state.",
    icon: ekitiImage,
  },
  {
    title: "Pbresult Vault",
    abbr: "Ekiti, Nigeria",
    description:
      "Purplebee Result Vault, a platform for storing and accessing academic results. ",
    icon: pbresultImage,
  },
  {
    title: "OES",
    abbr: "Nigeria",
    description:
      "Online Education System, a comprehensive platform providing accessible and flexible learning opportunities.",
    icon: oesImage,
  },
  {
    title: "Grace for Impact",
    abbr: "USA",
    description:
      "Grace for Impact Foundation, a non-profit organization committed to creating positive change. ",
    icon: grace4impactImage,
  },
];

// Testimonials

export const Testimonies: TestimonialsProps[] = [
  {
    name: "Gbemisola Balogun",
    position: "UiUx Designer",
    testimonial:
      " I recently had the pleasure of participating in a UI/UX training program at Purple Bee Technologies. The training was conducted by a team of industry experts who were not only knowledgeable but also passionate about the field of UI/UX.",
    companyName: "Cohort Student",
    aboutProject:
      "Participated in a cohort by PurpleBee Technologies for the UI/UX design course, gaining comprehensive hands-on experience. The course emphasized industry best practices and real-world design projects.",
    companyLocation: "Ekiti, Nigeria",
    image: balogunTestimonial,
  },
  {
    name: "Ajayi oluwaseun",
    position: "UiUx Designer",
    testimonial:
      "I've always been interested in learning Tech and and when I had the opportunity to study at Purplebee technologies i took the advantage, and it’s was best decision I ever made . I really recommend you choose Purplebee technologies for the quality of the teaching combined with the relaxed and friendly atmosphere.",
    companyName: "Cohort Student",
    aboutProject:
      "Participated in a cohort by PurpleBee Technologies for the UI/UX design course, gaining comprehensive hands-on experience. The course emphasized industry best practices and real-world design projects.",
    companyLocation: "Ekiti, Nigeria",
    image: ajayiTestimonials,
  },
  {
    name: "Dr. Tinu Oriola",
    position: "Pediatric Dentist",
    testimonial:
      "PurpleBee Technologies transformed our vision into a reality with an incredible pediatric dentistry website. Their attention to detail, understanding of our needs, and seamless design exceeded our expectations. ",
    companyName: "Pediatric Dentistry",
    aboutProject:
      "PurpleBee Technologies was tasked with designing and developing a comprehensive website for Pediatric Dentistry, a leading pediatric dental practice.  ",
    companyLocation:
      "1881 Connercenter East Drive, Suite 134 San Bernardino, CA 92408",
    image: dapo,
  },
  {
    name: "Mr Obed",
    position: "Business Developer",
    testimonial:
      "The Eimpact Chart Health Software developed by PurpleBee Technologies has been a game-changer for our outreach programs. The software allows us to efficiently track and manage healthcare data during our medical outreaches, ensuring that every patient receives the attention they need. ",
    companyName: "Eimpact Chart Health Software",
    aboutProject:
      "PurpleBee Technologies collaborated with the Grace for Impact Foundation to develop the Eimpact Chart Health Software, a powerful tool designed to streamline the tracking and management of healthcare details during outreach programs.",
    companyLocation: "Lagos, Nigeria",
    image: eimpact,
  },
];

//Interviews
export const InterviewItems: InterviewsProps[] = [
  {
    title:
      "From Disinterest to Tech Passion | Our Summer Coding Boot Camp Success Story 🌟",
    description:
      "In this inspiring video, meet MELODY OWOSENI, our Summer Coding Boot Camp participant. Follow her incredible journey from initial disinterest in tech to a burning passion for all things tech-related. Melody shares her experience at our program and the exciting project she worked on to promote our tech company. Watch her story to discover how our coding boot camp can ignite your passion for technology!",
    url: "https://www.youtube.com/watch?v=FqBm5PK9yWE",
    cover: interview2,
  },
  {
    title: "Coding bootcamp parents' testimonial",
    description:
      "In this video, we're excited to bring you real and heartfelt stories from the parents of our coding boot camp students. Listen as they share their experiences and the impact our program has had on their children's lives. These testimonials are a testament to the dedication of our instructors, the hard work of our students, and the unwavering support of their families.",
    url: "https://www.youtube.com/watch?v=Mdic6SzrpfE",
    cover: interview1,
  },
];

//Technology Set

export const technologySet: TechnologySetProps[] = [
  {
    category: "Frontend",
    tools: [
      { name: "HTML5", icon: "FaHtml5" },
      { name: "CSS3", icon: "FaCss3Alt" },
      { name: "JavaScript", icon: "FaJsSquare" },
      { name: "TypeScript", icon: "SiTypescript" },
      { name: "React", icon: "FaReact" },
      { name: "Next.js", icon: "SiNextdotjs" },
      { name: "Vue", icon: "FaVuejs" },
      { name: "Angular", icon: "FaAngular" },
    ],
  },
  {
    category: "Backend",
    tools: [
      { name: "Node.js", icon: "FaNode" },
      { name: "Express", icon: "SiExpress" },
      { name: "Django", icon: "SiDjango" },
      { name: "PhP", icon: "FaPhp" },
      { name: "Laravel", icon: "FaLaravel" },
      { name: "Java", icon: "FaJava" },
    ],
  },
  {
    category: "Design",
    tools: [
      { name: "Figma", icon: "FaFigma" },
      { name: "Adobe XD", icon: "SiAdobexd" },
      { name: "Sketch", icon: "SiSketch" },
      { name: "Photoshop", icon: "SiAdobephotoshop" },
    ],
  },
  {
    category: "Mobile",
    tools: [
      { name: "React Native", icon: "FaReact" },
      { name: "Flutter", icon: "SiFlutter" },
      { name: "Swift", icon: "SiSwift" },
      { name: "Kotlin", icon: "SiKotlin" },
    ],
  },
  {
    category: "Database",
    tools: [
      { name: "MongoDB", icon: "SiMongodb" },
      { name: "MySQL", icon: "SiMysql" },
      { name: "PostgreSQL", icon: "SiPostgresql" },
      { name: "SQLite", icon: "SiSqlite" },
    ],
  },
  {
    category: "Cloud",
    tools: [
      { name: "AWS", icon: "FaAws" },
      { name: "Azure", icon: "FaMicrosoft" },
      { name: "Google Cloud", icon: "FaGoogle" },
      { name: "Heroku", icon: "SiHeroku" },
    ],
  },
  {
    category: "CMS",
    tools: [{ name: "WordPress", icon: "FaWordpress" }],
  },
];

export const iconMap: { [key: string]: React.ElementType } = {
  FaReact,
  FaVuejs,
  FaAngular,
  FaNode,
  FaFigma,
  SiFlutter,
  FaAws,
  FaWordpress,
  FaPhp,
  FaLaravel,
  FaHtml5,
  FaGoogle,
  SiTypescript,
  FaCss3Alt,
  FaJava,
  FaJsSquare,
  FaMicrosoft,
  SiNextdotjs,
  SiExpress,
  SiDjango,
  SiFlask,
  SiAdobexd,
  SiSketch,
  SiAdobephotoshop,
  SiSwift,
  SiKotlin,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiHeroku,
  SiJoomla,
  SiDrupal,
  SiMagento,
};

export const expertiseDetails: ExpertiseDetailProps[] = [
  {
    expertise: "Elearning",
    image: elearningImage,
    details: [
      "Creating online courses",
      "Building learning platforms",
      "Adding videos and quizzes",
      "Making courses mobile-friendly",
      "Engaging users with interactive content",
    ],
  },
  {
    expertise: "Health Care",
    image: healthcareImage,
    details: [
      "Developing patient management systems",
      "Handling medical records online",
      "Creating telemedicine apps",
      "Following health regulations",
      "Building health data tools",
    ],
  },
  {
    expertise: "Ecommerce solutions",
    image: ecommerceImage,
    details: [
      "Designing online stores",
      "Setting up payment options",
      "Managing products",
      "Handling orders and inventory",
      "Improving site visibility",
    ],
  },
];
