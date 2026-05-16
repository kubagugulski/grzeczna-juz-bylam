import Footer from "../components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800 font-sans flex flex-col pt-20">
      <div className="flex-1 max-w-3xl mx-auto px-6 w-full pb-20">
        <h1 className="text-4xl font-serif font-semibold text-stone-900 mb-8">Regulamin</h1>
        <div className="space-y-6 prose prose-stone max-w-none text-stone-700">
          <p>
            Poniższy tekst jest tymczasowym wypełnieniem. W tym miejscu niedługo
            znajdzie się pełny regulamin świadczenia usług i sprzedaży e-booka
            "Grzeczna już byłam".
          </p>
          <h2>§ 1 Postanowienia ogólne</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <h2>§ 2 Zasady sprzedaży</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
          <h2>§ 3 Zwroty i reklamacje</h2>
          <p>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae,
            ultricies eget, tempor sit amet, ante.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
