import { Box } from "@mui/material";
import { Typography } from "antd";
import careerHero from "../../../assets/images/company/careers.png";

const CareerHero = () => {
  return (
    <Box className="py-16">
      <Box className="custom-c ">
        <Box className="mt-16 text-center">
          <Typography className="text-[40px] font-bold">
            Join Our World-Class Team
          </Typography>
          <Typography className="text-[15px] sm:w-[70%] w-full m-auto">
            We're always looking for talented individuals to join our team.
            Whether you're a seasoned professional or just starting out, we're
            excited to have you on board. Explore our current openings and
            apply!
          </Typography>
          <div
            className="sm:h-[85vh] h-[70vh] w-full mt-5 flex flex-col"
            style={{
              backgroundImage: `url(${careerHero})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",

              backgroundBlendMode: "overlay",
            }}></div>
        </Box>
      </Box>
    </Box>
  );
};

export default CareerHero;
