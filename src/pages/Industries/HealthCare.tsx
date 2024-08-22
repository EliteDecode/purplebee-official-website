import IndustriesHero from "@/components/industries/IndustriesHero";
import Qualities from "@/components/industries/Qualities";
import ContactBanner from "@/components/industries/ContactBanner";
import LetsHandleProject from "@/components/industries/LetsHandleProject";
import Scope from "@/components/industries/Scope";
import Projects from "@/components/industries/Projects";
import Contact from "@/components/General/contact/Contact";
import {
  healthcareHero,
  healthcareIndustryQualities,
  healthIndustryContact,
  healthScope,
  healthProjects,
} from "@/utils/industry.content";

const HealthCare = () => {
  return (
    <>
      <IndustriesHero data={healthcareHero} />
      <Qualities data={healthcareIndustryQualities} />
      <ContactBanner data={healthIndustryContact} />
      <LetsHandleProject />
      <Scope data={healthScope} />
      <Projects data={healthProjects} />
      <Contact />
    </>
  );
};

export default HealthCare;
