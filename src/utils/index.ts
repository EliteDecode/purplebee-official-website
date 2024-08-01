import { NavbarLinksProps, NavbarMiniLinksProps } from "@/types/navbarTypes";
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
