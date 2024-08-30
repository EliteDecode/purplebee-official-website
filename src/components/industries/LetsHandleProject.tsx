import { Box, Grid } from "@mui/material";
import { Typography } from "antd";
import handleProjectImg from "@/assets/images/industry/contact4.jpg";

const LetsHandleProject = () => {
  return (
    <Box className="py-16 sm:p-5 p-2 relative bg-white">
      <Box>
        <Box className="">
          <Typography
            className="sm:text-[40px] text-[25px] text-center font-bold"
            style={{ lineHeight: "2.5rem" }}>
            Lets Handle Your Project
          </Typography>

          <Typography className="text-center sm:w-[70%] w-full mt-4 m-auto text-[15px] leading-none">
            We have a team of experienced engineers and designers to handle your
            project
          </Typography>
        </Box>
        <Grid container className="mt-10">
          <Grid item sm={2}></Grid>
          <Grid item sm={8}>
            <Box className="flex w-full  items-center relative justify-center">
              <Box className="flex  absolute sm:bottom-20 bottom-0 bg-[#EEECFF] sm:left-5 left-1 justify-between sm:w-[25%] w-[40%] items-center py-3 px-4 rounded-md shadow-lg border">
                <Typography className="sm:text-[30px] text-[15px] font-bold  text-black">
                  120+
                </Typography>
                <Typography className="text-black sm:text-[18px] text-[13px]">
                  Engineers
                </Typography>
              </Box>

              <Box className="flex  absolute sm:top-20 top-0 bg-[#FAEDED] sm:right-5 right-1 justify-between sm:w-[25%] w-[40%] items-center py-3 px-4 rounded-md shadow-lg border">
                <Typography className="sm:text-[30px] text-[15px] font-bold  text-black">
                  120+
                </Typography>
                <Typography className="text-black sm:text-[18px] text-[13px]">
                  Projects
                </Typography>
              </Box>
              <img
                src={handleProjectImg}
                alt="lets handle your project"
                className="sm:w-[50%] w-full"
              />
            </Box>
          </Grid>
          {/* <Grid item sm={2}>
            <Box className="absolute right-10 text-right bottom-20">
              <Typography
                className="text-[40px] text-right font-bold"
                style={{ lineHeight: "2.5rem" }}>
                We Can <br /> Do Alot
              </Typography>
            </Box>
          </Grid> */}
        </Grid>
      </Box>
    </Box>
  );
};

export default LetsHandleProject;
