"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  className?: string;
  delay?: number;
  duration?: number;
  children: React.ReactNode;
}

const FloatingCard = React.forwardRef<HTMLDivElement, FloatingCardProps>(
  ({ className, delay = 0, duration = 6, children }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "glass-card p-6 rounded-xl border border-border/50 backdrop-blur-sm",
          className
        )}
        initial={{ y: 0 }}
        animate={{ y: [-10, 10, -10] }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.2 }
        }}
      >
        {children}
      </motion.div>
    );
  }
);
FloatingCard.displayName = "FloatingCard";

export { FloatingCard };