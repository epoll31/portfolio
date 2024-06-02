"use client";

import { useEffect, useState } from "react";
import Sun from "./icons/sun";
import Moon from "./icons/moon";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      className="relative  w-5 h-5"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? (
        <Sun className="absolute top-0 left-0 w-full h-full text-gray-500" />
      ) : (
        <Moon className="absolute top-0 left-0 w-full h-full text-gray-500" />
      )}
    </button>
  );
}
