import BounceIn from "@/components/effects/bounceIn";
import GlowContainer from "@/components/glowContainer";
import Link from "next/link";

export default function ProjectsPage() {
  return (
    <BounceIn>
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-semibold -mb-2">Contributions</h3>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <ProjectCard
            project={{
              title: "Syntax UI",
              description:
                "Get free access to pre-built, Tailwind CSS-powered components, animations and effects - brought to life using Framer Motion. Just copy, paste and you're ready to go! I am a core maintainer of this project.",
              tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
              href: "https://syntaxui.com",
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
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.href}>
      <GlowContainer
        whileHover
        className="flex flex-col w-full h-full rounded-xl border border-gray-200 hover:shadow-lg transition-shadow duration-300"
        glowRadius="800px"
      >
        <div className="p-4 flex flex-col gap-3 ">
          <h1 className="text-2xl font-semibold">{project.title}</h1>
          <p className="text-sm text-pretty">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                className="bg-gray-50 text-gray-600 px-1.5 rounded-full text-xs font-light italic "
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
