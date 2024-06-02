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
    <header className="border-b border-gray-200 flex justify-between mb-8 pb-4">
      <div className="flex flex-col justify-center items gap-2">
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
        <motion.div
          variants={{
            hover: {
              translateY: -5,
            },
          }}
        >
          <Image
            priority
            src="/grad-headshot-close.png"
            width={100}
            height={100}
            alt="headshot"
            className="rounded-lg drop-shadow-xl"
          />
        </motion.div>
        <motion.span
          className="absolute top-[90%] left-0 w-full h-10 bg-gradient-to-br from-teal-400 to-teal-300 pointer-events-none dark:opacity-60"
          style={{
            maskImage: `radial-gradient(ellipse 100% 50% at 50% 50%, #00000050 0%, transparent 50%)`,
          }}
          initial={{
            scaleX: 0,
            scaleY: 0,
          }}
          variants={{
            hover: {
              scaleX: 1.5,
              scaleY: 1.5,
            },
          }}
        />
      </motion.div>
    </header>
  );
}
