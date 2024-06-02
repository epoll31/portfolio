"use client";

import { useEffect, useState } from "react";
import Sun from "./icons/sun";
import Moon from "./icons/moon";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      className="relative  w-5 h-5"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      whileTap={"spin"}
    >
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        variants={{
          spin: {
            rotate: 180,
            transition: {},
          },
        }}
      >
        {theme === "light" ? (
          <Sun className="absolute top-0 left-0 w-full h-full" />
        ) : (
          <Moon className="absolute top-0 left-0 w-full h-full" />
        )}
      </motion.div>
    </motion.button>
  );
}
