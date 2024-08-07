import BounceIn from "@/components/effects/bounceIn";
import GlowContainer from "@/components/glowContainer";
import Github from "@/components/icons/github";
import NPM from "@/components/icons/npm";
import Pmndrs from "@/components/icons/pmndrs";
import SyntaxUI from "@/components/icons/syntax-ui";
import Image from "next/image";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <BounceIn>
      <div className="flex flex-col gap-4">
        <p className="text-gray-500 dark:text-gray-300">
          I enjoy contributing to various open-source projects and have
          participated in multiple research studies at WPI.
        </p>
        <h3 className="text-lg font-semibold -mb-2">Contributions</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ProjectCard
            project={{
              title: "Syntax UI",
              description:
                "Get free access to pre-built, Tailwind CSS-powered components, animations and effects - brought to life using Framer Motion. Just copy, paste and you're ready to go! I am a core maintainer of this project.",
              tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
              href: "https://syntaxui.com",
              icon: <SyntaxUI className="w-6 h-6" />,
            }}
          />
          <ProjectCard
            project={{
              title: "OSS Gallery",
              description:
                "A crowdsourced list of the best open-source projects on the internet. Built with the Dub TypeScript SDK. I added a better way to view the contributors of each project.",
              tags: [
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "GitHub API",
              ],
              href: "https://ossgallery.com",
              icon: (
                <Image
                  src="/icons/oss-gallery.jpg"
                  width={24}
                  height={24}
                  alt="oss-gallery logo"
                  className="w-6 h-6 rounded-full"
                />
              ),
            }}
          />
          <ProjectCard
            project={{
              title: "GLTF React Three",
              description:
                "Convert GLTF files to React Three Fiber Components. I added a better way to integrate the generated JSX or TSX files into a Next.js projects.",
              tags: [
                "React Three Fiber",
                "Next.js",
                "TypeScript",
                "GLTF",
                "Three.js",
              ],
              href: "https://gltf.pmnd.rs/",
              icon: <Pmndrs className="w-6 h-6" />,
            }}
          />
        </div>
        <h3 className="text-lg font-semibold  -mb-2">Side Projects</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ProjectCard
            project={{
              title: "Ico Maker",
              description:
                "A simple way to interact with Ico files. Easily create, view, and edit Ico files. Built and designed by me using Next.js, TypeScript, Tailwind CSS, and Vercel.",
              tags: [
                "Ico Files",
                "Next.js",
                "TypeScript",
                "Tailwind CSS",
                "Vercel",
              ],
              href: "https://icomaker.app/",
              icon: (
                <Image
                  src="/icons/icomaker.ico"
                  width={24}
                  height={24}
                  alt="ico maker logo"
                />
              ),
            }}
          />
          <ProjectCard
            project={{
              title: "create-esp-app",
              description:
                "A CLI tool to create an opinionated Next.js app with TypeScript, Tailwind CSS, providers, configuration for robots and sitemap, icons, and helper functions.",
              tags: ["Next.js", "TypeScript", "Tailwind CSS", "NPM CLI"],
              href: "https://www.npmjs.com/package/create-esp-app",
              icon: <NPM className="w-6 h-6" color="#cb3837" />,
            }}
          />
          <ProjectCard
            project={{
              title: "Tower Defense",
              description:
                "A simple tower defense game built with React-Three-Fiber, TypeScript, and Tailwind CSS. The game features a 3D camera, enemies, and weapons. The goal is to destroy all the enemies before they reach their target.",
              tags: [
                "React Three Fiber",
                "TypeScript",
                "Tailwind CSS",
                "Three.js",
              ],
              href: "https://tower-defense-sigma.vercel.app/",
              icon: (
                <Image
                  src="/icons/defense.png"
                  width={24}
                  height={24}
                  alt="defense logo"
                />
              ),
            }}
          />
        </div>
        <h3 className="text-lg font-semibold  -mb-2">Research Projects</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ProjectCard
            project={{
              title: "Database Comparison Research",
              description:
                "This study compares Oracle, Postgres, and MySQL to guide college instructors in choosing the best database system for teaching. We reviewed literature, tested installations, and analyzed syntax. Each system's unique features suggest different fits for university courses.",
              tags: [
                "RDBMS",
                "SQL",
                "Oracle",
                "Postgres",
                "MySQL",
                "Java",
                "Python",
              ],
              href: "/docs/mqp.pdf",
              id: "mqp",
            }}
          />
          <ProjectCard
            project={{
              title: "Augmented Reality Game Dev Research ",
              description:
                "Developed an augmented reality game to educate students about the nitrogen cycle and its impact on human development. Leveraged AR/VR technology to create an engaging, hands-on learning experience. Collaborated with educators and students to design a tool that enhances STEM education.",
              tags: [
                "React Three Fiber",
                "Augmented Reality",
                "TypeScript",
                "Tailwind CSS",
                "QR Codes",
              ],
              href: "/docs/iqp.pdf",
              id: "iqp",
            }}
          />
        </div>
      </div>
    </BounceIn>
  );
}

interface Project {
  title: string;
  description: string;
  tags: string[];
  href: string;
  id?: string;
  icon?: React.ReactNode;
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={project.href}
      id={project.id}
      className="rounded-xl border border-gray-200 dark:border-neutral-600 hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      <GlowContainer
        whileHover
        className="flex flex-col w-full h-full rounded-none cursor-pointer"
        glowRadius="800px"
      >
        <div className="p-4 flex flex-col gap-3 ">
          <div className="flex gap-2 items-center">
            {project.icon}
            <h1 className="text-2xl font-semibold">{project.title}</h1>
          </div>
          <p className="text-sm text-pretty">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                className="bg-gray-50 dark:bg-transparent text-gray-600 dark:text-gray-400 border border-transparent dark:border-neutral-600 px-1 rounded-md text-xs font-light italic "
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </GlowContainer>
    </Link>
  );
}
