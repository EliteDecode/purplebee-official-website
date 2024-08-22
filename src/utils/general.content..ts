import {
  InterviewsProps,
  NavbarLinksProps,
  NavbarMiniLinksProps,
  TestimonialsProps,
  TechnologySetProps,
  ExpertiseDetailProps,
} from "@/types/majorTypes";
import { ServicesProps } from "@/types/commonTypes";

//Navbar Icons
import industriesImage from "@/assets/images/navbar/navbar_industries.jpg";
import companyImage from "@/assets/images/navbar/navbar_company.jpg";
import trainingImage from "@/assets/images/navbar/navbar_training.jpg";
import servicesImage from "@/assets/images/navbar/navbar_services.jpg";

//Services Icons
import softwareImage from "@/assets/images/services/software.png";
import consultationImage from "@/assets/images/services/consultion.png";
import techtrainingImage from "@/assets/images/services/training.png";
import workspaceImage from "@/assets/images/services/workspace.png";
import digitalMarketingImage from "@/assets/images/services/digital-marketting.png";
import projectManagementImage from "@/assets/images/services/management.png";

//Patners Icons
import hustImage from "@/assets/images/patners/hust.png";
import ekitiImage from "@/assets/images/patners/eklogo.png";
import oesImage from "@/assets/images/patners/oes.png";
import grace4impactImage from "@/assets/images/patners/grace4Impact.png";
import pbresultImage from "@/assets/images/patners/pbresult.png";

//Testimonial Images
import testimonial1 from "@/assets/images/testimonials/testimonial-1.jpeg";
import testimonial2 from "@/assets/images/testimonials/testimonial-2.jpg";
import testimonial3 from "@/assets/images/testimonials/testimonial-3.jpeg";
import testimonial4 from "@/assets/images/testimonials/testimonial-4.jpeg";
import testimonial5 from "@/assets/images/testimonials/testimonial-5.jpeg";
import testimonial6 from "@/assets/images/testimonials/testimonial-6.jpeg";
import testimonial7 from "@/assets/images/testimonials/testimonial-7.jpeg";

//Interview Covers
import interview1 from "@/assets/images/testimonials/vid1.png";
import interview2 from "@/assets/images/testimonials/vid2.png";

//Technology Set Icons
import {
  FaReact,
  FaVuejs,
  FaAngular,
  FaNode,
  FaFigma,
  FaLaravel,
  FaPhp,
  FaAws,
  FaHtml5,
  FaWordpress,
  FaGoogle,
  FaJava,
  FaMicrosoft,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";
import { SiFlutter, SiTypescript } from "react-icons/si";
import {
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
} from "react-icons/si";

//Expertise Images
import elearningImage from "@/assets/images/expertise/elearning.jpg";
import healthcareImage from "@/assets/images/expertise/healthcare.jpg";
import ecommerceImage from "@/assets/images/expertise/ecommerce.jpg";

//======================================================================  Contents ========================================================================================//

//Navbars

export const NavbarLinks: NavbarLinksProps[] = [
  {
    title: "Industries",
    width: "w-[700px]",
    image: industriesImage,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing  elit. Totam, commodi?",
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
      " Lorem ipsum dolor sit amet consectetur adipisicing  elit. Totam, commodi?",
    links: [
      {
        title: "Sustainability",
        path: "/sustainability",
      },
      {
        title: "Innovation",
        path: "/innovation",
      },
      {
        title: "Technology",
        path: "/technology",
      },
      {
        title: "Education",
        path: "/education",
      },
      {
        title: "Environment",
        path: "/environment",
      },
      {
        title: "Healthcare",
        path: "/healthcare",
      },
      {
        title: "Agriculture",
        path: "/agriculture",
      },
      {
        title: "Manufacturing",
        path: "/manufacturing",
      },
      {
        title: "Construction",
        path: "/construction",
      },
      {
        title: "Energy",
        path: "/energy",
      },
      {
        title: "Transportation",
        path: "/transportation",
      },
      {
        title: "Real Estate",
        path: "/real-estate",
      },
    ],
  },
  {
    title: "Company",
    width: "w-[950px]",
    image: trainingImage,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing  elit. Totam, commodi?",
    links: [
      {
        title: "Company",
        path: "/company",
      },
      {
        title: "Careers",
        path: "/careers",
      },
      {
        title: "News",
        path: "/news",
      },
      {
        title: "Contact Us",
        path: "/contact-us",
      },
      {
        title: "Healthcare",
        path: "/healthcare",
      },
      {
        title: "Agriculture",
        path: "/agriculture",
      },
      {
        title: "Manufacturing",
        path: "/manufacturing",
      },
      {
        title: "Construction",
        path: "/construction",
      },
      {
        title: "Company",
        path: "/company",
      },
      {
        title: "Careers",
        path: "/careers",
      },
      {
        title: "News",
        path: "/news",
      },
      {
        title: "Contact Us",
        path: "/contact-us",
      },
      {
        title: "Healthcare",
        path: "/healthcare",
      },
      {
        title: "Agriculture",
        path: "/agriculture",
      },
      {
        title: "Manufacturing",
        path: "/manufacturing",
      },
      {
        title: "Construction",
        path: "/construction",
      },
    ],
  },
  {
    title: "Training",
    width: "w-[800px]",
    image: servicesImage,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing  elit. Totam, commodi?",
    links: [
      {
        title: "Blog",
        path: "/blog",
      },
      {
        title: "Events",
        path: "/events",
      },
      {
        title: "Support",
        path: "/support",
      },
      {
        title: "FAQ",
        path: "/faq",
      },
      {
        title: "Testimonials",
        path: "/testimonials",
      },
      {
        title: "Case Studies",
        path: "/case-studies",
      },
      {
        title: "Video",
        path: "/video",
      },
      {
        title: "Podcast",
        path: "/podcast",
      },
      {
        title: "Webinars",
        path: "/webinars",
      },
      {
        title: "White Papers",
        path: "/white-papers",
      },
      {
        title: "Ebooks",
        path: "/ebooks",
      },
      {
        title: "Open Source",
        path: "/open-source",
      },
    ],
  },

  {
    title: "Portolio",
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing  elit. Totam, commodi?",
  },
];

export const projects = [
  {
    title: "Projects",
    width: "w-[800px]",
    image: servicesImage,
    description:
      " Lorem ipsum dolor sit amet consectetur adipisicing  elit. Totam, commodi?",
    links: [
      {
        title: "Pbresult Software",
        path: "/pbresult-software",
      },
      {
        title: "Pbresult Vault",
        path: "/pbresult-vault",
      },
      {
        title: "Ekiti State Exams",
        path: "/ekiti-state-exams",
      },
      {
        title: "Tinyteeth Official Website",
        path: "/tinyteeth-official-website",
      },
      {
        title: "Hillside University Website",
        path: "/hillside-university-website",
      },
      {
        title: "Hillside University Mobile App",
        path: "/hillside-university-mobile-app",
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
    name: "Adetokunbo Adebayo",
    position: "Software Engineer",
    testimonial:
      "Purplebee Technologies transformed our software infrastructure, making our systems more efficient and scalable. Their team is knowledgeable and very supportive.",
    companyName: "Tech Solutions Ltd",
    aboutProject:
      "Purplebee Technologies provided a comprehensive software development solution, enhancing system efficiency and scalability.",
    companyLocation: "Lagos, Nigeria",
    image: testimonial1,
  },
  {
    name: "Chioma Okeke",
    position: "Training Manager",
    testimonial:
      "The technical training provided by Purplebee Technologies was exceptional. Our team gained valuable skills and insights that have significantly improved our productivity.",
    companyName: "Innovate Hub",
    aboutProject:
      "Purplebee Technologies delivered exceptional technical training, significantly improving team skills and productivity.",
    companyLocation: "Abuja, Nigeria",
    image: testimonial2,
  },
  {
    name: "Bola Akinyemi",
    position: "Project Manager",
    testimonial:
      "Purplebee Technologies managed our project seamlessly from start to finish. Their attention to detail and proactive approach ensured that we met all our deadlines.",
    companyName: "GreenTech Enterprises",
    aboutProject:
      "Purplebee Technologies provided end-to-end project management services, ensuring timely completion and attention to detail.",
    companyLocation: "Ibadan, Nigeria",
    image: testimonial3,
  },
  {
    name: "Emeka Nwosu",
    position: "Marketing Director",
    testimonial:
      "Our digital marketing campaigns have seen a significant boost thanks to Purplebee Technologies. Their innovative strategies and execution are top-notch.",
    companyName: "MarketPro Ltd",
    aboutProject:
      "Purplebee Technologies executed innovative digital marketing strategies, significantly boosting campaign performance.",
    companyLocation: "Enugu, Nigeria",
    image: testimonial4,
  },
  {
    name: "Fatima Yusuf",
    position: "Office Manager",
    testimonial:
      "The workspace solutions provided by Purplebee Technologies have greatly enhanced our working environment. The space is modern, well-equipped, and conducive to productivity.",
    companyName: "Creative Minds Co.",
    aboutProject:
      "Purplebee Technologies delivered modern and well-equipped workspace solutions, enhancing the working environment.",
    companyLocation: "Kano, Nigeria",
    image: testimonial5,
  },
  {
    name: "Ifeanyi Eze",
    position: "Consultant",
    testimonial:
      "The technical consultation services from Purplebee Technologies were instrumental in helping us overcome several challenges. Their expertise is unmatched.",
    companyName: "Eze Consulting",
    aboutProject:
      "Purplebee Technologies provided expert technical consultation, helping to overcome key challenges with unmatched expertise.",
    companyLocation: "Port Harcourt, Nigeria",
    image: testimonial6,
  },
  {
    name: "Kemi Balogun",
    position: "Business Analyst",
    testimonial:
      "Working with Purplebee Technologies on our software development project was a fantastic experience. They delivered high-quality solutions tailored to our needs.",
    companyName: "Bright Ideas Ltd",
    aboutProject:
      "Purplebee Technologies delivered high-quality, tailored software development solutions, meeting our specific needs.",
    companyLocation: "Lagos, Nigeria",
    image: testimonial7,
  },
  {
    name: "Tunde Adeyemi",
    position: "Training Coordinator",
    testimonial:
      "The training programs by Purplebee Technologies are thorough and engaging. Our employees have gained critical skills that have improved our operations.",
    companyName: "SkillUp Nigeria",
    aboutProject:
      "Purplebee Technologies provided thorough and engaging training programs, significantly improving employee skills.",
    companyLocation: "Abuja, Nigeria",
    image: testimonial2,
  },
  {
    name: "Ngozi Chukwu",
    position: "Operations Manager",
    testimonial:
      "Purplebee Technologies' project management services are exceptional. They kept our project on track and ensured all our requirements were met.",
    companyName: "Efficient Operations Inc.",
    aboutProject:
      "Purplebee Technologies delivered exceptional project management services, keeping the project on track and meeting all requirements.",
    companyLocation: "Onitsha, Nigeria",
    image: testimonial3,
  },
  {
    name: "Sade Adeola",
    position: "Digital Marketing Specialist",
    testimonial:
      "Our brand's online presence has grown significantly since partnering with Purplebee Technologies. Their digital marketing strategies are effective and innovative.",
    companyName: "BrandBoost Ltd",
    aboutProject:
      "Purplebee Technologies implemented effective and innovative digital marketing strategies, significantly growing the brand's online presence.",
    companyLocation: "Lagos, Nigeria",
    image: testimonial4,
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
