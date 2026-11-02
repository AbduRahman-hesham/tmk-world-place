import { Coins, Star } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/70 bg-white/70 backdrop-blur-sm">
      <div className="absolute -left-10 -top-10 h-24 w-24 rounded-full bg-turquoise/20" aria-hidden="true" />
      <div className="absolute -right-8 bottom-0 h-20 w-20 rounded-full bg-coral/20" aria-hidden="true" />
      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-10 text-center sm:px-6">
        <div className="flex items-center gap-5" aria-hidden="true">
          <Star className="h-5 w-5 fill-sunny text-amber-500 motion-safe:animate-twinkle" />
          <Coins className="h-6 w-6 text-teal-600 motion-safe:animate-float" />
          <Star className="h-4 w-4 fill-coral text-coral motion-safe:animate-twinkle" />
          <Coins className="h-5 w-5 text-sky-600 motion-safe:animate-float" />
          <Star className="h-5 w-5 fill-sunny text-amber-500 motion-safe:animate-twinkle" />
        </div>
        <p className="font-display text-xl font-semibold text-ink sm:text-2xl">
          Keep Playing, Keep Learning, Keep Growing!
        </p>
      </div>
    </footer>
  );
}
