import { At, Cloud, Coin, Kid, Sparkle, Star } from '@/components/art/primitives';

export default function HeroArt() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div aria-hidden="true" className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-sunny/60 motion-safe:animate-float" />
      <div aria-hidden="true" className="absolute -bottom-5 -right-4 h-20 w-20 rounded-[2rem] bg-coral/50 motion-safe:animate-wiggle" />
      <div aria-hidden="true" className="absolute -right-8 top-1/3 h-10 w-10 rotate-12 rounded-xl bg-turquoise/60" />
      <div className="relative rounded-[2.5rem] bg-white/80 p-3 shadow-2xl shadow-sky-900/15 ring-4 ring-white">
        <svg
          viewBox="0 0 400 300"
          className="block h-auto w-full rounded-[2rem]"
          role="img"
          aria-label="A smiling kid celebrating with coins, stars and clouds"
        >
          <defs>
            <linearGradient id="hero-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#38BDF8" />
              <stop offset="1" stopColor="#E0F7FF" />
            </linearGradient>
          </defs>
          <rect width="400" height="300" fill="url(#hero-sky)" />
          <circle cx="330" cy="62" r="50" fill="#FFE97A" opacity="0.4" />
          <circle cx="330" cy="62" r="34" fill="#FFD23F" />
          <Cloud x={92} y={62} s={1.1} />
          <Cloud x={300} y={150} s={0.7} />
          <path d="M0 220 Q100 170 200 215 T400 205 V300 H0Z" fill="#4ADE80" />
          <path d="M0 250 Q120 215 230 250 T400 240 V300 H0Z" fill="#22C55E" />
          <At x={200} y={150} s={1.25}>
            <Kid shirt="#2EC4B6" arms="up" />
          </At>
          <g className="animate-float">
            <Coin x={86} y={190} r={20} label="$" />
          </g>
          <g className="animate-float" style={{ animationDelay: '-1.5s' }}>
            <Coin x={322} y={230} r={18} label="€" />
          </g>
          <g className="animate-float" style={{ animationDelay: '-3s' }}>
            <Coin x={128} y={118} r={14} label="£" />
          </g>
          <Star x={150} y={60} r={12} className="animate-twinkle" />
          <Star x={262} y={120} r={8} fill="#FFFFFF" className="animate-twinkle" />
          <Star x={52} y={100} r={9} fill="#FF7A6B" className="animate-twinkle" />
          <Sparkle x={370} y={40} r={8} fill="#FFFFFF" delay={0.5} />
        </svg>
      </div>
    </div>
  );
}
