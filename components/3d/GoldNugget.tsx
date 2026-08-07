"use client";

import { useRef, useEffect } from "react";
import { useGLTF, Center } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface Props {
  scale?: number;
}

export default function GoldNugget({ scale = 1 }: Props) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene, gl } = useThree();
  const { scene: gltfScene } = useGLTF("/goldnugget.glb");

  const isDragging = useRef(false);
  const lastPos = useRef({ x: 0, y: 0 });
  const velocity = useRef(0);

  // Canvas-confined drag events
  useEffect(() => {
    const canvas = gl.domElement;

    const handleDown = (e: PointerEvent) => {
      isDragging.current = true;
      lastPos.current = { x: e.offsetX, y: e.offsetY };
      velocity.current = 0;
    };

    const handleMove = (e: PointerEvent) => {
      if (!isDragging.current) return;
      const dx = e.offsetX - lastPos.current.x;
      velocity.current = dx * 0.008;
      lastPos.current = { x: e.offsetX, y: e.offsetY };
    };

    const handleUp = () => {
      isDragging.current = false;
    };

    canvas.addEventListener("pointerdown", handleDown);
    canvas.addEventListener("pointermove", handleMove);
    canvas.addEventListener("pointerup", handleUp);
    canvas.addEventListener("pointerleave", handleUp);

    return () => {
      canvas.removeEventListener("pointerdown", handleDown);
      canvas.removeEventListener("pointermove", handleMove);
      canvas.removeEventListener("pointerup", handleUp);
      canvas.removeEventListener("pointerleave", handleUp);
    };
  }, [gl]);

  useFrame((state) => {
    if (!groupRef.current) return;

    // Idle bob
    groupRef.current.position.y =
      Math.sin(state.clock.elapsedTime * 0.8) * 0.06;

    // Apply spin + friction
    if (!isDragging.current) {
      velocity.current *= 0.96; // decay when not dragging
    }
    groupRef.current.rotation.y += velocity.current;
  });

  return (
    <group
      ref={groupRef}
      scale={scale}
      onPointerOver={() => (document.body.style.cursor = "grab")}
      onPointerOut={() => (document.body.style.cursor = "auto")}
      onPointerDown={() => (document.body.style.cursor = "grabbing")}
    >
      <Center>
        <primitive object={gltfScene.clone()} />
      </Center>
    </group>
  );
}

useGLTF.preload("/goldnugget.glb");