import * as Yup from "yup";

export const contactFormSchema = Yup.object({
  fullName: Yup.string().required("Full Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Phone number is not valid")
    .required("Phone number is required"),
  service: Yup.string().required("Please select a service"),
  message: Yup.string().required("Message is required"),
});
