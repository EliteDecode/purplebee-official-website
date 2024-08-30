import { Box } from "@mui/material";
import TitleText from "../common/TitleText";
import calender from "@/assets/icons/training/calendar.png";
import time from "@/assets/icons/training/clock.png";
import location from "@/assets/icons/training/placeholder.png";
import instructirs from "@/assets/icons/training/teacher.png";
import { Typography } from "antd";

const CohortTraining = () => {
  const CohortTraining = [
    {
      image: calender,
      text: "TBD",
      description: "Cohort Commencement",
    },
    {
      image: time,
      text: "TBD",
      description: "Time Frame of Cohort",
    },
    {
      image: location,
      text: "Onilne, Physical Tutoring",
      description: "Method of Cohort Tutoring",
    },
    {
      image: instructirs,
      text: "Instructor Led Training",
      description: "Type of Training",
    },
  ];

  return (
    <Box className="bg-tetiary py-16">
      <Box className="custom-c p-5 relative rounded-md">
        <TitleText
          title="Cohort Training"
          description="Our cohort training program is designed to equip you with the essential skills and knowledge needed to succeed in the tech industry. Through a combination of practical exercises, hands-on projects, and mentorship, we aim to empower you to become a skilled developer and contribute to the growth of the tech community."
        />

        <Box className="grid sm:gap-8 gap-2 mt-5 sm:grid-cols-4 grid-cols-2">
          {CohortTraining?.map((item, index) => (
            <Box
              key={index}
              className="flex flex-col border shadow-md p-2 rounded-md ">
              <Box className="flex items-center space-x-2">
                <img src={item.image} alt="" className="w-[25px] " />
                <Typography className="sm:text-[13px] text-[11px] font-bold">
                  {item.description}
                </Typography>
              </Box>
              <p className="mt-2 text-[12px]">{item.text}</p>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default CohortTraining;
