import { Card, CardContent } from "@/components/ui/card";

interface SystemProps {
  title: string;
  items: string[];
}

const systemList: SystemProps[] = [
  {
    title: "Google Ads",
    items: [
      "Search",
      "Performance Max",
      "Demand Gen",
      "Display",
      "Wideo",
      "Produktowe",
      "Aplikacje",
    ],
  },
  {
    title: "Microsoft Ads",
    items: [
      "Search",
      "Performance Max",
      "Display",
      "Produktowe",
      "Audience Ads",
    ],
  },
  {
    title: "Meta Ads",
    items: [
      "Rozpoznawalność",
      "Ruch",
      "Zaangażowanie",
      "Kontakty",
      "Sprzedaż",
      "Aplikacje",
    ],
  },
  {
    title: "LinkedIn Ads",
    items: [
      "Świadomość marki",
      "Ruch",
      "Wideo",
      "Lead Generation",
      "Konwersje",
    ],
  },
  {
    title: "TikTok Ads",
    items: [
      "Wideo",
      "Ruch",
      "Zasięg",
      "Konwersje",
    ],
  },
  {
    title: "Pinterest Ads",
    items: [
      "Rozpoznawalność",
      "Ruch",
      "Zaangażowanie",
      "Konwersje",
      "Zakupy",
    ],
  },
  {
    title: "Analityka",
    items: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Definiowanie i pomiar konwersji",
    ],
  },
  {
    title: "Prezentacja danych",
    items: [
      "Looker Studio",
      "Dashboardy",
      "Raportowanie dostosowane do klienta",
    ],
  },
  {
    title: "Konsultacje",
    items: [
      "Strategia",
      "Budżety",
      "Audyty działających kampanii",
      "Rekomendacje zmian",
    ],
  },
];

export const ServicesSection = () => {
  return (
    <section
  id="services"
  className="container pt-12 pb-20 sm:pt-16 sm:pb-24"
>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-sm md:text-base text-primary font-medium tracking-[0.25em] uppercase mb-4">
          Platformy i analityka
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
          Zakres działań
        </h2>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-8">
          Od kampanii reklamowych, przez analitykę i pomiar konwersji, aż po
          raportowanie wyników i optymalizację działań marketingowych.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {systemList.map((system) => (
          <Card
            key={system.title}
            className="group transition-all duration-300 hover:border-[#015002]/40 hover:shadow-md"
          >
            <CardContent className="p-6">
              <h3 className="mb-5 text-xl font-semibold transition-colors group-hover:text-[#015002]">
                {system.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {system.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border bg-muted px-3 py-1 text-sm text-muted-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};