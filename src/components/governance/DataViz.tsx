import React, { useEffect, useRef } from "react";
import type { VizKey } from "./chapters-data";

/* ── Timeline 2008: 3 Falcon failures → 4th success → NASA → Tesla funding ── */
function Timeline2008() {
  const events = [
    { x: 8, title: "F1", subtitle: "Nổ", tone: "fail", pos: "bottom" },
    { x: 25, title: "F2", subtitle: "Nổ", tone: "fail", pos: "bottom" },
    { x: 42, title: "F3", subtitle: "Nổ", tone: "fail", pos: "bottom" },
    { x: 59, title: "F4", subtitle: "Bay!", tone: "win", pos: "bottom" },
    { x: 76, title: "NASA", subtitle: "1.5 tỷ đô", tone: "win", pos: "top" },
    { x: 92, title: "Tesla", subtitle: "Gọi vốn 18:00", tone: "win", pos: "bottom" },
  ];
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("viz-in")),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="viz-container">
      <div className="viz-title">TIMELINE // GIÁNG SINH 2008</div>
      <div className="relative h-32 sm:h-36 my-2">
        {/* Timeline track */}
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[var(--color-gold)]/25 -translate-y-1/2" />
        {events.map((ev, i) => (
          <div
            key={i}
            className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 viz-dot"
            style={{ left: `${ev.x}%`, transitionDelay: `${i * 0.12}s` }}
          >
            {/* Dot */}
            <span
              className={`block w-3 h-3 rounded-full border transition-all ${
                ev.tone === "win"
                  ? "bg-[var(--color-jade)] border-[var(--color-jade)] shadow-[0_0_12px_var(--color-jade)]"
                  : "bg-[var(--color-gold-dark)] border-[var(--color-gold)]/60"
              }`}
            />

            {/* Label - structured with title & subtitle to prevent text collisions */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 text-center pointer-events-none whitespace-nowrap ${
                ev.pos === "top" ? "bottom-5" : "top-5"
              }`}
            >
              <div
                className={`font-mono text-[10px] sm:text-[11px] font-semibold leading-tight ${
                  ev.tone === "win"
                    ? "text-[var(--color-jade-glow)]"
                    : "text-[var(--color-gold-light)]"
                }`}
              >
                {ev.title}
              </div>
              <div className="font-mono text-[9px] sm:text-[10px] text-[var(--color-foreground)]/65 leading-tight mt-0.5">
                {ev.subtitle}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Cost bars: commercial rocket vs raw materials (50–70×) ── */
function CostBars() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("viz-in")),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="viz-container">
      <div className="viz-title">CHI PHÍ // 50–70× GAP</div>
      <div className="space-y-3 my-3">
        <div>
          <div className="flex justify-between text-[11px] font-mono mb-1">
            <span className="text-[var(--color-gold-light)]">Tên lửa thương mại</span>
            <span className="text-[var(--color-gold)]/70">100%</span>
          </div>
          <div className="h-3 rounded-full bg-black/60 border border-[var(--color-gold)]/30 overflow-hidden">
            <div
              className="viz-bar h-full bg-gradient-to-r from-[var(--color-gold-dark)] to-[var(--color-gold)]"
              style={{ ["--w" as string]: "100%", transitionDelay: "0.1s" } as React.CSSProperties}
            />
          </div>
        </div>
        <div>
          <div className="flex justify-between text-[11px] font-mono mb-1">
            <span className="text-[var(--color-jade-glow)]">Nguyên liệu thô</span>
            <span className="text-[var(--color-jade)]/80">~1.5%</span>
          </div>
          <div className="h-3 rounded-full bg-black/60 border border-[var(--color-gold)]/30 overflow-hidden">
            <div
              className="viz-bar h-full bg-gradient-to-r from-[var(--color-jade)] to-[var(--color-jade-glow)]"
              style={{ ["--w" as string]: "1.5%", transitionDelay: "0.45s" } as React.CSSProperties}
            />
          </div>
        </div>
      </div>
      <p className="text-[11px] font-mono text-[var(--color-muted-foreground)]">
        Hao phí nằm ở cách làm — không phải nguyên liệu.
      </p>
    </div>
  );
}

/* ── Pie growth: zero-sum (fixed) vs positive-sum (growing) ── */
function PieGrowth() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && el.classList.add("viz-in")),
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="viz-container">
      <div className="viz-title">CHIẾC BÁNH // TỔNG KHÁC ZERO</div>
      <div className="grid grid-cols-2 gap-4 my-3">
        <div className="text-center">
          <div className="relative mx-auto w-20 h-20">
            <div className="absolute inset-0 rounded-full border-2 border-[var(--color-gold-dark)]/50" />
            <div className="viz-scale absolute inset-0 rounded-full bg-[var(--color-gold)]/20 border border-[var(--color-gold)]/40" />
          </div>
          <div className="text-[11px] font-mono mt-2 text-[var(--color-muted-foreground)]">
            Tư duy = 0 · bánh cố định
          </div>
        </div>
        <div className="text-center">
          <div className="relative mx-auto w-20 h-20">
            <div className="absolute inset-0 rounded-full border-2 border-[var(--color-gold-dark)]/50" />
            <div className="viz-grow absolute inset-0 rounded-full bg-gradient-to-br from-[var(--color-gold)]/30 to-[var(--color-jade)]/30 border border-[var(--color-jade)]/50" />
          </div>
          <div className="text-[11px] font-mono mt-2 text-[var(--color-jade-glow)]">
            Tạo giá trị · bánh nở ra
          </div>
        </div>
      </div>
    </div>
  );
}

const VIZ: Record<VizKey, () => React.ReactElement> = {
  timeline2008: Timeline2008,
  costbars: CostBars,
  piegrowth: PieGrowth,
};

export function DataViz({ viz }: { viz: VizKey }) {
  const Comp = VIZ[viz];
  return <Comp />;
}
