import { Plus_Jakarta_Sans } from "next/font/google";
import localFont from "next/font/local";

export const excrallik = localFont({
  src: "./Excrallik-regular.otf",
  variable: "--font-excrallik",
});

export const radioGrostek = localFont({
  variable: "--font-radio-grostek",
  src: [
    {
      weight: "200",
      path: "./PPRadioGrotesk-Ultralight.otf",
    },
    {
      weight: "400",
      path: "./PPRadioGrotesk-Regular.otf",
    },
    {
      weight: "800",
      path: "./PPRadioGrotesk-Black.otf",
    },
  ],
});

export const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
