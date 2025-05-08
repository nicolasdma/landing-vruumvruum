import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About";
import Project from "./components/Project";
import Dashboard from "./pages/Dashboard";
import PricingPolicy from "./pages/PricingPolicy";
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-6 pb-4">
      <div className="flex-grow w-full">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/project/:projectId" element={<Project />} />
            <Route path="/pricing-policy" element={<PricingPolicy />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Router>
      </div>
      <Footer />
      <Analytics />
    </div>
  );
};

export default App;
