import React from 'react';

export const AboutAuthor: React.FC = () => {
  return (
    <section id="about" className="w-full px-4 pt-52 pb-12 relative z-10">
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto gap-8">
        {/* Text Content */}
        <div className="w-full md:w-2/3 bg-[#060e1fcc] p-6 rounded-lg shadow-md backdrop-blur-sm">
          <h2 className="text-3xl font-semibold mb-4">About Author</h2>
          <p className="text-lg">
            Clancy Nehls is a fiction author who loves storytelling, strange weather, and black coffee. Her books blend emotional depth with gripping plots. When she's not writing, she enjoys stargazing and talking to plants.
          </p>
        </div>

        {/* Author Image */}
        <div className="w-full md:w-1/3">
          <img
            src="/clancy.jpg"
            alt="Clancy Nehls"
            className="w-full h-auto rounded shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
