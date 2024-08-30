import { Box } from "@mui/material";
import contact from "@/assets/images/company/abt_ban.jpg";
import { Typography } from "antd";
import TitleText from "@/components/common/TitleText";
import { companyAchivement } from "@/utils/company.content";

const Achievement = () => {
  return (
    <Box className="py-16 bg-tetiary my-10">
      <Box className="relative grid sm:grid-cols-2 grid-cols-1">
        <Box className="relative">
          <Box className=" h-[45vh] sm:w-[90%] w-full rounded-tr-full rounded-br-full bg-primary"></Box>
          <Box className="absolute sm:w-[45%] w-full -top-[140px]  sm:right-32 right-10 rounded-md">
            <img
              src={contact}
              alt=""
              className=" sm:w-full w-[90%] shadow-lg -top-5  rounded-md"
            />
          </Box>
        </Box>
        <Box className="custom-c ">
          <Box className="sm:mt-0 mt-16">
            <TitleText title="achievements" />
            <Box className="grid sm:grid-cols-3 grid-cols-2 mt-3 gap-4">
              {companyAchivement?.map((item, index) => (
                <Box key={index} className="mt-1">
                  <Box className="flex border bg-white p-3 rounded-md shadow-lg  items-center space-x-4">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-[30px]"
                    />
                    <Box>
                      <Typography className="font-bold text-[17px]">
                        {item.title}
                      </Typography>
                      <Typography className="text-gray-500 text-[15px]">
                        {item.desc}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Achievement;
