import { IndustriesHeroProps } from "@/types/majorTypes";
import { Box } from "@mui/material";
import { Typography } from "antd";
import { motion } from "framer-motion";
import { IoIosPhonePortrait } from "react-icons/io";
import { Button } from "../ui/button";
import AnchorLink from "react-anchor-link-smooth-scroll";

const transition = {
  type: "spring",
  damping: 5,
  stiffness: 60,
};

const IndustriesHero = ({ data }: IndustriesHeroProps) => {
  return (
    <div
      className="sm:py-28 py-16 w-full flex flex-col"
      style={{
        backgroundImage: `url(${data.background})`,
        backgroundSize: "cover",
        backgroundPosition: "0px 30px",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
      }}>
      <Box className="w-[85%] m-auto">
        <motion.div
          className="mt-20 sm:w-[80%] w-full"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 30, opacity: 1 }}
          transition={transition}>
          <Typography className="font-semibold text-gray-300 text-[23px]">
            {data.subtitle}
          </Typography>
          <Typography
            className="sm:text-[45px] text-[30px] my-4 text-white uppercase font-black"
            style={{ lineHeight: "3rem" }}>
            {data.title}
          </Typography>
          <Typography
            className="text-gray-300  text-[14px]"
            style={{ fontFamily: "oswald" }}>
            {data.description}
          </Typography>
          <Box className="flex items-center mt-5 space-x-1">
            {/* <Button className="bg-primary flex items-center space-x-1">
              <FiMail size={15} /> <span>Contact Us</span>
            </Button> */}
            <AnchorLink href="#contact">
              <Button className="bg-secondary text-dark flex items-center space-x-1">
                <IoIosPhonePortrait size={15} /> <span>{data.cta}</span>
              </Button>
            </AnchorLink>
          </Box>
        </motion.div>
      </Box>
    </div>
  );
};

export default IndustriesHero;
