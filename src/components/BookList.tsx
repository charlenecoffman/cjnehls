import React from 'react';
import { Book } from "./Book";

const booklist = [
    {
        image: '/EmbersAndAshes.jpg',
        title: 'Embers & Ashes',
        synopsis: [
            'Embers & Ashes is a tender, second-chance romance about three hearts bound by a love that never faded.',
            'They grew up tangled together—best friends, first loves, soul-deep soulmates. Years later, they\'re finding their way back to the fire.'
        ],
        isComingSoon: false,
        link: 'https://amzn.eu/d/9NZzUkf'
    },
    {
        image: '/Kneel.jpg',
        title: 'Kneel',
        synopsis: [
                    'Kneel is a slow-burn, emotionally rich romance about power, surrender, and the kind of love that strips you bare.',
                    'He built an empire on control—until she taught him how to fall to his knees.'
                  ],
        isComingSoon: false,
        link: 'https://a.co/d/fCssHEu'
    },
    {
        image: '/Command.jpg',
        title: 'Command',
        synopsis: [
          'Command is a sharp, electric romance about power that isn’t taken—but earned.',
          'She’s a seasoned submissive with nothing to prove. He’s a reckless playboy who’s never meant it.',
          'Until her.'
        ],
        isComingSoon: true,
    },
    {
        image: '/M&M.jpg',
        title: 'Of Meloncholy & Moonlight',
        synopsis: [
          'Of Melancholy & Moonlight is a collection of haunting, lyrical stories about grief, memory, and the quiet magic that lives in the spaces we almost forget.',
          'For anyone who\’s ever dreamed of something they\’ve lost—and felt it dream back.'
        ],
        isComingSoon: true,
    }
]

export const BookList: React.FC = () => {
  return (
    <section
      id="books"
      className="pt-32 sm:pt-40 md:pt-56 lg:pt-64 xl:pt-72"
    >
      {booklist.map((book, i) => (
        <Book
          key={i}
          image={book.image}
          title={book.title}
          synopsis={book.synopsis}
          link={book.link}
          isComingSoon={book.isComingSoon}
        />
      ))}
    </section>
  );
};
