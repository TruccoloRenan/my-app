import type { Metadata } from "next";
import { Ubuntu } from 'next/font/google'
import "./globals.css";
import Navbar from "./components/Navbar";
import ToasterContext from "../context/ToasterContext";
import { Theme } from "../providers/ThemeProvider"

const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["300", "400", "500", "700"] });

export const metadata: Metadata = {
  title: "My Kanban",
  description: "Personal Kanban Board",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ubuntu.className} dark:bg-grey-900 suppressHydrationWarning`}>
        <Theme>
          <ToasterContext />
          <Navbar />
          {children}
        </Theme>
      </body>
    </html>
  );
}
