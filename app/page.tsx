import Card from "@/components/home/card";
import HorizontalCard from "@/components/home/horizontalCard";
import ScrollTo from "@/components/shared/scrollTo";
import Link from "next/link";
import ParticlesBG from "@/components/particles/particles";

export default function Home() {
  return (
    <>
      <div className="absolute h-screen w-full bg-gradient-to-br from-indigo-50 to-cyan-100" />
      <div className="z-10 flex h-screen w-full max-w-7xl select-none flex-col justify-center px-5 xl:ml-28 xl:px-0">
        <ParticlesBG />
        <h1
          className="animate-fade-up font-display font-bold md:text-4xl"
          style={{
            animationDelay: "0.15s",
            animationFillMode: "forwards",
            color: "rgb(80, 80, 80)",
          }}
        >
          Welcome!
        </h1>

        <p
          className="mt-6 max-w-xl animate-fade-up text-gray-500 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          This portfolio is a showcase of my projects, feel free to explore my
          work whether you&apos;re here for inspiration, collaboration, or just
          to follow my journey. Thank you for visiting, and feel free to get in
          touch if you&apos;d like to connect or collaborate. You can find me
          on&nbsp;
          <a
            className="font-semibold text-blue-500 underline-offset-2 hover:underline"
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
        className="mt-10 flex w-full animate-fade-up flex-wrap justify-evenly"
      >
        {projects.map(
          ({ imagePath, title, description, tags, imageLandscapeFormat }) =>
            imageLandscapeFormat ? (
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
    tags: ["Unity", "C#"],
    imageLandscapeFormat: true,
  },
  {
    title: "Popify",
    description:
      "A music streaming service and lyrics provider. You can search for tracks, artists and albums that are fetched from the Spotify API. You can also sing along by pushing the lyrics button that fetches lyrics for the choosen track from Musixmatch Lyrics API. At the time this project was created, Spotify did not provide lyrics for their songs.",
    imagePath: "/images/popify.png",
    tags: ["React.js", "Redux", "JavaScript", "Firebase"],
    imageLandscapeFormat: true,
  },
  {
    title: "Notifications panel",
    description:
      "I developed a notifications panel for a company that has a platform of seven integrated applications for board management. My job was to create a panel that collected notifications from all the applications and displayed them in one place for the users. I collaborated closely with a colleague on this project and after several testing sessions, we integrated this new panel to the platform and enhanced the overall user experience of the platform users.",
    imagePath: "/images/notifications.png",
    tags: ["React.js", "TypeScript", "Cypress Automated Testing"],
    imageLandscapeFormat: false,
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
      "#Work in progress",
    ],
    imageLandscapeFormat: true,
  },
];
