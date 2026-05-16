import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-stone-900 py-12 text-stone-400 text-sm">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        <p>© {year} Grzeczna już byłam. Wszelkie prawa zastrzeżone.</p>
        <div className="flex justify-center flex-wrap gap-6">
          <Link to="/regulamin" className="hover:text-stone-200 transition-colors">
            Regulamin
          </Link>
          <Link to="/polityka-prywatnosci" className="hover:text-stone-200 transition-colors">
            Polityka prywatności
          </Link>
        </div>
      </div>
    </footer>
  );
}
