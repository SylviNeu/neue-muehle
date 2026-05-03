import { Layout } from "@/components/layout/Layout";

const Impressum = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl mb-8">Impressum</h1>
        
        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
          <div>
            <h2 className="font-serif text-xl text-foreground">Angaben gemäß § 5 TMG</h2>
            <p>Ökologischer Landbau Christian Hoffmann<br />Waldstraße 3<br />14806 Dahnsdorf</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">Kontakt</h2>
            <p>Telefon: 01723156127<br />E-Mail: goldene-zukunft@web.de</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">Steuernummer</h2>
            <p>St.-Nr.: 048/299/02287</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">EU-Bio-Zertifizierung</h2>
            <p>Kontrollstelle: DE-021-ÖKO-Kontrollstelle</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">Haftungsausschluss</h2>
            <p>Die Inhalte dieser Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Impressum;
