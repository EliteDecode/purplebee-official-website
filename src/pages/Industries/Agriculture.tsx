import ContactBanner from "@/components/industries/ContactBanner";
import IndustriesHero from "@/components/industries/IndustriesHero";
import LetsHandleProject from "@/components/industries/LetsHandleProject";
import Projects from "@/components/industries/Projects";
import Qualities from "@/components/industries/Qualities";
import Scope from "@/components/industries/Scope";
import Contact from "@/components/General/contact/Contact";
import {
  agricultureHero,
  agricultureIndustryQualities,
  agricultureScope,
  agriIndustryContact,
  agricultureProjects,
} from "@/utils/industry.content";

const Agriculture = () => {
  return (
    <>
      <IndustriesHero data={agricultureHero} />
      <Qualities data={agricultureIndustryQualities} />
      <ContactBanner data={agriIndustryContact} />
      <LetsHandleProject />
      <Scope data={agricultureScope} />
      <Projects data={agricultureProjects} />
      <Contact />
    </>
  );
};

export default Agriculture;
