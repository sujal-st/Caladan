import localFont from "next/font/local";
import { IBM_Plex_Mono } from "next/font/google";


export const interDisplay = localFont({
  src: [
    { path: "../../public/fonts/inter-display/ttf/InterDisplay-Regular.ttf", weight: "400", style: "normal" },
    { path: "../../public/fonts/inter-display/ttf/InterDisplay-Bold.ttf", weight: "700", style: "normal" },
  ],
  variable: "--font-inter-display",
});



export const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-plex-mono",
});