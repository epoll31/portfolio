"use client";

import { motion } from "framer-motion";

export default function BounceIn({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ translateY: 100, opacity: 0 }}
      animate={{ translateY: 0, opacity: 1 }}
      transition={{
        duration: 0.4,
        type: "spring",
        stiffness: 600,
        damping: 30,
      }}
    >
      {children}
    </motion.div>
  );
}
