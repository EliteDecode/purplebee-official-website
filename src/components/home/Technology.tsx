import { useState } from "react";
import { Box } from "@mui/material";
import TitleText from "../common/TitleText";
import { iconMap, technologySet } from "@/utils/general.content.";
import { Typography } from "antd";
import ShineBorder from "../magicui/shine-border";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "../common/SwiperNavButtons";

const Technology = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (index: number) => {
    setSelectedTab(index);
  };
  return (
    <Box className="bg-tetiary py-16">
      <Box className="custom-c p-5 relative rounded-md">
        <TitleText
          title="Technology Set"
          description="Cooperate with competent and knowledgeable IT experts in web and mobile software engineering. As a trusted tech and business partner, we apply the most advanced technologies, frameworks, and components to build software notable for both its solid and effective back-end with intuitive UI/UX."
        />

        {/* Tab Section */}
        <Box display="flex" className="mt-5 ">
          {technologySet.map((category, index) => (
            <Box
              key={category.category}
              onClick={() => handleTabChange(index)}
              className={`cursor-pointer px-4 py-1 mr-2  text-center transition-all duration-300 ${
                selectedTab === index
                  ? "bg-secondary text-black"
                  : "bg-gray-200 text-gray-100"
              } rounded-md`}
              style={{
                transition: "background-color 0.3s ease, color 0.3s ease",
              }}>
              <Typography className="text-[13px]">
                {category.category}
              </Typography>
            </Box>
          ))}
        </Box>

        <Box mt={4}>
          <Swiper
            modules={[Autoplay, Navigation]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            slidesPerView={5}
            spaceBetween={30}
            loop={true}>
            {technologySet[selectedTab]?.tools?.map((tool, index) => {
              const IconComponent = iconMap[tool.icon];
              return (
                <SwiperSlide
                  className="w-full border-r border-l border-red-400"
                  key={index}>
                  <ShineBorder
                    className=" w-full"
                    color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                    <Box className="flex  flex-col items-center justify-center">
                      <IconComponent />
                      <Typography>{tool?.name}</Typography>
                    </Box>
                  </ShineBorder>
                </SwiperSlide>
              );
            })}
            <SwiperNavButtons />
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default Technology;
