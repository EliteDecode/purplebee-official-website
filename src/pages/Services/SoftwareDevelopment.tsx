import Contact from "@/components/General/contact/Contact";
import Globe from "@/components/home/Globe";
import Testimonials from "@/components/home/Testimonials";
import Projects from "@/components/industries/Projects";
import CompaniesHelped from "@/components/services/CompaniesHelped";
import ServiceHero from "@/components/services/ServiceHero";
import WhatWeCover from "@/components/services/WhatWeCover";
import {
  softwareDevelopment,
  softwareDevelopmentHero,
  softwareDevImages,
  softwareDevProjects,
} from "@/utils/service.content";

const SoftwareDevelopment = () => {
  return (
    <>
      <ServiceHero data={softwareDevelopmentHero} />
      <CompaniesHelped data={softwareDevImages} />
      <WhatWeCover data={softwareDevelopment} />
      <Projects data={softwareDevProjects} />
      <Globe />
      <Testimonials />
      <Contact />
    </>
  );
};

export default SoftwareDevelopment;
