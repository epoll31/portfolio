"use client";

import { MotionProps, motion } from "framer-motion";

export default function HoverScale(
  props: MotionProps & {
    className?: string;
  }
) {
  return (
    <motion.div
      transition={{
        duration: 0.4,
        type: "spring",
        stiffness: 600,
        damping: 30,
      }}
      whileHover={{
        scale: [1, 1.05],
        transformOrigin: "left",
      }}
      initial={{
        scale: 1,
        transformOrigin: "left",
      }}
      {...props}
    />
  );
}
