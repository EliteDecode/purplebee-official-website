import contact from "@/assets/images/company/enhanceSkills.jpeg";
import { Button } from "@/components/ui/button";
import { Box } from "@mui/material";
import { Typography } from "antd";

const EnhanceSkills = () => {
  return (
    <Box className="py-28 bg-tetiary my-10">
      <Box className="relative grid sm:grid-cols-2 grid-cols-1">
        <Box className="relative">
          <Box className=" h-[45vh] sm:w-[90%] w-full rounded-tr-full rounded-br-full bg-primary"></Box>
          <Box className="absolute sm:w-[50%] w-full -top-[90px]  sm:right-32 right-10 rounded-md">
            <img
              src={contact}
              alt=""
              className=" sm:w-full w-[100%] shadow-lg -top-5  rounded-md"
            />
          </Box>
        </Box>
        <Box className="custom-c ">
          <Box className="sm:mt-0 sm:w-[80%] w-full  mt-16">
            <Typography className="text-[17px] mt-1 ">
              Enhance Your Skill With Our Expert-Led Training Courses, Designed
              for All Levels.
            </Typography>

            <Typography className="text-[17px] mt-3 ">
              Join Us Today and Take the First Step Towards Success in Today’s
            </Typography>
            <Button variant="secondary" className="mt-5">
              Get Started
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default EnhanceSkills;
