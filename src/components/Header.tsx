import { Star } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-white/90 shadow-sm shadow-sky-900/5 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sunny to-amber-400 font-display text-base font-bold text-ink shadow-md ring-2 ring-white motion-safe:transition-transform motion-safe:duration-300 hover:-rotate-6 hover:scale-105">
            TMK
          </div>
          <div className="leading-tight">
            <p className="font-display text-xl font-bold text-ink sm:text-2xl">TMK Game World</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-sky-800">The Millionaire Kid</p>
          </div>
        </div>
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sunny/30" aria-hidden="true">
          <Star className="h-6 w-6 fill-sunny text-amber-500 motion-safe:animate-wiggle" />
        </span>
      </div>
    </header>
  );
}
