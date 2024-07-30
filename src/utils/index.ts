import { NavbarLinksProps } from "@/types/navbarTypes";
import industriesImage from "@/assets/images/navbar_industries.jpg";
import companyImage from "@/assets/images/navbar_company.jpg";
import trainingImage from "@/assets/images/navbar_training.jpg";
import servicesImage from "@/assets/images/navbar_services.jpg";

export const NavbarLinks: NavbarLinksProps[] = [
  {
    title: "Industries",
    width: "w-[500px]",
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
    ],
  },
  {
    title: "Services",
    width: "w-[600px]",
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
    width: "w-[550px]",
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
