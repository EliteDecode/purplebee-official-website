import IndustriesHero from "@/components/industries/IndustriesHero";
import Qualities from "@/components/industries/Qualities";
import ContactBanner from "@/components/industries/ContactBanner";
import LetsHandleProject from "@/components/industries/LetsHandleProject";
import Scope from "@/components/industries/Scope";
import Projects from "@/components/industries/Projects";
import Contact from "@/components/General/contact/Contact";
import {
  technologyHero,
  techIndustryQualities,
  technologyScope,
  techIndustryContact,
  technologyProjects,
} from "@/utils/industry.content";

const Technology = () => {
  return (
    <>
      <IndustriesHero data={technologyHero} />
      <Qualities data={techIndustryQualities} />
      <ContactBanner data={techIndustryContact} />
      <LetsHandleProject />
      <Scope data={technologyScope} />
      <Projects data={technologyProjects} />
      <Contact />
    </>
  );
};

export default Technology;
