import { contactFormSchema } from "@/lib/schema";
import axios from "axios";
import { useFormik } from "formik";
import { useState } from "react";
import toast from "react-hot-toast";

const useContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const sendMail = async (values: {
    fullName: string;
    email: string;
    phone: string;
    service: string;
    message: string;
  }) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://xquestions-be.onrender.com/pbtech",
        values
      );

      if (response.data) {
        toast.success("Message sent successfully");
        setIsLoading(false);
      }
    } catch (error) {
      toast.error("Failed to send message");
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    },
    validationSchema: contactFormSchema,
    onSubmit: (values) => {
      sendMail(values);
    },
  });

  return { isLoading, formik };
};

export default useContactForm;
