import { ArrowDown } from 'lucide-react';
import HeroArt from '@/components/HeroArt';

export default function Hero() {
  const handleExplore = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById('games')?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });
  };

  return (
    <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 pb-12 pt-8 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:pt-14">
      <div className="relative text-center lg:text-left">
        <h1 className="font-display text-4xl font-bold leading-[1.15] text-ink sm:text-5xl lg:text-6xl">
          <span className="text-teal-700">Ready to Play</span> &amp;{' '}
          <span className="relative isolate inline-block">
            Learn?
            <span aria-hidden="true" className="absolute inset-x-0 bottom-1 -z-10 h-3 rounded-full bg-sunny sm:h-4" />
          </span>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-ink/80 sm:text-xl lg:mx-0">
          Explore fun games, discover new skills, and become a money-smart superstar!
        </p>
        <button
          type="button"
          onClick={handleExplore}
          className="group mt-8 inline-flex items-center gap-3 rounded-full bg-teal-700 px-7 py-3.5 font-display text-lg font-semibold text-white shadow-[0_6px_0_0_#115E59] motion-safe:transition-all motion-safe:duration-200 hover:-translate-y-0.5 hover:bg-teal-800 hover:shadow-[0_8px_0_0_#115E59] active:translate-y-1 active:shadow-[0_2px_0_0_#115E59] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-teal-300 focus-visible:ring-offset-2"
        >
          Explore Games
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-sunny text-ink motion-safe:transition-transform group-hover:translate-y-0.5">
            <ArrowDown className="h-4 w-4 motion-safe:animate-bounce" aria-hidden="true" />
          </span>
        </button>
      </div>
      <div className="relative">
        <HeroArt />
      </div>
    </section>
  );
}
