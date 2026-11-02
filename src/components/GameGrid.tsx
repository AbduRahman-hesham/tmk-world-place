import GameCard from '@/components/GameCard';
import { GAMES } from '@/data/games';

export default function GameGrid() {
  return (
    <section id="games" className="mx-auto max-w-6xl scroll-mt-24 px-4 pb-16 sm:px-6">
      <div className="mb-8 text-center sm:mb-10">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Choose Your Adventure</h2>
        <div className="mx-auto mt-3 flex items-center justify-center gap-1.5" aria-hidden="true">
          <span className="h-2 w-8 rounded-full bg-turquoise" />
          <span className="h-2 w-3 rounded-full bg-sunny" />
          <span className="h-2 w-2 rounded-full bg-coral" />
        </div>
        <p className="mt-3 text-base text-ink/70 sm:text-lg">Tap a game to start playing.</p>
      </div>
      <div className="grid grid-cols-1 gap-4 min-[360px]:grid-cols-2 sm:gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-7">
        {GAMES.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </div>
    </section>
  );
}
