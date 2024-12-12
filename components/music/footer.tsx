import { Separator } from "@/components/ui/separator";

export function MusicFooter() {
  return (
    <footer className="bg-black/50 mt-16 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <h3 className="text-xl font-bold mb-4">FrenchMafiaRecords</h3>
          <p className="text-gray-400">Label de Musique Indépendant</p>
        </div>
        
        <Separator className="my-8 bg-green-900" />
        
        <div className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} RealZn. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}