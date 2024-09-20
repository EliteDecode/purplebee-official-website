import { Button } from "@/components/ui/button";
import { Box } from "@mui/material";
import { Typography } from "antd";
import errorImg from "../assets/images/Error/error.png";

const Error = () => {
  return (
    <Box className="h-screen flex flex-col items-center bg-white">
      <img src={errorImg} width="30%" />
      <Typography className="text-[15px] font-semibold mb-3">
        An error occurred, unable to retrieve the student's certificate.
      </Typography>
      <Button onClick={() => window.location.reload()}>Refresh</Button>
    </Box>
  );
};

export default Error;
