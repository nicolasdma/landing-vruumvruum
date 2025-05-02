import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ReportSection from "./components/ReportSection";
import { issuesData } from "./data/issues";
import Documents from "./components/Documents";

const App: React.FC = () => {
  return (
    <div className="container mx-12 px-5 py-4 w-full">
      <Header />
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div>
          {issuesData.map((section, index) => (
            <ReportSection key={index} section={section} />
          ))}
        </div>
        <div className="lg:w-1/3">
          <Documents />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;