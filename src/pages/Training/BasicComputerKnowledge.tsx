import Contact from "@/components/General/contact/Contact";
import Testimonials from "@/components/home/Testimonials";
import WhatWeCover from "@/components/services/WhatWeCover";
import CohortTraining from "@/components/training/CohortTraining";
import Fees from "@/components/training/Fees";
import SchoolNumbers from "@/components/training/SchoolNumbers";
import TrainingHero from "@/components/training/TrainingHero";
import {
  basicComptHero,
  basicComputerKnowledgeOutline,
  basicComputerKnowledgePlans,
} from "@/utils/training.content";
import { Box } from "@mui/material";

const Frontend = () => {
  return (
    <Box>
      <TrainingHero data={basicComptHero} />
      <CohortTraining />
      <SchoolNumbers />
      <WhatWeCover data={basicComputerKnowledgeOutline} />
      <Fees data={basicComputerKnowledgePlans} />
      <Testimonials />
      <Contact />
    </Box>
  );
};

export default Frontend;
