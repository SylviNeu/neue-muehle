import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock, Loader2, CheckCircle } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name ist erforderlich").max(100),
  email: z.string().trim().email("Ungültige E-Mail-Adresse").max(255),
  message: z.string().trim().min(1, "Nachricht ist erforderlich").max(2000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) fieldErrors[err.path[0] as string] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setIsSubmitting(true);
    try {
      const { data, error } = await supabase.functions.invoke('send-contact-email', {
        body: { name: result.data.name, email: result.data.email, message: result.data.message },
      });
      if (error) throw error;
      if (data && !data.success) throw new Error(data.error || 'Fehler beim Senden');
      setSubmitted(true);
      toast.success("Nachricht gesendet!", { position: "top-center" });
    } catch (err) {
      console.error('Contact form error:', err);
      toast.error("Fehler beim Senden. Bitte versuchen Sie es später erneut.", { position: "top-center" });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <section className="section-padding">
        <div className="container-narrow mx-auto">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl sm:text-5xl">Kontakt</h1>
            <p className="text-muted-foreground mt-2">Wir freuen uns auf Ihre Nachricht.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-card rounded-2xl border p-6 sm:p-8">
              {submitted ? (
                <div className="text-center py-12 space-y-4">
                  <CheckCircle className="h-12 w-12 text-primary mx-auto" />
                  <h3 className="font-serif text-2xl">Vielen Dank!</h3>
                  <p className="text-muted-foreground">Wir werden uns so schnell wie möglich bei Ihnen melden.</p>
                  <Button variant="outline" onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}>
                    Neue Nachricht
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="mt-1"
                      placeholder="Ihr Name"
                    />
                    {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">E-Mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="mt-1"
                      placeholder="ihre@email.de"
                    />
                    {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Label htmlFor="message">Nachricht</Label>
                    <Textarea
                      id="message"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="mt-1 min-h-[120px]"
                      placeholder="Ihre Nachricht..."
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>
                  <Button
                    type="submit"
                    size="sm"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      "Nachricht senden"
                    )}
                  </Button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-xl mb-4">So erreichen Sie uns</h3>
                <ul className="space-y-4">
                  <li className="flex gap-3"><MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /><div><p className="font-medium">Adresse</p><p className="text-muted-foreground text-sm">Waldstraße 3, 14806 Dahnsdorf/Neue Mühle</p></div></li>
                  <li className="flex gap-3"><Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /><div><p className="font-medium">Telefon</p><p className="text-muted-foreground text-sm">033843-50526<br />Mobil: 0172-3156127</p></div></li>
                  <li className="flex gap-3"><Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" /><div><p className="font-medium">E-Mail</p><p className="text-muted-foreground text-sm">goldene-zukunft@web.de</p></div></li>
                </ul>
              </div>

              <div>
                <h3 className="font-serif text-xl mb-4 flex items-center gap-2"><Clock className="h-5 w-5 text-primary" />Abholzeiten</h3>
                <div className="bg-secondary rounded-xl p-4 text-sm space-y-2">
                  <div className="flex justify-between"><span>Montag</span><span className="font-medium">14:00 – 18:00</span></div>
                  <div className="flex justify-between"><span>Mittwoch</span><span className="font-medium">14:00 – 18:00</span></div>
                  <div className="flex justify-between"><span>Freitag</span><span className="font-medium">14:00 – 18:00</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="font-serif text-2xl sm:text-3xl mb-6">Abholung und Lieferung</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-card rounded-2xl border p-6 space-y-3">
                <h3 className="font-serif text-xl">Abholung</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Abholtage für bestellte Ware sind Montag, Mittwoch und Freitag, sofern diese Tage keine gesetzlichen Feiertage sind. Wäre der Abholtag ein gesetzlicher Feiertag, dann ist der nächstfolgende Arbeitstag der Abholtag. Bestellungen für Abholungen werden in der Regel innerhalb von zwei Arbeitstagen realisiert.
                </p>
              </div>
              <div className="bg-card rounded-2xl border p-6 space-y-3">
                <h3 className="font-serif text-xl">Lieferung</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Unser Liefergebiet erstreckt sich von Görzke, Wiesenburg, Bad Belzig, Brück, Niemegk bis Treuenbrietzen (und die Dörfer dazwischen). Lieferungen nach Werder, Michendorf, Potsdam können donnerstags nach Absprache erfolgen. Wir behalten uns vor, im Sinne nachhaltiger und ökologischer Logistik Lieferungen mehrerer Bestellungen zusammenzulegen, wodurch Lieferfristen entstehen können.
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Die Produkte werden in einer Mehrweg-Kiste geliefert. Diese Kiste wird nicht mit verkauft und muss bei der nächsten Lieferung zurückgegeben werden. Kommt es zu keiner weiteren Lieferung, muss die Kiste innerhalb von 4 Wochen zum Lieferanten zurückgebracht werden, anderenfalls werden für die Kiste 8€ Wiederbeschaffungswert berechnet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
