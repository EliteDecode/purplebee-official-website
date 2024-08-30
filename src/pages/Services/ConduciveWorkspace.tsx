import Contact from "@/components/General/contact/Contact";
import Globe from "@/components/home/Globe";
import Testimonials from "@/components/home/Testimonials";
import Projects from "@/components/industries/Projects";
import CompaniesHelped from "@/components/services/CompaniesHelped";
import ServiceHero from "@/components/services/ServiceHero";
import WhatWeCover from "@/components/services/WhatWeCover";
import {
  conduciveSpaceHero,
  conduciveSpaceImages,
  conduciveWorkspace,
  workSpaceProjects,
} from "@/utils/service.content";

const ConduciveWorkspace = () => {
  return (
    <>
      <ServiceHero data={conduciveSpaceHero} />
      <CompaniesHelped data={conduciveSpaceImages} />
      <WhatWeCover data={conduciveWorkspace} />
      <Projects data={workSpaceProjects} />
      <Globe />
      <Testimonials />
      <Contact />
    </>
  );
};

export default ConduciveWorkspace;
