import {
  Banknote,
  Building2,
  Car,
  Luggage,
  PackageOpen,
  Smartphone,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

interface ExperienceProps {
  title: string;
  description: string;
  icon: React.ElementType;
}

const experienceList: ExperienceProps[] = [
  {
    title: "Automotive",
    icon: Car,
    description:
      "Kampanie Google Ads, Meta Ads, LinkedIn Ads, TikTok Ads i Pinterest Ads dla producenta motoryzacyjnego korzystającego z europejskich technologii. Działania nastawione na generowanie leadów, budowanie wizerunku oraz pomiar konkretnych konwersji na ścieżce klienta. Doświadczenie obejmuje również kampanie B2B związane z zarządzaniem flotą.",
  },
  {
    title: "Finanse",
    icon: Banknote,
    description:
      "Kompleksowa obsługa Google Ads i Microsoft Ads dla jednego z czołowych banków w Polsce. Prowadzenie kampanii dla wielu produktów skierowanych do klientów indywidualnych i firm, w tym działań nastawionych na pozyskiwanie leadów oraz promocję kont firmowych.",
  },
  {
    title: "Turystyka",
    icon: Luggage,
    description:
      "Kampanie Google Ads wspierające internetową sprzedaż zagranicznych wyjazdów. Działania kierowane do precyzyjnie określonej i stosunkowo wąskiej grupy klientów, z naciskiem na sprzedaż oraz optymalizację wyników e-commerce.",
  },
  {
    title: "E-commerce",
    icon: PackageOpen,
    description:
      "Kampanie sprzedażowe dla sklepów internetowych z branży odzieżowej, zabawkowej oraz mebli i wyposażenia wnętrz. Doświadczenie obejmuje Google Ads, Meta Ads, kampanie produktowe i działania nastawione na wzrost sprzedaży oraz rentowności.",
  },
  {
    title: "Aplikacje",
    icon: Smartphone,
    description:
      "Kampanie Google Ads i Apple Search Ads dla aplikacji z obszaru telekomunikacji oraz płatności mobilnych. Działania skupione na pozyskiwaniu instalacji, nowych użytkowników oraz generowaniu konkretnych aktywności wykonywanych wewnątrz aplikacji.",
  },
  {
    title: "Deweloperka",
    icon: Building2,
    description:
      "Kampanie promujące inwestycje mieszkaniowe w dużych miastach w Polsce. Działania prowadzone głównie w Meta Ads i LinkedIn Ads, nastawione na dotarcie do potencjalnych nabywców mieszkań oraz pozyskiwanie wartościowych leadów sprzedażowych.",
  },
];

export const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="container pt-12 pb-20 sm:pt-16 sm:pb-24"
    >
      <div className="max-w-4xl mx-auto text-center mb-16">
        <p className="text-sm md:text-base text-primary font-medium tracking-[0.25em] uppercase mb-4">
          Wybrane projekty
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
          Doświadczenie branżowe
        </h2>

        <p className="max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground leading-8">
          Doświadczenie zdobyte przy kampaniach o różnych celach, modelach
          sprzedaży i ścieżkach podejmowania decyzji przez klientów.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {experienceList.map((experience) => {
          const Icon = experience.icon;

          return (
            <Card
              key={experience.title}
              tabIndex={0}
              className="group relative overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-[#015002]/40 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#015002]"
            >
              <CardContent className="p-6 lg:p-0">
                {/* Telefon i tablet */}
                <div className="flex flex-col items-center text-center lg:hidden">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border bg-muted transition-colors duration-300 group-hover:bg-[#015002]/5">
                    <Icon className="h-7 w-7 text-[#015002] transition-colors duration-300 group-hover:text-[#015002]" />
                  </div>

                  <h3 className="text-2xl font-semibold text-[#015002]">
                    {experience.title}
                  </h3>

                  <p className="mt-5 text-sm leading-6 text-muted-foreground">
                    {experience.description}
                  </p>
                </div>

                {/* Desktop */}
                <div className="relative hidden h-[340px] lg:block">
                  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0 group-focus:-translate-y-4 group-focus:opacity-0">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border bg-muted transition-colors duration-300 group-hover:bg-[#015002]/5 group-focus:bg-[#015002]/5">
                      <Icon className="h-7 w-7 text-muted-foreground transition-colors duration-300 group-hover:text-[#015002] group-focus:text-[#015002]" />
                    </div>

                    <h3 className="text-2xl font-semibold transition-colors duration-300 group-hover:text-[#015002] group-focus:text-[#015002]">
                      {experience.title}
                    </h3>

                    <p className="mt-4 text-sm text-muted-foreground">
                      Dowiedz się więcej
                    </p>
                  </div>

                  <div className="absolute inset-0 flex translate-y-4 flex-col justify-center p-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus:translate-y-0 group-focus:opacity-100">
                    <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border bg-[#015002]/5">
                      <Icon className="h-5 w-5 text-[#015002]" />
                    </div>

                    <h3 className="mb-4 text-xl font-semibold text-[#015002]">
                      {experience.title}
                    </h3>

                    <p className="text-sm leading-6 text-muted-foreground">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
};