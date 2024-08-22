import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import { Button } from "@/components/ui/button";
import { Typography } from "antd";

const steps = [
  {
    label: "Fill the Contact Form and Submit",
    description: `Start by filling out the contact form with your details, including your
              name, email, phone number, and a brief message about your project or inquiry.
              Once completed, submit the form.`,
  },
  {
    label: "Schedule a Meeting",
    description: `After submitting the form, you'll receive an email to schedule a meeting
              with our team. Choose a convenient time for a detailed discussion.`,
  },
  {
    label: "Receive a Project Proposal",
    description: `Following the meeting, we will analyze your requirements and prepare a
              comprehensive project proposal outlining the scope, timeline, and costs.
              This proposal will be sent to you for review.`,
  },
  {
    label: "Project Begins",
    description: `Once the proposal is approved, we will kick off the project.
              Our team will begin working on the agreed-upon tasks and deliverables.`,
  },
  {
    label: "Project Completion",
    description: `Upon completion of the project, we will deliver the final product,
              conduct any necessary testing, and ensure all requirements have been met.
              A final review and handover will take place.`,
  },
];

export default function ContactStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} className="text-[12px]">
            <StepLabel
              optional={
                index === 4 ? <Typography>Last step</Typography> : null
              }>
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography
                className="text-[12px]"
                style={{ fontFamily: "calistoga" }}>
                {step.description}
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div className="space-x-2 mt-3">
                  <Button size="sm" onClick={handleNext}>
                    {index === steps.length - 1 ? "Finish" : "Continue"}
                  </Button>
                  <Button size="sm" disabled={index === 0} onClick={handleBack}>
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Button size="sm" className="mt-5" onClick={handleReset}>
          Restart
        </Button>
      )}
    </Box>
  );
}
