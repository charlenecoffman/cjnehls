import React from 'react';

export const PageHeader: React.FC = () => {
  return (
    <section id="home" className="w-full text-center py-20 sm:py-28 md:py-36 lg:py-40">
      <div className="font-tangerine text-5xl md:text-7xl lg:text-8xl font-serif tracking-wide text-[#FFB966]">
        CJ Nehls
      </div>
      <div className="pt-4 text-xl md:text-2xl lg:text-3xl font-serif tracking-wide">
        AUTHOR
      </div>
      <div className="pt-16 sm:pt-24 md:pt-40 lg:pt-64">
        <img src="/Discover.png" className="block mx-auto max-w-[90%] sm:max-w-xs md:max-w-sm lg:max-w-md" alt="Discover" />
      </div>
    </section>
  );
};
