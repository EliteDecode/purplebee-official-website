import { Testimonies } from "@/utils/general.content.";
import TitleText from "../common/TitleText";
import { Box, Grid } from "@mui/material";
import { Avatar, Typography } from "antd";
import ShineBorder from "../magicui/shine-border";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "../common/SwiperNavButtons";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
  return (
    <Box className="bg-white py-16">
      <Box className="custom-c p-5 relative rounded-md">
        <TitleText
          title="Testimonials"
          description="Customers of various sizes, scopes, and specializations continue
          entrusting their IT plans to our software company because they are
          fully satisfied with our deliverables. Here you can find the feedback
          they have shared."
        />

        <Box className="mt-16 relative">
          <Swiper
            modules={[Autoplay, Navigation]}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}>
            {Testimonies?.map((item, index) => (
              <SwiperSlide key={index}>
                <ShineBorder
                  className="bg-tetiary shadow-lg rounded-md"
                  color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}>
                  <Grid
                    container
                    className="mt-5 sm:py-8 py-2 sm:px-16 px-2"
                    spacing={4}>
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={6}
                      className="mt-5 relative"
                      key={index}>
                      <Box className="sm:absolute relative bottom-0">
                        <Box className="flex flex-col my-3 relative">
                          <FaQuoteLeft className="text-primary" />
                          <Typography className="text-[15px] my-3">
                            {item?.testimonial}
                          </Typography>
                          <FaQuoteRight className="self-end text-primary" />
                        </Box>

                        <Box className="flex mt-10 items-center space-x-2 ">
                          <Avatar
                            size={70}
                            style={{ backgroundColor: "#87d068" }}
                            icon={<img src={item?.image} alt={item?.name} />}
                          />
                          <Box>
                            <Typography className="text-[25px] font-bold">
                              {item?.name}
                            </Typography>
                            <Typography className="text-[14px] -mt-1">
                              {item?.position}
                            </Typography>
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                      <Box className="border p-8 bg-primary rounded-md">
                        <Typography className="text-[25px] text-white  font-bold">
                          {item?.companyName}
                        </Typography>
                        <Box className="mt-5">
                          <Typography
                            className="text-[20px] opacity-90 font-bold text-white"
                            style={{ fontFamily: "oswald" }}>
                            About Project
                          </Typography>
                          <Typography className="text-[15px] font-normal text-white opacity-70">
                            {item?.aboutProject}
                          </Typography>
                        </Box>
                        <Box className="mt-5">
                          <Typography
                            className="text-[20px] opacity-90 font-bold text-white"
                            style={{ fontFamily: "cursive" }}>
                            {item?.companyLocation}.
                          </Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </ShineBorder>
              </SwiperSlide>
            ))}
            <SwiperNavButtons />
          </Swiper>
        </Box>
      </Box>
    </Box>
  );
};

export default Testimonials;
