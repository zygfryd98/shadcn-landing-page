import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="container flex min-h-[70vh] flex-col items-center justify-center text-center">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
        404
      </p>

      <h1 className="mb-4 text-4xl font-bold md:text-5xl">
        Nie znaleziono strony
      </h1>

      <p className="mb-8 max-w-xl text-muted-foreground">
        Strona, której szukasz, nie istnieje albo została przeniesiona.
      </p>

      <Button asChild>
        <Link href="/">Wróć na stronę główną</Link>
      </Button>
    </main>
  );
}