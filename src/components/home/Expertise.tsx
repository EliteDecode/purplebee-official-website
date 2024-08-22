import { Box, Grid } from "@mui/material";
import TitleText from "../common/TitleText";
import { expertiseDetails } from "@/utils/general.content.";
import { Typography } from "antd";
import { GiCheckMark } from "react-icons/gi";

const Expertise = () => {
  return (
    <Box className="bg-white py-16">
      <Box className="custom-c p-5 relative rounded-md">
        <TitleText
          title="Areas of expertise"
          description="As a top-ranked and trusted software development company, we run a pool of proficient IT experts and use the best available tools and techniques to engineer advanced software for our customers."
        />
        <Box className="mt-5">
          <Grid container spacing={2}>
            {expertiseDetails?.map((item, index) => (
              <Grid item md={4} key={index}>
                <Box className="bg-white shadow-md p-2 rounded-lg">
                  <img
                    src={item?.image}
                    alt={item?.expertise}
                    className="w-full rounded-lg"
                  />
                  <Box className="p-5">
                    <Typography className="text-[#000000] text-[25px] mt-3 font-bold capitalize">
                      {item?.expertise}
                    </Typography>
                    {item?.details?.map((detail, index) => (
                      <Box
                        key={index}
                        className="flex items-center gap-2 mt-2 text-[#000000] opacity-90">
                        <GiCheckMark className="text-secondary" size={13} />
                        <Typography className="text-[12px]">
                          {detail}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
};

export default Expertise;
