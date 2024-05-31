import Github from "./icons/github";
import Image from "next/image";
import Links from "./links";
import LinkedIn from "./icons/linkedin";
import Twitter from "./icons/twitter";
import MailFilled from "./icons/mail-filled";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 flex justify-between gap-x-4 pb-8 mb-8">
      <div className="flex flex-col justify-center gap-2">
        <h1 className="text-3xl sm:text-5xl font-bold self-end ">
          Ethan Pollack
        </h1>
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
            {
              icon: <MailFilled className="w-5 h-5" />,
              href: "mailto:epollack31@gmail.com",
            },
          ]}
        />
      </div>
      <div className="flex items-center">
        <Image
          src="/headshot.png"
          width={75}
          height={75}
          alt="headshot"
          className="rounded-xl drop-shadow-xl"
        />
      </div>
    </header>
  );
}
