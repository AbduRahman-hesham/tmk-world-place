import type { ReactNode } from 'react';

const INK = '#1F3A5F';
const SKIN = '#FFCFA8';

export function starPoints(cx: number, cy: number, outer: number, inner: number) {
  return Array.from({ length: 10 }, (_, i) => {
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    const d = i % 2 === 0 ? outer : inner;
    return `${(cx + d * Math.cos(angle)).toFixed(1)},${(cy + d * Math.sin(angle)).toFixed(1)}`;
  }).join(' ');
}

export function At({
  x = 0,
  y = 0,
  s = 1,
  r = 0,
  children,
}: {
  x?: number;
  y?: number;
  s?: number;
  r?: number;
  children: ReactNode;
}) {
  return <g transform={`translate(${x} ${y}) rotate(${r}) scale(${s})`}>{children}</g>;
}

export function Star({
  x,
  y,
  r,
  fill = '#FFD23F',
  className,
  delay,
}: {
  x: number;
  y: number;
  r: number;
  fill?: string;
  className?: string;
  delay?: number;
}) {
  return (
    <polygon
      points={starPoints(x, y, r, r * 0.45)}
      fill={fill}
      className={className}
      style={delay !== undefined ? { animationDelay: `${delay}s` } : undefined}
    />
  );
}

export function Sparkle({ x, y, r, fill = '#FFFFFF', delay = 0 }: { x: number; y: number; r: number; fill?: string; delay?: number }) {
  const k = r * 0.22;
  return (
    <path
      d={`M${x} ${y - r} Q${x + k} ${y - k} ${x + r} ${y} Q${x + k} ${y + k} ${x} ${y + r} Q${x - k} ${y + k} ${x - r} ${y} Q${x - k} ${y - k} ${x} ${y - r}Z`}
      fill={fill}
      className="animate-twinkle"
      style={{ animationDelay: `${delay}s` }}
    />
  );
}

export function Shadow({ x, y, rx, ry = rx * 0.25 }: { x: number; y: number; rx: number; ry?: number }) {
  return <ellipse cx={x} cy={y} rx={rx} ry={ry} fill={INK} opacity={0.14} />;
}

export function Cloud({ x, y, s = 1 }: { x: number; y: number; s?: number }) {
  return (
    <At x={x} y={y} s={s}>
      <g>
        <rect x={-34} y={-4} width={68} height={22} rx={11} fill="#DDF3FF" />
        <rect x={-34} y={-6} width={68} height={20} rx={10} fill="#FFFFFF" />
        <circle cx={-12} cy={-6} r={13} fill="#FFFFFF" />
        <circle cx={8} cy={-12} r={17} fill="#FFFFFF" />
      </g>
    </At>
  );
}

export function Coin({ x, y, r = 14, label = '$' }: { x: number; y: number; r?: number; label?: string }) {
  return (
    <At x={x} y={y}>
      <circle r={r} fill="#B45309" />
      <circle r={r * 0.92} fill="#FFD23F" />
      <circle r={r * 0.66} fill="none" stroke="#FFF1A8" strokeWidth={Math.max(1.5, r * 0.12)} />
      <circle cx={-r * 0.38} cy={-r * 0.42} r={r * 0.16} fill="#FFFFFF" opacity={0.75} />
      <text
        textAnchor="middle"
        dominantBaseline="central"
        y={1}
        fontSize={r * 1.05}
        fontWeight={700}
        fill="#92400E"
        fontFamily="Fredoka, sans-serif"
      >
        {label}
      </text>
    </At>
  );
}

export function Kid({
  shirt = '#2EC4B6',
  hair = '#7C4A2D',
  arms = 'down',
  glasses = false,
}: {
  shirt?: string;
  hair?: string;
  arms?: 'down' | 'up';
  glasses?: boolean;
}) {
  const handY = arms === 'up' ? -40 : 46;
  const handX = arms === 'up' ? 22 : 26;
  return (
    <g>
      <Shadow x={0} y={66} rx={26} />
      <rect x={-20} y={28} width={40} height={36} rx={14} fill={shirt} />
      <rect x={-6} y={28} width={12} height={6} rx={3} fill="#FFFFFF" opacity={0.35} />
      <line x1={-18} y1={36} x2={-handX} y2={handY} stroke={shirt} strokeWidth={9} strokeLinecap="round" />
      <line x1={18} y1={36} x2={handX} y2={handY} stroke={shirt} strokeWidth={9} strokeLinecap="round" />
      <circle cx={-handX} cy={handY} r={6} fill={SKIN} />
      <circle cx={handX} cy={handY} r={6} fill={SKIN} />
      <circle r={26} fill={SKIN} />
      <path d="M-27 -4 Q-28 -32 0 -30 Q28 -32 27 -4 Q14 -16 0 -14 Q-14 -16 -27 -4Z" fill={hair} />
      <circle cx={-9} cy={4} r={3.4} fill={INK} />
      <circle cx={9} cy={4} r={3.4} fill={INK} />
      <circle cx={-8} cy={2.8} r={1.1} fill="#FFFFFF" />
      <circle cx={10} cy={2.8} r={1.1} fill="#FFFFFF" />
      <path d="M-7 11 Q0 17 7 11" fill="none" stroke={INK} strokeWidth={2.5} strokeLinecap="round" />
      <circle cx={-15} cy={12} r={3.5} fill="#FF7A6B" opacity={0.55} />
      <circle cx={15} cy={12} r={3.5} fill="#FF7A6B" opacity={0.55} />
      {glasses && (
        <g fill="none" stroke={INK} strokeWidth={2}>
          <circle cx={-9} cy={4} r={6.5} />
          <circle cx={9} cy={4} r={6.5} />
          <line x1={-2.5} y1={4} x2={2.5} y2={4} />
        </g>
      )}
    </g>
  );
}

export function Doughnut({ x, y, r = 22, frost = '#FF8FB1', hole = '#CFF3FF', rot = 0 }: { x: number; y: number; r?: number; frost?: string; hole?: string; rot?: number }) {
  return (
    <At x={x} y={y} r={rot}>
      <circle r={r + 2} fill="#7C2D12" opacity={0.18} cy={3} />
      <circle r={r} fill="#D98E4A" />
      <circle r={r * 0.8} fill={frost} />
      <path d={`M${-r * 0.6} ${-r * 0.35} Q${-r * 0.3} ${-r * 0.78} ${r * 0.1} ${-r * 0.66}`} fill="none" stroke="#FFFFFF" strokeOpacity={0.5} strokeWidth={r * 0.1} strokeLinecap="round" />
      <circle r={r * 0.32} fill={hole} />
      <rect x={r * 0.45} y={-2} width={7} height={3.2} rx={1.6} fill="#FFFFFF" transform="rotate(20)" />
      <rect x={-r * 0.85} y={r * 0.1} width={7} height={3.2} rx={1.6} fill="#FFFFFF" transform="rotate(-30)" />
      <rect x={r * 0.1} y={-r * 0.8} width={7} height={3.2} rx={1.6} fill="#7C3AED" transform="rotate(70)" />
      <rect x={-r * 0.2} y={r * 0.5} width={7} height={3.2} rx={1.6} fill="#FFD23F" transform="rotate(-10)" />
    </At>
  );
}
