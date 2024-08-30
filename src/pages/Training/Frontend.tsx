import Contact from "@/components/General/contact/Contact";
import Testimonials from "@/components/home/Testimonials";
import WhatWeCover from "@/components/services/WhatWeCover";
import CohortTraining from "@/components/training/CohortTraining";
import Fees from "@/components/training/Fees";
import SchoolNumbers from "@/components/training/SchoolNumbers";
import TrainingHero from "@/components/training/TrainingHero";
import {
  frontendDevelopmentOutline,
  frontendDevelopmentPlans,
  frontendHero,
} from "@/utils/training.content";
import { Box } from "@mui/material";

const Frontend = () => {
  return (
    <Box>
      <TrainingHero data={frontendHero} />
      <CohortTraining />
      <SchoolNumbers />
      <WhatWeCover data={frontendDevelopmentOutline} />
      <Fees data={frontendDevelopmentPlans} />
      <Testimonials />
      <Contact />
    </Box>
  );
};

export default Frontend;
