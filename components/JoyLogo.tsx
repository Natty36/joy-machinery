"use client";

import Image from "next/image";

interface JoyLogoProps {
  className?: string;
  priority?: boolean;
  gearTop?: string;
  gearLeft?: string;
  gearSize?: string;
}

export default function JoyLogo({
  // 1. INCREASED CONTAINER HEIGHT (e.g. h-36 md:h-48 max-w-4xl) to make letters bigger
  className = "h-36 md:h-48 max-w-4xl",
  priority = false,
  gearTop = "52%",
  gearLeft = "52%",
  // 2. REDUCED GEAR PERCENTAGE (e.g. w-[15%] h-[65%]) so the gear stays smaller relative to the bigger letters
  gearSize = "w-[15%] h-[65%]",
}: JoyLogoProps) {
  return (
    <div className={`relative w-full flex justify-center items-center ${className}`}>
      {/* Base Logo without 'O' */}
      <Image
        src="/Logo-without-o.png"
        alt="Joy Machinery Solutions Logo"
        fill
        priority={priority}
        className="object-contain"
      />

      {/* Gear Overlay */}
      <div
        className={`absolute -translate-x-1/2 -translate-y-1/2 ${gearSize}`}
        style={{
          top: gearTop,
          left: gearLeft,
        }}
      >
        <Image
          src="/logo-o-gear.png"
          alt="Joy Machinery Gear Icon"
          fill
          priority={priority}
          className="object-contain"
        />
      </div>
    </div>
  );
}