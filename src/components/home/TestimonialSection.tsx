import { Quote } from "lucide-react";

const testimonials = [
  {
    text: "Die Kartoffeln schmecken wie früher vom Bauernhof meiner Großeltern. Frischer geht es wirklich nicht!",
    name: "Anna Müller",
    role: "Stammkundin aus der Region",
  },
  {
    text: "Man merkt sofort die Qualität. Das Gemüse hält länger und schmeckt intensiver als im Supermarkt.",
    name: "Thomas Becker",
    role: "Familienvater",
  },
  {
    text: "Regional, ehrlich und nachhaltig – genau so stelle ich mir moderne Landwirtschaft vor.",
    name: "Sabine Krüger",
    role: "Bewusste Genießerin",
  },
];

export const TestimonialSection = () => (
  <section className="section-padding bg-primary text-primary-foreground">
    <div className="container-narrow mx-auto text-center">
      <h2 className="font-serif text-3xl sm:text-4xl mb-12">
        Was unsere Kunden sagen
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-primary-foreground/10 rounded-2xl p-6 text-left space-y-4 backdrop-blur-sm"
          >
            <Quote className="h-6 w-6 opacity-40" />

            <p className="text-sm opacity-90 italic leading-relaxed">
              „{testimonial.text}“
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center text-xs font-semibold">
                {testimonial.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>

              <div>
                <div className="text-sm font-semibold">
                  {testimonial.name}
                </div>
                <div className="text-xs opacity-70">
                  {testimonial.role}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
