import { Card, CardContent } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

const values = [
  {
    title: "Najpierw problem",
    description:
      "Każda współpraca zaczyna się od zrozumienia celu. Dopiero później wybierane są narzędzia i kanały reklamowe.",
  },
  {
    title: "Bez wciskania usług",
    description:
      "Jeżeli kampania, platforma lub większy budżet nie mają uzasadnienia, nie będą rekomendowane.",
  },
  {
    title: "Pomiar ponad opinie",
    description:
      "Decyzje wynikają z analizy danych i testów, a nie z przypuszczeń czy utartych schematów.",
  },
  {
    title: "Transparentna współpraca",
    description:
      "Jasna komunikacja, konkretne rekomendacje i pełna świadomość, dlaczego podejmowane są określone działania.",
  },
];

export const AboutSection = () => {
  return (
    <section
  id="about"
  className="container pt-12 pb-20 sm:pt-16 sm:pb-24"
>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-sm md:text-base text-primary font-medium tracking-[0.25em] uppercase mb-4">
          Podejście
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
          Czego możesz oczekiwać?
        </h2>

        <div className="space-y-6">
          <div className="text-2xl md:text-3xl font-semibold leading-snug">
            <p>Nie każda kampania wymaga większego budżetu.</p>
            <p>Nie każdy problem rozwiązuje się reklamą.</p>
          </div>

          <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-8">
            Dlatego współpraca opiera się na analizie, transparentnej
            komunikacji i rozwiązaniach, które mają uzasadnienie — nie na
            domysłach czy utartych schematach.
          </p>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {values.map((value) => (
          <Card
            key={value.title}
            className="group border hover:border-[#015002]/40 hover:shadow-md transition-all duration-300"
          >
            <CardContent className="p-8">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-[#015002]/10">
                <BadgeCheck className="size-6 text-[#015002]" />
              </div>

              <h3 className="text-2xl font-semibold mb-4 transition-colors group-hover:text-[#015002]">
                {value.title}
              </h3>

              <p className="leading-8 text-muted-foreground">
                {value.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};