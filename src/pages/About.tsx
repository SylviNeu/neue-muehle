import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Droplets, Sun, Heart } from "lucide-react";
import farmerPortraitAsset from "@/assets/farmer-portrait-6644.jpg.asset.json";
const farmerPortrait = farmerPortraitAsset.url;
import heroFarmAsset from "@/assets/hero-farm.jpg.asset.json";
const heroFarm = heroFarmAsset.url;

const stats = [
  { value: "20+", label: "Jahre Bio-Anbau" },
  { value: "50+", label: "Sorten pro Saison" },
  { value: "100%", label: "Ökologisch zertifiziert" },
  { value: "0 km", label: "Regional" },
];

const values = [
  { icon: Leaf, title: "Ökologisch", description: "Wir verzichten komplett auf chemische Dünge- und Pflanzenschutzmittel und bevorzugen Saatgut samenfester Sorten." },
  { icon: Droplets, title: "Ressourcenschonend", description: "Wassersparende Bewässerung, schonende Bodenbearbeitung und weitgehende Nutzung erneuerbarer Energien." },
  { icon: Sun, title: "Saisonal", description: "Wir ernten, was die Natur zur jeweiligen Jahreszeit hergibt." },
  { icon: Heart, title: "Mit Herz", description: "Jede Pflanze wird mit Sorgfalt und Leidenschaft angebaut." },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[50vh] flex items-center">
      <img src={heroFarm} alt="Unser Hof" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-foreground/50" />
      <div className="relative container-narrow mx-auto px-4 sm:px-6">
        <h1 className="font-serif text-4xl sm:text-5xl text-primary-foreground">Über uns</h1>
      </div>
    </section>

    {/* Hof Geschichte mit Foto */}
    <section className="section-padding">
      <div className="container-narrow mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div className="rounded-2xl overflow-hidden shadow-xl md:sticky md:top-24">
          <img src={farmerPortrait} alt="Christian Hoffmann" className="w-full aspect-[4/5] object-cover" />
        </div>
        <div className="space-y-5 text-muted-foreground leading-relaxed">
          <span className="text-sm font-semibold text-accent uppercase tracking-wide">Die Neue Mühle</span>
          <h2 className="font-serif text-3xl text-foreground">Unsere Geschichte</h2>
          <p>
            Direkt am Flüsschen Plane zwischen Dahnsdorf und Mörz liegt die Neue Mühle, gegründet im Jahre 1726. Bis zum Jahre 1944 wurde dort mit Wasserkraft Getreide gemahlen, danach, in LPG Eigentum, dienten die Stallgebäude der Läuferproduktion, und das Wohnhaus wurde „umgebaut" und vermietet. Dabei verfielen die Gebäude zusehends und standen seit 1991 leer.
          </p>
          <p>
            Seit 1998 wohnen wir auf dem Grundstück und bewirtschaften die zum Hof gehörenden Flächen ökologisch, seit 2025 nach den Richtlinien des Landbauverbandes Bioland.
          </p>
          <p>
            So halten wir nicht mehr Tiere, als wir von unserem Land ernähren können, füttern ausschließlich betriebseigene Futtermittel und verzichten auf chemisch-synthetische Dünge- und Pflanzenschutzmittel sowie prophylaktischen Einsatz von Medikamenten und Antibiotika. Eine vielfältige Fruchtfolge hilft, die natürliche Fruchtbarkeit des Bodens zu verbessern und in Angriff genommene Hecken- und Streuobstpflanzungen steigern den Wert des kleinräumlichen Biotopverbundes entlang der Plane und Feldwege für die Wildflora und -fauna.
          </p>
          <p>
            Zum Hof gehört auch eine kleine Herde Mutterkühe. Hauptsächlich bauen wir jedoch zahlreiche Sorten Gemüse und Kartoffeln an. So gibt es mehrere Sorten Kartoffeln aller Kochtypen, etliche Sorten Kohl, Salate, Möhren, Zwiebeln, Porree, Kürbisse, Zuckermais, Tomaten, Rote Bete u.v.m.. Die Produkte werden zum großen Teil an die Bio- und Naturkostläden in Berlin und im Potsdamer Raum abgesetzt, einen Teil unserer Ware liefern wir an Naturkost-Großhändler. Seit einigen Jahren beliefern wir auch Privathaushalte mit unserer beliebten Abokiste.
          </p>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-narrow mx-auto">
        <h2 className="font-serif text-3xl text-center mb-12">Der Betrieb in Zahlen</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl mb-2">{stat.value}</div>
              <div className="text-sm opacity-70">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="container-narrow mx-auto">
        <h2 className="font-serif text-3xl text-center mb-12">Unsere Werte</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {values.map((v) => (
            <div key={v.title} className="flex gap-4 p-6 bg-card rounded-2xl border">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <v.icon className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg mb-1">{v.title}</h3>
                <p className="text-muted-foreground text-sm">{v.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-secondary text-center">
      <div className="container-narrow mx-auto">
        <h2 className="font-serif text-3xl mb-4">Überzeugt? Dann probier's aus!</h2>
        <p className="text-muted-foreground mb-6 max-w-md mx-auto">Entdecke unsere frischen Bio-Produkte im Online-Shop.</p>
        <Button asChild size="lg" className="bg-cta text-cta-foreground hover:bg-cta/90">
          <Link to="/shop">Zum Shop <ArrowRight className="ml-2 h-4 w-4" /></Link>
        </Button>
      </div>
    </section>
  </Layout>
);

export default About;
