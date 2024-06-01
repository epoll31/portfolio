"use client";

import Image from "next/image";

export interface BookInfo {
  title: string;
  author: string;
  subTitle?: string;
  cover: string;
}

export default function Book({ title, author, cover, subTitle }: BookInfo) {
  return (
    <div className="w-full h-full rounded-lg overflow-hidden">
      <Image
        src={cover}
        alt={title}
        width={200}
        height={300}
        className="w-full h-full"
      />
    </div>
  );
}
