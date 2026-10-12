import React, { useRef, useState, useMemo, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useIsMobile } from "@/hooks/use-mobile";
import { Float, Html } from "@react-three/drei";
import * as THREE from "three";
import { CHAPTERS } from "./chapters-data";
import { Sparkles, Compass, Eye, ShieldAlert } from "lucide-react";

// Data config for 5 cipher modules
const CIPHER_NODES = [
  {
    index: 0,
    number: "01",
    id: "mat-ma-01",
    title: "Khởi Nghiệp & Giữ Nghiệp",
    metric: "< 10% TỶ LỆ SỐNG",
    basePos: [0, 1.85, 0.4] as [number, number, number],
    explodedPos: [0, 3.1, 0.9] as [number, number, number],
    color: "#d4af37",
    glow: "#f3e5ab",
    shape: "falcon-fin",
  },
  {
    index: 1,
    number: "02",
    id: "mat-ma-02",
    title: "Nguyên Lý Gốc",
    metric: "50-70× TỐI ƯU CHI PHÍ",
    basePos: [1.8, 0.55, -0.3] as [number, number, number],
    explodedPos: [3.2, 0.9, -0.6] as [number, number, number],
    color: "#00d296",
    glow: "#5dfec9",
    shape: "atom-cube",
  },
  {
    index: 2,
    number: "03",
    id: "mat-ma-03",
    title: "Quy Trình 5 Bước",
    metric: "LOẠI BỎ 10%+ THỪA THÃI",
    basePos: [1.15, -1.5, 0.6] as [number, number, number],
    explodedPos: [2.1, -2.7, 1.1] as [number, number, number],
    color: "#d4af37",
    glow: "#ffe082",
    shape: "gear-prism",
  },
  {
    index: 3,
    number: "04",
    id: "mat-ma-04",
    title: "Nhân Sự Xuất Sắc",
    metric: "100% PHỎNG VẤN TRỰC TIẾP",
    basePos: [-1.15, -1.5, 0.6] as [number, number, number],
    explodedPos: [-2.1, -2.7, 1.1] as [number, number, number],
    color: "#00d296",
    glow: "#5dfec9",
    shape: "star-core",
  },
  {
    index: 4,
    number: "05",
    id: "mat-ma-05",
    title: "Mở Rộng Chiếc Bánh",
    metric: "TỔNG KHÁC ZERO (+SUM)",
    basePos: [-1.8, 0.55, -0.3] as [number, number, number],
    explodedPos: [-3.2, 0.9, -0.6] as [number, number, number],
    color: "#d4af37",
    glow: "#f3e5ab",
    shape: "sphere-hull",
  },
];

// Inner Glowing Reactor Core (Black Mirror Obsidian + Gold Core)
function ReactorCore({ isExploded }: { isExploded: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (isExploded ? 0.35 : 0.8);
      meshRef.current.rotation.x += delta * 0.2;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y -= delta * (isExploded ? 0.4 : 0.6);
      wireRef.current.rotation.z += delta * 0.25;
    }
    if (innerRef.current) {
      const pulse = Math.sin(state.clock.getElapsedTime() * 3) * 0.15 + 1;
      innerRef.current.scale.set(pulse, pulse, pulse);
    }
  });

  return (
    <group>
      {/* Central Pulsing Heart */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.55, 2]} />
        <meshBasicMaterial
          color="#d4af37"
          wireframe={false}
          transparent
          opacity={isExploded ? 0.95 : 0.8}
        />
      </mesh>

      {/* Obsidian Faceted Shell */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.95, 0]} />
        <meshPhysicalMaterial
          color="#0a0a0c"
          roughness={0.15}
          metalness={0.9}
          transmission={0.4}
          thickness={1.2}
          clearcoat={1}
          clearcoatRoughness={0.1}
          emissive="#d4af37"
          emissiveIntensity={isExploded ? 0.4 : 0.2}
          wireframe={false}
        />
      </mesh>

      {/* Outer Golden Geometric Casing */}
      <mesh ref={wireRef}>
        <dodecahedronGeometry args={[1.25, 0]} />
        <meshStandardMaterial
          color="#f3e5ab"
          wireframe
          transparent
          opacity={isExploded ? 0.35 : 0.6}
        />
      </mesh>

      {/* Energy Core Light */}
      <pointLight color="#d4af37" intensity={isExploded ? 18 : 10} distance={6} decay={2} />
      <pointLight color="#00d296" intensity={isExploded ? 12 : 5} distance={5} decay={2} />
    </group>
  );
}

// Single Cybernetic Shard / Fragment
function CipherShard({
  node,
  isExploded,
  isHovered,
  onHover,
  onSelect,
  isMobile,
}: {
  node: (typeof CIPHER_NODES)[0];
  isExploded: boolean;
  isHovered: boolean;
  onHover: (hovered: boolean) => void;
  onSelect: () => void;
  isMobile: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const currentPos = useRef(new THREE.Vector3(...node.basePos));
  const targetPos = useMemo(
    () => new THREE.Vector3(...(isExploded ? node.explodedPos : node.basePos)),
    [isExploded, node],
  );

  useFrame((state, delta) => {
    // Lerp position smoothly between assembled & exploded
    currentPos.current.lerp(targetPos, delta * 4.5);
    if (groupRef.current) {
      groupRef.current.position.copy(currentPos.current);

      // Micro floating animation when exploded or hovered
      const time = state.clock.getElapsedTime();
      const floatOffset = Math.sin(time * 2 + node.index) * 0.08;
      groupRef.current.position.y += floatOffset * delta;

      if (isHovered) {
        groupRef.current.scale.lerp(new THREE.Vector3(1.22, 1.22, 1.22), delta * 8);
      } else {
        groupRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), delta * 8);
      }
    }

    if (meshRef.current) {
      meshRef.current.rotation.y += delta * (isHovered ? 1.5 : 0.4);
      meshRef.current.rotation.x += delta * 0.25;
    }
  });

  return (
    <group
      ref={groupRef}
      onPointerOver={(e) => {
        e.stopPropagation();
        onHover(true);
      }}
      onPointerOut={() => onHover(false)}
      onClick={(e) => {
        e.stopPropagation();
        onSelect();
      }}
      style={{ cursor: "pointer" }}
    >
      {/* Laser connecting tether back to core */}
      <line>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[
              new Float32Array([
                0,
                0,
                0,
                -currentPos.current.x * 0.85,
                -currentPos.current.y * 0.85,
                -currentPos.current.z * 0.85,
              ]),
              3,
            ]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color={isHovered ? node.glow : node.color}
          transparent
          opacity={isExploded ? (isHovered ? 0.9 : 0.45) : 0.15}
          linewidth={isHovered ? 2 : 1}
        />
      </line>

      {/* Cyber Shard Mesh */}
      <mesh ref={meshRef}>
        <octahedronGeometry args={[0.42, 0]} />
        <meshPhysicalMaterial
          color={isHovered ? node.glow : "#18181c"}
          emissive={node.color}
          emissiveIntensity={isHovered ? 1.4 : isExploded ? 0.6 : 0.25}
          roughness={0.2}
          metalness={0.85}
          clearcoat={1}
          wireframe={false}
        />
      </mesh>

      {/* Wireframe Hologram Aura */}
      <mesh scale={1.3}>
        <octahedronGeometry args={[0.42, 0]} />
        <meshBasicMaterial
          color={node.glow}
          wireframe
          transparent
          opacity={isHovered ? 0.85 : isExploded ? 0.35 : 0.15}
        />
      </mesh>

      {/* Interactive HUD Tag — hidden on mobile (quick-jump buttons handle nav) */}
      {!isMobile && (
        <Html
          position={[0, 0.7, 0]}
          center
          distanceFactor={7.5}
          zIndexRange={[100, 0]}
          className="pointer-events-auto select-none"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
              onSelect();
            }}
            className={`transition-all duration-300 cursor-pointer text-center whitespace-nowrap px-3 py-1.5 rounded-lg backdrop-blur-md border ${
              isHovered
                ? "bg-black/90 border-[var(--color-gold)] shadow-[0_0_20px_rgba(212,175,55,0.6)] scale-110"
                : isExploded
                  ? "bg-black/75 border-[var(--color-gold)]/40 shadow-[0_0_10px_rgba(0,0,0,0.8)] opacity-95"
                  : "bg-black/40 border-[var(--color-gold)]/20 opacity-0 group-hover:opacity-100 hover:opacity-100"
            }`}
          >
            <div className="flex items-center justify-center gap-1.5">
              <span
                className="w-1.5 h-1.5 rounded-full animate-ping"
                style={{ backgroundColor: node.color }}
              />
              <span className="font-mono text-[10px] font-bold tracking-widest text-[var(--color-gold-light)] uppercase">
                MẬT MÃ {node.number}
              </span>
            </div>
            <div className="font-display font-bold text-xs text-white tracking-wide mt-0.5">
              {node.title}
            </div>
            {isHovered && (
              <div className="font-mono text-[9px] text-[var(--color-jade)] font-semibold mt-0.5 tracking-wider border-t border-white/10 pt-0.5">
                {node.metric} ↗
              </div>
            )}
          </div>
        </Html>
      )}
    </group>
  );
}

// Particle field surrounding the matrix
function CyberDust({ count = 180 }: { count?: number }) {
  const points = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.08;
      pointsRef.current.rotation.x += delta * 0.03;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[points, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.035}
        color="#d4af37"
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// Main 3D Scene Assembly
function CyberneticMatrixScene({
  isExploded,
  hoveredIdx,
  setHoveredIdx,
  onSelectNode,
  particleCount,
  isMobile,
}: {
  isExploded: boolean;
  hoveredIdx: number | null;
  setHoveredIdx: (idx: number | null) => void;
  onSelectNode: (id: string) => void;
  particleCount: number;
  isMobile: boolean;
}) {
  const containerRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (containerRef.current) {
      // Gentle overall idle orbital motion
      containerRef.current.rotation.y += delta * (isExploded ? 0.12 : 0.25);

      // Subtle mouse tilt response
      const pointer = state.pointer;
      containerRef.current.rotation.x = THREE.MathUtils.lerp(
        containerRef.current.rotation.x,
        pointer.y * 0.35,
        delta * 3,
      );
      containerRef.current.rotation.z = THREE.MathUtils.lerp(
        containerRef.current.rotation.z,
        -pointer.x * 0.35,
        delta * 3,
      );
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.4}>
      <group ref={containerRef}>
        {/* Core Reactor */}
        <ReactorCore isExploded={isExploded} />

        {/* 5 Shards that explode outward */}
        {CIPHER_NODES.map((node) => (
          <CipherShard
            key={node.id}
            node={node}
            isExploded={isExploded}
            isHovered={hoveredIdx === node.index}
            onHover={(h) => setHoveredIdx(h ? node.index : null)}
            onSelect={() => onSelectNode(node.id)}
            isMobile={isMobile}
          />
        ))}

        {/* Outer Orbit Rings */}
        <mesh rotation={[Math.PI / 4, 0, 0]}>
          <ringGeometry args={[2.9, 2.92, 64]} />
          <meshBasicMaterial
            color="#d4af37"
            wireframe
            transparent
            opacity={isExploded ? 0.35 : 0.15}
          />
        </mesh>
        <mesh rotation={[-Math.PI / 3, Math.PI / 6, 0]}>
          <ringGeometry args={[3.4, 3.42, 64]} />
          <meshBasicMaterial
            color="#00d296"
            wireframe
            transparent
            opacity={isExploded ? 0.25 : 0.1}
          />
        </mesh>

        {/* Ambient star particles */}
        <CyberDust count={particleCount} />
      </group>
    </Float>
  );
}

export function CyberneticMatrix() {
  const isMobile = useIsMobile();
  const [isExploded, setIsExploded] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
  // ── Pause 3D rAF when the section is off-screen (mobile perf) ──
  const canvasWrapRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(true);
  useEffect(() => {
    if (typeof window === "undefined" || !("IntersectionObserver" in window)) return;
    const el = canvasWrapRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) setInView(e.isIntersecting);
      },
      { threshold: 0.05 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleSelectNode = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onMouseEnter={() => setIsExploded(true)}
      onMouseLeave={() => {
        setIsExploded(false);
        setHoveredIdx(null);
      }}
      className="relative w-full my-8 py-6 overflow-hidden group"
    >
      {/* Top Header HUD Bar — Tối giản, không viền cứng */}
      <div className="relative z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-4 sm:px-8 pb-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center w-7 h-7 rounded-full bg-[var(--color-gold)]/10 border border-[var(--color-gold)]/30">
            <Sparkles className="w-3.5 h-3.5 text-[var(--color-gold)] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-jade)] animate-ping" />
              <span className="font-mono text-[10px] sm:text-xs tracking-[0.25em] text-[var(--color-gold)] uppercase font-bold">
                MA TRẬN CYBERNETIC // 5 MẬT MÃ QUẢN TRỊ
              </span>
            </div>
            <p className="text-xs text-[var(--color-foreground)]/50 font-mono mt-0.5">
              {isMobile
                ? "Chạm nút Phân rã để mở · Nhấp thẻ dưới để xem chi tiết"
                : "Rê chuột để kích hoạt phân rã · Nhấp vào mảnh ghép để xem chi tiết"}
            </p>
          </div>
        </div>

        {/* Toggle Controls & State indicator */}
        <div className="flex items-center gap-2 self-start sm:self-auto">
          <button
            onClick={() => setIsExploded(!isExploded)}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-[11px] font-semibold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
              isExploded
                ? "bg-[var(--color-gold)] text-black border-[var(--color-gold)] shadow-[0_0_15px_rgba(212,175,55,0.6)]"
                : "bg-black/60 text-[var(--color-gold-light)] border-[var(--color-gold)]/40 hover:border-[var(--color-gold)] hover:bg-[var(--color-gold)]/10"
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>{isExploded ? "PHÂN RÃ: BẬT" : "PHÂN RÃ: TẮT"}</span>
          </button>
        </div>
      </div>

      {/* 3D Canvas Viewport — touch-pan-y lets mobile scroll pass through vertically */}
      <div
        ref={canvasWrapRef}
        className="relative w-full h-[360px] sm:h-[540px] lg:h-[600px] z-10 touch-pan-y"
      >
        <Canvas
          camera={{ position: [0, 0, 7.8], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={isMobile ? [1, 1.2] : [1, 1.8]}
          frameloop="always"
          style={{ touchAction: "pan-y" }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight position={[5, 8, 5]} intensity={1.5} color="#fff2cc" />
          <directionalLight position={[-5, -5, -4]} intensity={0.8} color="#00d296" />

          <Suspense fallback={null}>
            <CyberneticMatrixScene
              isExploded={isExploded}
              hoveredIdx={hoveredIdx}
              setHoveredIdx={setHoveredIdx}
              onSelectNode={handleSelectNode}
              particleCount={isMobile ? 60 : 150}
              isMobile={isMobile}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Quick Jump Buttons below 3D — Tối giản, thanh thoát */}
      <div className="relative z-20 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 px-4 sm:px-8 pb-4 pt-4">
        {CIPHER_NODES.map((n) => (
          <button
            key={n.id}
            onMouseEnter={() => {
              setIsExploded(true);
              setHoveredIdx(n.index);
            }}
            onMouseLeave={() => setHoveredIdx(null)}
            onClick={() => handleSelectNode(n.id)}
            className={`px-3.5 py-2.5 rounded-xl font-mono text-left transition-all duration-200 cursor-pointer ${
              n.index === 4 ? "col-span-2 sm:col-span-1 " : ""
            }${
              hoveredIdx === n.index
                ? "bg-[var(--color-gold)]/15 border border-[var(--color-gold)]/70 text-[var(--color-gold-light)] scale-[1.02]"
                : "bg-white/[0.02] border border-white/5 text-[var(--color-foreground)]/70 hover:border-[var(--color-gold)]/40 hover:text-white hover:bg-white/[0.04]"
            }`}
          >
            <div className="text-[10px] text-[var(--color-gold)] font-bold">MẬT MÃ {n.number}</div>
            <div className="text-[12px] font-sans font-medium text-white truncate mt-0.5">
              {n.title}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
