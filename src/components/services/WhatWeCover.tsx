import { ICover } from "@/utils/service.content";
import { Box } from "@mui/material";
import TitleText from "../common/TitleText";

import checkMark from "@/assets/icons/service/checked.png";
import { Typography } from "antd";

const WhatWeCover = ({ data }: { data: ICover[] }) => {
  return (
    <Box className="bg-white">
      <Box className="custom-c p-5 relative rounded-md">
        <TitleText
          title="What We Cover"
          description="We cover a wide range of services, including software development, web design, mobile app development, digital marketing, and more. Our team of experts is dedicated to delivering high-quality solutions that meet the unique needs of our clients."
        />
        <Box className="space-y-4 mt-8">
          {data?.map((item, index) => (
            <Box className="flex items-center space-x-3" key={index}>
              <img src={checkMark} alt="" className="w-[33px]" />
              <Box className="">
                <Typography className="text-[20px] font-semibold">
                  {item.title}
                </Typography>
                <Typography className=" text-[14px]">
                  {item.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default WhatWeCover;
