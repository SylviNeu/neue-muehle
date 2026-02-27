import { Layout } from "@/components/layout/Layout";

const Impressum = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl mb-8">Impressum</h1>
        
        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
          <div>
            <h2 className="font-serif text-xl text-foreground">Angaben gemäß § 5 TMG</h2>
            <p>Neue Mühle<br />Waldstraße 3<br />14806 Dahnsdorf/Neue Mühle</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">Vertreten durch</h2>
            <p>Christian Hoffmann, Diplom-Landwirt</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">Kontakt</h2>
            <p>Telefon: +49 123 456 789<br />E-Mail: info@neue-muehle.de</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">Umsatzsteuer-ID</h2>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />DE XXX XXX XXX</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">EU-Bio-Zertifizierung</h2>
            <p>Kontrollstelle: DE-ÖKO-XXX<br />Kontrollnummer: XXXX</p>
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
