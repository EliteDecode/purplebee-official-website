import Contact from "@/components/General/contact/Contact";
import Globe from "@/components/home/Globe";
import Testimonials from "@/components/home/Testimonials";
import Projects from "@/components/industries/Projects";
import CompaniesHelped from "@/components/services/CompaniesHelped";
import ServiceHero from "@/components/services/ServiceHero";
import WhatWeCover from "@/components/services/WhatWeCover";
import {
  digitalMarketing,
  digitalMarketingProjects,
  digitalMarkettingHero,
  digitalMarkettingImages,
} from "@/utils/service.content";

const DigitalMarketing = () => {
  return (
    <>
      <ServiceHero data={digitalMarkettingHero} />
      <CompaniesHelped data={digitalMarkettingImages} />
      <WhatWeCover data={digitalMarketing} />
      <Projects data={digitalMarketingProjects} />
      <Globe />
      <Testimonials />
      <Contact />
    </>
  );
};

export default DigitalMarketing;
