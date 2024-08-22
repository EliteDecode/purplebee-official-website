import { IndustriesQualityProps } from "@/types/majorTypes";
import { Box } from "@mui/material";

const Qualities = ({ data }: IndustriesQualityProps) => {
  return (
    <Box>
      <Box className="bg-white py-16">
        <Box className="custom-c sm:p-5 p-2 relative rounded-md">
          <Box className="grid sm:grid-cols-2 grid-cols-1 sm:gap-2 gap-4">
            <Box>
              <img
                src={data?.image}
                alt={data?.title}
                className="h-full w-full"
              />
            </Box>
            <Box className="sm:w-[90%] w-full m-auto">
              <h3 className="sm:text-[40px] text-[25px] sm:leading-none font-black mb-4">
                {data?.title}
              </h3>
              <p className="text-md text-gray-600 mb-4">{data?.description}</p>
              <ul className="list-disc grid grid-cols-2 pl-5">
                {data?.qualities?.map((quality, index) => (
                  <li key={index} className="text-gray-600 text-[12px] mb-2">
                    {quality}
                  </li>
                ))}
              </ul>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Qualities;
