import { Music2 } from "lucide-react";

export function MusicHero() {
  return (
    <div className="container mx-auto px-4 py-24 text-center text-white">
      <div className="bg-black/40 backdrop-blur-md p-12 rounded-2xl border border-green-500/20 hover:border-green-500/30 transition-all duration-300">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-green-500/20 blur-xl rounded-full" />
          <Music2 className="w-24 h-24 text-green-400 relative z-10 animate-pulse" />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mt-8 mb-6 bg-gradient-to-r from-green-400 via-green-300 to-green-500 bg-clip-text text-transparent">
          RealZn
        </h1>
        <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
          Producteur de Musique Électronique & Rap sous FrenchMafiaRecords
        </p>
      </div>
    </div>
  );
}