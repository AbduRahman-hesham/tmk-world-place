import type { ReactNode } from 'react';
import type { GameArtKey } from '@/data/games';
import { At, Coin, Cloud, Doughnut, Kid, Shadow, Sparkle, Star } from '@/components/art/primitives';

function ArtFrame({ id, from, to, children }: { id: string; from: string; to: string; children: ReactNode }) {
  return (
    <svg
      viewBox="0 0 320 200"
      preserveAspectRatio="xMidYMid slice"
      className="h-full w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id={`${id}-sky`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={from} />
          <stop offset="1" stopColor={to} />
        </linearGradient>
      </defs>
      <rect width="320" height="200" fill={`url(#${id}-sky)`} />
      {children}
    </svg>
  );
}

function Sun({ x, y, r }: { x: number; y: number; r: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r * 1.6} fill="#FFE97A" opacity={0.35} />
      <circle cx={x} cy={y} r={r} fill="#FFD23F" />
    </g>
  );
}

function Tree({ x, base, s = 1 }: { x: number; base: number; s?: number }) {
  return (
    <At x={x} y={base} s={s}>
      <rect x={-4} y={-22} width={8} height={24} rx={3} fill="#92400E" />
      <circle cx={0} cy={-38} r={18} fill="#22C55E" />
      <circle cx={-9} cy={-30} r={11} fill="#16A34A" />
      <circle cx={8} cy={-44} r={6} fill="#86EFAC" opacity={0.7} />
    </At>
  );
}

function Grass({ y }: { y: number }) {
  return <path d={`M0 ${y} Q80 ${y - 14} 160 ${y} T320 ${y} V200 H0Z`} fill="#4ADE80" />;
}

function CatchMoney() {
  return (
    <ArtFrame id="catch" from="#7DD3FC" to="#ECFEFF">
      <Sun x={262} y={36} r={16} />
      <Cloud x={70} y={34} />
      <Cloud x={230} y={80} s={0.6} />
      <Coin x={104} y={44} r={13} />
      <Coin x={196} y={20} r={15} />
      <Coin x={240} y={62} r={12} label="$" />
      <Coin x={74} y={92} r={11} />
      <Star x={150} y={56} r={6} fill="#FFFFFF" />
      <Grass y={170} />
      <At x={160} y={102} s={1.02}>
        <Kid shirt="#FF7A6B" arms="up" />
      </At>
      <Shadow x={160} y={178} rx={44} />
      <path d="M112 156 H208 L196 196 H124 Z" fill="#E0823A" />
      <path d="M112 156 H208 L206 166 H114 Z" fill="#F59E0B" />
      <path d="M124 176 H196" stroke="#C2410C" strokeWidth={2} opacity={0.5} />
      <path d="M118 186 H202" stroke="#C2410C" strokeWidth={2} opacity={0.5} />
      <Coin x={142} y={158} r={10} />
      <Coin x={176} y={160} r={10} />
    </ArtFrame>
  );
}

function Building({ x, w, h, color, roof = 'flat' }: { x: number; w: number; h: number; color: string; roof?: 'flat' | 'dome' }) {
  const rows = Math.max(1, Math.floor((h - 18) / 22));
  return (
    <g>
      <rect x={x} y={160 - h} width={w} height={h} rx={roof === 'dome' ? w / 2 : 6} fill={color} />
      <rect x={x} y={160 - h} width={w} height={6} rx={3} fill="#FFFFFF" opacity={0.3} />
      {Array.from({ length: rows }, (_, row) =>
        [0, 1].map((col) => (
          <rect
            key={`${row}-${col}`}
            x={x + 8 + col * (w / 2 - 4)}
            y={160 - h + 14 + row * 22}
            width={w / 2 - 12}
            height={11}
            rx={3}
            fill="#FFF7D6"
          />
        )),
      )}
    </g>
  );
}

function HappyCity() {
  return (
    <ArtFrame id="city" from="#BAE6FD" to="#FEF9E7">
      <Sun x={44} y={38} r={14} />
      <Cloud x={176} y={30} s={0.8} />
      <path d="M130 84 Q196 20 262 84" fill="none" stroke="#FF7A6B" strokeWidth={5} strokeLinecap="round" opacity={0.7} />
      <path d="M142 84 Q196 36 250 84" fill="none" stroke="#FFD23F" strokeWidth={5} strokeLinecap="round" opacity={0.7} />
      <path d="M154 84 Q196 52 238 84" fill="none" stroke="#2EC4B6" strokeWidth={5} strokeLinecap="round" opacity={0.7} />
      <Building x={10} w={54} h={92} color="#2EC4B6" />
      <Building x={70} w={44} h={70} color="#FF7A6B" />
      <Building x={120} w={60} h={118} color="#8B5CF6" />
      <Building x={186} w={44} h={82} color="#FFB020" roof="dome" />
      <Building x={236} w={70} h={62} color="#38BDF8" />
      <Tree x={300} base={160} s={0.9} />
      <rect x={0} y={160} width={320} height={40} fill="#475569" />
      <path d="M0 160 H320" stroke="#94A3B8" strokeWidth={3} />
      <path d="M0 182 H320" stroke="#FFFFFF" strokeWidth={3} strokeDasharray="14 12" />
      <At x={100} y={122} s={0.5}>
        <Kid shirt="#FF7A6B" />
      </At>
      <At x={226} y={124} s={0.46}>
        <Kid shirt="#FFB020" />
      </At>
    </ArtFrame>
  );
}

function CurrencyChallenge() {
  return (
    <ArtFrame id="currency" from="#5EEAD4" to="#E0F2FE">
      <Cloud x={50} y={26} s={0.7} />
      <Shadow x={160} y={178} rx={60} />
      <circle cx={160} cy={100} r={66} fill="#1E40AF" />
      <circle cx={160} cy={98} r={64} fill="#3B82F6" />
      <circle cx={140} cy={74} r={16} fill="#FFFFFF" opacity={0.25} />
      <g fill="#4ADE80" stroke="#15803D" strokeWidth={2}>
        <path d="M116 80 q22 -20 42 -6 q10 14 -6 26 q-20 6 -32 -8z" />
        <path d="M184 118 q22 -6 28 14 q-6 18 -20 12 q-12 -10 -8 -26z" />
        <path d="M134 120 q12 -6 16 6 q-4 10 -14 6z" />
      </g>
      <g fill="none" stroke="#FFFFFF" strokeOpacity={0.5} strokeWidth={2.5}>
        <ellipse cx={160} cy={98} rx={28} ry={64} />
        <line x1={96} y1={98} x2={224} y2={98} />
      </g>
      <g transform="translate(206 150) rotate(-12)">
        <rect x={-36} y={-20} width={72} height={40} rx={6} fill="#16A34A" stroke="#14532D" strokeWidth={2} />
        <circle r={10} fill="#BBF7D0" />
        <text textAnchor="middle" dominantBaseline="central" fontSize={14} fontWeight={700} fill="#14532D" fontFamily="Fredoka, sans-serif">$</text>
      </g>
      <Coin x={52} y={62} r={18} label="¥" />
      <Coin x={268} y={60} r={17} label="€" />
      <Coin x={60} y={150} r={15} label="£" />
      <Sparkle x={274} y={130} r={9} fill="#FFFFFF" delay={0.6} />
    </ArtFrame>
  );
}

function Card({ x, y, r, color }: { x: number; y: number; r: number; color: string }) {
  return (
    <At x={x} y={y} r={r}>
      <rect x={-50} y={-34} width={100} height={66} rx={11} fill="#0F172A" opacity={0.18} transform="translate(2 4)" />
      <rect x={-50} y={-34} width={100} height={66} rx={11} fill={color} stroke="#FFFFFF" strokeWidth={3} />
      <rect x={-50} y={-16} width={100} height={12} fill="#1F3A5F" opacity={0.25} />
      <rect x={-38} y={2} width={22} height={16} rx={3} fill="#FFF1A8" />
      <circle cx={34} cy={18} r={8} fill="#FFFFFF" opacity={0.6} />
    </At>
  );
}

function BondMaster() {
  return (
    <ArtFrame id="bond" from="#FED7AA" to="#FFF7ED">
      <Star x={44} y={36} r={11} />
      <Star x={288} y={30} r={9} fill="#FFFFFF" />
      <Sparkle x={250} y={60} r={8} fill="#FFFFFF" delay={0.9} />
      <Card x={118} y={110} r={-16} color="#2EC4B6" />
      <Card x={158} y={100} r={-2} color="#8B5CF6" />
      <Card x={196} y={114} r={14} color="#FF7A6B" />
      <Shadow x={46} y={180} rx={26} />
      <Coin x={46} y={162} r={16} />
      <Coin x={46} y={144} r={16} />
      <Coin x={70} y={172} r={14} label="%" />
      <At x={266} y={128} s={0.9}>
        <Kid shirt="#2563EB" glasses />
      </At>
    </ArtFrame>
  );
}

function BusinessDeal() {
  const bunting = Array.from({ length: 9 }, (_, i) => i);
  return (
    <ArtFrame id="deal" from="#BAE6FD" to="#FFFBEB">
      <Cloud x={262} y={24} s={0.6} />
      <path d="M0 40 Q160 70 320 40" fill="none" stroke="#7C4A2D" strokeWidth={1.5} />
      {bunting.map((i) => (
        <polygon
          key={i}
          points={`${12 + i * 35},${41 + i * 0.5} ${28 + i * 35},${41 + i * 0.5} ${20 + i * 35},${56 + i * 0.5}`}
          fill={['#FF7A6B', '#FFD23F', '#2EC4B6', '#8B5CF6'][i % 4]}
        />
      ))}
      <rect x={0} y={178} width={320} height={22} fill="#86EFAC" />
      <Shadow x={160} y={178} rx={120} />
      <rect x={64} y={84} width={192} height={96} rx={4} fill="#FFE4D6" />
      <rect x={60} y={72} width={200} height={16} rx={6} fill="#FB923C" />
      {Array.from({ length: 8 }, (_, i) => (
        <rect key={i} x={50 + i * 27.5} y={58} width={27.5} height={26} fill={i % 2 === 0 ? '#FF7A6B' : '#FFFFFF'} />
      ))}
      <rect x={76} y={106} width={48} height={40} rx={4} fill="#BAE6FD" stroke="#7C4A2D" strokeWidth={3} />
      <rect x={196} y={106} width={48} height={40} rx={4} fill="#BAE6FD" stroke="#7C4A2D" strokeWidth={3} />
      <rect x={140} y={114} width={40} height={66} rx={4} fill="#7C4A2D" />
      <circle cx={172} cy={148} r={3} fill="#FFD23F" />
      <polyline points="22,176 52,156 78,164 112,132" fill="none" stroke="#16A34A" strokeWidth={5} strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="122,126 110,130 118,140" fill="#16A34A" />
      <Coin x={36} y={44} r={15} />
      <Coin x={286} y={122} r={15} label="$" />
    </ArtFrame>
  );
}

function ChaseDream() {
  return (
    <ArtFrame id="dream" from="#7DD3FC" to="#FEF9C3">
      <Cloud x={70} y={40} />
      <Cloud x={176} y={24} s={0.7} />
      <path d="M0 150 Q80 92 160 140 T320 128 V200 H0Z" fill="#86EFAC" />
      <path d="M0 172 Q100 130 200 172 T320 160 V200 H0Z" fill="#4ADE80" />
      <path d="M72 164 Q140 122 216 84" fill="none" stroke="#FFFFFF" strokeWidth={4} strokeDasharray="2 12" strokeLinecap="round" />
      <circle cx={246} cy={52} r={34} fill="#FFFFFF" opacity={0.35} />
      <Star x={246} y={52} r={24} className="animate-twinkle" />
      <Sparkle x={282} y={108} r={9} fill="#FFFFFF" delay={0.8} />
      <Sparkle x={210} y={34} r={7} fill="#FFFFFF" delay={1.6} />
      <Shadow x={92} y={180} rx={26} />
      <At x={92} y={126} s={0.62}>
        <Kid shirt="#DB2777" arms="up" />
      </At>
    </ArtFrame>
  );
}

function IcyTower() {
  const platforms = [30, 70, 110, 150, 184];
  const flakes: [number, number][] = [
    [36, 28],
    [54, 92],
    [276, 52],
    [286, 130],
    [44, 150],
    [270, 176],
  ];
  return (
    <ArtFrame id="icy" from="#BAE6FD" to="#F0F9FF">
      <path d="M0 150 L50 96 L92 138 L130 110 L0 200Z" fill="#BFDBFE" />
      <path d="M190 150 L240 92 L290 140 L320 118 V200 H190Z" fill="#BFDBFE" />
      <rect x={116} y={0} width={88} height={200} fill="#DBEAFE" stroke="#93C5FD" strokeWidth={2} />
      <rect x={124} y={0} width={10} height={200} fill="#FFFFFF" opacity={0.6} />
      {platforms.map((y) => (
        <g key={y}>
          <rect x={98} y={y} width={124} height={12} rx={6} fill="#60A5FA" />
          <rect x={98} y={y - 2} width={124} height={5} rx={2.5} fill="#FFFFFF" />
        </g>
      ))}
      <line x1={160} y1={0} x2={160} y2={24} stroke="#1E3A8A" strokeWidth={3} />
      <polygon points="160,2 188,10 160,18" fill="#FF7A6B" />
      {flakes.map(([x, y]) => (
        <Sparkle key={`${x}-${y}`} x={x} y={y} r={5} fill="#FFFFFF" delay={(x + y) % 3} />
      ))}
      <Shadow x={198} y={60} rx={18} />
      <At x={198} y={26} s={0.6}>
        <Kid shirt="#0284C7" arms="up" />
      </At>
    </ArtFrame>
  );
}

function DoughnutConnect() {
  const nodes: { x: number; y: number; frost: string }[] = [
    { x: 70, y: 56, frost: '#FF8FB1' },
    { x: 160, y: 42, frost: '#FFD23F' },
    { x: 250, y: 66, frost: '#7BE0C3' },
    { x: 112, y: 140, frost: '#B794F4' },
    { x: 206, y: 144, frost: '#7DD3FC' },
  ];
  const links: [number, number][] = [
    [0, 1],
    [1, 2],
    [0, 3],
    [1, 4],
    [2, 4],
    [3, 4],
  ];
  return (
    <ArtFrame id="connect" from="#A5F3FC" to="#FCE7F3">
      {Array.from({ length: 12 }, (_, i) => (
        <circle key={i} cx={20 + (i % 6) * 56} cy={20 + Math.floor(i / 6) * 160} r={2.5} fill="#FFFFFF" opacity={0.6} />
      ))}
      <Cloud x={262} y={172} s={0.6} />
      {links.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="#FFFFFF"
          strokeWidth={7}
          strokeLinecap="round"
          opacity={0.9}
        />
      ))}
      {nodes.map((n) => (
        <g key={`${n.x}-${n.y}`}>
          <Shadow x={n.x} y={n.y + 30} rx={22} />
          <Doughnut x={n.x} y={n.y} r={28} frost={n.frost} rot={n.x / 4} />
        </g>
      ))}
    </ArtFrame>
  );
}

function DoughnutBoxSling() {
  return (
    <ArtFrame id="sling" from="#FDE68A" to="#FFF7ED">
      <path d="M92 124 Q150 -10 262 70" fill="none" stroke="#FFFFFF" strokeWidth={3} strokeDasharray="3 9" strokeLinecap="round" />
      <Doughnut x={120} y={74} r={20} frost="#FF8FB1" rot={20} />
      <Doughnut x={196} y={38} r={18} frost="#7BE0C3" rot={-10} />
      <Doughnut x={250} y={92} r={20} frost="#B794F4" rot={40} />
      <Star x={276} y={34} r={12} fill="#FFFFFF" className="animate-twinkle" />
      <Star x={44} y={44} r={9} fill="#FF7A6B" className="animate-twinkle" delay={1.2} />
      <Shadow x={92} y={184} rx={70} />
      <polygon points="36,128 24,108 66,118" fill="#E0823A" />
      <polygon points="150,128 162,108 120,118" fill="#E0823A" />
      <rect x={36} y={124} width={118} height={58} rx={7} fill="#F5A65B" stroke="#C2410C" strokeWidth={3} />
      <rect x={36} y={124} width={118} height={12} rx={6} fill="#FFFFFF" opacity={0.25} />
      <rect x={44} y={122} width={102} height={10} rx={4} fill="#9A3412" />
      <rect x={84} y={138} width={22} height={40} rx={3} fill="#FFFFFF" opacity={0.5} />
      <Doughnut x={70} y={142} r={12} frost="#FF8FB1" />
    </ArtFrame>
  );
}

function ComingSoon() {
  const sparkles: [number, number, number, number][] = [
    [54, 44, 12, 0],
    [268, 56, 16, 0.7],
    [252, 152, 10, 1.4],
    [50, 152, 9, 0.3],
    [160, 28, 7, 1.9],
  ];
  return (
    <ArtFrame id="soon" from="#FBCFE8" to="#FDE68A">
      <g opacity={0.3}>
        <path d="M160 100 L60 0 H100Z" fill="#FFFFFF" />
        <path d="M160 100 L220 0 H260Z" fill="#FFFFFF" />
      </g>
      <Shadow x={160} y={184} rx={74} />
      <rect x={100} y={96} width={120} height={88} rx={10} fill="#2EC4B6" />
      <rect x={100} y={96} width={120} height={10} rx={5} fill="#FFFFFF" opacity={0.25} />
      <rect x={140} y={96} width={40} height={88} fill="#FF7A6B" />
      <g className="animate-wiggle" style={{ transformBox: 'fill-box', transformOrigin: 'center bottom' }}>
        <rect x={92} y={72} width={136} height={30} rx={10} fill="#14B8A6" />
        <rect x={140} y={72} width={40} height={30} fill="#FF7A6B" />
        <circle cx={142} cy={60} r={16} fill="#FF7A6B" />
        <circle cx={178} cy={60} r={16} fill="#FF7A6B" />
        <circle cx={160} cy={66} r={6} fill="#E55B4C" />
      </g>
      <circle cx={120} cy={120} r={3} fill="#FFFFFF" opacity={0.6} />
      <circle cx={200} cy={150} r={3} fill="#FFFFFF" opacity={0.6} />
      {sparkles.map(([x, y, r, delay]) => (
        <Sparkle key={`${x}-${y}`} x={x} y={y} r={r} fill="#FFFFFF" delay={delay} />
      ))}
    </ArtFrame>
  );
}

const SCENES: Record<GameArtKey, () => ReactNode> = {
  'catch-money': CatchMoney,
  'happy-city': HappyCity,
  'currency-challenge': CurrencyChallenge,
  'bond-master': BondMaster,
  'business-deal': BusinessDeal,
  'chase-dream': ChaseDream,
  'icy-tower': IcyTower,
  'doughnut-connect': DoughnutConnect,
  'doughnut-box-sling': DoughnutBoxSling,
  'coming-soon': ComingSoon,
};

export default function GameArt({ art }: { art: GameArtKey }) {
  const Scene = SCENES[art];
  return <>{Scene()}</>;
}
