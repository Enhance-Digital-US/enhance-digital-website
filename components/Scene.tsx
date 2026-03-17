'use client';

import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const generatePositions = (count: number) => {
  const pos = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    pos[i * 3] = (Math.random() - 0.5) * 10;
    pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
    pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
  }
  return pos;
};

function Particles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { mouse, viewport } = useThree();
  
  const count = 3000;
  const positions = useMemo(() => generatePositions(count), [count]);

  const initialPositions = useMemo(() => new Float32Array(positions), [positions]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    
    const time = state.clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes.position;
    
    for (let i = 0; i < count; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      // Original position
      const ox = initialPositions[ix];
      const oy = initialPositions[iy];
      const oz = initialPositions[iz];

      // Current position
      let cx = posAttr.array[ix];
      let cy = posAttr.array[iy];
      let cz = posAttr.array[iz];

      // Mouse repulsion
      const mx = (mouse.x * viewport.width) / 2;
      const my = (mouse.y * viewport.height) / 2;
      
      const dx = cx - mx;
      const dy = cy - my;
      const dist = Math.sqrt(dx * dx + dy * dy);
      
      const radius = 4;
      const force = Math.max(0, radius - dist) * 0.12;
      
      // Target position with some noise
      const tx = ox + Math.sin(time * 0.5 + ox) * 0.2;
      const ty = oy + Math.cos(time * 0.5 + oy) * 0.2;
      const tz = oz + Math.sin(time * 0.5 + oz) * 0.2;

      // Apply repulsion
      if (dist < radius) {
        cx += dx * force;
        cy += dy * force;
      }

      // Ease back to target
      posAttr.array[ix] += (tx - cx) * 0.02;
      posAttr.array[iy] += (ty - cy) * 0.02;
      posAttr.array[iz] += (tz - cz) * 0.02;
    }
    
    posAttr.needsUpdate = true;
    pointsRef.current.rotation.y = time * 0.05;
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

export default function Scene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full opacity-40">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <Particles />
      </Canvas>
    </div>
  );
}
