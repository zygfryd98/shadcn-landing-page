import { LegalSection } from "@/components/legal/legal-section";

export default function CookiesPolicyPage() {
  return (
    <main className="container max-w-4xl py-24">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
        Dokumenty
      </p>

      <h1 className="mb-4 text-4xl font-bold md:text-5xl">
        Polityka cookies
      </h1>

      <p className="mb-16 text-muted-foreground">
        Ostatnia aktualizacja: 5 lipca 2026
      </p>

      <LegalSection title="1. Czym są pliki cookies?">
        <p>
          Pliki cookies to niewielkie pliki zapisywane na urządzeniu użytkownika
          przez przeglądarkę internetową. Mogą służyć m.in. do prawidłowego
          działania strony, zapamiętywania ustawień oraz analizy sposobu
          korzystania z witryny.
        </p>
      </LegalSection>

      <LegalSection title="2. Jakie pliki cookies wykorzystuje strona?">
        <p>
          Strona wykorzystuje pliki cookies niezbędne do prawidłowego działania
          serwisu oraz pliki cookies analityczne wykorzystywane przez Google
          Analytics 4.
        </p>

        <p>
          Cookies analityczne są wykorzystywane wyłącznie po uzyskaniu zgody
          użytkownika.
        </p>
      </LegalSection>

      <LegalSection title="3. Cookies niezbędne">
        <p>
          Cookies niezbędne umożliwiają prawidłowe działanie strony i jej
          podstawowych funkcji. Tego typu pliki cookies mogą być wykorzystywane
          bez konieczności uzyskiwania dodatkowej zgody użytkownika.
        </p>
      </LegalSection>

      <LegalSection title="4. Cookies analityczne">
        <p>
          Strona wykorzystuje Google Analytics 4 do analizy ruchu oraz sposobu
          korzystania z witryny. Narzędzie to może wykorzystywać pliki cookies do
          tworzenia statystyk odwiedzin.
        </p>

        <p>
          Dane analityczne pomagają ocenić, które elementy strony są odwiedzane,
          jak użytkownicy poruszają się po stronie oraz jak można poprawić jej
          działanie.
        </p>
      </LegalSection>

      <LegalSection title="5. Google Tag Manager">
        <p>
          Strona wykorzystuje Google Tag Manager do zarządzania tagami i
          skryptami. Google Tag Manager może uruchamiać inne narzędzia, takie jak
          Google Analytics 4, zgodnie z ustawieniami strony oraz zgodami
          użytkownika.
        </p>
      </LegalSection>

      <LegalSection title="6. Zarządzanie zgodami">
        <p>
          Podczas pierwszej wizyty użytkownik może zdecydować, na które rodzaje
          plików cookies wyraża zgodę. Udzieloną zgodę można w dowolnym momencie
          zmienić lub wycofać za pomocą opcji „Zarządzaj zgodami” dostępnej w
          stopce strony.
        </p>
      </LegalSection>

      <LegalSection title="7. Jak wyłączyć cookies?">
        <p>
          Użytkownik może zarządzać plikami cookies z poziomu ustawień swojej
          przeglądarki internetowej. Możliwe jest zablokowanie cookies,
          usunięcie zapisanych plików lub ustawienie powiadomień o ich
          wykorzystywaniu.
        </p>

        <p>
          Ograniczenie stosowania cookies może wpłynąć na działanie niektórych
          elementów strony.
        </p>
      </LegalSection>

      <LegalSection title="8. Zmiany polityki cookies">
        <p>
          Niniejsza Polityka cookies może być aktualizowana w przypadku zmian
          przepisów prawa, sposobu działania strony lub wdrożenia nowych narzędzi
          analitycznych, reklamowych albo mechanizmów zarządzania zgodami.
        </p>

        <p>
          Aktualna wersja dokumentu jest zawsze dostępna na tej stronie.
        </p>
      </LegalSection>
    </main>
  );
}