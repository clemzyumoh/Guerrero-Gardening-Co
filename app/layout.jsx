import { Inter, Rye } from "next/font/google";

//import { Inter } from "next/font/google";
import "./globals.css";

//const rye = Rye({ weight: "400", subsets: ["latin"], variable: "--font-western" });
// ...
<html lang="en" className={`${inter.variable} ${rye.variable}`}></html>;
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const rye = Rye({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-western",
});

export const metadata = {
  title: "leaflife | Garden design and landscaping",
  description: "Garden design, planting, hardscaping and maintenance.",
};
export default function RootLayout({ children }) {
  return (
    
      <html lang="en" className={`${inter.variable} ${rye.variable}`}>

      <body>{children}</body>
    </html>
  );
}
