"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

export default function Footer() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const src = useMemo(
    () =>
      theme === "dark" ? "/headshot-filled-no-bg.png" : "/headshot-no-bg.png",
    [theme]
  );

  if (!mounted) return null;

  return (
    <footer className="flex flex-col items-center justify-center w-full my-8">
      {theme && (
        <Image
          src={src}
          width={40}
          height={40}
          alt="headshot"
          style={{
            maskImage: "linear-gradient(to bottom, #000000 90%, #00000000)",
          }}
          className="hover:scale-[180%] transition-all duration-300 ease-in-out origin-bottom"
        />
      )}
      <p className="text-sm font-light">© 2024 | Ethan Pollack</p>
    </footer>
  );
}
