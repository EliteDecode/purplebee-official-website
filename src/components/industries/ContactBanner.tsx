import { IndustriesQualityProps } from "@/types/majorTypes";
import { Box } from "@mui/material";
import { Typography } from "antd";
import { FiMail } from "react-icons/fi";
import { Button } from "../ui/button";

const ContactBanner = ({ data }: IndustriesQualityProps) => {
  return (
    <Box className="bg-tetiary py-16">
      <Box className="custom-c sm:p-10 p-3 relative rounded-md  text-center bg-tetiary ">
        <Typography className="sm:text-[40px] text-[25px] leading-normal font-bold">
          {data?.title}
        </Typography>
        <Typography className="mt-2"> {data?.description} </Typography>

        <Box className="flex items-center justify-center mt-5">
          <Button className="bg-primary flex items-center space-x-1">
            <FiMail size={15} /> <span>Contact Us</span>
          </Button>
        </Box>

        <div
          className="sm:h-[65vh] h-[40vh] mt-10 rounded-md w-full flex flex-col"
          style={{
            backgroundImage: `url(${data.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            backgroundBlendMode: "overlay",
          }}></div>
      </Box>
    </Box>
  );
};

export default ContactBanner;
