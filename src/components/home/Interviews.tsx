import { Box, Grid } from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "../common/SwiperNavButtons";
import ReactPlayer from "react-player/lazy";
import TitleText from "../common/TitleText";
import { InterviewItems } from "@/utils/general.content.";
import { Typography } from "antd";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaCirclePlay } from "react-icons/fa6";
import { Button } from "../ui/button";

const Interviews = () => {
  return (
    <Box className=" bg-[#0d030f]">
      <Box className="py-16 ">
        <Box className="custom-c p-5 relative rounded-md">
          <TitleText
            title="Industry Interviews"
            description="Purplebee Tech regularly provides great opportunities to learn something new by interviewing the students and opinion leaders from various scientific and business domains."
            color="#fff"
          />
          <Box className="mt-16 relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}>
              {InterviewItems?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Box>
                    <Grid container>
                      <Grid item sm={12} md={8}>
                        <Box className="relative  flex items-center justify-center flex-col">
                          <img src={item?.cover} alt={item?.title} />
                          <Box className="absolute z-10">
                            <Dialog>
                              <DialogTrigger className="justify-center" asChild>
                                <Button className="play-btn-transition bg-red-500">
                                  <FaCirclePlay size={25} color="#fff" />
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="bg-[#2f1435] border-none sm:max-w-[70%]">
                                <DialogHeader>
                                  <DialogTitle className="text-white">
                                    {item?.title}
                                  </DialogTitle>
                                  <DialogDescription className="text-gray-400 font-normal">
                                    {item?.description}
                                  </DialogDescription>
                                </DialogHeader>
                                <Box className="my-5">
                                  <ReactPlayer
                                    url={item?.url}
                                    width="100%"
                                    height="60vh"
                                  />
                                </Box>
                              </DialogContent>
                            </Dialog>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item sm={12} md={4}>
                        <Box className="p-5 bg-[#2f1435] h-full">
                          <Typography className="text-[20px] font-bold text-white">
                            {item?.title}
                          </Typography>
                          <Typography className="text-[13px] font-normal text-white mt-5">
                            {item?.description}
                          </Typography>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </SwiperSlide>
              ))}
              <SwiperNavButtons />
            </Swiper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Interviews;
