import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";

const HomePage = lazy(() => import("./pages/HomePage").then((m) => ({ default: m.HomePage })));
const ChiSiamoPage = lazy(() =>
  import("./pages/ChiSiamoPage").then((m) => ({ default: m.ChiSiamoPage }))
);
const CorsiPage = lazy(() => import("./pages/CorsiPage").then((m) => ({ default: m.CorsiPage })));
const OrariPage = lazy(() => import("./pages/OrariPage").then((m) => ({ default: m.OrariPage })));
const InsegnantiPage = lazy(() =>
  import("./pages/InsegnantiPage").then((m) => ({ default: m.InsegnantiPage }))
);
const ContattiPage = lazy(() =>
  import("./pages/ContattiPage").then((m) => ({ default: m.ContattiPage }))
);
const PrivacyPolicyPage = lazy(() =>
  import("./pages/PrivacyPolicyPage").then((m) => ({ default: m.PrivacyPolicyPage }))
);
const CookiePolicyPage = lazy(() =>
  import("./pages/CookiePolicyPage").then((m) => ({ default: m.CookiePolicyPage }))
);
const NotFoundPage = lazy(() =>
  import("./pages/NotFoundPage").then((m) => ({ default: m.NotFoundPage }))
);

// Fallback minimale e coerente con il brand, mostrato solo per la frazione
// di secondo del caricamento del chunk di una pagina.
function RouteFallback() {
  return <div className="min-h-dvh bg-dab-background" />;
}

function App() {
  return (
    <Suspense fallback={<RouteFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/chi-siamo" element={<ChiSiamoPage />} />
          <Route path="/corsi" element={<CorsiPage />} />
          <Route path="/orari" element={<OrariPage />} />
          <Route path="/insegnanti" element={<InsegnantiPage />} />
          <Route path="/contatti" element={<ContattiPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/cookie-policy" element={<CookiePolicyPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
