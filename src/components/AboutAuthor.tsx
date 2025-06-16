import React from 'react';

export const AboutAuthor: React.FC = () => {
  return (
    <section id="about" className="w-full px-4 pt-52 pb-12 relative z-10">
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl mx-auto gap-8">
        {/* Text Content */}
        <div className="w-full md:w-2/3 bg-[#060e1fcc] p-6 rounded-lg shadow-md backdrop-blur-sm">
          <h2 className="text-3xl font-semibold mb-4">About Author</h2>
          <p className="text-lg">C.J. Nehls writes stories for the haunted heart—tales of love, loss, and the quiet moments that linger long after the page is turned.</p>
          <p className="text-lg">She is the author of Kneel, Embers & Ashes, and Of Melancholy & Moonlight, with work that spans contemporary romance, literary fiction, and emotionally charged short stories. Her writing blends raw vulnerability with lyrical prose, often exploring themes of trauma, identity, intimacy, and the strange, beautiful ways people find each other—and themselves—again.</p>
          <p className="text-lg">When she’s not writing, she’s likely building a playlist for a character who doesn’t exist (yet), debating the meaning of life with her dogs, or watching professional wrestling.</p>
          <p className="text-lg">She believes in quiet magic, messy healing, and the power of stories to break us open—in all the right ways.</p>          
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
