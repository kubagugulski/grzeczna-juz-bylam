import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  CheckCircle2, 
  ChevronDown, 
  Coffee, 
  BatteryWarning, 
  CalendarClock, 
  ShieldCheck, 
  ArrowRight,
  BookOpen,
  MessageCircleHeart,
  Star
} from "lucide-react";
import Footer from "../components/Footer";

function ExpandableEbookInfo({ title, children }: { title: string, children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left focus:outline-none"
      >
        <h4 className="text-xl font-serif font-bold text-stone-900">{title}</h4>
        <ChevronDown className={`w-6 h-6 text-[#c28557] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="pt-6 text-stone-600 leading-relaxed">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Simple Accordion Component for FAQ
function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 py-4">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full justify-between items-center text-left focus:outline-none"
      >
        <h4 className="text-lg font-medium text-stone-800">{question}</h4>
        <ChevronDown className={`w-5 h-5 text-stone-500 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pt-4 text-stone-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function LandingPage() {
  // Smooth scroll to offer
  const scrollToOffer = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-800 font-sans selection:bg-[#e7b78f] selection:text-stone-900">
      
      {/* HEADER / HERO SECTION */}
      <header className="relative pt-24 pb-20 md:pt-32 md:pb-32 overflow-hidden px-6">
        <div className="absolute inset-0 z-0 opacity-40 bg-gradient-to-br from-[#f2e8e5] to-transparent" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#d8976b] font-semibold tracking-wider text-sm md:text-base uppercase mb-6"
          >
            Dla kobiet 30+, które zapomniały o sobie
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-semibold text-stone-900 leading-tight mb-8"
          >
            GRZECZNA JUŻ BYŁAM,<br/>
            <span className="text-stone-500 italic font-normal">czas zacząć żyć.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-stone-600 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Jak mówić <strong>NIE</strong> bez poczucia winy, przestać być darmowym pogotowiem opiekuńczym 
            dla wszystkich wokół i wreszcie odzyskać swój dzień.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a 
              href="#oferta" 
              onClick={scrollToOffer}
              className="inline-flex items-center justify-center gap-2 bg-[#e7b78f] text-stone-900 px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:bg-[#d5a378] transition-all transform hover:scale-105"
            >
              Chcę odzyskać mój czas <ArrowRight className="w-5 h-5" />
            </a>
            <p className="mt-4 text-sm text-stone-500">Natychmiastowy dostęp po opłaceniu • Oszczędzasz 40 zł</p>
          </motion.div>
        </div>
      </header>


      {/* PROBLEM SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-900 mb-4">
              Twoje „TAK” dla innych, to „NIE” dla samej siebie
            </h2>
            <p className="text-stone-600 text-lg">Czy któraś z tych sytuacji brzmi u Ciebie znajomo?</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              className="bg-[#FAF9F6] p-8 rounded-2xl border border-stone-100"
            >
              <div className="w-12 h-12 bg-rose-100 text-rose-700 rounded-full flex items-center justify-center mb-6">
                <Coffee className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-3">Zimna Kawa</h3>
              <p className="text-stone-600 leading-relaxed">
                Znowu nie miałaś chwili, by po prostu usiąść. Ktoś coś chciał, wybuchł kolejny pożar, więc wstałaś i znów robiłaś dla kogoś.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              className="bg-[#FAF9F6] p-8 rounded-2xl border border-stone-100"
            >
              <div className="w-12 h-12 bg-stone-200 text-stone-700 rounded-full flex items-center justify-center mb-6">
                <CalendarClock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-3">Darmowy Bank Czasu</h3>
              <p className="text-stone-600 leading-relaxed">
                Jesteś domowym pogotowiem: dla dzieci, męża, rodziców. Czujesz, że Twój grafik jest całkowicie dyktowany potrzebami reszty.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              className="bg-[#FAF9F6] p-8 rounded-2xl border border-stone-100"
            >
              <div className="w-12 h-12 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center mb-6">
                <BatteryWarning className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-medium text-stone-800 mb-3">Koszty bycia miłą</h3>
              <p className="text-stone-600 leading-relaxed">
                Nigdy nie odmawiasz "bo co sobie pomyślą", "bo będzie im przykro". Kończysz dzień wkurzona i bez grama energii.
              </p>
            </motion.div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-xl font-medium text-stone-800 mb-6">
              Jeśli znasz to z własnego życia, ten e-book jest wyjściem awaryjnym z sytuacji w której utknęłaś.
            </p>
            <a href="#oferta" onClick={scrollToOffer} className="text-[#d8976b] font-semibold border-b border-[#d8976b] pb-1 hover:text-[#c28557] transition-colors">
              Chcę poznać rozwiązanie
            </a>
          </div>
        </div>
      </section>

      {/* CASE STUDY SECTION */}
      <section className="py-20 bg-[#f2e8e5]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-serif font-semibold text-stone-900 mb-6">
                Poznaj historię Magdy (38 l.), która miała być po prostu "dobrą kobietą"
              </h2>
              <div className="space-y-4 text-stone-700 leading-relaxed">
                <p>
                  Magda całe życie słyszała: „ustąp”, „bądź miła”, „zaciśnij zęby”.
                </p>
                <p>
                  Dzieci podrzucały jej nagłe projekty do szkoły o 22:00. Mąż uważał, że agd i dom "same się ogarniają". A w pracy zawsze brała te zmiany, których nikt inny nie chciał tykać.
                </p>
                <p className="font-semibold text-[#d8976b]">
                  Aż pewnego razu jej ciało powiedziało DOŚĆ.
                </p>
                <p>
                  Zespół wypalenia z powodu bycia grzeczną jest realny. Możesz zgadzać się na wszystko uśmiechając się przez łzy... albo możesz w końcu powiedzieć jedno, precyzyjne słowo: NIE. Bez tłumaczenia i poczucia winy.
                </p>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-8 rounded-2xl shadow-xl relative">
                <MessageCircleHeart className="w-10 h-10 text-[#e7b78f] absolute -top-4 -left-4" />
                <p className="italic text-stone-600 text-lg mb-6 relative z-10">
                  "Jeszcze pół roku temu zaproszenie u teściowej było wyrokiem, a szwagierka bezkarnie krytykowała moje wybory w salonie. Ten materiał pokazał mi różnicę między byciem agresywną, a byciem asertywną. Odzyskałam spokój. Kawa wreszcie jest gorąca."
                </p>
                <div className="font-medium text-stone-900">Magdalena S.</div>
                <div className="text-stone-500 text-sm">Czytelniczka E-booka</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TABLE OF CONTENTS - WHAT'S INSIDE */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-semibold text-stone-900 mb-4">
              Czego krok po kroku uczy ten e-book?
            </h2>
            <p className="text-stone-600 text-lg">Praktyczne rozwiązania, które zastosujesz już 5 minut po lekturze.</p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Pułapka «Grzecznej Dziewczynki»",
                desc: "Dlaczego nasze pokolenie nauczono, że odmowa to arogancja? Poznaj mechanizm zadowalacza (People Pleaser)."
              },
              {
                title: "Rodzina – Nie jesteś darmowym bankiem czasu",
                desc: "Jak odkleić się od roli «ogarniaczki wszystkiego» i przestać być pogotowiem dla dzieci, męża i rodzeństwa."
              },
              {
                title: "Znajomi i «Wypadałoby»",
                desc: "Jak ucinać relacje z wampirami energetycznymi i unikać imprez bez wyrzutów sumienia."
              },
              {
                title: "Praca i codzienne granice",
                desc: "Radzenie sobie ze współpracownikami, którzy przerzucają na Ciebie swoje obowiązki i presją «w terenie»."
              },
              {
                title: "Protokół Odmowy – Narzędziownik (Praktyka)",
                desc: "Gotowe zdania i techniki (np. «Odmowa z miękkim lądowaniem», «Technika zdartej płyty»)."
              },
              {
                title: "Detoks z poczucia winy",
                desc: "Instrukcja krok po kroku: co robić, gdy bycie stanowczą chwilowo uaktywnia w Tobie poczucie winy."
              }
            ].map((item, id) => (
              <div key={id} className="flex gap-4 p-6 bg-[#FAF9F6] rounded-xl border border-stone-100 hover:border-[#e7b78f] transition-colors">
                <div className="bg-white p-2 rounded-lg border border-stone-200 h-fit text-[#c28557] font-serif font-bold text-lg min-w-[40px] text-center shadow-sm">
                  {id+1}
                </div>
                <div>
                  <h4 className="text-lg font-medium text-stone-800 mb-2">{item.title}</h4>
                  <p className="text-stone-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
             <a href="#oferta" onClick={scrollToOffer} className="inline-flex items-center justify-center gap-2 bg-stone-900 text-white px-8 py-3 rounded-full font-medium shadow hover:bg-stone-800 transition-colors">
               Zależy mi na konkretach, przechodzę do oferty
             </a>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-[#FAF9F6]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl font-serif font-semibold text-stone-900 mb-4">
              Kobiety takie jak Ty powiedziały „DOŚĆ”
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Katarzyna, 41 lat",
                text: "Myślałam, że jestem miła, a byłam po prostu zaciężnym osiołkiem dla mojej starszej siostry. Pierwszy raz po 15 latach odmówiłam jej pilnowania dziecka w mój wolny dzień. Był kwas... ale moja ulga była większa."
              },
              {
                name: "Marta, 35 lat",
                text: "Zawsze myślałam, że odmowa w pracy będzie mnie kosztować awans. Słowa z e-booka, zwłaszcza «czas na namysł» uratowały mnie w zeszłym tygodniu na zebraniu. Cudowne uczucie."
              },
              {
                name: "Agnieszka, 44 lata",
                text: "Nie byłam u przesiąkniętej narzekaniem ciotki na imieninach, i żyję. Ja żyję, a zaoszczędzona energia wystarczyła mi, żeby przeczytać książkę spokojnie i nalać sobie lampkę wina. Warto przeczytać."
              }
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col h-full">
                <div className="flex gap-1 mb-4 text-amber-400">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div>
                <p className="text-stone-600 mb-6 flex-1 italic relative z-10">"{t.text}"</p>
                <div className="font-medium text-stone-900">{t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PACKAGES SECTION */}
      <section id="oferta" className="py-24 bg-[#FAF9F6] relative border-t border-stone-200">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#e7b78f] to-transparent opacity-30"></div>
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
            <div className="lg:w-1/2 text-center lg:text-left">
              <div className="inline-block px-4 py-1.5 bg-[#e7b78f]/20 text-[#c28557] font-semibold text-sm rounded-full mb-6">
                OFERTA SPECJALNA
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-900 mb-6">
                Zdejmij z siebie ten ciężar i wybierz pakiet
              </h2>
              <p className="text-xl text-stone-600 max-w-2xl mx-auto lg:mx-0">
                Przestań żyć pod dyktando innych. Zacznij stawiać zdrowe granice bez paraliżującego poczucia winy. Rozszerz swoją transformację o dodatkową wiedzę i zaoszczędź kupując w pakiecie.
              </p>
            </div>
            
            <div className="lg:w-1/2 w-full flex justify-center py-8">
              <div className="relative w-64 max-w-full lg:scale-110" style={{ perspective: '1200px' }}>
                <div 
                  className="relative w-full aspect-[1/1.4] bg-stone-900 rounded-r-xl rounded-l-sm shadow-[15px_20px_35px_rgba(0,0,0,0.25)] transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[15px_25px_40px_rgba(0,0,0,0.3)] flex flex-col items-center text-center p-6 md:p-8 border-l-[16px] border-[#c28557] overflow-hidden"
                  style={{ transform: 'rotateY(-15deg) rotateX(4deg)' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-white/10 pointer-events-none"></div>
                  
                  {/* Spine inner shadow */}
                  <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-black/40 to-transparent pointer-events-none"></div>
                  
                  <div className="mt-6 md:mt-8 relative z-10 w-full">
                    <p className="text-[#e7b78f] uppercase tracking-widest text-[10px] md:text-xs font-bold mb-4">E-book</p>
                    <h3 className="text-white font-serif text-3xl md:text-4xl font-bold leading-none mb-2">GRZECZNA<br/>JUŻ<br/>BYŁAM.</h3>
                  </div>
                  <div className="mt-auto mb-2 relative z-10 w-full">
                    <div className="h-px bg-[#c28557] w-12 mx-auto mb-5"></div>
                    <p className="text-stone-300 text-xs md:text-sm italic opacity-90 px-2 leading-relaxed">Jak mówić NIE bez poczucia winy i odzyskać swoje życie</p>
                  </div>
                  {/* Pages edge simulation */}
                  <div className="absolute right-0 top-1 bottom-1 w-1 bg-gradient-to-b from-stone-200 via-white to-stone-400 rounded-r-sm shadow-inner opacity-90 border-l border-stone-800"></div>
                </div>
                {/* Book Drop Shadow */}
                <div className="absolute -bottom-4 left-6 right-2 h-8 bg-stone-900/40 blur-xl rounded-full" style={{ transform: 'translateZ(-20px)' }}></div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start lg:px-8">
                      {/* Pakiet 1 */}
            <div className="bg-[#FAF9F6] border border-stone-100 rounded-3xl p-8 flex flex-col h-full hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">Podstawowy</h3>
              <p className="text-stone-500 mb-8 min-h-[48px]">Tylko to, po co tu przyszłaś. Odzyskaj swój czas dla siebie.</p>
              
              <div className="mb-8">
                <span className="text-5xl font-bold text-stone-900">49,00 zł</span>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#c28557] shrink-0 mt-0.5" />
                  <span className="text-stone-700 font-medium">E-book <span className="italic font-bold">"Grzeczna już byłam"</span></span>
                </div>
              </div>

              <a 
                href="#oferta" 
                onClick={(e) => { e.preventDefault(); document.getElementById('oferta')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-stone-800 border-2 border-stone-200 px-6 py-4 rounded-xl font-bold transition-all hover:border-[#c28557] hover:text-[#c28557]"
              >
                Kupuję e-booka
              </a>
            </div>

            {/* Pakiet 3 (Najdroższy, Wyróżniony) */}
            <div className="bg-stone-900 border border-stone-800 rounded-3xl p-8 flex flex-col h-full transform md:-translate-y-4 shadow-2xl relative">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#c28557] text-white px-4 py-1.5 rounded-full text-sm font-bold tracking-wider shadow-lg whitespace-nowrap">
                NAJCZĘŚCIEJ WYBIERANY
              </div>

              <h3 className="font-serif text-2xl font-bold text-white mb-2">Pełna Transformacja</h3>
              <p className="text-stone-400 mb-8 min-h-[48px]">Kompleksowe podejście. Zmień siebie, swoje relacje i dom.</p>
              
              <div className="mb-8 flex flex-col">
                <span className="text-stone-500 line-through text-lg font-medium mb-1">267,00 zł</span>
                <span className="text-5xl font-bold text-[#e7b78f]">119,00 zł</span>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#e7b78f] shrink-0 mt-0.5" />
                  <span className="text-stone-300 font-medium">E-book <span className="text-white italic font-bold">"Grzeczna już byłam"</span></span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#e7b78f] shrink-0 mt-0.5" />
                  <span className="text-stone-300 font-medium">E-book <span className="text-white italic font-bold">"Żona, nie matka"</span> <br/><span className="text-xs text-stone-500">Przestań niańczyć męża i zbuduj partnerstwo</span></span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#e7b78f] shrink-0 mt-0.5" />
                  <span className="text-stone-300 font-medium">E-book <span className="text-white italic font-bold">"Mąż, nie dziecko"</span> <br/><span className="text-xs text-stone-500">Dodatkowy poradnik dla Niego</span></span>
                </div>
                <div className="flex gap-3 items-start mt-6 pt-6 border-t border-stone-800">
                  <Star className="w-5 h-5 text-[#e7b78f] shrink-0 fill-[#e7b78f]" />
                  <span className="text-stone-300 font-medium text-sm">Masz absolutnie wszystkie materiały w najniższej cenie.</span>
                </div>
              </div>

              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); alert("Tu zostanie podpięty Twój link płatności Stripe dla Pakietu 3."); }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#e7b78f] text-stone-900 border-2 border-[#e7b78f] px-6 py-4 rounded-xl font-bold transition-all hover:bg-[#d5a378] hover:border-[#d5a378] transform hover:scale-[1.02] shadow-[0_0_20px_rgba(231,183,143,0.3)]"
              >
                Wybieram pełny pakiet
              </a>
            </div>

            {/* Pakiet 2 */}
            <div className="bg-[#FAF9F6] border border-stone-100 rounded-3xl p-8 flex flex-col h-full hover:shadow-lg transition-shadow">
              <h3 className="font-serif text-2xl font-bold text-stone-900 mb-2">Dla Relacji</h3>
              <p className="text-stone-500 mb-8 min-h-[48px]">Połącz asertywność z poprawą relacji z partnerem.</p>
              
              <div className="mb-8 flex flex-col">
                <span className="text-stone-400 line-through text-lg font-medium mb-1">178,00 zł</span>
                <span className="text-5xl font-bold text-stone-900">99,00 zł</span>
              </div>

              <div className="space-y-4 mb-10 flex-1">
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#c28557] shrink-0 mt-0.5" />
                  <span className="text-stone-700 font-medium">E-book <span className="italic font-bold">"Grzeczna już byłam"</span></span>
                </div>
                <div className="flex gap-3 items-start">
                  <CheckCircle2 className="w-5 h-5 text-[#c28557] shrink-0 mt-0.5" />
                  <span className="text-stone-700 font-medium">E-book <span className="italic font-bold">"Żona, nie matka"</span> <br/><span className="text-xs text-stone-500">Przestań niańczyć męża i zbuduj partnerstwo</span></span>
                </div>
              </div>

              <a 
                href="#" 
                onClick={(e) => { e.preventDefault(); alert("Tu zostanie podpięty Twój link płatności Stripe dla Pakietu 2."); }}
                className="w-full inline-flex items-center justify-center gap-2 bg-white text-stone-800 border-2 border-stone-200 px-6 py-4 rounded-xl font-bold transition-all hover:border-[#c28557] hover:text-[#c28557]"
              >
                Wybieram pakiet
              </a>
            </div>
          </div>

          {/* E-books Info Expandable */}
          <div className="mt-16 max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl font-serif font-bold text-stone-900 text-center mb-8">Co kryją w sobie e-booki z rozszerzonych pakietów?</h3>
            
            <ExpandableEbookInfo title="E-book: &quot;Żona, nie matka: Przestań niańczyć męża i zbuduj partnerstwo&quot;">
              <p className="mb-4">Złapałaś się na tym, że przypominasz mu o wizycie u dentysty, organizujesz prezent dla JEGO mamy, a gdy wychodzi z domu z wózkiem, dajesz mu listę instrukcji? Ten e-book to plaster na Twoje zmęczenie &quot;ciągnięciem tego wózka w pojedynkę&quot;.</p>
              <ul className="space-y-3 mb-4">
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-[#c28557] shrink-0 mt-0.5" /><span><strong>Diagnoza &quot;Matkowania&quot;:</strong> Dlaczego inteligentni i samodzielni mężczyźni w związku nagle „nie potrafią” znaleźć skarpetek ani zaplanować obiadu.</span></li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-[#c28557] shrink-0 mt-0.5" /><span><strong>Oddawanie Odpowiedzialności:</strong> Konkretne komunikaty, dzięki którym wyjdziesz z roli menedżerki rodziny i staniesz się znów równorzędną partnerką.</span></li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-[#c28557] shrink-0 mt-0.5" /><span><strong>Pozwól Mu Zepsuć:</strong> Jak odpuścić kontrolę, zacisnąć zęby, gdy on &quot;robi to inaczej&quot; i przekuć ten dyskomfort w Wasze wspólne zwycięstwo.</span></li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-[#c28557] shrink-0 mt-0.5" /><span><strong>Erotromantyka, a nie wychowywanie:</strong> Z matką się nie sypia – o tym, jak zmiana podziału ról natychmiast poprawia intymność i pożądanie w Waszym związku.</span></li>
              </ul>
              <p className="font-medium text-stone-800">Dzięki niemu: Znów poczujesz się wspierana przez partnera, a relacja odzyska lekkość.</p>
            </ExpandableEbookInfo>

            <ExpandableEbookInfo title="E-book: &quot;Mąż, nie dziecko: Podręcznik dla Niego&quot;">
              <p className="mb-4">Krótki, napisany &quot;męskim językiem&quot; przewodnik, który możesz po prostu podesłać swojemu mężowi, narzeczonemu lub partnerowi. Bez lania wody, bez oskarżania – tylko proste, partnerskie fakty.</p>
              <ul className="space-y-3 mb-4">
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-[#c28557] shrink-0 mt-0.5" /><span><strong>Co ona ma na myśli:</strong> Tłumaczenie z &quot;kobiecego na nasze&quot;. Skąd u niej ta frustracja i zmęczenie, o co naprawdę chodzi w powtarzanych w kółko pretensjach.</span></li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-[#c28557] shrink-0 mt-0.5" /><span><strong>Zarządzanie Cieniem:</strong> Jak samodzielnie planować, inicjować i brać odpowiedzialność za swój kawałek ogniska domowego.</span></li>
                <li className="flex gap-2 items-start"><CheckCircle2 className="w-5 h-5 text-[#c28557] shrink-0 mt-0.5" /><span><strong>Zarabianie na punkty:</strong> Jak małe zmiany w Twoim podejściu jako mężczyzny uleczą Waszą relację i zbudują na nowo podziw wobec Ciebie w jej oczach.</span></li>
              </ul>
              <p className="font-medium text-stone-800">Dzięki niemu: Unikniesz niekończących się tłumaczeń. Dajesz plik, on czyta, a Wy zaczynacie rozmawiać jak dorośli.</p>
            </ExpandableEbookInfo>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-stone-900 mb-4">Często zadawane pytania</h2>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <FaqItem 
              question="Czy książka jest dostępna w formie papierowej?"
              answer="Obecnie 'Grzeczna już byłam' dostępna jest wyłącznie w wygodnej wersji elektronicznej (Plik PDF). Dzięki temu możesz ją czytać w sekrecie na swoim telefonie jeszcze dziś, bez czekania na kuriera."
            />
            <FaqItem 
              question="Czytałam już książki psychologiczne i nic się nie zmieniło. Co jest tu innego?"
              answer="To nie jest kolejna teoretyczna książka pełna trudnych słów z psychologii. To jest PROTOKÓŁ DZIAŁANIA. Zamiast definicji zyskujesz dokładne sformułowania (co powiedzieć teściowej, co wpisać do maila w pracy w odpowiedzi na cudze zadania). Po prostu czytasz konkretne zdanie i wiesz co robić."
            />
            <FaqItem 
              question="Boję się, że zmiana wywoła awantury w moim wieloletnim związku. Mój mąż i dzieci są przyzwyczajeni, że robię wszystko."
              answer="W pierwszej chwili bliscy zawsze odczuwają dyskomfort, gdy zmieniamy zasady na których od lat korzystali. To naturalne i przewidywalne. W książkach znajdziesz specjalne moduły, jak wdrożyć te zasady 'miękko, ale twardo'. Jak nie zamienić zmiany w wojnę domową, tylko krok po kroku oddać im ich obowiązki."
            />
            <FaqItem 
              question="Boję się, że e-book zrobi ze mnie osobę chamską i wyrachowaną."
              answer="Nic z tych rzeczy! Ten materiał nie uczy chamstwa, ale OCHRONY własnych granic. Znajdziesz tu przykłady, jak odmawiać w sposób stanowczy, ciepły, ale jednoznaczny. Możesz zachować pełen szacunek do drugiej osoby i jednocześnie nie dać wejść sobie na głowę."
            />
            <FaqItem 
              question="Mam 46 lat. Czy przypadkiem dla mnie nie jest już po prostu za późno?"
              answer="Nigdy nie jest za późno, by zacząć szanować swój czas i układ nerwowy! Nasze czytelniczki mają nierzadko po 40, 50, a nawet 60 lat i przyznają, że najtrudniejszy jest zawsze pierwszy krok. Najlepszy dzień na zmianę był wczoraj, drugi najlepszy jest dzisiaj."
            />
            <FaqItem 
              question="Jak otrzymam swój egzemplarz?"
              answer="Pliki trafią do Twojej skrzynki emailowej natychmiast po zakończeniu w 100% bezpiecznej płatności. Jeśli kupisz je więc np. o 2:00 w nocy - masz je już o 2:01 gotowe do czytania i działania na swoim telefonie."
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
