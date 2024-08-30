import { Box, Grid } from "@mui/material";

import logo1 from "@/assets/images/patners/eklogo.png";
import logo2 from "@/assets/images/patners/grace4Impact.png";
import logo3 from "@/assets/images/patners/hust.png";
import logo4 from "@/assets/images/patners/oes.png";
import logo5 from "@/assets/images/patners/pbresult.png";

import techbg from "@/assets/images/company/abt3.jpg";
import { Typography } from "antd";
import { Button } from "../ui/button";
import { FiMail } from "react-icons/fi";
const CompaniesHelped = ({ data }: { data: string[] }) => {
  return (
    <div className="py-16">
      <Box className="custom-c">
        <Box className="">
          <Grid container spacing={4}>
            <Grid item xs={3} md={3}>
              <img src={data[0]} alt="" className="rounded-md" />
            </Grid>
            <Grid item xs={6} md={6}>
              {" "}
              <img src={data[1]} alt="" className="rounded-md" />
            </Grid>
            <Grid item xs={3} md={3}>
              {" "}
              <img src={data[2]} alt="" className="rounded-md" />
            </Grid>
          </Grid>
          <Box className="mt-16 flex items-center flex-col justify-center">
            <Typography className="text-[30px] font-bold">
              We've Helped over 20+ Companies
            </Typography>
            <Box className="grid grid-cols-5 mt-10">
              <img src={logo1} alt="" className="w-[50%] m-auto" />
              <img src={logo2} alt="" className="w-[50%] m-auto" />
              <img src={logo3} alt="" className="w-[50%] m-auto" />
              <img src={logo5} alt="" className="w-[50%] m-auto" />
              <img src={logo4} alt="" className="w-[50%] m-auto" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className="mt-16  py-32"
        style={{
          backgroundImage: `url(${techbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "rgba(0, 0, 0, 0.8)",
          backgroundAttachment: "fixed",
          backgroundBlendMode: "overlay",
        }}>
        <Box className=" custom-c text-center">
          <Typography className="text-[38px] text-white font-bold leading-10">
            {" "}
            Explore the Best Digital Services and Reliable
          </Typography>
          <Typography className="text-gray-300 text-[13px] w-[60%] m-auto mt-5">
            Our commitment to excellence ensures that we utilize the most
            advanced approaches in software development. Our experts are
            continually certified by leading industry authorities to maintain
            and enhance their skills, guaranteeing top-tier services for you.
          </Typography>

          <Box className="flex items-center justify-center mt-5 space-x-1">
            <Button className="bg-primary flex items-center space-x-1">
              <FiMail size={15} /> <span>Contact Us</span>
            </Button>
            <Button className="bg-secondary text-dark flex items-center space-x-1">
              <FiMail size={15} /> <span>Explore</span>
            </Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default CompaniesHelped;
