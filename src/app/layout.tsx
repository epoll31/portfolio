import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Tabs from "@/components/tabs";
import cn from "@/utils/cn";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
    title: "Bookshelf",
    href: "/bookshelf",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.className,
          "flex flex-col min-h-screen max-w-prose mx-auto mt-20 px-6"
        )}
      >
        <Header />
        <Tabs tabs={tabs} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
