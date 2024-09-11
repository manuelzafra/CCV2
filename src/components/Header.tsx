import React from 'react';
import { Button } from "../ui/button";
import { BarChart2 } from "lucide-react";

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <a className="flex items-center space-x-2" href="#">
          <BarChart2 className="h-6 w-6" />
          <span className="font-bold">DataCalc</span>
        </a>
        <nav className="mx-6 flex items-center space-x-4 lg:space-x-6 flex-grow justify-center">
          <a className="text-sm font-medium transition-colors hover:text-primary" href="#how-it-works">
            How It Works HELLO
          </a>
          <a className="text-sm font-medium transition-colors hover:text-primary" href="#paste-data">
            Paste Data
          </a>
          <a className="text-sm font-medium transition-colors hover:text-primary" href="#upload-file">
            Upload File
          </a>
        </nav>
        <Button>Get Started</Button>
      </div>
    </header>
  );
};

export default Header;