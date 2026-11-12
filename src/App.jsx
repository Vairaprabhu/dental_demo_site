import { useEffect } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useOutlet,
} from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SiteHeader from "./components/SiteHeader.jsx";
import SiteFooter from "./components/SiteFooter.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import TreatmentsPage from "./pages/TreatmentsPage.jsx";
import TreatmentPage from "./pages/TreatmentPage.jsx";
import DentistsPage from "./pages/DentistsPage.jsx";
import StoriesPage from "./pages/StoriesPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AppointmentPage from "./pages/AppointmentPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function SiteLayout() {
  const location = useLocation();
  const outlet = useOutlet();
  const reduceMotion = useReducedMotion();

  return (
    <>
      <SiteHeader />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
          transition={{ duration: reduceMotion ? 0 : 0.28, ease: "easeOut" }}
        >
          {outlet}
        </motion.div>
      </AnimatePresence>
      <SiteFooter />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path="philosophy" element={<AboutPage />} />
          <Route path="treatments" element={<TreatmentsPage />} />
          <Route path="treatments/:slug" element={<TreatmentPage />} />
          <Route path="dentists" element={<DentistsPage />} />
          <Route path="stories" element={<StoriesPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="appointment" element={<AppointmentPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
