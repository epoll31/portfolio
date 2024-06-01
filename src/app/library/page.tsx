import BounceIn from "@/components/effects/bounceIn";
import Image from "next/image";
import Book, { BookInfo } from "./book";

const books2024: BookInfo[] = [
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    cover: "/library/the-alchemist.png",
  },
  {
    title: "Conquering the Pacific",
    subTitle:
      "An Unknown Mariner and the Final Great Voyage of the Age of Discovery",
    author: "Martin, Robert C.",
    cover: "/library/conquering-the-pacific.png",
  },
  {
    title: "1491",
    subTitle: "New Revelations of the Americas Before Columbus",
    author: "Charles C. Mann",
    cover: "/library/1491.png",
  },
  {
    title: "Cosmos",
    author: "Carl Sagan",
    cover: "/library/cosmos.png",
  },
  {
    title: "All Systems Red",
    author: "Martha Wells",
    cover: "/library/all-systems-red.png",
  },
  {
    title: "Ender's Game",
    author: "Orson Scott Card",
    cover: "/library/enders-game.png",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    cover: "/library/clean-code.png",
  },
];

export default function LibraryPage() {
  return (
    <BounceIn>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold -mb-2">2024</h3>
        <ul className="flex flex-wrap gap-4">
          {books2024.map((book) => (
            <li
              className="w-[120px] h-[180px] overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
              key={book.title}
            >
              <Book {...book} />
            </li>
          ))}
        </ul>
      </div>
    </BounceIn>
  );
}
