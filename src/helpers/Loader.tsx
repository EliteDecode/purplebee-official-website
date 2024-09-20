import { Box } from "@mui/material";
import { ClipLoader } from "react-spinners";

const Loader = () => {
  return (
    <Box className="h-[50vh] flex flex-col items-center justify-center">
      <ClipLoader color="#ad9440" />
    </Box>
  );
};

export default Loader;
