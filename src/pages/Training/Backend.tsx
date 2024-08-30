import Contact from "@/components/General/contact/Contact";
import Testimonials from "@/components/home/Testimonials";
import WhatWeCover from "@/components/services/WhatWeCover";
import CohortTraining from "@/components/training/CohortTraining";
import Fees from "@/components/training/Fees";
import SchoolNumbers from "@/components/training/SchoolNumbers";
import TrainingHero from "@/components/training/TrainingHero";
import {
  backendDevelopmentOutline,
  backendDevelopmentPlans,
  backendHero,
} from "@/utils/training.content";
import { Box } from "@mui/material";

const Backend = () => {
  return (
    <Box>
      <TrainingHero data={backendHero} />
      <CohortTraining />
      <SchoolNumbers />
      <WhatWeCover data={backendDevelopmentOutline} />
      <Fees data={backendDevelopmentPlans} />
      <Testimonials />
      <Contact />
    </Box>
  );
};

export default Backend;
