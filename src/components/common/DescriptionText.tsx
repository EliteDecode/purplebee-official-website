import { DescriptionTextProps } from "@/types/commonTypes";
import { Typography } from "antd";

const DescriptionText = ({ description }: DescriptionTextProps) => {
  return (
    <Typography
      className="text-[18px]  opacity-80 "
      style={{ fontFamily: "calistoga" }}>
      {description}
    </Typography>
  );
};

export default DescriptionText;
