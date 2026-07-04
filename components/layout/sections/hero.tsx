"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, BadgeCheck } from "lucide-react";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="container w-full">
      <div className="grid place-items-center lg:max-w-screen-xl gap-10 mx-auto py-20 md:py-32">
        <div className="text-center space-y-8">
          <p className="fade-up fade-delay-1 text-sm md:text-base text-primary font-medium tracking-widest">
            naklikane industries
          </p>

          <div className="fade-up fade-delay-2 max-w-screen-lg mx-auto text-center text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <h1>
              Kliknięcia kosztują.
              <span className="block text-transparent bg-gradient-to-r from-[#000000] via-[#015002] to-[#015002] bg-clip-text dark:from-white dark:via-[#2EC84D] dark:to-[#015002]">
  Złe decyzje kosztują więcej.
</span>
            </h1>
          </div>

          <div className="fade-up fade-delay-3 space-y-6">
            <p className="max-w-screen-md mx-auto text-xl text-muted-foreground">
              Platformy marketingowe to tylko narzędzia. Najważniejszy jest
              sposób ich wykorzystania, a nie liczba uruchomionych kampanii.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-sm font-medium">
              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-[#015002]" />
                <span>Bez pustych obietnic</span>
              </div>

              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-[#015002]" />
                <span>Decyzje oparte na danych</span>
              </div>

              <div className="flex items-center gap-2">
                <BadgeCheck className="h-4 w-4 text-[#015002]" />
                <span>Budżet wydawany z głową</span>
              </div>
            </div>
          </div>

          <div className="fade-up fade-delay-4 flex flex-col md:flex-row justify-center items-center gap-6">
            <Button asChild size="lg" className="font-bold group/arrow">
              <Link href="#contact">
                Skontaktuj się
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Link
              href="#about"
              className="font-semibold text-muted-foreground hover:text-foreground transition-colors group"
            >
              Poznaj moje podejście
              <ArrowRight className="inline-block size-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="fade-up fade-delay-4 w-full max-w-5xl mt-12">
          <p className="mb-8 text-xs uppercase tracking-[0.3em] text-muted-foreground text-center">
            Platformy i narzędzia
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm md:text-base text-muted-foreground">
            <span className="transition-colors hover:text-foreground cursor-default">
              Google Ads
            </span>

            <span className="transition-colors hover:text-foreground cursor-default">
              Meta Ads
            </span>

            <span className="transition-colors hover:text-foreground cursor-default">
              LinkedIn Ads
            </span>

            <span className="transition-colors hover:text-foreground cursor-default">
              Microsoft Ads
            </span>

            <span className="transition-colors hover:text-foreground cursor-default">
              Pinterest Ads
            </span>

            <span className="transition-colors hover:text-foreground cursor-default">
              TikTok Ads
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mt-6 text-sm md:text-base text-muted-foreground">
            <span className="transition-colors hover:text-foreground cursor-default">
              Google Analytics 4
            </span>

            <span className="transition-colors hover:text-foreground cursor-default">
              Google Tag Manager
            </span>

            <span className="transition-colors hover:text-foreground cursor-default">
              Looker Studio
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};