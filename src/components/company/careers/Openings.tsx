import emptyImage from "@/assets/images/company/empty_career.png";
import TitleText from "@/components/common/TitleText";
import { Box } from "@mui/material";

const Openings = () => {
  return (
    <Box className="bg-white py-16">
      <Box className="custom-c p-5 relative text-center rounded-md">
        <TitleText
          title="Current Openings"
          description="Explore our current openings and apply today! We're always looking for talented individuals to join our team."
        />{" "}
        <Box className="flex flex-col items-center justify-center mt-10">
          <img src={emptyImage} alt="empty_career" className="w-[50%]" />
          <span className="opacity-70 font-light text-[12px]">
            <span className="text-red-500 font-light">( * )</span> No openings
            at the moment. Please check back later.
          </span>
        </Box>
      </Box>{" "}
    </Box>
  );
};

export default Openings;
