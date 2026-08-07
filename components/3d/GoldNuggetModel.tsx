"use client";

import { useRef } from "react";
import { useGLTF, Center } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface Props {
  scale?: number;
  position?: [number, number, number];
  rotation?: [number, number, number];
  spinSpeed?: number;
}

export default function GoldNuggetModel({
  scale = 1,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  spinSpeed = 0.1,
}: Props) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/goldnugget.glb");

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += spinSpeed * 0.01;
    }
  });

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <Center>
        <primitive object={scene.clone()} />
      </Center>
    </group>
  );
}

useGLTF.preload("/goldnugget.glb");