import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ReportSection from './components/ReportSection';
import { issuesData } from './data/issues';

const App: React.FC = () => {
  return (
    <div className="container max-w-[1200px] mx-auto px-5 py-5">
      <Header />
      
      {issuesData.map((section, index) => (
        <ReportSection key={index} section={section} />
      ))}
      
      <Footer />
    </div>
  );
};

export default App;