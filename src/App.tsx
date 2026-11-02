import FloatingDecor from '@/components/FloatingDecor';
import Footer from '@/components/Footer';
import GameGrid from '@/components/GameGrid';
import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function App() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-gradient-to-b from-sky-200 via-sky-50 to-amber-50">
      <FloatingDecor />
      <Header />
      <main className="relative flex-1">
        <Hero />
        <GameGrid />
      </main>
      <Footer />
    </div>
  );
}
