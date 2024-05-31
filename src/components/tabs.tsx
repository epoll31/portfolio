"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export interface TabInfo {
  title: string;
  href: string;
}

function Tab({
  tab,
  selected,
  setSelected,
}: {
  tab: TabInfo;
  selected: boolean;
  setSelected: (tab: TabInfo) => void;
}) {
  return (
    <Link
      href={tab.href}
      onClick={() => setSelected(tab)}
      className={`${
        selected
          ? "text-white"
          : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-100"
      } relative rounded-md px-2 py-1 text-sm font-medium transition-colors`}
    >
      <span className="relative z-10">{tab.title}</span>
      {selected && (
        <motion.span
          layoutId="tab"
          transition={{ type: "spring", duration: 0.4 }}
          className="absolute inset-0 z-0 rounded-md bg-red-500"
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
  const [selected, setSelected2] = useState(
    tabs.findIndex((tab) => tab.href === window.location.pathname)
  );
  const setSelected = (tab: TabInfo) => {
    setSelected2(tabs.indexOf(tab));
  };

  return (
    <div className="mb-8 flex flex-wrap items-center gap-2">
      {tabs.map((tab, index) => (
        <Tab
          tab={tab}
          selected={selected === index}
          setSelected={setSelected}
          key={tab.title}
        />
      ))}
    </div>
  );
}
