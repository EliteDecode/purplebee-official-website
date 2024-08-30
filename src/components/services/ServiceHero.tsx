import { Box } from "@mui/material";
import { Typography } from "antd";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";
import { Button } from "../ui/button";

import { IContent } from "@/utils/service.content";
import AnchorLink from "react-anchor-link-smooth-scroll";

const transition = {
  type: "spring",
  damping: 5,
  stiffness: 60,
};

const ServiceHero = ({ data }: { data: IContent }) => {
  return (
    <div
      className="sm:py-28 py-16 w-full flex justify-center items-start flex-col"
      style={{
        backgroundImage: `url(${data.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundColor: "rgba(255, 255, 255, 0.6)",
        backgroundBlendMode: "overlay",
      }}>
      <Box className="w-[85%] text-center m-auto">
        <motion.div
          className="sm:w-[60%] m-auto w-full"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 30, opacity: 1 }}
          transition={transition}>
          <Typography className="sm:text-[45px] text-[30px] my-4 leading-none text-primary font-bold">
            {data.title}
          </Typography>

          <Typography
            className="text-gray-800  text-[15px]"
            style={{ fontFamily: "oswald" }}>
            {data.description}
          </Typography>
          <Box className="flex items-center justify-center mt-5 space-x-1">
            <AnchorLink href="#contact">
              <Button className="bg-primary flex items-center space-x-1">
                <FiMail size={15} /> <span>Contact Us</span>
              </Button>
            </AnchorLink>
          </Box>
        </motion.div>
      </Box>
    </div>
  );
};

export default ServiceHero;
