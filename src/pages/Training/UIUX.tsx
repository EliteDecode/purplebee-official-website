import Contact from "@/components/General/contact/Contact";
import Testimonials from "@/components/home/Testimonials";
import WhatWeCover from "@/components/services/WhatWeCover";
import CohortTraining from "@/components/training/CohortTraining";
import Fees from "@/components/training/Fees";
import SchoolNumbers from "@/components/training/SchoolNumbers";
import TrainingHero from "@/components/training/TrainingHero";
import {
  uiuxDesignOutline,
  uiuxDesignPlans,
  uiuxHero,
} from "@/utils/training.content";
import { Box } from "@mui/material";

const UIUX = () => {
  return (
    <Box>
      <TrainingHero data={uiuxHero} />
      <CohortTraining />
      <SchoolNumbers />
      <WhatWeCover data={uiuxDesignOutline} />
      <Fees data={uiuxDesignPlans} />
      <Testimonials />
      <Contact />
    </Box>
  );
};

export default UIUX;
