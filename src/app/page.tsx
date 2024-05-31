import BounceIn from "@/components/effects/bounceIn";
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
    <div>
      <div className="flex items-center gap-2 flex-wrap">
        <h4 className="text-lg font-semibold">{title}</h4>
        {subTitle && year ? (
          <span className="text-sm">
            {subTitle} | {year}
          </span>
        ) : subTitle ? (
          <span className="text-sm">{subTitle}</span>
        ) : year ? (
          <span className="text-sm">{year}</span>
        ) : null}
      </div>
      <p className="text-sm">{about}</p>
    </div>
  );
}

export default function Home() {
  return (
    <BounceIn>
      <div className="flex flex-col gap-4">
        <p className=" text-gray-600">
          I am a software engineer and a designer. I work on the web and mobile
          applications. I am a self-taught developer and I love to learn new
          things.
        </p>

        <h3 className="text-lg font-semibold ">Experience</h3>
        <Timeline
          items={[
            {
              active: true,
              node: (
                <TimelineItem
                  title="SyntaxUI"
                  year={"Feb 2022 - Present"}
                  about="I am a software engineer and a designer. I work on the web and mobile applications. I am a self-taught developer and I love to learn new things."
                />
              ),
            },
            {
              active: true,
              node: (
                <TimelineItem
                  title="The Coder School"
                  subTitle="Programming Instructor"
                  year={"March 2022 - Present"}
                  about="I teach coding to kids of various ages."
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
                  year={"May 2022 - Aug 2022"}
                  about="I am a software engineer and a designer. I work on the web and mobile applications. I am a self-taught developer and I love to learn new things."
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
                  about="I am a software engineer and a designer. I work on the web and mobile applications. I am a self-taught developer and I love to learn new things."
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
                  about="I am a software engineer and a designer. I work on the web and mobile applications. I am a self-taught developer and I love to learn new things."
                />
              ),
            },
            {
              active: false,
              node: (
                <TimelineItem
                  title="Database Comparison Research"
                  year={"May 2023 - Oct 2023"}
                  about="I am a software engineer and a designer. I work on the web and mobile applications. I am a self-taught developer and I love to learn new things."
                />
              ),
            },
            {
              active: false,
              node: (
                <TimelineItem
                  title="Augmented Reality Game Dev Research"
                  year={"Aug 2022 - Dec 2022"}
                  about="I am a software engineer and a designer. I work on the web and mobile applications. I am a self-taught developer and I love to learn new things."
                />
              ),
            },
          ]}
        />
      </div>
    </BounceIn>
  );
}
