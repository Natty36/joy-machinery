"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows } from "@react-three/drei";
import DraggableNugget from "./DraggableNugget";

// TWEAK EACH ONE INDEPENDENTLY
const NUGGETS = [
  {
    id: 1,
    initialPosition: [1.0, 0.3, 0] as [number, number, number],
    scale: 6,
    spinSpeed: 1.2,
    floatSpeed: 1.2,
    floatAmp: 0.12,
  },
  {
    id: 2,
    initialPosition: [-0.6, -0.4, 0.5] as [number, number, number],
    scale: 3.5,
    spinSpeed: 2.0,
    floatSpeed: 1.8,
    floatAmp: 0.18,
  },
  {
    id: 3,
    initialPosition: [0.3, 0.9, -0.3] as [number, number, number],
    scale: 4.5,
    spinSpeed: 0.8,
    floatSpeed: 1.5,
    floatAmp: 0.1,
  },
  {
    id: 4,
    initialPosition: [-0.2, 0.2, 0.2] as [number, number, number],
    scale: 2.5,
    spinSpeed: 2.5,
    floatSpeed: 2.2,
    floatAmp: 0.15,
  },
];

export default function NuggetScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} castShadow />
        <pointLight position={[-3, 2, -3]} intensity={1} color="#EE6B2C" />
        <pointLight position={[3, -2, 3]} intensity={0.6} color="#FFD700" />

        {NUGGETS.map((nugget) => (
          <DraggableNugget key={nugget.id} {...nugget} />
        ))}

        <ContactShadows
          position={[0, -1.5, 0]}
          opacity={0.2}
          scale={10}
          blur={2.5}
          far={4}
        />

        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}