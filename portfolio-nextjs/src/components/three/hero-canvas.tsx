"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
    );
  } catch {
    return false;
  }
}

function WireframeCore() {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state, delta) => {
    const mesh = meshRef.current;
    if (!mesh) return;
    mesh.rotation.y += delta * 0.15;
    mesh.rotation.x = THREE.MathUtils.lerp(
      mesh.rotation.x,
      state.pointer.y * 0.35,
      0.04
    );
    mesh.rotation.z = THREE.MathUtils.lerp(
      mesh.rotation.z,
      -state.pointer.x * 0.2,
      0.04
    );
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1.7, 1]} />
      <meshBasicMaterial color="#ff5a1f" wireframe />
    </mesh>
  );
}

function ParticleField() {
  const count = 360;
  const ref = useRef<THREE.Points>(null!);

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 9;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
    }
    return arr;
  }, []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.02;
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      state.pointer.y * 0.08,
      0.02
    );
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.022}
        color="#f2f0ec"
        transparent
        opacity={0.45}
        sizeAttenuation
      />
    </points>
  );
}

function HeroFallback() {
  return (
    <div
      aria-hidden
      className="flex h-full w-full items-center justify-center"
    >
      <svg
        width="220"
        height="220"
        viewBox="0 0 220 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="110,10 200,70 170,180 50,180 20,70"
          stroke="#ff5a1f"
          strokeWidth="1"
          fill="none"
        />
        <polygon
          points="110,10 200,70 110,110"
          stroke="#f2f0ec"
          strokeOpacity="0.3"
          strokeWidth="1"
          fill="none"
        />
        <polygon
          points="20,70 110,110 50,180"
          stroke="#f2f0ec"
          strokeOpacity="0.3"
          strokeWidth="1"
          fill="none"
        />
      </svg>
    </div>
  );
}

export default function HeroCanvas() {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);

  useEffect(() => {
    setWebglSupported(supportsWebGL());
  }, []);

  // The 3D scene always animates (auto-rotate + pointer tilt), regardless of
  // the OS/browser reduced-motion preference — a deliberate choice for this
  // portfolio so the hero always shows the intended visual. The only fallback
  // case left is a genuine capability gap: no WebGL available.
  if (webglSupported === false) return <HeroFallback />;
  if (webglSupported === null) return null;

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
    >
      <WireframeCore />
      <ParticleField />
    </Canvas>
  );
}
