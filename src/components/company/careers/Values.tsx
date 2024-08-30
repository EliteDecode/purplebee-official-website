import TitleText from "@/components/common/TitleText";
import { companyValues } from "@/utils/company.content";
import { Box, Grid } from "@mui/material";
import { Typography } from "antd";

const Values = () => {
  return (
    <Box className="bg-tetiary py-16">
      <Box className="custom-c p-5 relative rounded-md">
        <TitleText title="Our Values" />
        <Box className="mt-5">
          <Grid container spacing={2}>
            {companyValues?.map((item, index) => (
              <Grid item md={4} key={index}>
                <Box className="bg-white shadow-md p-5 rounded-lg">
                  <img src={item?.icon} alt={item?.title} className="w-[10%]" />
                  <Typography className="text-[#000000] text-[16px] mt-3 font-bold capitalize">
                    {item?.title}
                  </Typography>
                  <Typography
                    className=" text-[12px] opacity-70"
                    style={{ fontFamily: "calistoga" }}>
                    {item?.desc}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Values;
