import { Box } from "@mui/material";
import { Typography } from "antd";
import { motion } from "framer-motion";
import { IoIosPhonePortrait } from "react-icons/io";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import certificateBg from "@/assets/images/students/certificate-bg.jpg";

const transition = {
  type: "spring",
  damping: 5,
  stiffness: 60,
};

const StudentHero = () => {
  return (
    <div
      className="sm:py-10 py-10 w-full flex flex-col"
      style={{
        backgroundImage: `url(${certificateBg})`,
        backgroundSize: "cover",
        backgroundPosition: "0px 30px",
        backgroundRepeat: "no-repeat",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        backgroundBlendMode: "overlay",
      }}>
      <Box className="w-[85%] m-auto">
        <motion.div
          className="mt-10 sm:w-[80%] w-full"
          initial={{ y: -200, opacity: 0 }}
          animate={{ y: 30, opacity: 1 }}
          transition={transition}>
          <Typography className="font-semibold text-gray-300 text-[20px]">
            Certificate Verification
          </Typography>
          <Typography
            className="sm:text-[35px] text-[25px] my-1 text-white uppercase font-black"
            style={{ lineHeight: "3rem" }}>
            Student Certification
          </Typography>
          <Typography
            className="text-gray-300 text-[12px]"
            style={{ fontFamily: "oswald" }}>
            This certifies that the student has successfully graduated from
            PurpleBee Technologies.
          </Typography>
          <Box className="flex items-center mt-5 space-x-1">
            <Link to="/training">
              <Button
                className="bg-secondary text-dark flex items-center space-x-1"
                size="sm">
                <IoIosPhonePortrait size={15} />{" "}
                <span>Explore Our Courses</span>
              </Button>
            </Link>
          </Box>
        </motion.div>
      </Box>
    </div>
  );
};

export default StudentHero;
