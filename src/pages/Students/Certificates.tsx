import StudentCertificate from "@/components/students/StudentCertificate";
import StudentHero from "@/components/students/StudentHero";
import { Box } from "@mui/material";

const Certificates = () => {
  return (
    <Box>
      <StudentHero />
      <StudentCertificate />
    </Box>
  );
};

export default Certificates;
