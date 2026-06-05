import { Layout } from "@/components/layout/Layout";

const Datenschutz = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl mb-4">Datenschutzerklärung</h1>
        <p className="text-sm text-muted-foreground mb-8">Stand: 05. Juni 2026</p>

        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
          <div>
            <h2 className="font-serif text-xl text-foreground">1. Verantwortlicher</h2>
            <p>Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:</p>
            <p>
              Ökologischer Landbau Christian Hoffmann<br />
              Waldstraße 3<br />
              14806 Dahnsdorf<br />
              E-Mail: goldene-zukunft@web.de
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">2. Allgemeines zur Datenverarbeitung</h2>
            <p>
              Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur, soweit dies zur Bereitstellung einer
              funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener
              Daten erfolgt regelmäßig nur nach Einwilligung des Nutzers. Eine Ausnahme gilt in solchen Fällen, in denen eine
              vorherige Einholung einer Einwilligung aus tatsächlichen Gründen nicht möglich ist und die Verarbeitung der Daten
              durch gesetzliche Vorschriften gestattet ist.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">3. Rechtsgrundlagen der Datenverarbeitung</h2>
            <p>
              Soweit wir für Verarbeitungsvorgänge personenbezogener Daten eine Einwilligung der betroffenen Person einholen,
              dient Art. 6 Abs. 1 lit. a DSGVO als Rechtsgrundlage.
            </p>
            <p>
              Bei der Verarbeitung von personenbezogenen Daten, die zur Erfüllung eines Vertrages, dessen Vertragspartei die
              betroffene Person ist, erforderlich ist, dient Art. 6 Abs. 1 lit. b DSGVO als Rechtsgrundlage. Dies gilt auch für
              Verarbeitungsvorgänge, die zur Durchführung vorvertraglicher Maßnahmen erforderlich sind.
            </p>
            <p>
              Soweit eine Verarbeitung personenbezogener Daten zur Erfüllung einer rechtlichen Verpflichtung erforderlich ist,
              der unser Unternehmen unterliegt, dient Art. 6 Abs. 1 lit. c DSGVO als Rechtsgrundlage.
            </p>
            <p>
              Ist die Verarbeitung zur Wahrung eines berechtigten Interesses unseres Unternehmens oder eines Dritten
              erforderlich und überwiegen die Interessen, Grundrechte und Grundfreiheiten des Betroffenen das erstgenannte
              Interesse nicht, so dient Art. 6 Abs. 1 lit. f DSGVO als Rechtsgrundlage für die Verarbeitung.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">4. Bereitstellung der Website und Server-Logfiles</h2>
            <h3 className="font-serif text-lg text-foreground mt-4">a) Beschreibung und Umfang der Datenverarbeitung</h3>
            <p>
              Bei jedem Aufruf unserer Website erfasst unser System automatisiert Daten und Informationen vom Computersystem
              des aufrufenden Rechners. Folgende Daten werden dabei erhoben:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP-Adresse des Nutzers</li>
              <li>Datum und Uhrzeit des Zugriffs</li>
              <li>Websites, von denen das System des Nutzers auf unsere Website gelangt</li>
              <li>Websites, die vom System des Nutzers über unsere Website aufgerufen werden</li>
              <li>Browsertyp und Browserversion</li>
              <li>Betriebssystem des Nutzers</li>
            </ul>
            <h3 className="font-serif text-lg text-foreground mt-4">b) Rechtsgrundlage</h3>
            <p>
              Rechtsgrundlage für die vorübergehende Speicherung der Daten und der Logfiles ist Art. 6 Abs. 1 lit. f DSGVO.
              Unser berechtigtes Interesse liegt in der technisch fehlerfreien Darstellung und Optimierung unserer Website.
            </p>
            <h3 className="font-serif text-lg text-foreground mt-4">c) Speicherdauer</h3>
            <p>
              Die Daten werden gelöscht, sobald sie für die Erreichung des Zweckes ihrer Erhebung nicht mehr erforderlich sind.
              Im Falle der Erfassung der Daten zur Bereitstellung der Website ist dies der Fall, wenn die jeweilige Sitzung
              beendet ist. Logfiles werden spätestens nach 7 Tagen gelöscht.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">5. Verwendung von Cookies</h2>
            <p>
              Unsere Website verwendet Cookies. Bei Cookies handelt es sich um Textdateien, die im Internetbrowser bzw. vom
              Internetbrowser auf dem Computersystem des Nutzers gespeichert werden. Wenn ein Nutzer eine Website aufruft, kann
              ein Cookie auf dem Betriebssystem des Nutzers gespeichert werden.
            </p>
            <p>
              Wir verwenden technisch notwendige Cookies, die für den Betrieb des Webshops zwingend erforderlich sind (z. B.
              für den Warenkorb, die Session-Verwaltung und den Zahlungsvorgang). Diese Cookies erfordern keine gesonderte
              Einwilligung. Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der technischen
              Funktionsfähigkeit des Shops) sowie Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).
            </p>
            <p>
              Sie können Ihren Browser so einstellen, dass keine Cookies gespeichert werden oder dass Sie über das Setzen von
              Cookies informiert werden. Bitte beachten Sie, dass dadurch die Funktionalität unseres Webshops eingeschränkt
              sein kann.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">6. Shopify – unser Shopsystem</h2>
            <h3 className="font-serif text-lg text-foreground mt-4">a) Beschreibung</h3>
            <p>
              Wir betreiben unseren Onlineshop auf Basis der E-Commerce-Plattform Shopify. Anbieter ist die Shopify
              International Limited, Victoria Buildings, 2nd Floor, 1-2 Haddington Road, Dublin 4, D04 XN32, Irland
              (nachfolgend „Shopify").
            </p>
            <p>
              Shopify verarbeitet bei der Nutzung unseres Webshops personenbezogene Daten in unserem Auftrag. Mit Shopify haben
              wir einen Auftragsverarbeitungsvertrag (AVV) gemäß Art. 28 DSGVO abgeschlossen, der sicherstellt, dass Shopify
              die Daten unserer Kunden nur nach unserer Weisung und unter Einhaltung der DSGVO verarbeitet.
            </p>
            <h3 className="font-serif text-lg text-foreground mt-4">b) Datenübermittlung in Drittländer</h3>
            <p>
              Shopify kann personenbezogene Daten auch auf Servern außerhalb der EU/des EWR, insbesondere in den USA,
              verarbeiten. Die Übermittlung erfolgt auf Grundlage der EU-Standardvertragsklauseln (Art. 46 Abs. 2 lit. c
              DSGVO). Weitere Informationen finden Sie in der Datenschutzerklärung von Shopify unter:{" "}
              <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noreferrer" className="underline">
                https://www.shopify.com/legal/privacy
              </a>
            </p>
            <h3 className="font-serif text-lg text-foreground mt-4">c) Verarbeitete Daten</h3>
            <p>Bei einer Bestellung in unserem Shop werden folgende Daten von Shopify verarbeitet:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Name und Adresse (Liefer- und Rechnungsadresse)</li>
              <li>E-Mail-Adresse und Telefonnummer</li>
              <li>Bestelldaten (Artikel, Menge, Preis)</li>
              <li>Zahlungsinformationen (je nach gewählter Zahlungsmethode)</li>
              <li>IP-Adresse und technische Verbindungsdaten</li>
            </ul>
            <h3 className="font-serif text-lg text-foreground mt-4">d) Rechtsgrundlage</h3>
            <p>
              Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) sowie Art. 6 Abs. 1 lit. c DSGVO (gesetzliche
              Aufbewahrungspflichten).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">7. Bestellvorgang und Kundenkonto</h2>
            <p>
              Wenn Sie eine Bestellung in unserem Shop aufgeben, erheben wir die zur Vertragsabwicklung notwendigen Daten:
              Name, Lieferadresse, Rechnungsadresse, E-Mail-Adresse, Telefonnummer und Zahlungsdaten. Diese Daten werden
              ausschließlich zur Durchführung und Abwicklung Ihrer Bestellung sowie zur Erfüllung gesetzlicher
              Aufbewahrungspflichten (insbesondere handels- und steuerrechtlicher Aufbewahrungsfristen von bis zu 10 Jahren)
              verwendet.
            </p>
            <p>
              Rechtsgrundlagen sind Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung) und Art. 6 Abs. 1 lit. c DSGVO (gesetzliche
              Verpflichtung).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">8. Zahlungsabwicklung</h2>
            <h3 className="font-serif text-lg text-foreground mt-4">a) PayPal</h3>
            <p>
              Wenn Sie die Zahlungsart PayPal wählen, werden Ihre Zahlungsdaten an die PayPal (Europe) S.à r.l. et Cie,
              S.C.A., 22-24 Boulevard Royal, L-2449 Luxemburg (nachfolgend „PayPal") übermittelt. PayPal fungiert dabei als
              eigenständiger Verantwortlicher. Die Datenverarbeitung durch PayPal erfolgt gemäß den Datenschutzbestimmungen
              von PayPal unter:{" "}
              <a
                href="https://www.paypal.com/de/webapps/mpp/ua/privacy-full"
                target="_blank"
                rel="noreferrer"
                className="underline"
              >
                https://www.paypal.com/de/webapps/mpp/ua/privacy-full
              </a>
            </p>
            <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).</p>
            <h3 className="font-serif text-lg text-foreground mt-4">b) Shopify Payments</h3>
            <p>
              Wenn Sie die Zahlungsart Shopify Payments wählen, erfolgt die Zahlungsabwicklung über Shopify International
              Limited. Dabei werden Ihre Zahlungsdaten (z. B. Kreditkartendaten) an den von Shopify eingesetzten
              Zahlungsdienstleister Stripe übermittelt. Shopify und Stripe sind als eigenständige Verantwortliche tätig.
              Informationen zur Datenverarbeitung durch Shopify Payments finden Sie unter:{" "}
              <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noreferrer" className="underline">
                https://www.shopify.com/legal/privacy
              </a>
            </p>
            <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).</p>
            <h3 className="font-serif text-lg text-foreground mt-4">c) Kreditkartenzahlung</h3>
            <p>
              Bei Zahlung per Kreditkarte werden Ihre Kreditkartendaten verschlüsselt über das SSL-Verfahren übertragen und
              zur Bearbeitung Ihrer Zahlung an unseren Zahlungsdienstleister weitergeleitet. Ihre vollständigen
              Kreditkartendaten werden von uns nicht gespeichert. Die Datenverarbeitung erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO (Vertragserfüllung).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">9. Weitergabe an Versanddienstleister</h2>
            <p>
              Zur Lieferung Ihrer Bestellung geben wir Ihre Adressdaten (Name, Lieferadresse) an den von uns beauftragten
              Versanddienstleister weiter. Eine darüber hinausgehende Weitergabe erfolgt nicht.
            </p>
            <p>Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung).</p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">10. Ihre Rechte als betroffene Person</h2>
            <p>Sie haben gegenüber uns folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p>
              Sie haben zudem das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
              personenbezogenen Daten durch uns zu beschweren.
            </p>
            <h3 className="font-serif text-lg text-foreground mt-4">Widerspruchsrecht (Art. 21 DSGVO)</h3>
            <p>
              Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO
              verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer
              personenbezogenen Daten einzulegen. Möchten Sie von Ihrem Widerspruchsrecht Gebrauch machen, genügt eine E-Mail
              an: goldene-zukunft@web.de
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">11. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs steht Ihnen das Recht
              auf Beschwerde bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts, Ihres
              Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, zu, wenn Sie der Ansicht sind, dass die Verarbeitung
              der Sie betreffenden personenbezogenen Daten gegen die DSGVO verstößt.
            </p>
            <p>
              Die zuständige Aufsichtsbehörde für Deutschland ist der jeweilige Landesbeauftragte für Datenschutz und
              Informationsfreiheit des Bundeslandes, in dem Ihr Unternehmen seinen Sitz hat.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">12. Datensicherheit</h2>
            <p>
              Wir verwenden innerhalb des Website-Besuchs das verbreitete SSL-Verfahren (Secure Socket Layer) in Verbindung
              mit der jeweils höchsten Verschlüsselungsstufe, die von Ihrem Browser unterstützt wird. In der Regel handelt es
              sich dabei um eine 256-Bit-Verschlüsselung. Falls Ihr Browser keine 256-Bit-Verschlüsselung unterstützt, greifen
              wir stattdessen auf 128-Bit-v3-Technologie zurück. Ob eine einzelne Seite unseres Internetauftrittes
              verschlüsselt übertragen wird, erkennen Sie an der geschlossenen Darstellung des Schlüssel- beziehungsweise
              Schloss-Symbols in der unteren Statusleiste Ihres Browsers.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">13. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig und hat den Stand 05. Juni 2026. Durch die Weiterentwicklung
              unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben
              kann es notwendig werden, diese Datenschutzerklärung zu ändern. Die jeweils aktuelle Datenschutzerklärung kann
              jederzeit auf der Website von Ihnen abgerufen und ausgedruckt werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Datenschutz;
