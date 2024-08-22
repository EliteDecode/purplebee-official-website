import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Logo from "../../assets/images/Logo.png";
import { Box, Grid } from "@mui/material";
import { Button } from "../ui/button";
import { Typography } from "antd";
import { MiniBarLinks, NavbarLinks } from "@/utils/general.content.";
import { Link } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";
import { IoIosPhonePortrait } from "react-icons/io";
import { FiMail } from "react-icons/fi";
import useNavbarScroll from "@/hooks/useNavbarScroll";

import Mobile from "./Mobile";

const Navbar = () => {
  const { showMiniBar, hideMainBar } = useNavbarScroll();

  return (
    <>
      {/* Main Bar */}
      <Box
        className={`items-center fixed top-0 left-0 right-0 w-full  bg-white  z-10 transition-all duration-300 ${
          hideMainBar ? "translate-y-[-100%]" : "translate-y-0"
        }`}>
        <Box className="sm:block hidden container p-5">
          <Grid container>
            <Grid item xs={2} md={2}>
              <Box>
                <Link to="/">
                  <img src={Logo} alt="Purplebee Logo" className="w-[70%]" />
                </Link>
              </Box>
            </Grid>
            <Grid item xs={8} md={8}>
              <Box className="flex justify-center items-center">
                <NavigationMenu className="justify-center z-10 bg-white">
                  <NavigationMenuList>
                    {NavbarLinks?.map((item, index) => (
                      <NavigationMenuItem key={index}>
                        {item?.links ? (
                          <>
                            <NavigationMenuTrigger className="text-[17px]">
                              {item?.title}
                            </NavigationMenuTrigger>
                            <NavigationMenuContent className="border-none">
                              <Box className={`p-4 ${item?.width} `}>
                                <Grid container spacing={2}>
                                  <Grid item md={7}>
                                    <Box className="bg-gray-200 p-4 rounded-md">
                                      <Typography className="font-bold text-[18px]">
                                        {item?.title}
                                      </Typography>
                                      <Typography>
                                        {item?.description}
                                      </Typography>
                                      <img
                                        src={item?.image}
                                        alt={item?.title}
                                        className="mt-5 rounded-md shadow-md"
                                      />
                                    </Box>
                                  </Grid>
                                  <Grid item md={5}>
                                    <Box className="">
                                      <ul
                                        className={`grid  ${
                                          item?.links?.length > 4 &&
                                          item?.links?.length < 9
                                            ? "grid-cols-2"
                                            : item?.links?.length > 8
                                              ? "grid-cols-3"
                                              : "grid-cols-1"
                                        } gap-2 `}>
                                        {item?.links?.map((link, index) => (
                                          <a href={link?.path} key={index}>
                                            <li className="text-sm p-2 flex items-center space-x-1 bg-gray-50 shadow-sm cursor-pointer hover:shadow-sm rounded-md ">
                                              <IoMdCheckmark size={14} />{" "}
                                              <span className="text-[10px]">
                                                {link?.title}
                                              </span>
                                            </li>
                                          </a>
                                        ))}
                                      </ul>
                                    </Box>

                                    <Typography className="underline text-[10px] text-gray-700 mt-3">
                                      All Technologies
                                    </Typography>
                                  </Grid>
                                </Grid>
                              </Box>
                            </NavigationMenuContent>
                          </>
                        ) : (
                          <>
                            <Link to={item?.title}>
                              <NavigationMenuLink
                                className={navigationMenuTriggerStyle()}>
                                {item?.title}
                              </NavigationMenuLink>
                            </Link>
                          </>
                        )}
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </Box>
            </Grid>
            <Grid item xs={2} md={2}>
              <Box className="flex items-center space-x-1">
                <Button
                  size="sm"
                  className="bg-primary flex items-center space-x-1">
                  <FiMail size={15} /> <span>Contact Us</span>
                </Button>
                <Button
                  size="sm"
                  className="bg-secondary text-dark flex items-center space-x-1">
                  <IoIosPhonePortrait size={15} /> <span>Get a Quote</span>
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        {/* Mobile Menu Bar */}
        <Mobile />
      </Box>

      {/* Mini Bar */}
      <Box
        className={`container p-3 flex justify-between bg-primary transition-all duration-300 ${
          hideMainBar ? "fixed top-0 left-0 right-0 z-10" : ""
        } ${showMiniBar ? "block" : "hidden"}`}>
        <Box className="flex flex-wrap items-center space-x-4">
          {MiniBarLinks?.map((item, index) => (
            <Typography
              className="text-white text-[13px] cursor-pointer"
              key={index}>
              {item?.title}
            </Typography>
          ))}
        </Box>

        <Box className="flex justify-end items-center">
          <IoIosPhonePortrait size={20} className="text-white mr-2" />
          <Typography className="text-white">Book a Call</Typography>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;
