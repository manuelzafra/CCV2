import React from 'react';


const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
        <div className="mt-8 aspect-video rounded-xl overflow-hidden">
          <img
            alt="How it works"
            className="object-cover w-full h-full"
            height="450"
            src="/placeholder.svg?height=450&width=800"
            width="800"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;