import { Box } from "@mui/material";
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";
import TitleText from "../common/TitleText";
import { AboutPatners } from "@/utils/general.content.";
import { ServicesProps } from "@/types/commonTypes";
import { useEffect, useState } from "react";

const Patners = () => {
  const [isGradientEnabled, setIsGradientEnabled] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsGradientEnabled(false);
      } else {
        setIsGradientEnabled(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const PatnersCard = ({ icon, title, abbr, description }: ServicesProps) => {
    return (
      <figure
        className={cn(
          "relative w-64 mx-2 cursor-pointer overflow-hidden rounded-xl border p-4",
          // light styles
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          // dark styles
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
        )}>
        <div className="flex flex-row items-center gap-2">
          <img
            className="rounded-full"
            width="32"
            height="32"
            alt=""
            src={icon}
          />
          <div className="flex flex-col">
            <figcaption
              className="sm:text-sm text-md uppercase font-bold dark:text-white"
              style={{ fontFamily: "calistoga" }}>
              {title}
            </figcaption>
            <p className="sm:text-xs text-sm font-medium dark:text-white/40">
              {abbr}
            </p>
          </div>
        </div>
        <blockquote
          className="mt-2 sm:text-[11px] text-[13px]"
          style={{ fontFamily: "calistoga" }}>
          {description}
        </blockquote>
      </figure>
    );
  };

  return (
    <Box className="bg-white py-16">
      <Box className="custom-c p-5 relative rounded-md">
        <TitleText title="Esteemed Patners" />

        <Box className="mt-5">
          <Marquee className="gap-2" gradient={isGradientEnabled}>
            {AboutPatners?.map((patner, index) => (
              <PatnersCard key={index} {...patner} />
            ))}
          </Marquee>

          <Box className="grid grid-cols-5  gap-2 mt-5">
            {AboutPatners?.map((patner, index) => (
              <Box key={index} className=" flex items-center justify-center">
                <img
                  src={patner?.icon}
                  alt={patner?.title}
                  className="  w-[80%]    rounded-md p-2"
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Patners;
