import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import farmerPortrait from "@/assets/farmer-portrait.jpg";

export const AboutPreview = () => (
  <section className="section-padding">
    <div className="container-narrow mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div className="order-2 md:order-1">
          <span className="text-sm font-semibold text-accent uppercase tracking-wide">Über uns</span>
          <h2 className="font-serif text-3xl sm:text-4xl mt-2 mb-4">Leidenschaft für die Erde</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Als Diplom-Landwirt bewirtschafte ich unseren Bio-Hof seit über 20 Jahren mit Überzeugung. 
            Nachhaltigkeit, Qualität und der direkte Kontakt zu unseren Kunden stehen bei uns im Mittelpunkt.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Jede Saison bringt neue Schätze vom Feld – von knackigem Salat bis zu aromatischen Tomaten. 
            Alles frisch, alles bio, alles regional.
          </p>
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Link to="/ueber-uns">
              Mehr erfahren <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="order-1 md:order-2">
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <img src={farmerPortrait} alt="Landwirt auf dem Hof" className="w-full h-auto object-cover aspect-square" />
          </div>
        </div>
      </div>
    </div>
  </section>
);
