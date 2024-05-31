"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo } from "react";
import { usePathname } from "next/navigation";

export interface TabInfo {
  title: string;
  href: string;
}

function Tab({ tab }: { tab: TabInfo }) {
  const pathname = usePathname();

  const isSelected = useMemo(() => pathname === tab.href, [pathname, tab]);

  return (
    <Link
      href={tab.href}
      className={`${
        isSelected
          ? "text-white"
          : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
      } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
    >
      <span className="relative z-10">{tab.title}</span>
      {isSelected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-black"
        ></motion.span>
      )}
    </Link>
  );
}

export default function Tabs({
  tabs,
}: {
  tabs: {
    title: string;
    href: string;
  }[];
}) {
  return (
    <div className="mb-8 flex flex-wrap items-center gap-2">
      {tabs.map((tab, index) => (
        <Tab tab={tab} key={tab.title} />
      ))}
    </div>
  );
}
