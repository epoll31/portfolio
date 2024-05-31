import Link from "next/link";
import Github from "./icons/github";
import Image from "next/image";
import Links from "./links";
import LinkedIn from "./icons/linkedin";
import Twitter from "./icons/twitter";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 grid grid-cols-[1fr_auto] pb-4 mb-4">
      <h1 className="text-5xl font-bold self-end mb-4 mt-4">Ethan Pollack</h1>
      <Image
        src="/headshot.png"
        width={75}
        height={75}
        alt="headshot"
        className="rounded-xl col-start-2 row-span-2"
      />
      <Links
        links={[
          {
            icon: <Github className="w-5 h-5" />,
            href: "/github",
          },
          {
            icon: <LinkedIn className="w-5 h-5" />,
            href: "/linkedin",
          },
          {
            icon: <Twitter className="w-5 h-5" />,
            href: "/twitter",
          },
        ]}
      />
    </header>
  );
}
