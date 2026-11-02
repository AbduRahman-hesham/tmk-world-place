import type { ReactNode } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import GameArt from '@/components/art/GameArt';
import type { Game } from '@/data/games';

function Thumbnail({ game, children }: { game: Game; children?: ReactNode }) {
  return (
    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-sky-100 sm:aspect-[16/10] sm:rounded-[1.25rem]">
      <div className="h-full w-full motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-out motion-safe:group-hover:scale-110">
        <GameArt art={game.art} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" aria-hidden="true" />
      {children}
    </div>
  );
}

function NumberBadge({ id }: { id: number }) {
  return (
    <span
      aria-hidden="true"
      className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-white font-display text-sm font-bold text-ink shadow-md ring-2 ring-white/80"
    >
      {id}
    </span>
  );
}

export default function GameCard({ game }: { game: Game }) {
  if (game.status === 'available' && game.url) {
    return (
      <a
        href={game.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Play ${game.title} (opens in a new tab)`}
        className="group flex flex-col rounded-[1.75rem] border-4 bg-white p-2.5 shadow-lg shadow-sky-900/10 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-400 focus-visible:ring-offset-4 focus-visible:ring-offset-sky-50 motion-safe:transition-all motion-safe:duration-300 motion-safe:ease-out motion-safe:hover:-translate-y-2 hover:shadow-2xl hover:shadow-sky-900/20 sm:p-3"
        style={{ borderColor: game.accent }}
      >
        <Thumbnail game={game}>
          <NumberBadge id={game.id} />
        </Thumbnail>
        <h3 className="mt-3 px-1 font-display text-base font-bold leading-snug text-ink sm:text-xl">{game.title}</h3>
        <span
          className="mt-4 inline-flex items-center justify-center gap-2 self-stretch rounded-full px-4 py-3 font-display text-base font-semibold text-white shadow-[0_5px_0_0_rgba(15,23,42,0.25)] motion-safe:transition-all motion-safe:duration-200 group-hover:brightness-110 group-hover:shadow-[0_7px_0_0_rgba(15,23,42,0.25)] group-active:translate-y-1 group-active:shadow-[0_1px_0_0_rgba(15,23,42,0.25)]"
          style={{ backgroundColor: game.accent }}
        >
          Play Now
          <ArrowRight className="h-4 w-4 motion-safe:transition-transform motion-safe:duration-200 motion-safe:group-hover:translate-x-1" aria-hidden="true" />
        </span>
      </a>
    );
  }

  return (
    <article className="relative flex flex-col overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-amber-100 via-white to-pink-100 p-2.5 shadow-lg shadow-amber-900/10 ring-4 ring-amber-300/70 sm:p-3">
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-sunny/40" aria-hidden="true" />
      <Thumbnail game={game}>
        <span className="absolute left-2 top-2 inline-flex items-center gap-1 rounded-full bg-white px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-amber-900 shadow-md sm:text-xs">
          <Sparkles className="h-3.5 w-3.5 text-amber-500 motion-safe:animate-twinkle" aria-hidden="true" />
          New Adventure Loading
        </span>
      </Thumbnail>
      <h3 className="mt-3 px-1 font-display text-base font-bold leading-snug text-ink sm:text-xl">{game.title}</h3>
    </article>
  );
}
