import React from "react";
import Footer from "./components/Footer";
import About from "./pages/About";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "./components/Navbar";
import { LocaleProvider } from "./context/LocaleContext";

const App: React.FC = () => {
  return (
    <LocaleProvider>
      <div className="flex flex-col min-h-screen pt-6 pb-4">
        <Navbar />
        <div className="flex-grow w-full">
          <About />
        </div>
        <Footer />
        <Analytics />
      </div>
    </LocaleProvider>
  );
};

export default App;