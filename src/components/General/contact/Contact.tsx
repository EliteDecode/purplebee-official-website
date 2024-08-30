import { Box, Grid } from "@mui/material";
import { Typography } from "antd";
import ContactStepper from "./ContactStepper";
import ContactForm from "@/components/forms/ContactForm";

const Contact = () => {
  return (
    <Box className="bg-tetiary" id="contact">
      <Box className="custom-c py-16">
        <Grid container spacing={4}>
          <Grid item sm={12} md={6}>
            <Box className="border-r">
              <Typography className="text-[25px] font-bold capitalize">
                Book a free IT consultation
              </Typography>
              <Typography>What happens next?</Typography>
              <Box className="mt-5">
                <ContactStepper />
              </Box>
            </Box>
          </Grid>
          <Grid item sm={12} md={6}>
            <Box className="">
              <ContactForm />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Contact;
