import { Box } from "@mui/material";
import { Typography } from "antd";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { IoIosPhonePortrait } from "react-icons/io";
import { FiMail } from "react-icons/fi";

const transition = {
  type: "spring",
  damping: 5,
  stiffness: 60,
};

const Hero = () => {
  return (
    <div className="sm:h-[100vh] h-[100vh] w-full flex flex-col items-center justify-center hero_bg">
      <Box className="w-[85%] text-center m-auto ">
        <motion.div
          className="mt-20"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 30, opacity: 1 }}
          transition={transition}>
          <Typography
            className="font-bold text-gray-100 text-[26px]"
            style={{ fontFamily: "calistoga" }}>
            Welcome to
          </Typography>
          <Typography className="sm:text-[60px] text-[40px] text-white font-black">
            PURPLEBEE TECHNOLOGIES
          </Typography>
          <Typography className="text-white -mt-2 text-[22px]">
            A Hub for Innovation, Creativity, and Excellence
          </Typography>
          <Box className="flex items-center mt-5 justify-center space-x-1">
            <Button className="bg-primary flex items-center space-x-1">
              <FiMail size={15} /> <span>Contact Us</span>
            </Button>
            <Button className="bg-secondary text-dark flex items-center space-x-1">
              <IoIosPhonePortrait size={15} /> <span>Get a Quote</span>
            </Button>
          </Box>
        </motion.div>
      </Box>
    </div>
  );
};

export default Hero;
