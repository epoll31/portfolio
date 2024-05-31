"use client";
import cn from "@/utils/cn";
import { useMemo } from "react";

export default function Timeline({
  items,
}: {
  items: {
    node: React.ReactNode;
    active: boolean;
  }[];
}) {
  const gradients = useMemo(() => {
    return items.map((_, index) => {
      const curr = items[index]?.active;

      if (index === items.length - 1) {
        return curr ? "bg-blue-300" : "bg-gray-400";
      }

      const next = items[index + 1]?.active;

      const from = curr ? "blue-300" : "gray-400";
      const to =
        (curr && (next || index === items.length - 1)) || (!curr && next)
          ? "blue-300"
          : "gray-400";

      return `bg-gradient-to-b from-${from} to-${to} from-70% to-90%`;
    });
  }, [items]);

  return (
    <div className="flex flex-col w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className="relative px-4 [&:not(:last-child)]:pb-8 group/timeline-item"
        >
          <span
            className={cn(
              `absolute top-0 left-0 w-0.5 h-full`,
              "from-gray-400 to-gray-400", // this is here to force TW to generate the classes
              "from-blue-300 to-blue-300", // this is here to force TW to generate the classes
              gradients[index],
              index === 0 ? ` rounded-t-full` : "",
              index === items.length - 1 ? `rounded-b-full` : "",
              `-translate-x-1/2`
            )}
          />
          <span
            className={cn(
              `absolute top-[0.85ch] left-0 w-3 h-3 rounded-full border`,
              item.active
                ? "bg-blue-300 border-blue-300"
                : "bg-gray-400 border-gray-400",
              "-translate-x-1/2",
              "group-hover/timeline-item:scale-110 transition-transform"
            )}
          />
          <div className="group-hover/timeline-item:scale-105 origin-left transition-transform">
            {item.node}
          </div>
        </div>
      ))}
    </div>
  );
}
