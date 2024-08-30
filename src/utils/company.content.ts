import { CompanyAchievementsProps } from "@/types/majorTypes";

//achievement imports
import awardsIcon from "@/assets/icons/company/awards.png";
import certificatesIcon from "@/assets/icons/company/certificate.png";
import clientsIcon from "@/assets/icons/company/clients.png";
import projectsIcon from "@/assets/icons/company/projects.png";
import experienceIcon from "@/assets/icons/company/experience.png";
import studentIcon from "@/assets/icons/company/students.png";

//Meet The team
import omotayo from "@/assets/images/company/omotayo.jpg";
import dayo from "@/assets/images/company/dayo.jpg";
import charlie from "@/assets/images/company/charlie.jpg";

//Company Values
import innovationIcon from "@/assets/icons/company/innovation.png";
import integrityIcon from "@/assets/icons/company/reliability.png";
import collaborationIcon from "@/assets/icons/company/trust.png";
import customerFocusIcon from "@/assets/icons/company/target-audience.png";
import sustainabilityIcon from "@/assets/icons/company/sustainability.png";
import continuousImprovementIcon from "@/assets/icons/company/performance.png";

export const companyAchivement: CompanyAchievementsProps[] = [
  {
    title: "Awards",
    desc: "45+",
    icon: awardsIcon,
  },
  {
    title: "Certificates",
    desc: "18+",
    icon: certificatesIcon,
  },
  {
    title: "Clients",
    desc: "120+",
    icon: clientsIcon,
  },
  {
    title: "Projects",
    desc: "120+",
    icon: projectsIcon,
  },
  {
    title: "Experience",
    desc: "15+",
    icon: experienceIcon,
  },
  {
    title: "Students",
    desc: "500+",
    icon: studentIcon,
  },
];

//The team

export const teamMembers = [
  {
    name: "O. Omotayo ",
    position: "Operational Manager",
    imageUrl: omotayo,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "O. Dayo",
    position: "Business Development Officer",
    imageUrl: dayo,
    linkedin: "#",
    twitter: "#",
  },
  {
    name: "O. Charlie",
    position: "Technical Engineer",
    imageUrl: charlie,
    linkedin: "#",
    twitter: "#",
  },
];

export const companyValues: CompanyAchievementsProps[] = [
  {
    title: "Innovation",
    desc: "We embrace cutting-edge technology and creative thinking to develop solutions that transform industries and improve lives.",
    icon: innovationIcon,
  },
  {
    title: "Integrity",
    desc: "We adhere to the highest ethical standards, ensuring transparency, honesty, and accountability in all our actions.",
    icon: integrityIcon,
  },
  {
    title: "Collaboration",
    desc: "We believe in the power of teamwork, partnering with clients, colleagues, and communities to achieve shared success.",
    icon: collaborationIcon,
  },
  {
    title: "Customer Focus",
    desc: "Our customers are at the heart of everything we do; we strive to understand their needs and exceed their expectations.",
    icon: customerFocusIcon,
  },
  {
    title: "Sustainability",
    desc: "We are committed to environmentally responsible practices and strive to create sustainable solutions for a better future.",
    icon: sustainabilityIcon,
  },
  {
    title: "Continuous Improvement",
    desc: "We foster a culture of learning and growth, constantly seeking ways to enhance our products, services, and processes.",
    icon: continuousImprovementIcon,
  },
];
