import { Layout } from "@/components/layout/Layout";
import { Helmet } from "react-helmet-async";

const sections = [
  { id: "§1", title: "Geltungsbereich" },
  { id: "§2", title: "Vertragspartner" },
  { id: "§3", title: "Angebot und Vertragsabschluss" },
  { id: "§4", title: "Preise und Zahlung" },
  { id: "§5", title: "Lieferung und Abholung" },
  { id: "§6", title: "Gemüsekisten / Abos" },
  { id: "§7", title: "Saisonale Verfügbarkeit" },
  { id: "§8", title: "Bio-Zertifizierung" },
  { id: "§9", title: "Eigentumsvorbehalt" },
  { id: "§10", title: "Widerrufsrecht" },
  { id: "§11", title: "Gewährleistung" },
  { id: "§12", title: "Haftung" },
  { id: "§13", title: "Datenschutz" },
  { id: "§14", title: "Streitbeilegung" },
  { id: "§15", title: "Schlussbestimmungen" },
];

const AGB = () => (
  <Layout>
    <Helmet>
      <title>AGB | Ökologischer Landbau Christian Hoffmann</title>
      <meta name="description" content="Allgemeine Geschäftsbedingungen für den Online-Shop und Gemüsekisten-Abo von Ökologischer Landbau Christian Hoffmann." />
      <meta property="og:title" content="AGB | Ökologischer Landbau Christian Hoffmann" />
      <meta property="og:description" content="Allgemeine Geschäftsbedingungen für den Online-Shop und Gemüsekisten-Abo von Ökologischer Landbau Christian Hoffmann." />
    </Helmet>

    <section className="section-padding print:py-4">
      <div className="container-narrow mx-auto max-w-3xl">
        <div className="mb-2">
          <h1 className="font-serif text-4xl mb-2">Allgemeine Geschäftsbedingungen (AGB)</h1>
          <p className="text-sm text-muted-foreground mb-8">
            Ökologischer Landbau Christian Hoffmann — Stand: 05. Juni 2026
          </p>
        </div>

        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
          <div className="bg-muted/40 rounded-lg p-5 print:bg-transparent print:p-0 print:rounded-none">
            <h2 className="font-serif text-lg text-foreground mb-3">Inhaltsverzeichnis</h2>
            <nav aria-label="AGB-Inhaltsverzeichnis">
              <ol className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm list-decimal list-inside">
                {sections.map((s) => (
                  <li key={s.id}>
                    <a
                      href={`#${s.id}`}
                      className="underline decoration-muted-foreground/30 hover:decoration-foreground transition-colors"
                    >
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          <div id="§1">
            <h2 className="font-serif text-xl text-foreground">§ 1 Geltungsbereich</h2>
            <p>
              Diese AGB gelten für alle Verträge, die über den Online-Shop, im Rahmen von Gemüsekisten-Abonnements
              sowie bei sonstigen Liefer- und Verkaufsangeboten zwischen dem Betrieb „Ökologischer Landbau
              Christian Hoffmann“ und seinen Kunden geschlossen werden.
            </p>
            <p>Kunden können sowohl Verbraucher (B2C) als auch Unternehmer (B2B) sein.</p>
          </div>

          <div id="§2">
            <h2 className="font-serif text-xl text-foreground">§ 2 Vertragspartner</h2>
            <p>
              Christian Hoffmann<br />
              Ökologischer Landbau Christian Hoffmann<br />
              Waldstraße 3<br />
              14806 Dahnsdorf<br />
              Deutschland
            </p>
            <p>
              Telefon: 0172 3156127<br />
              E-Mail:{" "}
              <a href="mailto:goldene-zukunft@web.de" className="underline">
                goldene-zukunft@web.de
              </a>
            </p>
            <p>Steuernummer: 048/299/02287</p>
            <p>Bio-Kontrollstelle: DE-021-ÖKO-Kontrollstelle</p>
          </div>

          <div id="§3">
            <h2 className="font-serif text-xl text-foreground">§ 3 Angebot und Vertragsabschluss</h2>
            <p>
              Die Darstellung der Produkte im Online-Shop stellt kein rechtlich bindendes Angebot dar.
            </p>
            <p>
              Durch das Absenden einer Bestellung gibt der Kunde ein verbindliches Angebot ab.
            </p>
            <p>
              Der Vertrag kommt durch Bestellbestätigung oder Lieferung zustande.
            </p>
            <p>
              Bei Abo-Modellen kommt der Vertrag für wiederkehrende Lieferungen zustande und verlängert sich
              je nach Vereinbarung automatisch.
            </p>
          </div>

          <div id="§4">
            <h2 className="font-serif text-xl text-foreground">§ 4 Preise und Zahlung</h2>
            <p>Alle Preise sind in Euro angegeben.</p>
            <p>Soweit nicht anders angegeben, enthalten die Preise die gesetzliche Umsatzsteuer.</p>
            <p>Zahlungsmöglichkeiten:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Überweisung</li>
              <li>SEPA-Lastschrift (insbesondere bei Abos)</li>
              <li>Barzahlung bei Abholung (falls angeboten)</li>
              <li>Online-Zahlungsdienstleister</li>
            </ul>
            <p>Zahlungen für Abos erfolgen regelmäßig im vereinbarten Rhythmus (wöchentlich/monatlich).</p>
          </div>

          <div id="§5">
            <h2 className="font-serif text-xl text-foreground">§ 5 Lieferung und Abholung</h2>
            <p>Lieferungen erfolgen im vereinbarten Liefergebiet.</p>
            <p>Liefertermine können saisonal und witterungsbedingt variieren.</p>
            <p>Gemüsekisten werden im vereinbarten Rhythmus (z. B. wöchentlich) ausgeliefert.</p>
            <p>Abholung am Hof ist nach Vereinbarung möglich.</p>
            <p>
              Die Produkte werden in einer Mehrweg-Kiste geliefert. Diese Kiste wird nicht mit verkauft
              und muss bei der nächsten Lieferung zurückgegeben werden. Kommt es zu keiner weiteren
              Lieferung, muss die Kiste innerhalb von 4 Wochen zum Lieferanten zurückgebracht werden,
              anderenfalls werden für die Kiste 8€ Wiederbeschaffungswert berechnet.
            </p>
          </div>

          <div id="§6">
            <h2 className="font-serif text-xl text-foreground">§ 6 Gemüsekisten / Abos</h2>
            <p>Gemüsekisten-Abos sind wiederkehrende Lieferverträge.</p>
            <p>Der Inhalt der Kisten variiert saisonal und abhängig von Ernteverfügbarkeit.</p>
            <p>
              Der Verkäufer behält sich vor, Inhalte zu ersetzen oder anzupassen, sofern gleichwertige Produkte geliefert
              werden.
            </p>
            <p>Eine Kündigung des Abos ist mit der im jeweiligen Angebot angegebenen Frist möglich.</p>
          </div>

          <div id="§7">
            <h2 className="font-serif text-xl text-foreground">§ 7 Saisonale Verfügbarkeit</h2>
            <p>Landwirtschaftliche Produkte unterliegen natürlichen Schwankungen.</p>
            <p>
              Wetter, Ernteausfälle oder biologische Bedingungen können Liefermengen und Sortimente beeinflussen.
            </p>
          </div>

          <div id="§8">
            <h2 className="font-serif text-xl text-foreground">§ 8 Bio-Zertifizierung</h2>
            <p>Alle Produkte stammen aus kontrolliert ökologischem Anbau.</p>
            <p>Kontrollstelle: DE-021-ÖKO-Kontrollstelle</p>
          </div>

          <div id="§9">
            <h2 className="font-serif text-xl text-foreground">§ 9 Eigentumsvorbehalt</h2>
            <p>Die Ware bleibt bis zur vollständigen Bezahlung Eigentum des Verkäufers.</p>
          </div>

          <div id="§10">
            <h2 className="font-serif text-xl text-foreground">§ 10 Widerrufsrecht</h2>
            <p>
              Für frische, schnell verderbliche Lebensmittel besteht kein Widerrufsrecht (§ 312g Abs. 2 Nr. 2 BGB).
            </p>
            <p>Für nicht verderbliche Waren gilt das gesetzliche Widerrufsrecht.</p>
            <p>Bei Abonnements gelten die im Angebot genannten Kündigungs- und Laufzeitbedingungen.</p>
          </div>

          <div id="§11">
            <h2 className="font-serif text-xl text-foreground">§ 11 Gewährleistung</h2>
            <p>Es gelten die gesetzlichen Gewährleistungsrechte.</p>
          </div>

          <div id="§12">
            <h2 className="font-serif text-xl text-foreground">§ 12 Haftung</h2>
            <p>
              Der Verkäufer haftet unbeschränkt bei Vorsatz und grober Fahrlässigkeit sowie bei Verletzung von Leben,
              Körper oder Gesundheit.
            </p>
            <p>Bei leichter Fahrlässigkeit nur bei wesentlichen Vertragspflichten.</p>
          </div>

          <div id="§13">
            <h2 className="font-serif text-xl text-foreground">§ 13 Datenschutz</h2>
            <p>
              Es gilt die{" "}
              <a href="/datenschutz" className="underline">
                Datenschutzerklärung
              </a>{" "}
              des Unternehmens.
            </p>
          </div>

          <div id="§14">
            <h2 className="font-serif text-xl text-foreground">§ 14 Streitbeilegung</h2>
            <p>
              Keine Verpflichtung zur Teilnahme an Streitbeilegungsverfahren vor Verbraucherschlichtungsstellen.
            </p>
          </div>

          <div id="§15">
            <h2 className="font-serif text-xl text-foreground">§ 15 Schlussbestimmungen</h2>
            <p>Es gilt deutsches Recht unter Ausschluss des UN-Kaufrechts.</p>
            <p>Sollten einzelne Bestimmungen unwirksam sein, bleibt der Rest wirksam.</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default AGB;
