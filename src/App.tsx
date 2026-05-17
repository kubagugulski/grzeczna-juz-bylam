import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import TermsPage from "./pages/TermsPage";
import PrivacyPage from "./pages/PrivacyPage";
import SuccessPageSingle from "./pages/SuccessPageSingle";
import SuccessPageDouble from "./pages/SuccessPageDouble";
import SuccessPageTriple from "./pages/SuccessPageTriple";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/regulamin" element={<TermsPage />} />
        <Route path="/polityka-prywatnosci" element={<PrivacyPage />} />
        <Route path="/sukces-single-67" element={<SuccessPageSingle />} />
        <Route path="/sukces-double-69" element={<SuccessPageDouble />} />
        <Route path="/sukces-triple-aa34" element={<SuccessPageTriple />} />
      </Routes>
    </BrowserRouter>
  );
}
