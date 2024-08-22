import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const tabStylesSx = {
  "&.MuiTabs-indicator": {
    backgroundColor: "red",
  },
  "&.Mui-selected": { color: "white" },
  "&.MuiButtonBase-root.MuiTab-root": {
    color: "black",
    transition: "color 0.2s ease-in-out",
    "&:hover": {
      color: "green",
    },
    "&.Mui-selected": {
      color: "red",
    },
  },
};
