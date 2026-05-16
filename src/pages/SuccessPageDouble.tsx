import { ArrowLeft, Download, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function SuccessPageDouble() {
  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-800 font-sans flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6 pt-20 pb-20">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl shadow-xl border border-stone-100 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-[#d8976b]"></div>
          
          <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10" />
          </div>

          <h1 className="text-3xl font-serif font-bold text-stone-900 mb-4">Dziękuję za zakup pakietu!</h1>
          <p className="text-stone-600 mb-8">
            Płatność przebiegła pomyślnie. Twoje e-booki są już gotowe do pobrania. Wysłaliśmy również kopię potwierdzenia na Twój adres e-mail.
          </p>

          <div className="space-y-4 mb-8">
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert("Tu rozpocznie się pobieranie ebooka: Grzeczna już byłam."); }}
              className="flex items-center justify-center gap-2 w-full bg-[#e7b78f] text-stone-900 py-4 rounded-xl font-bold text-lg hover:bg-[#d5a378] transition-colors shadow-md shadow-[#e7b78f]/30"
            >
              <Download className="w-5 h-5" /> Pobierz: Grzeczna już byłam
            </a>

            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); alert("Tu rozpocznie się pobieranie ebooka: Żona, nie matka."); }}
              className="flex items-center justify-center gap-2 w-full bg-[#e7b78f] text-stone-900 py-4 rounded-xl font-bold text-lg hover:bg-[#d5a378] transition-colors shadow-md shadow-[#e7b78f]/30"
            >
              <Download className="w-5 h-5" /> Pobierz: Żona, nie matka
            </a>
          </div>

          <Link to="/" className="text-stone-500 hover:text-stone-800 flex items-center justify-center gap-2 transition-colors text-sm font-medium">
            <ArrowLeft className="w-4 h-4" /> Wróć na stronę główną
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
