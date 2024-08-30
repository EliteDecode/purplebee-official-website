import { Box } from "@mui/material";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useContactForm from "@/hooks/form-hooks/useContactForm";

const ContactForm = () => {
  const { isLoading, formik } = useContactForm();

  return (
    <Box className="bg-white p-8 rounded-lg shadow-lg mx-auto">
      <form className="space-y-6" onSubmit={formik.handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            className={`w-full px-4 py-2 text-[13px] border ${formik.touched.fullName && formik.errors.fullName ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-1 focus:ring-primary`}
            placeholder="Your Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.fullName}
          />
          {formik.touched.fullName && formik.errors.fullName ? (
            <div className="text-red-500 text-[10px] mt-1">
              {formik.errors.fullName}
            </div>
          ) : null}
        </div>

        <Box className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className={`w-full px-4 py-2 text-[13px] border ${formik.touched.email && formik.errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-1 focus:ring-primary`}
              placeholder="Your Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-[10px] mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              className={`w-full px-4 py-2 text-[13px] border ${formik.touched.phone && formik.errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-1 focus:ring-primary`}
              placeholder="Your Phone Number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-[10px] mt-1">
                {formik.errors.phone}
              </div>
            ) : null}
          </div>
        </Box>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Service
          </label>
          <Select
            name="service"
            onValueChange={(value) => formik.setFieldValue("service", value)}
            value={formik.values.service}>
            <SelectTrigger
              className={`w-full border ${formik.touched.service && formik.errors.service ? "border-red-500" : "border-gray-300"} rounded-lg`}>
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="elearning">E-learning</SelectItem>
              <SelectItem value="healthcare">Health Care</SelectItem>
              <SelectItem value="ecommerce">E-commerce Solutions</SelectItem>
              <SelectItem value="automotive">Automotive</SelectItem>
              <SelectItem value="logistics">Logistics</SelectItem>
              <SelectItem value="management">Management Software</SelectItem>
            </SelectContent>
          </Select>
          {formik.touched.service && formik.errors.service ? (
            <div className="text-red-500 text-[10px] mt-1">
              {formik.errors.service}
            </div>
          ) : null}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            className={`w-full px-4 py-2 text-[13px] border ${formik.touched.message && formik.errors.message ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-1 focus:ring-primary`}
            rows={4}
            placeholder="Your Message"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.message}></textarea>
          {formik.touched.message && formik.errors.message ? (
            <div className="text-red-500 text-[10px] mt-1">
              {formik.errors.message}
            </div>
          ) : null}
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary transition">
          {isLoading ? "Please wait..." : "Submit"}
        </button>
      </form>
    </Box>
  );
};

export default ContactForm;
