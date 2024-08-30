export interface ICover {
  title: string;
  description: string;
}
export interface IContent {
  title: string;
  description: string;
  image: string;
}

//Images
import softwareDevelopmentHeroImg from "@/assets/images/services/sdbg.jpg";
import technicalTrainingImg from "@/assets/images/services/digitalMarket.jpg";
import digitalMarkImg from "@/assets/images/services/digital_marketting.jpg";
import consultImg from "@/assets/images/services/consultancy.jpg";
import projectMGTImg from "@/assets/images/services/management.jpg";
import condusiveSpaceImg from "@/assets/images/services/workspace.jpg";

//Software development
import sd4 from "@/assets/images/services/sd44.jpg";
import sd5 from "@/assets/images/services/sd5.jpg";
import sd6 from "@/assets/images/services/sd6.jpg";
//technical training
import tt1 from "@/assets/images/services/T1.jpg";
import tt2 from "@/assets/images/services/T2.jpg";
import tt3 from "@/assets/images/services/T3.jpg";
//project imagement
import pm1 from "@/assets/images/services/P1.jpg";
import pm2 from "@/assets/images/services/P2.jpg";
import pm3 from "@/assets/images/services/P3.jpg";
//Workspace
import ws1 from "@/assets/images/services/W1.jpg";
import ws2 from "@/assets/images/services/W2.jpg";
import ws3 from "@/assets/images/services/W3.jpg";
//digital marketting
import dm1 from "@/assets/images/services/D1.jpg";
import dm2 from "@/assets/images/services/D2.jpg";
import dm3 from "@/assets/images/services/D3.jpg";
//Consultancy
import c1 from "@/assets/images/services/C1.jpg";
import c2 from "@/assets/images/services/C2.jpg";
import c3 from "@/assets/images/services/C3.jpg";

//===================================Heros=======================

export const softwareDevelopmentHero: IContent = {
  title: "Software Development",
  description:
    "We create bespoke software solutions tailored to your unique business needs, ensuring scalability, security, and efficiency.",
  image: softwareDevelopmentHeroImg,
};

export const technicalTrainingHero: IContent = {
  title: "Technical Training",
  description:
    "Delivering comprehensive training programs to enhance your team’s skills in the latest web development technologies and best practices.",
  image: technicalTrainingImg,
};

export const projectManagementHero: IContent = {
  title: "Project Management",
  description:
    "We provide expert project management services to help you streamline your projects and achieve successful outcomes.",

  image: projectMGTImg,
};

export const conduciveSpaceHero: IContent = {
  title: "Conducive Workspace ",
  description:
    "We provide conducive workspaces for your team to thrive and achieve their goals. From flexible seating to state-of-the-art technology, we ensure a comfortable and productive environment.  ",

  image: condusiveSpaceImg,
};

export const digitalMarkettingHero: IContent = {
  title: "Digital Marketing ",
  description:
    "We provide comprehensive digital marketing services to help you reach your target audience effectively. From SEO optimization to social media management, we ensure your brand's visibility and growth.  ",

  image: digitalMarkImg,
};

export const consultancyHero: IContent = {
  title: "Technical Consultancy ",
  description:
    "We provide expert consultancy services to help you navigate the complexities of your business and achieve success. From strategy development to technology integration, we offer tailored solutions to meet your specific needs. ",

  image: consultImg,
};

//===========================================Companies we've help top Images =========================

export const softwareDevImages: string[] = [sd4, sd5, sd6];
export const technicalTrainingImages: string[] = [tt1, tt2, tt3];
export const projectManagementImages: string[] = [pm1, pm2, pm3];
export const conduciveSpaceImages: string[] = [ws1, ws2, ws3];
export const digitalMarkettingImages: string[] = [dm1, dm2, dm3];
export const consultancyImages: string[] = [c1, c2, c3];
//=========================================What we cover =======================

export const softwareDevelopment: ICover[] = [
  {
    title: "Custom Application Development",
    description:
      "We create bespoke software solutions tailored to your unique business needs, ensuring scalability, security, and efficiency.",
  },
  {
    title: "Web Development",
    description:
      "Our team designs and develops responsive and user-friendly websites that drive engagement and enhance your online presence.",
  },
  {
    title: "Mobile App Development",
    description:
      "We build high-performance mobile applications for iOS and Android platforms, providing seamless user experiences.",
  },
  {
    title: "API Integration",
    description:
      "We integrate third-party APIs to enhance the functionality of your software, enabling seamless communication between different systems.",
  },
  {
    title: "Software Maintenance & Support",
    description:
      "We offer ongoing maintenance and support services to ensure your software remains up-to-date, secure, and fully functional.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Our cloud-based solutions provide scalable and flexible infrastructure for your software, enabling you to grow without limitations.",
  },
];

export const technicalTraining: ICover[] = [
  {
    title: "Programming Languages",
    description:
      "We offer training in various programming languages like Python, JavaScript, Java, and more, from beginner to advanced levels.",
  },
  {
    title: "Web Development",
    description:
      "Our courses cover full-stack web development, including HTML, CSS, JavaScript, and popular frameworks like React and Angular.",
  },
  {
    title: "Cybersecurity",
    description:
      "We provide in-depth training in cybersecurity, focusing on threat detection, prevention, and incident response.",
  },
  {
    title: "Data Science & Analytics",
    description:
      "Learn data analysis, machine learning, and data visualization techniques to make informed decisions based on data.",
  },
  {
    title: "Cloud Computing",
    description:
      "Our cloud computing training covers AWS, Azure, and Google Cloud, preparing you for cloud certifications and real-world applications.",
  },
  {
    title: "DevOps",
    description:
      "We offer training in DevOps practices, including CI/CD pipelines, automation tools, and infrastructure as code.",
  },
];

export const technicalConsultation: ICover[] = [
  {
    title: "IT Strategy & Planning",
    description:
      "We help you develop a robust IT strategy that aligns with your business goals, ensuring long-term success.",
  },
  {
    title: "System Architecture Design",
    description:
      "Our consultants design scalable and secure system architectures that meet your current and future needs.",
  },
  {
    title: "Technology Assessment",
    description:
      "We evaluate your current technology stack and provide recommendations for improvement and optimization.",
  },
  {
    title: "Security Audits",
    description:
      "Our security experts conduct thorough audits to identify vulnerabilities and recommend solutions to protect your systems.",
  },
  {
    title: "Project Feasibility Analysis",
    description:
      "We assess the feasibility of your technical projects, providing insights into potential challenges and solutions.",
  },
  {
    title: "Vendor Selection & Management",
    description:
      "We assist in selecting the right technology vendors and manage relationships to ensure successful project outcomes.",
  },
];

export const conduciveWorkspace: ICover[] = [
  {
    title: "Ergonomic Design",
    description:
      "Our workspace is designed with ergonomics in mind, ensuring comfort and productivity for your team.",
  },
  {
    title: "High-Speed Internet",
    description:
      "We provide reliable, high-speed internet connectivity to support your business operations without interruption.",
  },
  {
    title: "Collaborative Spaces",
    description:
      "Our workspace includes collaborative areas where teams can brainstorm, innovate, and work together seamlessly.",
  },
  {
    title: "Meeting Rooms",
    description:
      "We offer fully equipped meeting rooms with audio-visual equipment for presentations, workshops, and client meetings.",
  },
  {
    title: "Tech Support",
    description:
      "On-site technical support is available to assist with any IT-related issues, ensuring smooth business operations.",
  },
  {
    title: "Refreshment Facilities",
    description:
      "We provide on-site refreshment facilities, including a kitchen and lounge areas, to keep your team energized throughout the day.",
  },
];

export const digitalMarketing: ICover[] = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "We optimize your website for search engines to improve visibility and drive organic traffic.",
  },
  {
    title: "Social Media Marketing",
    description:
      "We manage your social media presence, creating engaging content that resonates with your target audience.",
  },
  {
    title: "Content Creation",
    description:
      "Our team creates high-quality content, including blog posts, videos, and infographics, to boost your brand's online presence.",
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description:
      "We design and manage PPC campaigns that target the right audience and maximize your return on investment.",
  },
  {
    title: "Email Marketing",
    description:
      "We develop email marketing strategies that nurture leads, promote products, and drive conversions.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Our detailed analytics and reporting services provide insights into your marketing efforts, helping you make data-driven decisions.",
  },
];

export const projectManagement: ICover[] = [
  {
    title: "Project Planning",
    description:
      "We assist in creating comprehensive project plans, defining scope, timelines, and resources needed for successful execution.",
  },
  {
    title: "Resource Management",
    description:
      "Our team ensures that your project has the right resources at the right time, optimizing efficiency and productivity.",
  },
  {
    title: "Risk Management",
    description:
      "We identify potential risks and develop mitigation strategies to ensure your project stays on track.",
  },
  {
    title: "Quality Assurance",
    description:
      "We implement quality control processes to ensure that your project meets the highest standards and client expectations.",
  },
  {
    title: "Stakeholder Communication",
    description:
      "Our project managers maintain clear and consistent communication with all stakeholders, ensuring transparency and alignment.",
  },
  {
    title: "Project Delivery & Closure",
    description:
      "We oversee the final stages of your project, ensuring successful delivery and proper documentation for closure.",
  },
];

//================================Projects===============================

export const softwareDevProjects = {
  title: "Software Development Projects We've Done In The Tech Industry ",
  description:
    "Projects in this category aim to leverage technology for improving efficiency, accessibility, and user experience in various sectors.",
  projects: [
    {
      title: "AI Chatbot for Customer Service",
      description:
        "Develop an AI chatbot that automates customer service queries for businesses.",
      image:
        "https://img.freepik.com/free-photo/technician-server-hub-using-tablet-find-hardware-misconfigurations_482257-88126.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "Mobile Payment App",
      description:
        "Create a secure mobile payment system allowing users to manage finances conveniently.",
      image:
        "https://img.freepik.com/free-photo/software-developer-working-new-user-interface-with-online-system-create-algorithm-it-agency-office-system-engineer-programming-html-code-algorithm-computer-typing-sever-data_482257-64450.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Build a dashboard that analyzes business data and provides insights for decision-making.",
      image:
        "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061972.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "IoT Home Automation System",
      description:
        "Design a system that connects and automates home devices for enhanced convenience.",
      image:
        "https://img.freepik.com/free-photo/military-it-professional-gathers-intelligence-from-world-map-projection_482257-89755.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
  ],
};

export const techTrainingProjects = {
  title: "Technical Trainings Projects We've Carried Out ",
  description:
    "Projects in this category focus on delivering training in various technologies and areas of expertise.",
  projects: [
    {
      title: "AI Chatbot for Customer Service",
      description:
        "Develop an AI chatbot that automates customer service queries for businesses.",
      image:
        "https://img.freepik.com/free-photo/technician-server-hub-using-tablet-find-hardware-misconfigurations_482257-88126.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "Mobile Payment App",
      description:
        "Create a secure mobile payment system allowing users to manage finances conveniently.",
      image:
        "https://img.freepik.com/free-photo/software-developer-working-new-user-interface-with-online-system-create-algorithm-it-agency-office-system-engineer-programming-html-code-algorithm-computer-typing-sever-data_482257-64450.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Build a dashboard that analyzes business data and provides insights for decision-making.",
      image:
        "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061972.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "IoT Home Automation System",
      description:
        "Design a system that connects and automates home devices for enhanced convenience.",
      image:
        "https://img.freepik.com/free-photo/military-it-professional-gathers-intelligence-from-world-map-projection_482257-89755.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
  ],
};
export const projectManagemenProjects = {
  title: " Projects We've Managed Overtime ",
  description:
    "Projects in this category focus on delivering training in various technologies and areas of expertise.",
  projects: [
    {
      title: "AI Chatbot for Customer Service",
      description:
        "Develop an AI chatbot that automates customer service queries for businesses.",
      image:
        "https://img.freepik.com/free-photo/technician-server-hub-using-tablet-find-hardware-misconfigurations_482257-88126.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "Mobile Payment App",
      description:
        "Create a secure mobile payment system allowing users to manage finances conveniently.",
      image:
        "https://img.freepik.com/free-photo/software-developer-working-new-user-interface-with-online-system-create-algorithm-it-agency-office-system-engineer-programming-html-code-algorithm-computer-typing-sever-data_482257-64450.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Build a dashboard that analyzes business data and provides insights for decision-making.",
      image:
        "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061972.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "IoT Home Automation System",
      description:
        "Design a system that connects and automates home devices for enhanced convenience.",
      image:
        "https://img.freepik.com/free-photo/military-it-professional-gathers-intelligence-from-world-map-projection_482257-89755.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
  ],
};
export const workSpaceProjects = {
  title: "Our Workspace Projects We've handled ",
  description:
    "Projects in this category focus on delivering training in various technologies and areas of expertise",
  projects: [
    {
      title: "AI Chatbot for Customer Service",
      description:
        "Develop an AI chatbot that automates customer service queries for businesses.",
      image:
        "https://img.freepik.com/free-photo/technician-server-hub-using-tablet-find-hardware-misconfigurations_482257-88126.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "Mobile Payment App",
      description:
        "Create a secure mobile payment system allowing users to manage finances conveniently.",
      image:
        "https://img.freepik.com/free-photo/software-developer-working-new-user-interface-with-online-system-create-algorithm-it-agency-office-system-engineer-programming-html-code-algorithm-computer-typing-sever-data_482257-64450.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Build a dashboard that analyzes business data and provides insights for decision-making.",
      image:
        "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061972.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "IoT Home Automation System",
      description:
        "Design a system that connects and automates home devices for enhanced convenience.",
      image:
        "https://img.freepik.com/free-photo/military-it-professional-gathers-intelligence-from-world-map-projection_482257-89755.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
  ],
};

export const digitalMarketingProjects = {
  title: "Digital Marketing Projects We've Done ",
  description:
    "Projects in this category focus on delivering training in various technologies and areas of expertise",
  projects: [
    {
      title: "AI Chatbot for Customer Service",
      description:
        "Develop an AI chatbot that automates customer service queries for businesses.",
      image:
        "https://img.freepik.com/free-photo/technician-server-hub-using-tablet-find-hardware-misconfigurations_482257-88126.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "Mobile Payment App",
      description:
        "Create a secure mobile payment system allowing users to manage finances conveniently.",
      image:
        "https://img.freepik.com/free-photo/software-developer-working-new-user-interface-with-online-system-create-algorithm-it-agency-office-system-engineer-programming-html-code-algorithm-computer-typing-sever-data_482257-64450.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Build a dashboard that analyzes business data and provides insights for decision-making.",
      image:
        "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061972.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "IoT Home Automation System",
      description:
        "Design a system that connects and automates home devices for enhanced convenience.",
      image:
        "https://img.freepik.com/free-photo/military-it-professional-gathers-intelligence-from-world-map-projection_482257-89755.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
  ],
};
export const consultancyProjects = {
  title: " Projects We've Consulted On ",
  description:
    "Projects in this category focus on delivering training in various technologies and areas of expertise",
  projects: [
    {
      title: "AI Chatbot for Customer Service",
      description:
        "Develop an AI chatbot that automates customer service queries for businesses.",
      image:
        "https://img.freepik.com/free-photo/technician-server-hub-using-tablet-find-hardware-misconfigurations_482257-88126.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "Mobile Payment App",
      description:
        "Create a secure mobile payment system allowing users to manage finances conveniently.",
      image:
        "https://img.freepik.com/free-photo/software-developer-working-new-user-interface-with-online-system-create-algorithm-it-agency-office-system-engineer-programming-html-code-algorithm-computer-typing-sever-data_482257-64450.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "Data Analytics Dashboard",
      description:
        "Build a dashboard that analyzes business data and provides insights for decision-making.",
      image:
        "https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061972.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
    {
      title: "IoT Home Automation System",
      description:
        "Design a system that connects and automates home devices for enhanced convenience.",
      image:
        "https://img.freepik.com/free-photo/military-it-professional-gathers-intelligence-from-world-map-projection_482257-89755.jpg?uid=R79909057&ga=GA1.1.952123763.1711596603&semt=ais_hybrid",
    },
  ],
};
