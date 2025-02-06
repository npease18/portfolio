import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

import dynamic from 'next/dynamic'
import {Navigation, Footer} from "./globals"
import { FallbackHeader } from "../components/header";

const Header = dynamic(() => import('../components/header'), { ssr: false, loading: () => <FallbackHeader/> })

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nicholas Pease",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html className="no-scrollbar" lang="en">
      <body className={inter.className}>
        <Header/>
        <Navigation/>
        {children}
        <Analytics />
        <Footer/>
      </body>
    </html>
  );
}
