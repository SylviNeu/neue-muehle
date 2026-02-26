import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Truck } from "lucide-react";
import heroImage from "@/assets/hero-farm.jpg";

export const HeroSection = () => (
  <section className="relative min-h-[85vh] flex items-center">
    <div className="absolute inset-0">
      <img src={heroImage} alt="Bio-Bauernhof im Morgenlicht" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
    </div>
    <div className="relative container-narrow mx-auto px-4 sm:px-6 py-20">
      <div className="max-w-xl space-y-6">
        <span className="inline-block bg-cta/90 text-cta-foreground text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wide">
          Bio zertifiziert 🌱
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif leading-tight text-primary-foreground">
          Frisches Bio-Gemüse direkt vom Hof
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-md">
          Regional angebaut, saisonal geerntet – nachhaltige Landwirtschaft für bewussten Genuss.
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta/90 text-base">
            <Link to="/shop">
              Zum Shop <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 text-base">
            <Link to="/kontakt">
              <Truck className="mr-2 h-4 w-4" /> Abholung & Lieferung
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
);
