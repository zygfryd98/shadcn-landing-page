import { HeroSection } from "@/components/layout/sections/hero";
import { AboutSection } from "@/components/layout/sections/about";
import { ServicesSection } from "@/components/layout/sections/services";
import { ExperienceSection } from "@/components/layout/sections/experience";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ExperienceSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}