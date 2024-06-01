"use client";

import Github from "./icons/github";
import Image from "next/image";
import Links from "./links";
import LinkedIn from "./icons/linkedin";
import Twitter from "./icons/twitter";
import MailFilled from "./icons/mail-filled";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 flex justify-between mb-8">
      <div className="flex flex-col justify-end items gap-2 pb-4 md:pb-8 ">
        <h1 className="text-4xl sm:text-5xl font-semibold self-end ">
          Ethan Pollack
        </h1>
        <Links
          links={[
            {
              icon: <Github className="w-5 h-5" />,
              href: "/github",
            },
            {
              icon: <LinkedIn className="w-5 h-5" />,
              href: "/linkedin",
            },
            {
              icon: <Twitter className="w-5 h-5" />,
              href: "/twitter",
            },
            {
              icon: <MailFilled className="w-5 h-5" />,
              href: "mailto:epollack31@gmail.com",
            },
          ]}
        />
      </div>
      <motion.div className="relative w-fit h-fit" whileHover={"hover"}>
        <Image
          priority
          src="/headshot-no-bg.png"
          width={150}
          height={150}
          alt="headshot"
          className="rounded-xl drop-shadow-xl"
          style={{
            maskImage: "linear-gradient(to bottom, #000000 80%, #00000000)",
          }}
        />
        <motion.span
          className="absolute top-[90%] left-0 w-full h-10 bg-gradient-to-br from-teal-400 to-teal-300 pointer-events-none"
          style={{
            maskImage: `radial-gradient(ellipse 100% 50% at 50% 50%, #00000050 0%, transparent 50%)`,
          }}
          initial={{
            scaleX: 0.5,
            scaleY: 0.5,
          }}
          variants={{
            hover: {
              scaleX: 1,
              scaleY: 1,
            },
          }}
        />
      </motion.div>
    </header>
  );
}
