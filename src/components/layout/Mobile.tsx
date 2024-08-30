import Logo from "@/assets/images/Logo.png";
import useMobileNavbar from "@/hooks/useMobileNavbar";
import { NavbarLinks } from "@/utils/general.content.";
import { Box } from "@mui/material";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Mobile = () => {
  const { toggleSidebar, sidebarOpen } = useMobileNavbar();
  return (
    <Box className="md:hidden relative">
      <Box className="p-5 flex justify-between items-center">
        <Box>
          <Link to="/">
            <img src={Logo} alt="Purplebee Logo" className="w-[35%]" />
          </Link>
        </Box>
        <Box onClick={toggleSidebar}>
          <IoIosMenu size={40} />
        </Box>
      </Box>
      <Box
        className={`w-full absolute top-0 bg-white h-screen overflow-scroll transition-transform duration-500 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}>
        <Box className="p-2">
          <Box className="flex justify-between items-center">
            <Box>
              <img src={Logo} alt="Purplebee Logo" className="w-[35%]" />
            </Box>
            <Box onClick={toggleSidebar}>
              <IoMdClose size={40} />
            </Box>
          </Box>
          <Sidebar
            className="w-full mt-5 border-none bg-white"
            style={{ width: "100%" }}
            collapsedWidth="100%"
            backgroundColor="white">
            {NavbarLinks?.map((item, index) => (
              <Menu key={index}>
                {item?.links ? (
                  <SubMenu label={item?.title}>
                    <div className="grid gap-2 grid-cols-2 h-[30vh]">
                      {item?.links.map((link, i) => (
                        <MenuItem
                          className="border py-0 px-2 my-2 w-full rounded-md bg-gray-100"
                          key={i}>
                          <Link to={link?.path} onClick={toggleSidebar}>
                            <div className="flex w-full items-center space-x-2">
                              <span className="text-[14px]">{link?.title}</span>
                            </div>
                          </Link>
                        </MenuItem>
                      ))}
                    </div>
                  </SubMenu>
                ) : (
                  <MenuItem>
                    {" "}
                    <Link to={item?.title}>{item?.title}</Link>{" "}
                  </MenuItem>
                )}
              </Menu>
            ))}
          </Sidebar>
          {/* <Box className="w-[95%] grid gap-2 grid-cols-2 m-auto mt-5 rounded-md shadow-md">
            <img
              src={serviceImage}
              alt="Service"
              className="rounded-md h-full"
            />
            <img
              src={companyImage}
              alt="Company"
              className="rounded-md h-full"
            />
            <img
              src={industryImage}
              alt="Industry"
              className="rounded-md h-full"
            />
            <img
              src={trainingImage}
              alt="Training"
              className="rounded-md h-full"
            />
          </Box> */}
          <Box className="absolute z-10 bg-white bottom-0 right-0 left-0 w-full p-4 border-t border-gray-300">
            <Box className="flex items-center justify-center w-full space-x-2">
              <AnchorLink href="#contact" onClick={toggleSidebar}>
                <Button size="lg" className="text-white">
                  Send Us a Message
                </Button>
              </AnchorLink>
              <AnchorLink href="#contact" onClick={toggleSidebar}>
                <Button size="lg" className="bg-[#0F172A] text-white">
                  Get a Quote
                </Button>
              </AnchorLink>
            </Box>
            <Box className="text-center mt-2">
              © 2023 Purplebee. All rights reserved.
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Mobile;
