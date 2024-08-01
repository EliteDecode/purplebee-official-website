import { TextTitleProps } from "@/types/commonTypes";
import { Typography } from "antd";

const TitleText = ({ title }: TextTitleProps) => {
  const mainTitle = title.slice(1, -4);
  const firstLetter = title.slice(0, 1).toUpperCase();
  const lastThreeLetters = title.slice(-4);

  return (
    <Typography className="text-[30px] uppercase font-normal ">
      <span className="text-[45px] font-bold text-primary">{firstLetter}</span>
      {mainTitle}
      <span className="border-b-4 border-secondary">{lastThreeLetters}</span>
    </Typography>
  );
};

export default TitleText;
