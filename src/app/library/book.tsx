"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export interface BookInfo {
  title: string;
  author: string;
  subTitle?: string;
  cover: string;
  href: string;
}

export default function Book({ title, cover, href }: BookInfo) {
  return (
    <Link href={href}>
      <motion.div
        className="w-full h-full relative bg-transparent rounded-lg overflow-hidden"
        whileHover={{
          translateY: -5,
        }}
      >
        <Image
          src={cover}
          alt={title}
          width={200}
          height={300}
          className="w-full h-full"
        />
      </motion.div>
    </Link>
  );
}
