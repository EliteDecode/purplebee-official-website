import Contact from "@/components/General/contact/Contact";
import Globe from "@/components/home/Globe";
import Testimonials from "@/components/home/Testimonials";
import Projects from "@/components/industries/Projects";
import CompaniesHelped from "@/components/services/CompaniesHelped";
import ServiceHero from "@/components/services/ServiceHero";
import WhatWeCover from "@/components/services/WhatWeCover";
import {
  projectManagemenProjects,
  projectManagement,
  projectManagementHero,
  projectManagementImages,
} from "@/utils/service.content";

const ProjectManagement = () => {
  return (
    <>
      <ServiceHero data={projectManagementHero} />
      <CompaniesHelped data={projectManagementImages} />
      <WhatWeCover data={projectManagement} />
      <Projects data={projectManagemenProjects} />
      <Globe />
      <Testimonials />
      <Contact />
    </>
  );
};

export default ProjectManagement;
