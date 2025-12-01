import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"; 
import React, { useState, useEffect } from "react";

import Home from "./pages/Home.jsx";
import EventDetails from "./pages/EventDetails.jsx";
import Nomination from "./pages/Nomination.jsx";
import Award from "./pages/Award.jsx";
import Contact from "./pages/Contact.jsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import TermofUse from "./pages/TermofUse.jsx";
import NotFound from "./pages/NotFound.jsx";
import About from "./pages/About.jsx";
import AwardPage from "./pages/AwardPage.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from "./components/ScrollTop.jsx";
import LoadingSpinner from "./components/LoadingSpinner.jsx";
import WhatsappChat from "./components/WhatsappChat.jsx";

export default function App() {
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500); // 1.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <MainApp />
      )}
    </BrowserRouter>
  );
}

const MainApp = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (loading) return <LoadingSpinner />;

  return (
<>
      <Header />
      <Routes>
        <Route path="/" 
        element={
           <>
           <section id="home"><Home /></section>
           <section id="about"><About /></section>
           <section id="award"><Award /></section>
           <section id="event-details"><EventDetails /></section>
           <section id="contact"><Contact /></section>
           
           </>
           }
           />
        <Route path="/nomination" element={<Nomination />} />
        <Route path="/allaward" element={<AwardPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermofUse />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
      <WhatsappChat />
      <Footer />
</>
  );
}