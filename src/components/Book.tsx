import React from 'react';

interface IBook {
  image?: string;
  title?: string;
  synopsis?: string[];
  link?: string;
  isComingSoon?: boolean;
}

export const Book: React.FC<IBook> = ({ image, title, synopsis = [], link, isComingSoon }) => {
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

    return words.join(' ') + '...';
  };

  const shortSynopsis = getShortSynopsis(synopsis, 50);

  return (
    <div className="mx-4 my-8 flex justify-center">
      <div className="flex flex-col sm:flex-row items-center gap-6 rounded-lg shadow-md px-4 py-6 w-full max-w-4xl bg-white bg-opacity-5">
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

        {/* Right: Book Info */}
        <div className="text-left w-full">
          <h2 className="text-xl sm:text-2xl font-bold mb-3">{title}</h2>
          <p className="mb-4 text-sm sm:text-base leading-relaxed">{shortSynopsis}</p>

          {isComingSoon ? (
            <span className="text-sm text-gray-400 italic">Coming Soon!</span>
          ) : (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline text-sm font-medium"
            >
              Buy on Amazon →
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
