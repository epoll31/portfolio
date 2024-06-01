"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useMemo } from "react";

export interface BookInfo {
  title: string;
  author: string;
  subTitle?: string;
  cover: string;
  href: string;
}

export default function Book({
  title,
  cover,
  href,
  size: rawSize,
}: BookInfo & {
  size: "large" | "small" | "medium";
}) {
  const size = useMemo(() => {
    switch (rawSize) {
      case "large":
        return {
          width: 120,
          height: 180,
        };
      case "medium":
        return {
          width: 100,
          height: 140,
        };
      case "small":
        return {
          width: 80,
          height: 120,
        };
    }
  }, [rawSize]);

  return (
    <Link href={href}>
      <motion.div
        className="relative bg-transparent rounded-lg overflow-hidden"
        style={size}
        whileHover={{
          translateY: -5,
        }}
      >
        <Image
          priority
          src={cover}
          alt={title}
          {...size}
          className="w-full h-full"
        />
      </motion.div>
    </Link>
  );
}
