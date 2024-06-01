import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center  justify-center w-full my-8">
      <Image
        src="/headshot-no-bg.png"
        width={50}
        height={50}
        alt="headshot"
        style={{
          maskImage: "linear-gradient(to bottom, #000000 90%, #00000000)",
        }}
      />
      <p className="text-sm font-light">© 2024 | Ethan Pollack</p>
    </footer>
  );
}
