import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Project from "./components/Project";
import Dashboard from "./pages/Dashboard";
import PricingPolicy from "./pages/PricingPolicy";
import Contact from "./pages/Contact";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import { LocaleProvider } from "./context/LocaleContext";

const App: React.FC = () => {
  return (
    <LocaleProvider>
      <div className="flex flex-col min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 pb-4">
        <Navbar />
        <div className="flex-grow w-full">
          <Router>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/project/:projectId" element={<Project />} />
              <Route path="/pricing-policy" element={<PricingPolicy />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Router>
        </div>
        <Footer />
        <Analytics />
      </div>
    </LocaleProvider>
  );
};

export default App;