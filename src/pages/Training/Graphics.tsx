import Contact from "@/components/General/contact/Contact";
import Testimonials from "@/components/home/Testimonials";
import WhatWeCover from "@/components/services/WhatWeCover";
import CohortTraining from "@/components/training/CohortTraining";
import Fees from "@/components/training/Fees";
import SchoolNumbers from "@/components/training/SchoolNumbers";
import TrainingHero from "@/components/training/TrainingHero";
import {
  graphicDesignHero,
  graphicDesignOutline,
  graphicDesignPlans,
} from "@/utils/training.content";
import { Box } from "@mui/material";

const Graphics = () => {
  return (
    <Box>
      <TrainingHero data={graphicDesignHero} />
      <CohortTraining />
      <SchoolNumbers />
      <WhatWeCover data={graphicDesignOutline} />
      <Fees data={graphicDesignPlans} />
      <Testimonials />
      <Contact />
    </Box>
  );
};

export default Graphics;
