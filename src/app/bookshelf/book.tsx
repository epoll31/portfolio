"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import cn from "@/utils/cn";
import HoverLift from "@/components/effects/hoverLift";

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

  const [isLoading, setIsLoading] = useState(true);
  const [gradient, setGradient] = useState("");

  useEffect(() => {
    const val = Math.random();
    if (val < 0.2) {
      setGradient("from-red-300 to-red-200");
    } else if (val < 0.4) {
      setGradient("from-green-300 to-green-200");
    } else if (val < 0.6) {
      setGradient("from-blue-300 to-blue-200");
    } else if (val < 0.8) {
      setGradient("from-purple-300 to-purple-200");
    } else {
      setGradient("from-yellow-200 to-yellow-100");
    }
  }, []);

  return (
    <Link href={href} className="rounded-lg overflow-hidden">
      <HoverLift
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
          onLoad={() => setIsLoading(false)}
        />
        {isLoading && (
          <span
            className={cn(
              "absolute w-full h-full top-0 left-0 bg-gradient-to-tr z-50",
              gradient
            )}
          />
        )}
      </HoverLift>
    </Link>
  );
}
