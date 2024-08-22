import { IndustryScopeProps } from "@/types/majorTypes";
import { Box } from "@mui/material";
import { Typography } from "antd";

const Scope = ({ data }: IndustryScopeProps) => {
  return (
    <Box>
      <Box className="bg-tetiary py-16">
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
          <Box className="grid sm:grid-cols-4 sm:gap-2 gap-1 grid-cols-1">
            {data?.scope?.map((item, index) => (
              <Box
                key={index}
                className=" border p-3 rounded-md shadow-md bg-white sm:mt-8 mt-2">
                <Box className="flex items-center">
                  <Typography className="text-[25px] text-primary font-black">
                    0{index + 1}
                  </Typography>
                </Box>
                <Box>
                  <Typography className="font-bold">{item?.item}</Typography>
                  <Typography className="mt-2 text-[12px] text-gray-500">
                    {item?.detail}
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

export default Scope;
