"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "scale";
  delay?: number;
  duration?: number;
  once?: boolean;
}

const animations = {
  fadeUp: {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 }
  },
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 }
  },
  slideLeft: {
    initial: { opacity: 0, x: -30 },
    animate: { opacity: 1, x: 0 }
  },
  slideRight: {
    initial: { opacity: 0, x: 30 },
    animate: { opacity: 1, x: 0 }
  },
  scale: {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 }
  }
};

const AnimateOnScroll = React.forwardRef<HTMLDivElement, AnimateOnScrollProps>(
  ({ 
    className, 
    children, 
    animation = "fadeUp", 
    delay = 0, 
    duration = 0.6,
    once = true
  }, ref) => {
    const localRef = React.useRef<HTMLDivElement>(null);
    const isInView = useInView(localRef, { once, margin: "-100px" });

    // Combine refs
    React.useImperativeHandle(ref, () => localRef.current!);

    return (
      <motion.div
        ref={localRef}
        className={cn(className)}
        initial={animations[animation].initial}
        animate={isInView ? animations[animation].animate : animations[animation].initial}
        transition={{
          duration,
          delay,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.div>
    );
  }
);
AnimateOnScroll.displayName = "AnimateOnScroll";

export { AnimateOnScroll };