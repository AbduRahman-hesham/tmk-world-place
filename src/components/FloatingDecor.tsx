import { Star } from 'lucide-react';
import { Cloud } from '@/components/art/primitives';

export default function FloatingDecor() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg viewBox="-40 -30 80 50" className="absolute left-[-2%] top-24 w-36 opacity-90 motion-safe:animate-drift sm:w-56">
        <Cloud x={0} y={0} />
      </svg>
      <svg viewBox="-40 -30 80 50" className="absolute right-[-3%] top-[40%] w-28 opacity-80 motion-safe:animate-drift sm:w-44">
        <Cloud x={0} y={0} />
      </svg>
      <svg viewBox="-40 -30 80 50" className="absolute bottom-[12%] left-[30%] hidden w-36 opacity-70 motion-safe:animate-drift md:block">
        <Cloud x={0} y={0} />
      </svg>
      <Star className="absolute left-[6%] top-[30%] h-6 w-6 fill-sunny text-amber-400 motion-safe:animate-twinkle" />
      <Star className="absolute left-[46%] top-[14%] h-4 w-4 fill-white text-white motion-safe:animate-twinkle" />
      <Star className="absolute right-[10%] top-[60%] h-5 w-5 fill-sunny text-amber-400 motion-safe:animate-twinkle" />
      <Star className="absolute left-[14%] top-[78%] h-4 w-4 fill-coral text-coral motion-safe:animate-twinkle" />
      <Star className="absolute right-[30%] top-[88%] h-6 w-6 fill-white text-white motion-safe:animate-twinkle" />
      <span className="absolute right-[14%] top-[24%] hidden h-8 w-8 rounded-full border-2 border-amber-600 bg-gradient-to-br from-yellow-200 to-yellow-400 shadow-md motion-safe:animate-float sm:block" />
      <span className="absolute left-[4%] top-[66%] hidden h-7 w-7 rounded-full border-2 border-amber-600 bg-gradient-to-br from-yellow-200 to-yellow-400 shadow-md motion-safe:animate-float sm:block" />
      <span className="absolute left-[88%] top-[46%] h-6 w-6 rounded-full border-2 border-amber-600 bg-gradient-to-br from-yellow-200 to-yellow-400 shadow-md motion-safe:animate-float" />
    </div>
  );
}
