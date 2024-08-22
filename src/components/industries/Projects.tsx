import { IndustryProjectsProps } from "@/types/majorTypes";
import { Box } from "@mui/material";
import { Typography } from "antd";

const Projects = ({ data }: IndustryProjectsProps) => {
  return (
    <Box>
      <Box className="bg-white py-16">
        <Box className="custom-c sm:p-5 p-2 relative rounded-md">
          <Box className="text-center">
            <Typography
              className="sm:text-[40px] text-[25px] text-center font-bold"
              style={{ lineHeight: "2.5rem" }}>
              {data?.title}
            </Typography>

            <Typography className="text-center sm:w-[70%] w-full mt-4 m-auto sm:text-[15px] text-[12px] ">
              {data?.description}
            </Typography>
          </Box>
          <Box className="grid sm:grid-cols-3 gap-2 grid-cols-1">
            {data?.projects?.map((item, index) => (
              <Box
                key={index}
                className=" border p-3 rounded-md shadow-md bg-white mt-8">
                <Box className="flex  items-center">
                  <img
                    src={item?.image}
                    alt={item?.title}
                    className=" rounded-md sm:h-[35vh] h-[28vh] w-full"
                  />
                </Box>
                <Box className="mt-5">
                  <Typography className="font-bold text-[20px]">
                    {item?.title}
                  </Typography>
                  <Typography className=" text-[12px] text-gray-500">
                    {item?.description}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
