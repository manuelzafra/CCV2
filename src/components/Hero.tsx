import React from 'react';


const Hero: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Calculate Your Data in Seconds
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
              Paste your data or upload a file. We'll do the calculations for you.
            </p>
          </div>
          <button className="px-4 py-2 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">
            Start Calculating
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;