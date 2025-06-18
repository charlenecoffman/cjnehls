import React from 'react';

interface IBook {
  image?: string;
  title?: string;
  synopsis?: string[];
  link?: string;
  isComingSoon?: boolean;
  seriesName?: string;
}

export const Book: React.FC<IBook> = ({
  image,
  title,
  synopsis = [],
  link,
  isComingSoon,
  series
}) => {
  const getShortSynopsis = (synopsis: string[], wordCount: number) => {
    const words: string[] = [];
    let index = 0;

    while (words.length < wordCount && index < synopsis.length) {
      const thisSynops = synopsis[index];
      const theseWords = thisSynops.split(' ');
      const numbWordsLeft = wordCount - words.length;

      if (theseWords.length <= numbWordsLeft) {
        words.push(...theseWords);
      } else {
        words.push(...theseWords.slice(0, numbWordsLeft));
      }

      index++;
    }
    
    if(words.length === 1 && words[0] === ""){
      return "";
    }
    return words.join(' ') + '...';
  };

  const shortSynopsis = getShortSynopsis(synopsis, 100);

  return (
    <div className="mx-4 my-8 flex justify-center relative z-10">
      <div className="flex flex-col sm:flex-row items-center gap-6 rounded-lg shadow-md px-4 py-6 w-full bg-white/5 backdrop-blur-sm">
        {/* Left: Book Cover */}
        {image && (
          <div className="flex-shrink-0 sm:pr-6">
            <img
              src={image}
              alt={title}
              className="w-40 sm:w-48 md:w-56 lg:w-64 h-auto rounded object-cover"
            />
          </div>
        )}

        {/* Right: Book Info with semi-transparent background */}
        <div className="w-full bg-[#060e1fcc] p-4 rounded-lg">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">{title}</h2>
          <h3 className="text-sm italic mb-3">{series}</h3>
          <p className="mb-4 text-sm sm:text-base leading-relaxed">
            {shortSynopsis}
          </p>

          {isComingSoon ? (
            <span className="text-sm text-gray-300 italic">Coming Soon!</span>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-300 hover:underline text-sm font-medium"
            >
              Buy on Amazon →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
