import React from 'react';

interface ILayout {
  children?: React.ReactNode;
}

export const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen flex flex-col text-white bg-[#060e1f] scroll-smooth">
      {/* Top Cover Strip */}
      <div className="absolute top-0 left-0 w-full h-[6rem] z-50 bg-[#060e1f]" />

      {/* Background layer */}
      <div
        className="fixed inset-0 z-0 w-full h-full bg-no-repeat bg-top 
                  bg-[length:100%_auto] md:bg-cover 
                  bg-[url('/background_mobile.png')] 
                  md:bg-[url('/background_med.png')] 
                  lg:bg-[url('/background.png')] 
                  xl:bg-[url('/background_xl.png')] 
                  bg-fixed pt-[6rem]"
        aria-hidden="true"
      />

      {/* Fixed header */}
      <div className="fixed top-[2rem] left-0 w-full z-50 bg-[#060e1f]">
        <div className="mx-auto max-w-6xl px-6 py-4 border border-white flex justify-center">
          <nav className="flex justify-between items-center w-full text-lg font-serif tracking-wide">
            <div className="flex items-center space-x-2">
              <NavItem href="#home" label="Home" />
            </div>
            <div className="flex items-center space-x-2">
              <Star />
            </div>
            <div className="flex items-center space-x-2">
              <NavItem href="#books" label="Books" />
            </div>
            <div className="flex items-center space-x-2">
              <Star />
            </div>
            <div className="flex items-center space-x-2">
              <NavItem href="#about" label="About" />
            </div>
            <div className="flex items-center space-x-2">
              <Star />
            </div>
            <div className="flex items-center space-x-2">
              <NavItem href="#contact" label="Contact" />
            </div>
          </nav>
        </div>
      </div>

      {/* Main content — apply margin here */}
      <div className="h-[5rem] bg-[#060e1f]" />
      <div className="relative z-10 px-4 py-12 sm:px-8 md:px-16 lg:px-24 xl:px-32">
        <div className="max-w-6xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
};


// ✨ Star separator
const Star = () => (
  <span className="text-[#FFB966] text-2xl leading-none select-none">✦</span>
);

// 🧭 Nav item
const NavItem = ({ href, label }: { href: string; label: string }) => {
  const isActive = typeof window !== "undefined" && window.location.pathname === href;

  return (
    <a
      href={href}
      className="uppercase text-[#DDDDDD] hover:text-[#FFB966] transition-colors duration-200 cursor-pointer no-underline"
    >
      {label}
    </a>
  );
};
