import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const localStorageKeys = {
  theme: "theme",
};

export const navData = {
  Home: "#hero",
  About: "#About",
  Skills: "#skills",
  Experience: "#experience",
  Contact: "#contact",
};
