import { Box, Grid } from "@mui/material";
import TitleText from "../common/TitleText";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import industriesImage from "@/assets/images/navbar/navbar_industries.jpg";
import trainingImage from "@/assets/images/navbar/navbar_training.jpg";
import companyImage from "@/assets/images/navbar/navbar_company.jpg";

import { Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// Install modules
const LatestProjects = () => {
  return (
    <Box className="bg-white py-16 sm:block hidden">
      <Box className="custom-c p-5 relative rounded-md">
        <TitleText title="Latest Projects" />
        <Grid container className="mt-8 sm:block hidden">
          <Grid item md={12}></Grid>
          <Grid item md={12}>
            <Swiper
              modules={[Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000 }}
              slidesPerView={2}
              spaceBetween={30}
              loop={true}>
              <SwiperSlide>
                <img src={industriesImage} alt="Image 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={trainingImage} alt="Image 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={companyImage} alt="Image 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={industriesImage} alt="Image 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={trainingImage} alt="Image 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={companyImage} alt="Image 3" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={industriesImage} alt="Image 1" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={trainingImage} alt="Image 2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src={companyImage} alt="Image 3" />
              </SwiperSlide>
              {/* Add more slides as needed */}
            </Swiper>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LatestProjects;
