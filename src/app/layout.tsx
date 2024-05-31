import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Tabs from "@/components/tabs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ethan Pollack",
  description: "A portfolio by Ethan Pollack",
};

const tabs = [
  {
    title: "About Me",
    href: "/",
  },
  {
    title: "Projects",
    href: "/projects",
  },
  {
    title: "Test1",
    href: "/test1",
  },
  {
    title: "Test2",
    href: "/test2",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Tabs tabs={tabs} />
        {children}
      </body>
    </html>
  );
}
