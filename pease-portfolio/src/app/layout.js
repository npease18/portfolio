import { Inter } from "next/font/google";
import "./globals.css";
import {Header, Navigation, Footer} from "./globals"

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
        <Footer/>
      </body>
    </html>
  );
}
