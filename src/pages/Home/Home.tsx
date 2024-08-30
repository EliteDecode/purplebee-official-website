import Hero from "@/components/home/Hero";
import Patners from "@/components/home/Patners";
import LatestProjects from "@/components/home/LatestProjects";
import Services from "@/components/home/Services";
import Globe from "@/components/home/Globe";
import Testimonials from "@/components/home/Testimonials";
import Interviews from "@/components/home/Interviews";
import Technology from "@/components/home/Technology";
import Expertise from "@/components/home/Expertise";
import Contact from "@/components/General/contact/Contact";

const Home = () => {
  return (
    <>
      <Hero />
      {/* <LatestProjects /> */}
      <Services />
      <Patners />
      <Globe />
      <Testimonials />
      <Interviews />
      <Technology />
      <Expertise />
      <Contact />
    </>
  );
};

export default Home;
