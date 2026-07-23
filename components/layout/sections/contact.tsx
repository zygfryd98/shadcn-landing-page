import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export const ContactSection = () => {
  return (
    <section
  id="contact"
  className="container pt-12 pb-16 sm:pt-16 sm:pb-20"
>
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm md:text-base text-primary font-medium tracking-[0.25em] uppercase mb-4">
          Kontakt
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
          Masz pomysł?
          <br />
          Sprawdźmy, czy ma sens.
        </h2>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-8 mb-12">
          Jeżeli szukasz kogoś, kto podejdzie do Twojego projektu uczciwie i
          bez marketingowego lania wody, napisz. Nawet jeżeli ostatecznie
          uznamy, że reklama nie jest najlepszym rozwiązaniem.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="font-semibold">
            <Link href="mailto:kontakt@naklikane.com">
              <Mail className="mr-2 h-5 w-5" />
              kontakt@naklikane.com
            </Link>
          </Button>

          <Button asChild size="lg" variant="outline" className="font-semibold">
            <Link
              href="https://www.linkedin.com/in/patryk-zakowicz/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};