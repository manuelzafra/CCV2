import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import PasteData from './components/PasteData';
import UploadFile from './components/UploadFile';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow"> 
        <Hero />
        <HowItWorks />
        <PasteData />
        <UploadFile />
      </main>
      <Footer />
    </div>
  );
};

export default App;