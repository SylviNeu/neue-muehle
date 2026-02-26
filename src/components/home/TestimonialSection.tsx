import { Quote } from "lucide-react";

export const TestimonialSection = () => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="container-narrow mx-auto text-center">
      <h2 className="font-serif text-3xl sm:text-4xl mb-12">Was unsere Kunden sagen</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Empty testimonial cards - to be filled with real reviews */}
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-primary-foreground/10 rounded-2xl p-6 text-left space-y-4">
            <Quote className="h-6 w-6 opacity-40" />
            <p className="text-sm opacity-70 italic leading-relaxed">
              Noch keine Bewertung vorhanden. Echte Kundenmeinungen werden hier angezeigt.
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20" />
              <div>
                <div className="h-3 w-20 bg-primary-foreground/20 rounded" />
                <div className="h-2 w-14 bg-primary-foreground/10 rounded mt-1" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
