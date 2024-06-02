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
          ? "text-white dark:text-black"
          : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-50"
      } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
    >
      <span className="relative z-10">{tab.title}</span>
      {isSelected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-neutral-800 dark:bg-neutral-300"
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
    <div className="flex flex-wrap items-center gap-2">
      {tabs.map((tab) => (
        <Tab tab={tab} key={tab.title} />
      ))}
    </div>
  );
}
