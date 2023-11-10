import Card from "@/components/home/card";
import HorizontalCard from "@/components/home/horizontalCard";
import ScrollTo from "@/components/shared/scrollTo";
import Link from "next/link";
import ParticlesBG from "@/components/particles/particles";

export default function Home() {
  return (
    <>
      <div className="z-10 h-screen w-full max-w-7xl select-none px-5 xl:px-0">
        <ParticlesBG />
        <h1
          className="animate-fade-up font-display font-bold md:text-4xl"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Welcome!
        </h1>

        <p
          className="mt-6 max-w-xl animate-fade-up text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          This portfolio is a showcase of my projects, feel free to explore my
          work whether you&apos;re here for inspiration, collaboration, or just
          to follow my journey. Thank you for visiting, and feel free to get in
          touch if you&apos;d like to connect or collaborate. You can find me
          on&nbsp;
          <a
            className="font-bold text-blue-500 underline-offset-2 hover:underline"
            href="https://www.linkedin.com/in/mahmoud-mirani/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          .
        </p>
        <ScrollTo
          href="#ProjectsContainer"
          className="z-10 mt-10 flex max-w-fit items-center justify-center space-x-2 rounded-lg bg-white px-6 py-2 shadow-lg transition-all duration-75 hover:scale-105"
        >
          <p className="z-10 font-medium text-gray-600">Previous projects</p>
          <img
            className="opacity-70"
            alt="Arrow down"
            src="https://uxwing.com/wp-content/themes/uxwing/download/arrow-direction/arrow-down-icon.png"
            width="20"
            height="20"
          />
        </ScrollTo>
      </div>
      <div
        id="ProjectsContainer"
        className="flex w-full max-w-screen-xl animate-fade-up flex-wrap justify-evenly"
      >
        {projects.map(({ imagePath, title, description, tags, portrait }) =>
          portrait ? (
            <Card
              key={title}
              imagePath={imagePath}
              title={title}
              description={description}
              tags={tags}
            />
          ) : (
            <HorizontalCard
              key={title}
              imagePath={imagePath}
              title={title}
              description={description}
              tags={tags}
            />
          ),
        )}
      </div>
    </>
  );
}

const projects = [
  {
    title: "Seed",
    description:
      "This is a mobile game created with Unity, it is about staying alive by collecting energy, unlocking layers and playing around with gravity while on your journey to the center of the planet because you want to find water in order to become a tree on the planet. ",
    imagePath: "/images/seed.png",
    tags: ["Unity", "C#", "Github"],
    portrait: true,
  },
  {
    title: "VisuAssist",
    description:
      "This project implements computer vision, machine learning, and object recognition to develop a mobile application tailored for individuals with visual impairments. It records live video and provides instant audio descriptions of identified objects, addressing a fundamental need identified in a survey of 5,339 visually impaired individuals. Beyond improving accessibility, this project delves into ethical considerations to ensure responsible use.",
    tags: [
      "Machine Learning",
      "TensorFlow",
      "React Native",
      "TypeScript",
      "Github",
      "#Work in progress",
    ],
    portrait: true,
  },
];
