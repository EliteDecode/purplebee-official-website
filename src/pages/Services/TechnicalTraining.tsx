import Contact from "@/components/General/contact/Contact";
import Globe from "@/components/home/Globe";
import Testimonials from "@/components/home/Testimonials";
import Projects from "@/components/industries/Projects";
import CompaniesHelped from "@/components/services/CompaniesHelped";
import ServiceHero from "@/components/services/ServiceHero";
import WhatWeCover from "@/components/services/WhatWeCover";
import {
  technicalTraining,
  technicalTrainingHero,
  technicalTrainingImages,
  techTrainingProjects,
} from "@/utils/service.content";

const TechnicalTraining = () => {
  return (
    <>
      <ServiceHero data={technicalTrainingHero} />
      <CompaniesHelped data={technicalTrainingImages} />
      <WhatWeCover data={technicalTraining} />
      <Projects data={techTrainingProjects} />
      <Globe />
      <Testimonials />
      <Contact />
    </>
  );
};

export default TechnicalTraining;
