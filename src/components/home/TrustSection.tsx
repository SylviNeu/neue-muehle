import { ShieldCheck, MapPin, Sprout } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Bio zertifiziert", description: "Unser Betrieb ist nach EU-Bio-Verordnung zertifiziert. Garantiert ökologischer Anbau." },
  { icon: MapPin, title: "Regional angebaut", description: "Kurze Wege, frische Produkte. Direkt aus unserer Region zu Ihnen nach Hause." },
  { icon: Sprout, title: "Saisonal & nachhaltig", description: "Wir ernten, was die Saison hergibt – für besten Geschmack und eine gesunde Umwelt." },
];

export const TrustSection = () => (
  <section className="section-padding bg-secondary">
    <div className="container-narrow mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item) => (
          <div key={item.title} className="text-center space-y-4 p-6">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto">
              <item.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-serif text-xl">{item.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
