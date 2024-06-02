"use client";

import { MotionProps, motion } from "framer-motion";

export default function HoverLift(
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
        translateY: -5,
      }}
      {...props}
    />
  );
}
