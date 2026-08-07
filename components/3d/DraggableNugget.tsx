"use client";

import { useRef, useState, useMemo } from "react";
import { useGLTF, Center, useCursor } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

interface Props {
  initialPosition?: [number, number, number];
  scale?: number;
  spinSpeed?: number;
  floatSpeed?: number;
  floatAmp?: number;
}

export default function DraggableNugget({
  initialPosition = [0, 0, 0],
  scale = 1,
  spinSpeed = 1,
  floatSpeed = 1.5,
  floatAmp = 0.15,
}: Props) {
  const groupRef = useRef<THREE.Group>(null);
  const { scene } = useGLTF("/goldnugget.glb");
  const { pointer, camera } = useThree();

  const [hovered, setHovered] = useState(false);
  const [dragging, setDragging] = useState(false);

  const dragOffset = useRef(new THREE.Vector3());
  const plane = useRef(
    new THREE.Plane(new THREE.Vector3(0, 0, 1), -initialPosition[2])
  ).current;
  const raycaster = useRef(new THREE.Raycaster()).current;

  // Clone once per instance
  const model = useMemo(() => scene.clone(), [scene]);

  useCursor(hovered);

  useFrame((state) => {
    if (!groupRef.current) return;

    const t = state.clock.elapsedTime;

    if (dragging) {
      // Drag: follow mouse on the nugget's Z-plane
      raycaster.setFromCamera(pointer, camera);
      const target = new THREE.Vector3();
      raycaster.ray.intersectPlane(plane, target);
      if (target) {
        groupRef.current.position.x = target.x + dragOffset.current.x;
        groupRef.current.position.y = target.y + dragOffset.current.y;
      }
    } else {
      // Idle: gentle bob + auto spin
      groupRef.current.position.y =
        initialPosition[1] + Math.sin(t * floatSpeed) * floatAmp;
      groupRef.current.rotation.y += spinSpeed * 0.01;
    }

    // Hover scale (smooth lerp)
    const targetScale = hovered ? scale * 1.2 : scale;
    groupRef.current.scale.lerp(
      new THREE.Vector3(targetScale, targetScale, targetScale),
      0.1
    );
  });

  const handlePointerDown = (e: any) => {
    e.stopPropagation();
    setDragging(true);
    if (groupRef.current) {
      const hit = e.point as THREE.Vector3;
      dragOffset.current.set(
        groupRef.current.position.x - hit.x,
        groupRef.current.position.y - hit.y,
        0
      );
    }
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = () => {
    setDragging(false);
  };

  return (
    <group
      ref={groupRef}
      position={initialPosition}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
    >
      <Center>
        <primitive object={model} />
      </Center>
    </group>
  );
}

useGLTF.preload("/goldnugget.glb");