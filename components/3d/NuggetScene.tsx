"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";
import GoldNugget from "./GoldNugget";

export default function NuggetScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-3, 2, -3]} intensity={0.8} color="#EE6B2C" />
        <pointLight position={[3, -2, 3]} intensity={0.5} color="#FFD700" />

        {/* SCALE BUMPED TO 10 — increase/decrease this number to resize */}
        <GoldNugget scale={10} />

        <Environment preset="studio" />
      </Suspense>
    </Canvas>
  );
}