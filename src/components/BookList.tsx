import React from 'react';
import { Book } from "./Book";

const booklist = [
    {
        image: '/EmbersAndAshes.jpg',
        title: 'Embers & Ashes',
        synopsis: [
            'Three hearts. One fire. A love that refuses to burn out.',
            'Elijah, Asher, and Scarlett grew up tangled in each other’s lives—bound by childhood secrets, quiet longing, and the fierce kind of love that doesn’t fit neatly into boxes. In the small Southern town of Maplewood, they found refuge in each other. But one summer night changed everything.',
            'Years later, fate draws them back together, older and bruised by time. Elijah, now a firefighter, carries everyone’s burdens but his own. Asher hides behind ink and silence, haunted by what he lost. And Scarlett returns home not to heal—but to see if there’s anything left of the girl who once believed in love.',
            'As the embers of the past ignite old desires, the trio must confront what tore them apart—and whether they can build something lasting from the ashes.',
            'Told through multiple timelines and perspectives, Embers & Ashes is a deeply emotional, polyamorous love story about trauma, forgiveness, and the kind of bond that refuses to break—even when it burns.'
        ],
        isComingSoon: false,
        link: 'https://amzn.eu/d/9NZzUkf'
    }
]

export const BookList: React.FC = () => {
  return (
    <section
      id="book_section"
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
