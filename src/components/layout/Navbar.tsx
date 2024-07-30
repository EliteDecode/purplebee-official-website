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
import { NavbarLinks } from "@/utils";
import { Link } from "react-router-dom";
import { IoMdCheckmark } from "react-icons/io";

const Navbar = () => {
  return (
    <Box className="items-center  container p-3  z-0">
      <Grid container>
        <Grid item md={1}>
          <Box>
            <img src={Logo} alt="Purplebee Logo" className="w-[100%]" />
          </Box>
        </Grid>
        <Grid item md={10}>
          <Box className="flex justify-center items-center">
            <NavigationMenu className="justify-center z-10 bg-white">
              <NavigationMenuList>
                {NavbarLinks?.map((item, index) => (
                  <NavigationMenuItem key={index}>
                    {item?.links ? (
                      <>
                        <NavigationMenuTrigger>
                          {item?.title}
                        </NavigationMenuTrigger>
                        <NavigationMenuContent>
                          <Box className={`p-4 ${item?.width} `}>
                            <Grid container spacing={2}>
                              <Grid item md={7}>
                                <Box className="bg-gray-200 p-4 rounded-md">
                                  <Typography className="font-bold text-[18px]">
                                    {item?.title}
                                  </Typography>
                                  <Typography>{item?.description}</Typography>
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
                                      <li
                                        className="text-sm p-2 flex items-center space-x-1 bg-gray-50 shadow-sm cursor-pointer hover:shadow-sm rounded-md "
                                        key={index}>
                                        <IoMdCheckmark size={14} />{" "}
                                        <span className="text-[10px]">
                                          {link?.title}
                                        </span>
                                      </li>
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
        <Grid item md={1}>
          <Box>
            <Button size="sm" className="bg-primary">
              Contact Us
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Navbar;
