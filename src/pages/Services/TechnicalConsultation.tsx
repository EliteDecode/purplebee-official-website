import Contact from "@/components/General/contact/Contact";
import Globe from "@/components/home/Globe";
import Testimonials from "@/components/home/Testimonials";
import Projects from "@/components/industries/Projects";
import CompaniesHelped from "@/components/services/CompaniesHelped";
import ServiceHero from "@/components/services/ServiceHero";
import WhatWeCover from "@/components/services/WhatWeCover";
import {
  consultancyHero,
  consultancyImages,
  consultancyProjects,
  technicalConsultation,
} from "@/utils/service.content";

const TechnicalConsultation = () => {
  return (
    <>
      <ServiceHero data={consultancyHero} />
      <CompaniesHelped data={consultancyImages} />
      <WhatWeCover data={technicalConsultation} />
      <Projects data={consultancyProjects} />
      <Globe />
      <Testimonials />
      <Contact />
    </>
  );
};

export default TechnicalConsultation;
