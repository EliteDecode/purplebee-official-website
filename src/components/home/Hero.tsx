import { Box } from "@mui/material";
import { Typography } from "antd";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { IoIosPhonePortrait } from "react-icons/io";
import { FiMail } from "react-icons/fi";

const bounceTransition = {
  type: "spring",
  damping: 8,
  stiffness: 80,
};

const Hero = () => {
  return (
    <div className="sm:h-[100vh] h-[80vh] w-full flex flex-col items-center justify-center hero_bg">
      <Box className="w-[85%] text-center m-auto">
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...bounceTransition, delay: 1.2 }}>
          <Typography
            className=" font-bold text-gray-100 text-[26px]"
            style={{ fontFamily: "calistoga" }}>
            Welcome to
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...bounceTransition, delay: 0.8 }}>
          <Typography
            className="sm:text-[60px] text-[40px] text-white font-black"
            style={{ fontFamily: "raleway" }}>
            PURPLEBEE TECHNOLOGIES
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ...bounceTransition, delay: 0.4 }}>
          <Typography className="text-white  text-[24px]">
            A Hub for Innovation, Creativity, and Excellence
          </Typography>
        </motion.div>
        <motion.div
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={bounceTransition}>
          <Box className="flex items-center mt-5 justify-center space-x-1">
            <Button className="bg-primary flex items-center space-x-1">
              <FiMail size={15} /> <span>Contact Us</span>
            </Button>
            <Button className="bg-secondary flex items-center space-x-1">
              <IoIosPhonePortrait size={15} /> <span>Get a Quote</span>
            </Button>
          </Box>
        </motion.div>
      </Box>
    </div>
  );
};

export default Hero;
