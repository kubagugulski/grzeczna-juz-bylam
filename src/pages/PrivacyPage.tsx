import Footer from "../components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans flex flex-col pt-20">
      <div className="flex-1 max-w-3xl mx-auto px-6 w-full pb-20">
        <h1 className="text-4xl font-serif font-semibold text-stone-900 mb-8">Polityka prywatności</h1>
        <div className="space-y-6 prose prose-stone max-w-none text-stone-700">
          <p>
            Poniższy tekst jest tymczasowym wypełnieniem. W tym miejscu niedługo
            znajdzie się opis polityki prywatności dotyczącej przetwarzania
            danych osobowych nabywców e-booka "Grzeczna już byłam".
          </p>
          <h2>§ 1 Administrator danych</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h2>§ 2 Cele przetwarzania</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <h2>§ 3 Prawa użytkownika</h2>
          <p>
            Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque
            sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi,
            condimentum sed, commodo vitae, ornare sit amet, wisi.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
