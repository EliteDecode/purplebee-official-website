import Contact from "@/components/General/contact/Contact";
import Testimonials from "@/components/home/Testimonials";
import WhatWeCover from "@/components/services/WhatWeCover";
import CohortTraining from "@/components/training/CohortTraining";
import Fees from "@/components/training/Fees";
import SchoolNumbers from "@/components/training/SchoolNumbers";
import TrainingHero from "@/components/training/TrainingHero";
import {
  dataAnalyticsHero,
  dataAnalyticsOutline,
  dataAnalyticsPlans,
} from "@/utils/training.content";
import { Box } from "@mui/material";

const DataAnalytics = () => {
  return (
    <Box>
      <TrainingHero data={dataAnalyticsHero} />
      <CohortTraining />
      <SchoolNumbers />
      <WhatWeCover data={dataAnalyticsOutline} />
      <Fees data={dataAnalyticsPlans} />
      <Testimonials />
      <Contact />
    </Box>
  );
};

export default DataAnalytics;
