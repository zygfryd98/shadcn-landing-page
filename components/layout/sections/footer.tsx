import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-16">
      <div className="rounded-2xl border border-secondary bg-card p-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-2xl font-bold">naklikane industries</h3>

            <p className="mt-3 max-w-sm leading-7 text-muted-foreground">
              Performance marketing oparty na danych. Google Ads, Meta Ads,
              LinkedIn Ads oraz analityka internetowa.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Kontakt</h4>

            <div className="flex flex-col gap-3">
              <Link
                href="mailto:kontakt@naklikane.com"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                kontakt@naklikane.com
              </Link>

              <Link
                href="https://www.linkedin.com/in/patryk-zakowicz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                LinkedIn
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-semibold">Informacje</h4>

            <div className="space-y-2 text-muted-foreground">
              <p>Patryk Żakowicz NAKLIKANE Industries</p>
              <p>NIP: 895 230 59 23</p>
              <p>REGON: 545134477</p>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <span className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} naklikane industries. Wszelkie prawa zastrzeżone.
          </span>

          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              href="/polityka-prywatnosci"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Polityka prywatności
            </Link>

            <Link
              href="/polityka-cookies"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Polityka cookies
            </Link>

            <button
              type="button"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              Zarządzaj zgodami
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};