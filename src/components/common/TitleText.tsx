import { TextTitleProps } from "@/types/commonTypes";
import { Typography } from "antd";

const TitleText = ({ title, description, color }: TextTitleProps) => {
  const mainTitle = title.slice(1, -4);
  const firstLetter = title.slice(0, 1).toUpperCase();
  const lastThreeLetters = title.slice(-4);

  return (
    <>
      <Typography
        className={`text-[35px] ${color ? `text-white` : ""} uppercase font-bold`}>
        <span className="text-[50px] font-black text-primary">
          {firstLetter}
        </span>
        {mainTitle}
        <span
          className={`border-b-4 border-secondary ${color ? `text-white` : ``}`}>
          {lastThreeLetters}
        </span>
      </Typography>
      <Typography
        className={`text-[18px] opacity-80 ${color ? `text-white` : ``}`}
        style={{ fontFamily: "Calistoga" }}>
        {description}
      </Typography>
    </>
  );
};

export default TitleText;
