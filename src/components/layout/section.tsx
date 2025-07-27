import * as React from "react";
import { cn } from "@/lib/utils";
import { Container } from "./container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  containerSize?: "sm" | "md" | "lg" | "xl" | "full";
  spacing?: "sm" | "md" | "lg" | "xl";
  background?: "default" | "muted" | "accent";
}

const spacingClasses = {
  sm: "py-8 sm:py-12",
  md: "py-12 sm:py-16",
  lg: "py-16 sm:py-20",
  xl: "py-20 sm:py-24"
};

const backgroundClasses = {
  default: "bg-background",
  muted: "bg-muted/30",
  accent: "bg-accent/5"
};

const Section = React.forwardRef<HTMLElement, SectionProps>(
  ({ 
    className, 
    children, 
    containerSize = "xl", 
    spacing = "lg",
    background = "default",
    ...props 
  }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          spacingClasses[spacing],
          backgroundClasses[background],
          className
        )}
        {...props}
      >
        <Container size={containerSize}>
          {children}
        </Container>
      </section>
    );
  }
);
Section.displayName = "Section";

export { Section };