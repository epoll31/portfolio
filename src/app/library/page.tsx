import BounceIn from "@/components/effects/bounceIn";
import Book, { BookInfo } from "./book";

const bookGroups: {
  title: string;
  books: BookInfo[];
}[] = [
  {
    title: "Favorites",
    books: [
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        cover: "/library/the-alchemist.png",
        href: "https://www.goodreads.com/book/show/18144590-the-alchemist",
      },
      {
        title: "Leonardo da Vinci",
        author: "Walter Isaacson",
        cover: "/library/leonardo-da-vinci.png",
        href: "https://www.goodreads.com/book/show/34684622-leonardo-da-vinci",
      },
      {
        title: "The Martian",
        author: "Andy Weir",
        cover: "/library/the-martian.png",
        href: "https://www.goodreads.com/book/show/18007564-the-martian",
      },
      {
        title: "Steve Jobs",
        author: "Walter Isaacson",
        cover: "/library/steve-jobs.png",
        href: "https://www.goodreads.com/book/show/11084145-steve-jobs",
      },
      {
        title: "Ender's Game",
        author: "Orson Scott Card",
        cover: "/library/enders-game.png",
        href: "https://www.goodreads.com/book/show/375802.Ender_s_Game",
      },
      {
        title: "Cosmos",
        author: "Carl Sagan",
        cover: "/library/cosmos.png",
        href: "https://www.goodreads.com/book/show/55030.Cosmos",
      },
    ],
  },
  {
    title: "2024",
    books: [
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        cover: "/library/the-alchemist.png",
        href: "https://www.goodreads.com/book/show/18144590-the-alchemist",
      },
      {
        title: "Conquering the Pacific",
        subTitle:
          "An Unknown Mariner and the Final Great Voyage of the Age of Discovery",
        author: "Martin, Robert C.",
        cover: "/library/conquering-the-pacific.png",
        href: "https://www.goodreads.com/book/show/55959554-conquering-the-pacific",
      },
      {
        title: "1491",
        subTitle: "New Revelations of the Americas Before Columbus",
        author: "Charles C. Mann",
        cover: "/library/1491.png",
        href: "https://www.goodreads.com/book/show/39020.1491",
      },
      {
        title: "Cosmos",
        author: "Carl Sagan",
        cover: "/library/cosmos.png",
        href: "https://www.goodreads.com/book/show/55030.Cosmos",
      },
      {
        title: "All Systems Red",
        author: "Martha Wells",
        cover: "/library/all-systems-red.png",
        href: "https://www.goodreads.com/book/show/32758901-all-systems-red",
      },
      {
        title: "Ender's Game",
        author: "Orson Scott Card",
        cover: "/library/enders-game.png",
        href: "https://www.goodreads.com/book/show/375802.Ender_s_Game",
      },
      {
        title: "Clean Code",
        author: "Robert C. Martin",
        cover: "/library/clean-code.png",
        href: "https://www.goodreads.com/book/show/3735293-clean-code",
      },
    ],
  },
  {
    title: "2023",
    books: [
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        cover: "/library/the-alchemist.png",
        href: "https://www.goodreads.com/book/show/18144590-the-alchemist",
      },
      {
        title: "The Four Agreements",
        author: "Don Miguel Ruiz",
        cover: "/library/the-four-agreements.png",
        href: "https://www.goodreads.com/book/show/1054.The_Four_Agreements",
      },
      {
        title: "Siddhartha",
        author: "Hermann Hesse",
        cover: "/library/siddhartha.png",
        href: "https://www.goodreads.com/book/show/1213.Siddhartha",
      },
      {
        title: "The Power of Habit",
        author: "Charles Duhigg",
        cover: "/library/the-power-of-habit.png",
        href: "https://www.goodreads.com/book/show/1164.The_Power_of_Habit",
      },
      {
        title: "Outliers",
        subTitle: "The Story of Success",
        author: "Malcolm Gladwell",
        cover: "/library/outliers.png",
        href: "https://www.goodreads.com/book/show/3228917-outliers",
      },
      {
        title: "Sleeping Giants",
        author: "Sylvian Neuvel",
        cover: "/library/sleeping-giants.png",
        href: "https://www.goodreads.com/book/show/1632.Sleeping_Giants",
      },
      {
        title: "The Hidden Life of Trees",
        author: "Peter Wohlleben",
        cover: "/library/the-hidden-life-of-trees.png",
        href: "https://www.goodreads.com/book/show/28256439-the-hidden-life-of-trees",
      },
      {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        cover: "/library/the-hobbit.png",
        href: "https://www.goodreads.com/book/show/10.The_Hobbit",
      },
    ],
  },
];

export default function LibraryPage() {
  return (
    <BounceIn>
      <div className="flex flex-col gap-4">
        {bookGroups.map((group) => (
          <>
            <h3 className="text-lg font-semibold -mb-2">{group.title}</h3>
            <ul className="flex flex-wrap gap-4">
              {group.books.map((book) => (
                <li
                  className="w-[120px] h-[180px] rounded-lg drop-shadow-lg"
                  key={book.title}
                >
                  <Book {...book} />
                </li>
              ))}
            </ul>
          </>
        ))}
      </div>
    </BounceIn>
  );
}
