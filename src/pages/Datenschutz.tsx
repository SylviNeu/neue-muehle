import { Layout } from "@/components/layout/Layout";

const Datenschutz = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl mb-8">Datenschutzerklärung</h1>
        
        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
          <div>
            <h2 className="font-serif text-xl text-foreground">1. Datenschutz auf einen Blick</h2>
            <p>Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">2. Allgemeine Hinweise</h2>
            <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">3. Verantwortliche Stelle</h2>
            <p>Neue Mühle<br />Waldstraße 31<br />14806 Dahnsdorf/Neue Mühlet<br />E-Mail: info@neue-muehle.de</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">4. Datenerfassung auf dieser Website</h2>
            <p>Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Die Kontaktdaten finden Sie im Impressum dieser Website.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">5. Shopify / E-Commerce</h2>
            <p>Für unseren Online-Shop nutzen wir die Dienste von Shopify. Bei einer Bestellung werden Ihre Daten (Name, Adresse, Zahlungsinformationen) über Shopify verarbeitet. Weitere Informationen finden Sie in der Datenschutzerklärung von Shopify.</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">6. Ihre Rechte</h2>
            <p>Sie haben jederzeit das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Bitte kontaktieren Sie uns hierzu.</p>
          </div>

          <p className="text-sm italic">Diese Datenschutzerklärung ist ein Platzhalter und muss durch einen Rechtsanwalt oder Datenschutzbeauftragten angepasst werden.</p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Datenschutz;
