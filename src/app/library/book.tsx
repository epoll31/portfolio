// "use client";

import Image from "next/image";
// import { useState } from "react";

export interface BookInfo {
  title: string;
  author: string;
  subTitle?: string;
  cover: string;
}

export default function Book({ title, author, cover, subTitle }: BookInfo) {
  // const [notLoaded, setNotLoaded] = useState(true);

  return (
    <div className="w-[200px] h-[300px] rounded-lg overflow-hidden">
      <Image
        src={cover}
        alt={title}
        width={200}
        height={300}
        className="w-full h-full"
      />
      {/* {notLoaded && (
        <div className="bg-gray-300 flex flex-col gap-2  items-center justify-center w-full h-full">
          <h3 className="text-lg font-semibold">{title}</h3>
          {subTitle && <p className="text-md">{subTitle}</p>}
          <p className="text-sm">{author}</p>
        </div>
      )} */}
    </div>
  );
}
