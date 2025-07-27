import * as React from "react";
import { cn } from "@/lib/utils";

interface GradientTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  gradient?: "primary" | "accent" | "success" | "custom";
  customGradient?: string;
}

const gradients = {
  primary: "bg-gradient-to-r from-primary to-ring bg-clip-text text-transparent",
  accent: "bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent",
  success: "bg-gradient-to-r from-chart-1 to-chart-2 bg-clip-text text-transparent",
  custom: ""
};

const GradientText = React.forwardRef<HTMLSpanElement, GradientTextProps>(
  ({ className, children, gradient = "primary", customGradient, style, ...props }, ref) => {
    const gradientClass = gradient === "custom" && customGradient 
      ? "bg-clip-text text-transparent"
      : gradients[gradient];

    const customStyle = gradient === "custom" && customGradient
      ? { ...style, backgroundImage: customGradient }
      : style;

    return (
      <span
        ref={ref}
        className={cn(gradientClass, className)}
        style={customStyle}
        {...props}
      >
        {children}
      </span>
    );
  }
);
GradientText.displayName = "GradientText";

export { GradientText };