import AboutHero from "@/components/company/about/AboutHero";
import Achievement from "@/components/company/about/Achievement";
import PurpleBee from "@/components/company/about/PurpleBee";
import Team from "@/components/company/about/Team";
import Contact from "@/components/General/contact/Contact";
import Patners from "@/components/home/Patners";
import Testimonials from "@/components/home/Testimonials";

const About = () => {
  return (
    <>
      <AboutHero />
      <PurpleBee />
      <Achievement />
      <Patners />
      <Team />
      <Testimonials />
      <Contact />
    </>
  );
};

export default About;
