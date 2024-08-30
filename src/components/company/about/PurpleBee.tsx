import TitleText from "@/components/common/TitleText";
import { Box } from "@mui/material";
import { Typography } from "antd";
import abtImage from "@/assets/images/company/abt2.jpg";

const PurpleBee = () => {
  return (
    <Box>
      <Box className="bg-white py-16">
        <Box className="custom-c sm:p-5 p-2 relative rounded-md">
          <Box className="grid sm:gap-8 gap-2 sm:grid-cols-2 grid-cols-1">
            <Box>
              <TitleText title="PURPLEBEE TECHNOLOGIES" />
              <Typography className="text-[12px] mt-3">
                At Purplebee Technologies, we are committed to transforming
                ideas into digital realities. Founded with a vision to bridge
                the gap between cutting-edge technology and everyday business
                needs, we specialize in creating innovative solutions that drive
                growth and efficiency.
              </Typography>
              <Typography className="text-[12px] mt-3">
                Our team of experts brings together years of experience in
                software development, digital strategy, and IT consulting,
                enabling us to deliver bespoke services that cater to the unique
                requirements of each client. Whether you're a startup looking to
                establish a digital presence or an established enterprise aiming
                to enhance your operations, Purplebee Technologies is your
                trusted partner. We believe in the power of collaboration and
                innovation.
              </Typography>
              <Typography className="text-[12px] mt-3">
                Our approach is customer-centric, ensuring that we not only meet
                but exceed expectations. From web and mobile app development to
                cloud computing and AI-driven solutions, we leverage the latest
                technologies to help you stay ahead in a competitive market. At
                Purplebee Technologies, we don't just build software; we build
                lasting relationships. Your success is our success, and we're
                here to support you every step of the way.
              </Typography>
            </Box>
            <Box className="mt-5">
              <img
                src={abtImage}
                alt="building"
                className="rounded-md border shadow-lg"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default PurpleBee;
