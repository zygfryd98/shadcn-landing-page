import { HeroSection } from "@/components/layout/sections/hero";
import { AboutSection } from "@/components/layout/sections/about";
import { ServicesSection } from "@/components/layout/sections/services";
import { ContactSection } from "@/components/layout/sections/contact";
import { FooterSection } from "@/components/layout/sections/footer";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}