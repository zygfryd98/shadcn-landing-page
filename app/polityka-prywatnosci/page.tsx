import { LegalSection } from "@/components/legal/legal-section";

export default function PrivacyPolicyPage() {
  return (
    <main className="container max-w-4xl py-24">
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-primary">
        Dokumenty
      </p>

      <h1 className="mb-4 text-4xl font-bold md:text-5xl">
        Polityka prywatności
      </h1>

      <p className="mb-16 text-muted-foreground">
        Ostatnia aktualizacja: 5 lipca 2026
      </p>

      <LegalSection title="1. Administrator danych">
        <p>
          Administratorem danych osobowych jest Patryk Żakowicz prowadzący
          działalność gospodarczą pod nazwą <strong>Patryk Żakowicz NAKLIKANE Industries</strong>,
          NIP: 895 230 59 23, REGON: 545134477.
        </p>

        <p>
          Kontakt z administratorem jest możliwy pod adresem e-mail:
          <strong> kontakt@naklikane.com</strong>.
        </p>
      </LegalSection>

      <LegalSection title="2. Charakter strony">
        <p>
          Strona internetowa ma charakter informacyjny i prezentuje ofertę usług
          świadczonych przez administratora.
        </p>

        <p>
          Strona nie umożliwia rejestracji kont użytkowników ani nie zawiera
          formularza kontaktowego. Kontakt możliwy jest wyłącznie za pomocą
          wiadomości e-mail lub poprzez profil LinkedIn.
        </p>
      </LegalSection>

      <LegalSection title="3. Jakie dane mogą być przetwarzane?">
        <p>
          Administrator może przetwarzać dane przekazane dobrowolnie przez
          użytkownika podczas kontaktu drogą elektroniczną, w szczególności:
        </p>

        <ul className="list-disc pl-6">
          <li>adres e-mail,</li>
          <li>imię i nazwisko,</li>
          <li>nazwę firmy,</li>
          <li>treść wiadomości.</li>
        </ul>

        <p>
          Dane są wykorzystywane wyłącznie w celu prowadzenia korespondencji,
          udzielenia odpowiedzi oraz ewentualnego nawiązania współpracy.
        </p>
      </LegalSection>

      <LegalSection title="4. Google Analytics 4 i Google Tag Manager">
        <p>
          Strona wykorzystuje usługę <strong>Google Analytics 4</strong> w celu
          analizy sposobu korzystania z witryny oraz tworzenia statystyk
          odwiedzin.
        </p>

        <p>
          Dane zbierane przez Google Analytics 4 mają charakter statystyczny i
          pomagają analizować ruch na stronie oraz poprawiać jej funkcjonalność.
        </p>

        <p>
          Strona wykorzystuje również <strong>Google Tag Manager</strong>, który
          służy do zarządzania tagami i skryptami wykorzystywanymi w serwisie.
          Google Tag Manager sam nie gromadzi danych osobowych, lecz umożliwia
          prawidłowe wdrażanie narzędzi analitycznych.
        </p>

        <p>
          Narzędzia analityczne są uruchamiane wyłącznie po uzyskaniu zgody
          użytkownika za pośrednictwem mechanizmu zarządzania zgodami.
        </p>
      </LegalSection>

      <LegalSection title="5. Pliki cookies">
        <p>
          Strona wykorzystuje pliki cookies niezbędne do prawidłowego działania
          serwisu oraz pliki cookies analityczne wykorzystywane przez Google
          Analytics 4.
        </p>

        <p>
          Szczegółowe informacje dotyczące wykorzystywania plików cookies
          znajdują się w Polityce cookies.
        </p>
      </LegalSection>

      <LegalSection title="6. Cele i podstawy przetwarzania danych">
        <p>
          Dane przekazane podczas kontaktu e-mail przetwarzane są w celu
          prowadzenia korespondencji oraz odpowiedzi na przesłane zapytania.
        </p>

        <p>
          Dane analityczne przetwarzane przez Google Analytics 4 przetwarzane są
          na podstawie zgody użytkownika wyrażonej za pomocą mechanizmu
          zarządzania zgodami.
        </p>
      </LegalSection>

      <LegalSection title="7. Odbiorcy danych">
        <p>
          Dane mogą być powierzane podmiotom świadczącym usługi niezbędne do
          funkcjonowania strony internetowej, w szczególności dostawcom usług
          hostingowych, poczty elektronicznej oraz usług analitycznych.
        </p>

        <p>
          W przypadku korzystania z Google Analytics 4 dane mogą być
          przetwarzane przez Google zgodnie z zasadami obowiązującymi dla tej
          usługi.
        </p>
      </LegalSection>

      <LegalSection title="8. Okres przechowywania danych">
        <p>
          Dane pochodzące z korespondencji e-mail są przechowywane przez okres
          niezbędny do prowadzenia komunikacji oraz przez czas wymagany do
          zabezpieczenia ewentualnych roszczeń.
        </p>

        <p>
          Dane analityczne są przechowywane zgodnie z konfiguracją usługi Google
          Analytics 4 oraz ustawieniami retencji danych.
        </p>
      </LegalSection>

      <LegalSection title="9. Prawa użytkownika">
        <p>
          Użytkownik ma prawo do:
        </p>

        <ul className="list-disc pl-6">
          <li>dostępu do swoich danych,</li>
          <li>ich sprostowania,</li>
          <li>usunięcia danych,</li>
          <li>ograniczenia przetwarzania,</li>
          <li>wniesienia sprzeciwu wobec przetwarzania,</li>
          <li>przenoszenia danych,</li>
          <li>cofnięcia zgody w dowolnym momencie, jeśli przetwarzanie odbywa się na jej podstawie.</li>
        </ul>

        <p>
          Użytkownik ma również prawo wniesienia skargi do Prezesa Urzędu
          Ochrony Danych Osobowych.
        </p>
      </LegalSection>

      <LegalSection title="10. Zmiany polityki prywatności">
        <p>
          Niniejsza Polityka prywatności może być aktualizowana w przypadku zmian
          przepisów prawa, sposobu działania strony lub wdrożenia nowych usług i
          narzędzi.
        </p>

        <p>
          Aktualna wersja dokumentu jest zawsze dostępna na tej stronie.
        </p>
      </LegalSection>
    </main>
  );
}