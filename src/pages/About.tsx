import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Leaf, Droplets, Sun, Heart } from "lucide-react";
import farmerPortrait from "@/assets/farmer-portrait.jpg";
import heroFarm from "@/assets/hero-farm.jpg";

const stats = [
  { value: "20+", label: "Jahre Bio-Anbau" },
  { value: "50+", label: "Sorten pro Saison" },
  { value: "100%", label: "Ökologisch zertifiziert" },
  { value: "0 km", label: "Regional" },
];

const values = [
  { icon: Leaf, title: "Ökologisch", description: "Wir verzichten komplett auf chemische Dünge- und Pflanzenschutzmittel und bevorzugen Saatgut samenfester Sorten." },
  { icon: Droplets, title: "Ressourcenschonend", description: "Wassersparende Bewässerung und schonende Bodenbearbeitung." },
  { icon: Sun, title: "Saisonal", description: "Wir ernten nur, was die Natur zur jeweiligen Jahreszeit hergibt." },
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
        <p className="text-primary-foreground/80 mt-2 text-lg max-w-lg">Die Geschichte hinter Hof Frische.</p>
      </div>
    </section>

    {/* Farmer story */}
    <section className="section-padding">
      <div className="container-narrow mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img src={farmerPortrait} alt="Der Landwirt" className="w-full aspect-[4/5] object-cover" />
        </div>
        <div className="space-y-4">
          <span className="text-sm font-semibold text-accent uppercase tracking-wide">Meister der Landwirtschaft</span>
          <h2 className="font-serif text-3xl">Leidenschaft seit über 20 Jahren</h2>
          <p className="text-muted-foreground leading-relaxed">
            Als Landwirt habe ich mich von Beginn an für den ökologischen Anbau entschieden. 
            Unser Hof steht für nachhaltige Landwirtschaft – ohne Kompromisse bei der Qualität.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Von Salat über Tomaten bis hin zu Kartoffeln – alles wächst in natürlichen Kreisläufen. 
            Unsere Böden werden gepflegt, nicht ausgebeutet. So schmeckt man den Unterschied.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Der direkte Verkauf an unsere Kunden ist mir besonders wichtig. Denn wer sein Essen kennt, 
            genießt es bewusster.
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
