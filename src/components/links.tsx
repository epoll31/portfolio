"use client";

import { motion } from "framer-motion";
import { ReactNode, useMemo } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import cn from "@/utils/cn";

export default function Links({
  links,
}: {
  links: {
    icon: ReactNode;
    href: string;
  }[];
}) {
  const { theme } = useTheme();
  const linksColor = useMemo(
    () =>
      theme === "dark" ? "var(--color-gray-200)" : "var(--color-gray-500)",
    [theme]
  );

  return (
    <div className="flex flex-row gap-3">
      {links.map((link, i) => (
        <Link key={i} href={link.href} passHref legacyBehavior>
          <motion.a
            className={cn(
              theme === "dark" ? "text-gray-200" : "text-gray-500",
              "w-fit h-fit"
            )}
            animate={{
              scale: 1,
              color: linksColor,
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
