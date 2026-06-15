import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-8">
      {/* Título de la App */}
      <h1 className="text-4xl font-bold text-yellow-400 drop-shadow-[0_4px_6px_rgba(250,204,21,0.3)] mb-8">
        Pokémon Card Deck Builder
      </h1>

      {/* Contenedor Grid Responsivo para las Cartas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl">
        
        {/* Carta Temporal 1 (Placeholder) */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center h-80 shadow-lg hover:border-yellow-500/50 transition-colors duration-300">
          <p className="text-slate-500 font-mono text-sm">Carta #1 Placeholder</p>
        </div>

        {/* Carta Temporal 2 (Placeholder) */}
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col items-center justify-center h-80 shadow-lg hover:border-yellow-500/50 transition-colors duration-300">
          <p className="text-slate-500 font-mono text-sm">Carta #2 Placeholder</p>
        </div>
        
      </div>
    </main>
  );
}
