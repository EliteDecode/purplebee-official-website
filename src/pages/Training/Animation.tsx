import Contact from "@/components/General/contact/Contact";
import Testimonials from "@/components/home/Testimonials";
import WhatWeCover from "@/components/services/WhatWeCover";
import CohortTraining from "@/components/training/CohortTraining";
import Fees from "@/components/training/Fees";
import SchoolNumbers from "@/components/training/SchoolNumbers";
import TrainingHero from "@/components/training/TrainingHero";
import {
  animationHero,
  animationOutline,
  animationPlans,
} from "@/utils/training.content";
import { Box } from "@mui/material";

const Animation = () => {
  return (
    <Box>
      <TrainingHero data={animationHero} />
      <CohortTraining />
      <SchoolNumbers />
      <WhatWeCover data={animationOutline} />
      <Fees data={animationPlans} />
      <Testimonials />
      <Contact />
    </Box>
  );
};

export default Animation;
