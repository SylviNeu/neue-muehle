import { Link } from "react-router-dom";
import { Leaf, Mail, Phone, MapPin } from "lucide-react";

export const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-narrow mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 font-serif text-xl mb-4">
            <Leaf className="h-6 w-6" />
            <span>Neue Mühle</span>
          </Link>
          <p className="text-sm opacity-80">
            Zertifizierter Bio-Betrieb mit Leidenschaft für nachhaltige Landwirtschaft und regionale Frische.
          </p>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/" className="hover:opacity-100 transition-opacity">Startseite</Link></li>
            <li><Link to="/shop" className="hover:opacity-100 transition-opacity">Shop</Link></li>
            <li><Link to="/ueber-uns" className="hover:opacity-100 transition-opacity">Über uns</Link></li>
            <li><Link to="/kontakt" className="hover:opacity-100 transition-opacity">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Kontakt</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 flex-shrink-0" /> Waldstr. 3, 14806 Dahnsdorf/Neue Mühle</li>
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 flex-shrink-0" /> +49 123 456 789</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 flex-shrink-0" /> info@neue-muehle.de</li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg mb-4">Rechtliches</h4>
          <ul className="space-y-2 text-sm opacity-80">
            <li><Link to="/impressum" className="hover:opacity-100 transition-opacity">Impressum</Link></li>
            <li><Link to="/datenschutz" className="hover:opacity-100 transition-opacity">Datenschutz</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-6 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Neue Mühle — Meister der Landwirtschaft. Alle Rechte vorbehalten.
      </div>
    </div>
  </footer>
);
