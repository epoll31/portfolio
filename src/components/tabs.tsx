"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface TabProps {
  tab: {
    title: string;
    href: string;
  };
  selected: boolean;
  setSelected: (tab: { title: string; href: string }) => void;
}

function Tab({ tab, selected, setSelected }: TabProps) {
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
  const [selected, setSelected2] = useState<{
    title: string;
    href: string;
  }>(tabs[0]);
  const setSelected = (tab: { title: string; href: string }) => {
    setSelected2(tab);
  };

  return (
    <div className="mb-8 flex flex-wrap items-center gap-2">
      {tabs.map((tab, index) => (
        <Tab
          tab={tab}
          selected={selected === tab}
          setSelected={setSelected}
          key={tab.title}
        />
      ))}
    </div>
  );
}
