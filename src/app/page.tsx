import BounceIn from "@/components/effects/bounceIn";
import HoverScale from "@/components/effects/hoverScale";
import Timeline from "@/components/timeline";
import { ReactNode } from "react";

function TimelineItem({
  title,
  subTitle,
  year,
  about,
}: {
  title: string;
  subTitle?: string;
  year?: string;
  about: ReactNode;
}) {
  return (
    <HoverScale>
      <div className="flex items-center gap-2 flex-wrap">
        <h4 className="text-lg font-semibold">{title}</h4>
        {subTitle && year ? (
          <span className="text-sm">
            <span className=" italic">{subTitle}</span> | {year}
          </span>
        ) : subTitle ? (
          <span className="text-sm italic">{subTitle}</span>
        ) : year ? (
          <span className="text-sm">{year}</span>
        ) : null}
      </div>
      <p className="text-sm">{about}</p>
    </HoverScale>
  );
}

export default function Home() {
  return (
    <BounceIn>
      <div className="flex flex-col gap-4">
        <p className="text-gray-500 dark:text-gray-300">
          I am a software engineer and a designer. I work on the web and mobile
          applications. I am a self-taught developer and I love to learn new
          things.
        </p>

        <h3 className="text-lg font-semibold ">Experience</h3>
        <Timeline
          // bringActiveItemsToTop
          items={[
            {
              active: true,
              node: (
                <TimelineItem
                  title="Contractor at Apple"
                  subTitle="Software Developer"
                  year={"July 2024 - Present"}
                  about="Actively working on various internal tools and software. Utilizing various programming languages, frameworks, and tools to deliver high-quality software that improves internal workflows and processes."
                />
              )
            },
            {
              active: false,
              node: (
                <TimelineItem
                  title="The Coder School"
                  subTitle="Programming Instructor"
                  year={"March 2024 - July 2024"}
                  about="Teaching coding to kids of various ages. I love to share my knowledge and passion for programming."
                />
              ),
            },
            {
              active: true,
              node: (
                <TimelineItem
                  title="SyntaxUI"
                  subTitle="Contributor"
                  year={"Feb 2024 - Present"}
                  about="I am a software engineer and a designer. I work on the web and mobile applications. I am a self-taught developer and I love to learn new things."
                />
              ),
            },
            {
              active: false,
              node: (
                <TimelineItem
                  title="Epic Systems"
                  subTitle="Software Engineer Intern"
                  year={"May 2023 - Aug 2023"}
                  about="Designed and developed a key component in the “MyChart” application using React and other web technologies."
                />
              ),
            },
            {
              active: false,
              node: (
                <TimelineItem
                  title="Build-It-Yourself"
                  subTitle="Lead Software Developer"
                  year={"Oct 2022 - May 2023"}
                  about="Online workshop teaching kids programming. Led a team maintaining the Invention Universe site for kids to share their creations."
                />
              ),
            },
            {
              active: false,
              node: (
                <TimelineItem
                  title="Epic Systems"
                  subTitle="Software Engineer Intern"
                  year={"May 2022 - Aug 2022"}
                  about="Developed a project that improved “EpicCare Link” using React and other web technologies."
                />
              ),
            },
            {
              active: false,
              node: (
                <TimelineItem
                  title="Great Minds Robotics"
                  subTitle="Programming Instructor"
                  year={"May 2019 - Jul 2020"}
                  about="Taught advanced programming classes and mentored junior robotics team members."
                />
              ),
            },
          ]}
        />
        <h3 className="text-lg font-semibold ">Education</h3>
        <Timeline
          items={[
            {
              active: false,
              node: (
                <TimelineItem
                  title="Worcester Polytechnic Institute"
                  subTitle="BSCS"
                  year={"Aug 2020 - Dec 2023"}
                  about="Focus areas: Programming Language Design, Software Development Techniques, Agile Methodologies, Game Dev."
                />
              ),
            },
            {
              active: false,
              node: (
                <TimelineItem
                  title="Database Comparison Research"
                  year={"May 2023 - Oct 2023"}
                  about="Authored a research paper comparing various industry-standard databases."
                />
              ),
            },
            {
              active: false,
              node: (
                <TimelineItem
                  title="Augmented Reality Game Dev Research"
                  year={"Aug 2022 - Dec 2022"}
                  about="Developed an interactive game promoting learning about the Nitrogen Life Cycle using computer vision and augmented reality."
                />
              ),
            },
          ]}
        />
      </div>
    </BounceIn>
  );
}
