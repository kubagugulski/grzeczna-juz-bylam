import Footer from "../components/Footer";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans flex flex-col pt-20">
      <div className="flex-1 max-w-3xl mx-auto px-6 w-full pb-20">
        <Link to="/" className="mb-5 text-stone-500 hover:text-stone-800 flex items-center justify-start gap-2 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Wróć na stronę główną
        </Link>
        <h1 className="text-4xl font-serif font-semibold text-stone-900 mb-8">Polityka prywatności</h1>
        <div className="space-y-6 prose prose-stone max-w-none text-stone-700 terms">
          <h2>Jakie dane osobiste zbieramy i dlaczego je zbieramy</h2>
<p>Administratorem danych osobowych grzecznajuzbylam.pl jest firma Jakub Gugulski, Ratajów 30, 32-090 Słomniki, NIP: 6821811984.</p>

<h2>Ciasteczka</h2>
<p>Jeśli zostawisz na naszej witrynie komentarz, będziesz mógł wybrać opcję zapisu twojej nazwy, adresu email i adresu strony internetowej w ciasteczkach, dzięki którym podczas pisania kolejnych komentarzy powyższe informacje będą już dogodnie uzupełnione. Te ciasteczka wygasają po roku.</p>
<p>Jeśli masz konto i zalogujesz się na tej witrynie, utworzymy tymczasowe ciasteczko na potrzeby sprawdzenia czy twoja przeglądarka akceptuje ciasteczka. To ciasteczko nie zawiera żadnych danych osobistych i zostanie wyrzucone kiedy zamkniesz przeglądarkę.</p>
<p>Podczas logowania tworzymy dodatkowo kilka ciasteczek potrzebnych do zapisu twoich informacji logowania oraz wybranych opcji ekranu. Ciasteczka logowania wygasają po dwóch dniach, a opcji ekranu po roku. Jeśli zaznaczysz opcję „Pamiętaj mnie”, logowanie wygaśnie po dwóch tygodniach. Jeśli wylogujesz się ze swojego konta, ciasteczka logowania zostaną usunięte.</p>
<p>Jeśli zmodyfikujesz albo opublikujesz artykuł, w twojej przeglądarce zostanie zapisane dodatkowe ciasteczko. To ciasteczko nie zawiera żadnych danych osobistych, wskazując po prostu na identyfikator przed chwilą edytowanego artykułu. Wygasa ono po 1 dniu.</p>

<h2>Osadzone treści z innych witryn</h2>
<p>Artykuły na tej witrynie mogą zawierać osadzone treści (np. filmy, obrazki, artykuły itp.). Osadzone treści z innych witryn zachowują się analogicznie do tego, jakby użytkownik odwiedził bezpośrednio konkretną witrynę.</p>
<p>Witryny mogą zbierać informacje o tobie, używać ciasteczek, dołączać dodatkowe, zewnętrzne systemy śledzenia i monitorować twoje interakcje z osadzonym materiałem, włączając w to śledzenie twoich interakcji z osadzonym materiałem jeśli posiadasz konto i jesteś zalogowany w tamtej witrynie.</p>

<h2>Z kim dzielimy się danymi</h2>
<p>Dane nie są przetwarzane przez osoby trzecie. Dane przechowywane są przez serwis https://grzecznajuzbylam.pl/</p>

<h2>Jak długo przechowujemy twoje dane</h2>
<p>Jeśli zostawisz komentarz, jego treść i metadane będą przechowywane przez czas nieokreślony. Dzięki temu jesteśmy w stanie rozpoznawać i zatwierdzać kolejne komentarze automatycznie, bez wysyłania ich do każdorazowej moderacji.</p>
<p>Dla użytkowników którzy zarejestrowali się na naszej stronie internetowej (jeśli tacy są), przechowujemy również informacje osobiste wprowadzone w profilu. Każdy użytkownik może dokonać wglądu, korekty albo skasować swoje informacje osobiste w dowolnej chwili (nie licząc nazwy użytkownika, której nie można zmienić). Administratorzy strony również mogą przeglądać i modyfikować te informacje.</p>

<h2>Jakie masz prawa do swoich danych</h2>
<p>Jeśli masz konto użytkownika albo dodałeś komentarze w tej witrynie, możesz zażądać dostarczenia pliku z wyeksportowanym kompletem twoich danych osobistych będących w naszym posiadaniu, w tym całość tych dostarczonych przez ciebie. Możesz również zażądać usunięcia przez nas całości twoich danych osobistych w naszym posiadaniu. Nie dotyczy to żadnych danych które jesteśmy zobligowani zachować ze względów administracyjnych, prawnych albo bezpieczeństwa.</p>

<h2>Gdzie przesyłamy dane</h2>
<p>Komentarze gości mogą być sprawdzane za pomocą automatycznej usługi wykrywania spamu.</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
