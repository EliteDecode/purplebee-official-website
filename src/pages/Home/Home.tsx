import Hero from "@/components/home/Hero";
import Patners from "@/components/home/Patners";
import LatestProjects from "@/components/home/LatestProjects";
import Services from "@/components/home/Services";
import Globe from "@/components/home/Globe";
import Testimonials from "@/components/home/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <LatestProjects />
      <Services />
      <Patners />
      <Globe />
      <Testimonials />
    </>
  );
};

export default Home;
