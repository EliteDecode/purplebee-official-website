import { Box } from "@mui/material";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm = () => {
  return (
    <Box className="bg-white p-8 rounded-lg shadow-lg  mx-auto">
      <form className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            className="w-full px-4 py-2 text-[13px] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Your Name"
          />
        </div>

        <Box className="grid grid-cols-2 gap-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 text-[13px] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Your Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 text-[13px] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
              placeholder="Your Phone Number"
            />
          </div>
        </Box>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Service
          </label>
          <Select>
            <SelectTrigger className="w-full border border-gray-300 rounded-lg">
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
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message
          </label>
          <textarea
            className="w-full px-4 py-2 text-[13px] border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-primary"
            rows={4}
            placeholder="Your Message"></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary transition">
          Submit
        </button>
      </form>
    </Box>
  );
};

export default ContactForm;
