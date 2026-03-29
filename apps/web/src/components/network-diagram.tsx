"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

function TrafficParticle({
  start,
  end,
  speed,
  delay,
  color,
}: {
  start: [number, number, number];
  end: [number, number, number];
  speed: number;
  delay: number;
  color: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  const progress = useRef(delay);

  const mid = useMemo<[number, number, number]>(
    () => [
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2 + 1.2,
      (start[2] + end[2]) / 2 - 0.8,
    ],
    [start, end]
  );

  useFrame((_, delta) => {
    if (!ref.current) return;
    progress.current += delta * speed;
    const t = ((progress.current % 1) + 1) % 1;

    const x = (1 - t) * (1 - t) * start[0] + 2 * (1 - t) * t * mid[0] + t * t * end[0];
    const y = (1 - t) * (1 - t) * start[1] + 2 * (1 - t) * t * mid[1] + t * t * end[1];
    const z = (1 - t) * (1 - t) * start[2] + 2 * (1 - t) * t * mid[2] + t * t * end[2];

    ref.current.position.set(x, y, z);
    ref.current.scale.setScalar(Math.sin(t * Math.PI) * 0.7 + 0.3);
  });

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[0.05, 6, 6]} />
      <meshBasicMaterial color={color} transparent opacity={0.85} />
    </mesh>
  );
}

function ConnectionLine({
  start,
  end,
}: {
  start: [number, number, number];
  end: [number, number, number];
}) {
  const points = useMemo(() => {
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(...start),
      new THREE.Vector3(
        (start[0] + end[0]) / 2,
        (start[1] + end[1]) / 2 + 1.2,
        (start[2] + end[2]) / 2 - 0.8
      ),
      new THREE.Vector3(...end)
    );
    return curve.getPoints(32).map((p) => [p.x, p.y, p.z] as [number, number, number]);
  }, [start, end]);

  return <Line points={points} color="#2563EB" transparent opacity={0.12} lineWidth={1} />;
}

function AccountNode({
  position,
  color,
}: {
  position: [number, number, number];
  color: string;
}) {
  return (
    <Float speed={1.8} rotationIntensity={0} floatIntensity={0.4} floatingRange={[-0.08, 0.08]}>
      <group position={position}>
        <mesh>
          <sphereGeometry args={[0.28, 12, 12]} />
          <meshBasicMaterial color={color} transparent opacity={0.06} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.14, 12, 12]} />
          <meshBasicMaterial color={color} transparent opacity={0.65} />
        </mesh>
      </group>
    </Float>
  );
}

function TargetNode() {
  const ringRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (ringRef.current) ringRef.current.rotation.z = t * 0.3;
    if (outerRef.current) {
      const s = 1 + Math.sin(t * 1.5) * 0.05;
      outerRef.current.scale.setScalar(s);
    }
  });

  return (
    <Float speed={1.2} rotationIntensity={0} floatIntensity={0.2}>
      <group>
        <mesh ref={outerRef}>
          <sphereGeometry args={[0.6, 20, 20]} />
          <meshBasicMaterial color="#2563EB" transparent opacity={0.05} />
        </mesh>
        <mesh ref={ringRef}>
          <torusGeometry args={[0.42, 0.015, 8, 40]} />
          <meshBasicMaterial color="#60A5FA" transparent opacity={0.25} />
        </mesh>
        <mesh>
          <sphereGeometry args={[0.2, 20, 20]} />
          <meshBasicMaterial color="#3B82F6" transparent opacity={0.85} />
        </mesh>
      </group>
    </Float>
  );
}

function ResponsiveCameraRig() {
  const { viewport } = useThree();

  useFrame((state) => {
    const t = state.clock.elapsedTime * 0.1;
    const isMobile = viewport.width < 8;
    const radius = isMobile ? 10 : 8;
    const height = isMobile ? 4 : 3;

    state.camera.position.x = Math.sin(t) * radius;
    state.camera.position.z = Math.cos(t) * radius;
    state.camera.position.y = height + Math.sin(t * 0.5) * 0.4;
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

const ACCOUNTS: { pos: [number, number, number]; platform: string }[] = [
  { pos: [-3.2, 1, -0.8], platform: "tiktok" },
  { pos: [-2.2, -1.3, 1.3], platform: "tiktok" },
  { pos: [-2.8, 0.2, 1.8], platform: "instagram" },
  { pos: [3.2, 0.8, -0.4], platform: "tiktok" },
  { pos: [2.5, -1, 1.5], platform: "instagram" },
  { pos: [2.8, 0.4, 2], platform: "youtube" },
  { pos: [-0.8, 1.8, -2.2], platform: "tiktok" },
  { pos: [0.8, 2, -1.8], platform: "instagram" },
];

const TARGET: [number, number, number] = [0, 0, 0];
const PLATFORM_COLORS: Record<string, string> = {
  tiktok: "#60A5FA",
  instagram: "#818CF8",
  youtube: "#34D399",
};

function Scene() {
  return (
    <>
      <ResponsiveCameraRig />
      <ambientLight intensity={0.3} />

      <TargetNode />

      {ACCOUNTS.map((acc, i) => (
        <AccountNode
          key={i}
          position={acc.pos}
          color={PLATFORM_COLORS[acc.platform]}
        />
      ))}

      {ACCOUNTS.map((acc, i) => (
        <ConnectionLine key={`l-${i}`} start={acc.pos} end={TARGET} />
      ))}

      {ACCOUNTS.flatMap((acc, i) =>
        Array.from({ length: 3 }, (_, j) => (
          <TrafficParticle
            key={`p-${i}-${j}`}
            start={acc.pos}
            end={TARGET}
            speed={0.22 + j * 0.07}
            delay={(i * 0.3 + j * 0.33) % 1}
            color={PLATFORM_COLORS[acc.platform]}
          />
        ))
      )}
    </>
  );
}

export function NetworkDiagram() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative px-5 sm:px-6 py-20 sm:py-32">
      <div className="max-w-4xl mx-auto text-center mb-10 sm:mb-16">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
          A network of
          <span className="text-brand-light"> accounts.</span>
        </h2>
        <p className="text-white/35 text-sm sm:text-lg max-w-md sm:max-w-xl mx-auto">
          Every managed account drives traffic to your destination.
          Shops, digital products, landing pages — promote anything.
        </p>
      </div>

      <div
        className="max-w-5xl mx-auto h-[320px] sm:h-[420px] md:h-[520px] rounded-2xl overflow-hidden border border-white/[0.05] bg-[#04060C]"
        style={{
          opacity: visible ? 1 : 0,
          transition: "opacity 0.8s ease-out",
        }}
      >
        {mounted && (
          <Canvas
            camera={{ position: [0, 3, 8], fov: 50 }}
            dpr={[1, 1.5]}
            performance={{ min: 0.5 }}
          >
            <Scene />
          </Canvas>
        )}
      </div>

      {/* Legend */}
      <div className="max-w-5xl mx-auto mt-5 sm:mt-6 flex justify-center gap-5 sm:gap-8 text-[10px] sm:text-xs font-mono text-white/25">
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#60A5FA]" />
          TikTok
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#818CF8]" />
          Instagram
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#34D399]" />
          YouTube
        </div>
      </div>

      {/* Central label — rendered in HTML so it always works */}
      <div className="max-w-5xl mx-auto -mt-[180px] sm:-mt-[240px] md:-mt-[290px] text-center pointer-events-none relative z-10 pb-[140px] sm:pb-[200px] md:pb-[240px]">
        <div className="text-white/50 text-sm sm:text-base font-medium">your link</div>
        <div className="text-brand-light/40 text-[10px] sm:text-xs font-mono mt-1">
          shop / product / landing page
        </div>
      </div>
    </section>
  );
}
