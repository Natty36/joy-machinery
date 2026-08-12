"use client";

import { motion } from "framer-motion";
import GlareHover from "../GlareHover";
import { cn } from "../../lib/utils";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Button({ href, children, className, style }: ButtonProps) {
  return (
    <motion.a
      href={href}
      style={style}
      className={cn(
        "relative inline-flex items-center justify-center",
        "font-headline font-semibold text-base",
        "px-8 py-4",
        "rounded-full",
        "group",
        "text-white", // Ensures default text color is white
        className
      )}
    >
      {/* 1. SOLID STATIC SHADOW */}
      <div
        className={cn(
          "absolute inset-0",
          "bg-[rgba(20,19,19,0.60)]",
          "rounded-full",
          "translate-x-1.5 translate-y-1.5",
          "z-0"
        )}
      />

      {/* 2. THE MOVING BUTTON FACE with GlareHover */}
      <span
        className={cn(
          "absolute inset-0",
          "border-[1.5px] border-[var(--color-accent)]",
          "bg-[var(--color-accent)] text-white", // Force white text color
          "rounded-full",
          "group-hover:-translate-x-1.5 group-hover:-translate-y-1.5",
          "group-active:translate-x-0 group-active:translate-y-0",
          "transition-transform duration-200",
          "z-10",
          "flex items-center justify-center",
          "overflow-hidden"
        )}
      >
        <GlareHover
          width="100%"
          height="100%"
          background="transparent"
          borderRadius="9999px"
          borderColor="transparent"
          glareColor="#ffffff"
          glareOpacity={0.3}
          glareAngle={-30}
          glareSize={300}
          transitionDuration={800}
          playOnce={false}
          className="flex items-center justify-center gap-2 text-white fill-white stroke-white [&_svg]:fill-white [&_svg]:stroke-white"
        >
          <span className="flex items-center justify-center gap-2 text-white [&_svg]:fill-white [&_svg]:stroke-white">
            {children}
          </span>
        </GlareHover>
      </span>

      {/* 3. HIDDEN STRUCTURAL TEXT */}
      <span className="invisible pointer-events-none flex items-center gap-2">
        {children}
      </span>
    </motion.a>
  );
}