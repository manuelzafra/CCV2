import React from 'react';


const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <a className="flex items-center space-x-2" href="#">
          <span className="font-bold text-xl">📊</span>
          <span className="font-bold">DataCalc</span>
        </a>
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 flex-grow justify-center">
          <a className="text-sm font-medium transition-colors hover:text-primary" href="#how-it-works">
            How It Works
          </a>
          <a className="text-sm font-medium transition-colors hover:text-primary" href="#paste-data">
            Paste Data
          </a>
          <a className="text-sm font-medium transition-colors hover:text-primary" href="#upload-file">
            Upload File
          </a>
        </nav>
        <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Get Started</button>
      </div>
    </header>
  );
};

export default Header;