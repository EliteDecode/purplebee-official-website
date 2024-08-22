import IndustriesHero from "@/components/industries/IndustriesHero";
import ContactBanner from "@/components/industries/ContactBanner";
import Qualities from "@/components/industries/Qualities";
import LetsHandleProject from "@/components/industries/LetsHandleProject";
import Scope from "@/components/industries/Scope";
import Projects from "@/components/industries/Projects";
import Contact from "@/components/General/contact/Contact";
import {
  educationHero,
  educationIndustryQualities,
  eduIndustryContact,
  educationScope,
  educationProjects,
} from "@/utils/industry.content";

const Education = () => {
  return (
    <>
      <IndustriesHero data={educationHero} />
      <Qualities data={educationIndustryQualities} />
      <ContactBanner data={eduIndustryContact} />
      <LetsHandleProject />
      <Scope data={educationScope} />
      <Projects data={educationProjects} />
      <Contact />
    </>
  );
};

export default Education;
