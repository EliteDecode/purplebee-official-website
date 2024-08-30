import CareerHero from "@/components/company/careers/CareerHero";
import EnhanceSkills from "@/components/company/careers/EnhanceSkills";
import Openings from "@/components/company/careers/Openings";
import Values from "@/components/company/careers/Values";
import Contact from "@/components/General/contact/Contact";
import Expertise from "@/components/home/Expertise";

const Careers = () => {
  return (
    <>
      <CareerHero />
      <Values />
      <Openings />
      <EnhanceSkills />
      <Expertise />
      <Contact />
    </>
  );
};

export default Careers;
