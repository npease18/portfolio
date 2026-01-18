import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css";

import {Navigation, Footer} from "./globals"
import HeaderWrapper from "../components/header-wrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nicholas Pease",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html className="no-scrollbar" lang="en">
      <body className={inter.className}>
        <HeaderWrapper/>
        <Navigation/>
        {children}
        <Analytics />
        <SpeedInsights />
        <Footer/>
      </body>
    </html>
  );
}
