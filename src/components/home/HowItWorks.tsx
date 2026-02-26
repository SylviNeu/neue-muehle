import { ShoppingBag, CreditCard, Truck } from "lucide-react";

const steps = [
  { icon: ShoppingBag, step: "1", title: "Bestellen", description: "Wählen Sie Ihre Lieblingsprodukte im Online-Shop aus." },
  { icon: CreditCard, step: "2", title: "Bezahlen", description: "Sicher und bequem online bezahlen." },
  { icon: Truck, step: "3", title: "Abholen oder liefern lassen", description: "Holen Sie Ihre Bestellung ab oder lassen Sie sie liefern." },
];

export const HowItWorks = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow mx-auto text-center">
      <h2 className="font-serif text-3xl sm:text-4xl mb-4">So funktioniert's</h2>
      <p className="text-muted-foreground mb-12 max-w-md mx-auto">In drei einfachen Schritten zu frischem Bio-Gemüse.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div key={s.step} className="relative space-y-4">
            <div className="w-16 h-16 rounded-2xl bg-cta/20 flex items-center justify-center mx-auto">
              <s.icon className="h-8 w-8 text-accent" />
            </div>
            <div className="w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center mx-auto">
              {s.step}
            </div>
            <h3 className="font-serif text-xl">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
