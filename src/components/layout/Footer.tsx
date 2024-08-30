import { NavbarLinks, projects } from "@/utils/general.content.";
import { Box } from "@mui/material";
import { Typography } from "antd";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <Box className="bg-dark">
      <Box className="custom-c py-8">
        <Box className="grid sm:grid-cols-5 grid-cols-3 gap-2 border-b border-[#80808052] py-12">
          {[...NavbarLinks.slice(0, 4), ...projects]?.map((item, index) => (
            <Box key={index}>
              <Typography
                className="text-white font-bold text-[20px]"
                style={{ fontFamily: "calistoga" }}>
                {item?.title}
              </Typography>
              <Box className="space-y-2 mt-3">
                {item?.links?.map((link, index) => (
                  <Typography
                    className="text-gray-300 hover:text-secondary cursor-pointer text-[14px]"
                    key={index}>
                    {link?.title}
                  </Typography>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
        <Box className="py-12 grid gap-2 sm:grid-cols-4 grid-cols-2 sm:text-center text-left">
          <Box className="mt-5">
            <Typography
              style={{ fontFamily: "calistoga" }}
              className="text-gray-300 font-bold text-[20px]">
              Address
            </Typography>
            <Typography className="text-gray-300 text-[14px]">
              42 Ojido market Area, Ado Ekiti.
            </Typography>
            <Typography className="text-gray-300 text-[14px]">
              Ekiti, Nigeria.
            </Typography>
          </Box>
          <Box className="mt-5  sm:border-r border-r-0 sm:border-l border-l-0  border-[#80808052] sm:p-3 p-0">
            <Typography
              style={{ fontFamily: "calistoga" }}
              className="text-gray-300 font-bold text-[20px]">
              Emails
            </Typography>
            <Typography className="text-gray-300 text-[14px]">
              info@purplebeeTech.com
            </Typography>
            <Typography className="text-gray-300 text-[14px]">
              purplebeetech@gmail.com
            </Typography>
          </Box>
          <Box className="mt-5 sm:border-r border-r-0 border-[#80808052]">
            <Typography
              style={{ fontFamily: "calistoga" }}
              className="text-gray-300 font-bold text-[20px]">
              Phone
            </Typography>
            <Typography className="text-gray-300 text-[14px]">
              +234 (90) 6060 6527
            </Typography>
            <Typography className="text-gray-300 text-[14px]">
              +234 (91) 2220 5393
            </Typography>
          </Box>
          <Box className="mt-5">
            <Typography
              style={{ fontFamily: "calistoga" }}
              className="text-gray-300 font-bold text-[20px]">
              Social Accounts
            </Typography>
            <Box className="flex items-center sm:justify-center justify-start space-x-2">
              <FaFacebookSquare className="text-gray-300 text-[20px] cursor-pointer" />
              <FaInstagramSquare className="text-gray-300 text-[20px] cursor-pointer" />
              <FaTwitterSquare className="text-gray-300 text-[20px] cursor-pointer" />
              <FaLinkedin className="text-gray-300 text-[20px] cursor-pointer" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="bg-[#000] p-5">
        <Typography className="text-center text-gray-300 text-[14px]">
          &copy; {new Date().getFullYear()} PurplebeeTech. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;
