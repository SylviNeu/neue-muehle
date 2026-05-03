import { Layout } from "@/components/layout/Layout";

const Datenschutz = () => (
  <Layout>
    <section className="section-padding">
      <div className="container-narrow mx-auto max-w-3xl">
        <h1 className="font-serif text-4xl mb-8">Datenschutzerklärung</h1>

        <div className="prose prose-neutral max-w-none space-y-6 text-muted-foreground">
          <div>
            <h2 className="font-serif text-xl text-foreground">1. Datenschutz auf einen Blick</h2>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
              wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
              werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer untenstehenden
              Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">2. Verantwortliche Stelle</h2>
            <p>
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              Ökologischer Landbau Christian Hoffmann<br />
              Waldstraße 3<br />
              14806 Dahnsdorf<br />
              Telefon: 01723156127<br />
              E-Mail: goldene-zukunft@web.de
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die
              Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">3. Erfassung allgemeiner Informationen beim Besuch unserer Website</h2>
            <p>
              Wenn Sie auf unsere Website zugreifen, werden automatisch mittels eines Cookies Informationen allgemeiner Natur
              erfasst (sog. Server-Logfiles). Diese Informationen umfassen z.B. die Art des Webbrowsers, das verwendete
              Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse, die zuvor besuchte Seite, das
              Datum und die Uhrzeit Ihres Besuches sowie die übertragene Datenmenge. Diese Informationen werden technisch
              benötigt, um von Ihnen angeforderte Inhalte korrekt auszuliefern und fallen bei Nutzung des Internets zwingend an.
              Sie werden insbesondere zu folgenden Zwecken verarbeitet:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Sicherstellung eines reibungslosen Verbindungsaufbaus der Website</li>
              <li>Sicherstellung einer komfortablen Nutzung unserer Website</li>
              <li>Auswertung der Systemsicherheit und -stabilität</li>
            </ul>
            <p>
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der
              Verbesserung der Stabilität und Funktionalität unserer Website.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">4. Kontaktformular</h2>
            <p>
              Treten Sie bezüglich Fragen jeglicher Art per E-Mail oder Kontaktformular mit uns in Kontakt, erteilen Sie uns
              zum Zwecke der Kontaktaufnahme Ihre freiwillige Einwilligung. Hierfür ist die Angabe einer gültigen E-Mail-Adresse
              erforderlich. Diese dient der Zuordnung der Anfrage und der anschließenden Beantwortung derselben. Die Angabe
              weiterer Daten ist optional. Die von Ihnen gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie
              für mögliche Anschlussfragen gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. a DSGVO (Einwilligung) sowie
              Art. 6 Abs. 1 lit. b DSGVO (Vertragsanbahnung). Der Versand der Kontaktformular-E-Mails erfolgt über den Dienst
              Resend (Resend, Inc.).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">5. Online-Shop / Shopify</h2>
            <p>
              Für die Abwicklung von Bestellungen in unserem Online-Shop nutzen wir die Dienste der Shopify International Ltd.,
              Victoria Buildings, 2. Etage, 1-2 Haddington Road, Dublin 4, D04 XN32, Irland („Shopify"). Bei einer Bestellung
              werden die hierfür notwendigen Daten (insbesondere Name, Anschrift, E-Mail-Adresse, Zahlungsinformationen)
              erfasst und über Shopify verarbeitet. Die Verarbeitung erfolgt zur Erfüllung des Kaufvertrags gemäß
              Art. 6 Abs. 1 lit. b DSGVO. Weitere Informationen entnehmen Sie der Datenschutzerklärung von Shopify unter
              {" "}
              <a href="https://www.shopify.com/legal/privacy" target="_blank" rel="noreferrer" className="underline">
                shopify.com/legal/privacy
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">6. Cookies</h2>
            <p>
              Unsere Website verwendet Cookies. Dabei handelt es sich um kleine Textdateien, die auf Ihrem Endgerät gespeichert
              werden. Einige Cookies sind technisch notwendig (z.B. zur Speicherung des Warenkorbs) und werden auf Grundlage
              von Art. 6 Abs. 1 lit. f DSGVO gesetzt. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von
              Cookies informiert werden und Cookies nur im Einzelfall erlauben.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">7. Hosting</h2>
            <p>
              Diese Website wird auf Servern eines Auftragsverarbeiters gehostet. Personenbezogene Daten, die auf dieser
              Website erfasst werden, werden auf den Servern des Hosters gespeichert. Mit dem Hoster wurde ein Vertrag über
              Auftragsverarbeitung gemäß Art. 28 DSGVO geschlossen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">8. SSL-/TLS-Verschlüsselung</h2>
            <p>
              Diese Seite nutzt aus Gründen der Sicherheit und zum Schutz der Übertragung vertraulicher Inhalte eine SSL- bzw.
              TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
              „http://" auf „https://" wechselt.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">9. Ihre Rechte als betroffene Person</h2>
            <p>Ihnen stehen bezüglich Ihrer bei uns gespeicherten personenbezogenen Daten folgende Rechte zu:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
              <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
              <li>Recht auf Löschung (Art. 17 DSGVO)</li>
              <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
              <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
              <li>Recht auf Widerspruch gegen die Verarbeitung (Art. 21 DSGVO)</li>
              <li>Recht auf Widerruf einer erteilten Einwilligung (Art. 7 Abs. 3 DSGVO)</li>
            </ul>
            <p>
              Zudem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung Ihrer
              personenbezogenen Daten durch uns zu beschweren (Art. 77 DSGVO).
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">10. Speicherdauer</h2>
            <p>
              Personenbezogene Daten werden nur so lange gespeichert, wie dies für die Erfüllung des jeweiligen Zwecks
              erforderlich ist oder gesetzliche Aufbewahrungsfristen (insbesondere handels- und steuerrechtliche) bestehen.
            </p>
          </div>

          <div>
            <h2 className="font-serif text-xl text-foreground">11. Aktualität und Änderung dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website oder aufgrund
              geänderter gesetzlicher bzw. behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu
              ändern. Die jeweils aktuelle Datenschutzerklärung kann jederzeit auf dieser Website von Ihnen abgerufen werden.
            </p>
          </div>

          <p className="text-sm italic">
            Hinweis: Diese Datenschutzerklärung wurde sorgfältig formuliert. Für eine rechtssichere Anpassung an Ihren
            individuellen Geschäftsbetrieb empfehlen wir die Prüfung durch einen Rechtsanwalt oder Datenschutzbeauftragten.
          </p>
        </div>
      </div>
    </section>
  </Layout>
);

export default Datenschutz;
