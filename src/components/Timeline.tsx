"use client";
import cn from "@/utils/cn";
import { motion } from "framer-motion";
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
  // TODO: finish the animations here
  return (
    <div className="flex flex-col w-full">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative px-4 [&:not(:last-child)]:pb-8 group/timeline-item"
          whileHover={"hover"}
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
          <motion.span
            className={cn(
              `absolute top-[0.85ch] left-0 w-3 h-3 rounded-full`,
              item.active ? "bg-blue-300" : "bg-gray-400"
            )}
            initial={{
              translateX: "-50%",
            }}
            variants={
              {
                // hover: { scale: [1, 1.1, 1] },
              }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
          />
          <motion.div
            initial={
              {
                // transformOrigin: "left",
              }
            }
            variants={
              {
                // hover: { scale: [1, 1.02, 1] },
              }
            }
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {item.node}
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
