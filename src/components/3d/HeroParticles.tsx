"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Line } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);

  const particles = useMemo(() => {
    const count = 2000;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }

    return positions;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.02;
    ref.current.rotation.y = state.clock.elapsedTime * 0.03;
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#F5A623"
        size={0.02}
        sizeAttenuation
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingLines() {
  const ref = useRef<THREE.Group>(null);

  const lines = useMemo(() => {
    const lineData: { points: [number, number, number][]; opacity: number }[] = [];
    for (let i = 0; i < 15; i++) {
      const sx = (Math.random() - 0.5) * 16;
      const sy = (Math.random() - 0.5) * 10;
      const sz = (Math.random() - 0.5) * 8;
      const ex = sx + (Math.random() - 0.5) * 6;
      const ey = sy + (Math.random() - 0.5) * 4;
      const ez = sz + (Math.random() - 0.5) * 3;
      lineData.push({
        points: [[sx, sy, sz], [ex, ey, ez]],
        opacity: 0.1 + Math.random() * 0.15,
      });
    }
    return lineData;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
  });

  return (
    <group ref={ref}>
      {lines.map((line, i) => (
        <Line
          key={i}
          points={line.points}
          color="#F5A623"
          transparent
          opacity={line.opacity}
          lineWidth={1}
        />
      ))}
    </group>
  );
}

export function HeroParticles() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 60 }}
      style={{ position: "absolute", inset: 0 }}
      dpr={[1, 1.5]}
      gl={{ antialias: false, alpha: true }}
    >
      <ambientLight intensity={0.3} />
      <ParticleField />
      <FloatingLines />
    </Canvas>
  );
}
