"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import Link from "next/link";

export default function Links({
  links,
}: {
  links: {
    icon: ReactNode;
    href: string;
  }[];
}) {
  return (
    <div className="flex flex-row gap-3">
      {links.map((link, i) => (
        <Link key={i} href={link.href} passHref legacyBehavior>
          <motion.a
            className="w-fit h-fit"
            initial={{
              scale: 1,
              color: "var(--color-black)",
              rotate: "0deg",
            }}
            whileHover={{
              scale: 1.15,
              color: "var(--color-blue-400)",
              rotate: ["0deg", "2deg", "0deg", "-2deg", "0deg"],
            }}
            whileTap={{
              scale: 0.95,
            }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 300,
              rotate: {
                repeat: Infinity,
                duration: 0.5,
                type: "keyframes",
              },
              color: {
                type: "tween",
              },
            }}
          >
            {link.icon}
          </motion.a>
        </Link>
      ))}
    </div>
  );
}
