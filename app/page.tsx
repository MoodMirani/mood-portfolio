import Card from "@/components/home/card";
import HorizontalCard from "@/components/home/horizontalCard";
import ScrollTo from "@/components/shared/scrollTo";

export default function Home() {
  const handlePreviousProjectsButton = () => {
    const elem = document.getElementById("ProjectsContainer");
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="z-10 h-screen w-full max-w-7xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-4xl md:leading-[3rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Welcome!
          <br /> My name is Mahmoud Mirani.
        </h1>

        <p
          className="mt-6 max-w-xl animate-fade-up text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          My burning passion lies in the creation of innovative digital
          applications, coupled with a deep commitment to cultivating a
          collaborative work environment. While studying for a “Master of
          Science in Engineering” degree, Ive had the privilege of immersing
          myself in the world of programming and product development. Scroll
          down to find some of my previous work.
        </p>
        <ScrollTo
          href="#ProjectsContainer"
          className="mt-10 flex max-w-fit items-center justify-center space-x-2 rounded-lg bg-white px-6 py-2 shadow-lg transition-all duration-75 hover:scale-105"
        >
          <p className="font-medium text-gray-600">Previous projects</p>
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
      "This project implements computer vision, machine learning, and object recognition to develop a mobile app tailored for individuals with visual impairments. It records live video and provides instant audio descriptions of identified objects, addressing a fundamental need identified in a survey of 5,339 visually impaired individuals. Beyond improving accessibility, this project delves into ethical considerations to ensure responsible use. Be part of my journey to contribute to accessibility and inclusivity.",
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
