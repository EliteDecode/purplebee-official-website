import { Box, Grid } from "@mui/material";
import { Typography } from "antd";
import handleProjectImg from "@/assets/images/training/sd4.jpg";

const SchoolNumbers = () => {
  return (
    <Box className="py-16 sm:p-5 p-2 mt-10 relative bg-white">
      <Box>
        <Box className="">
          <Typography
            className="sm:text-[40px] text-[25px] text-center font-bold"
            style={{ lineHeight: "2.5rem" }}>
            Purplebee School Numbers
          </Typography>

          <Typography className="text-center sm:w-[70%] w-full mt-4 m-auto text-[15px] leading-none">
            At Purplebee, we are committed to providing high-quality education
            and training to our students. Here are some of our important
            numbers:
          </Typography>
        </Box>
        <Grid container className="mt-10">
          <Grid item sm={2}></Grid>
          <Grid item sm={8}>
            <Box className="flex w-full  items-center relative justify-center">
              <Box className="flex  absolute sm:bottom-20 bottom-0 bg-[#EEECFF] sm:left-5 left-1 justify-between sm:w-[25%] w-[40%] items-center py-3 px-4 rounded-md shadow-lg border">
                <Typography className="sm:text-[30px] text-[15px] font-bold  text-black">
                  20+
                </Typography>
                <Typography className="text-black sm:text-[18px] text-[13px]">
                  Instructors
                </Typography>
              </Box>

              <Box className="flex  absolute sm:top-48 top-52 bg-[#dd9fc3] sm:left-5 left-1 justify-between sm:w-[35%] w-[52%] items-center py-3 px-4 rounded-md shadow-lg border">
                <Typography className="sm:text-[30px] text-[15px] font-bold  text-black">
                  45+
                </Typography>
                <Typography className="text-black sm:text-[18px] text-[13px]">
                  Completed Projects
                </Typography>
              </Box>

              <Box className="flex  absolute sm:top-60 top-72 bg-[#cad8b5] sm:right-0 right-1 justify-between sm:w-[35%] w-[50%] items-center py-3 px-4 rounded-md shadow-lg border">
                <Typography className="sm:text-[30px] text-[15px] font-bold  text-black">
                  20+
                </Typography>
                <Typography className="text-black sm:text-[18px] text-[13px]">
                  Successful Cohorts
                </Typography>
              </Box>

              <Box className="flex  absolute sm:top-20 top-0 bg-[#FAEDED] sm:right-5 right-1 justify-between sm:w-[25%] w-[40%] items-center py-3 px-4 rounded-md shadow-lg border">
                <Typography className="sm:text-[30px] text-[15px] font-bold  text-black">
                  200+
                </Typography>
                <Typography className="text-black sm:text-[18px] text-[13px]">
                  Students
                </Typography>
              </Box>
              <img
                src={handleProjectImg}
                alt="lets handle your project"
                className="sm:w-[50%] w-full"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SchoolNumbers;
