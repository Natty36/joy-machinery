"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface JoyLogoProps {
  className?: string;
  priority?: boolean;
  gearTop?: string;
  gearLeft?: string;
  gearSize?: string;
}

export default function JoyLogo({
  className = "h-36 md:h-48 max-w-4xl",
  priority = false,
  gearTop = "47%",
  gearLeft = "53.5%",
  gearSize = "w-[15%] h-[65%]",
}: JoyLogoProps) {
  return (
    <div className={`relative w-full flex justify-center items-center ${className}`}>
      {/* Base Logo without 'O' */}
      <Image
        src="/Logo-without-o-with-letters.png"
        alt="Joy Machinery Solutions Logo"
        fill
        priority={priority}
        className="object-contain"
      />

      {/* Animated Gear Overlay */}
      <motion.div
        className={`absolute ${gearSize}`}
        style={{
          top: gearTop,
          left: gearLeft,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          rotate: [
            0,
            
            // 1. 45° Left -> Fast return with 8° Right overshoot -> Center
            -45,
            8,
            0,
            0, // Short pause

            // 2. 65° Right -> Fast return with 8° Left overshoot -> Center
            65,
            -8,
            0,
            0, // Short pause

            // 3. 65° Right -> Fast return with 8° Left overshoot -> Center
            65,
            -8,
            0,
            0, // Short pause

            // 4. 45° Left -> Fast return with 8° Right overshoot -> Center
            -45,
            8,
            0,
            0, // Brief pause before grand finale

            // 5. Full 360° Spin
            360,
            360, // Rest pause at end before loop repeats
          ],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
          times: [
            0,
            
            // 1. 45° Left step
            0.06,  // Slow turn left
            0.08,  // FAST snapback overshoot right (+8°)
            0.10,  // Settle at center (0°)
            0.14,  // Pause

            // 2. 65° Right step
            0.21,  // Slow turn right
            0.23,  // FAST snapback overshoot left (-8°)
            0.25,  // Settle at center (0°)
            0.29,  // Pause

            // 3. 65° Right step
            0.36,  // Slow turn right
            0.38,  // FAST snapback overshoot left (-8°)
            0.40,  // Settle at center (0°)
            0.44,  // Pause

            // 4. 45° Left 
            0.50,  // Slow turn left
            0.52,  // FAST snapback overshoot right (+8°)
            0.54,  // Settle at center (0°)
            0.60,  // Pause before 360°

            // 5. Full 360° spin & final rest
            0.82,  // Complete 360° spin
            1.00,  // Hold pause at rest
          ],
        }}
      >
        <Image
          src="/logo-o-gear.png"
          alt="Joy Machinery Gear Icon"
          fill
          priority={priority}
          className="object-contain"
        />
      </motion.div>
    </div>
  );
}