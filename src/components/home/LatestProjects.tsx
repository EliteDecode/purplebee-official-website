import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { LatestEvents } from "@/utils/general.content.";
import { Box } from "@mui/material";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { SwiperNavButtons } from "../common/SwiperNavButtons";
import TitleText from "../common/TitleText";
import { Button } from "../ui/button";

const LatestProjects = () => {
  return (
    <Box className="bg-tetiary">
      <Box className="py-16">
        <Box className="custom-c p-5 relative rounded-md">
          <TitleText
            title="Latest Events"
            description="Purplebee Tech regularly provides great opportunities to learn something new by interviewing the students and opinion leaders from various scientific and business domains."
          />
          <Box className="mt-16 relative">
            <Swiper
              modules={[Autoplay, Navigation]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              slidesPerView={1}
              spaceBetween={30}
              loop={true}>
              {LatestEvents?.map((item, index) => (
                <SwiperSlide key={index}>
                  <Box>
                    <Box className="relative">
                      <img
                        src={item?.cover}
                        alt={item?.title}
                        className="h-[40vh] w-full object-cover object-center"
                      />
                      <Box className="p-3 z-10">
                        <Dialog>
                          <DialogTrigger className="" asChild>
                            <Button
                              className="play-btn-transition"
                              variant="default">
                              About Event
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
                              <img
                                src={item?.cover}
                                alt={item?.title}
                                className="h-[40vh] w-full object-cover object-center"
                              />
                            </Box>
                          </DialogContent>
                        </Dialog>
                      </Box>
                    </Box>
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

export default LatestProjects;
