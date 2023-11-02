import Card from "@/components/home/card";
import HorizontalCard from "@/components/home/horizontalCard";

export default function Home() {
  return (
    <>
      <div className="z-10 h-screen w-full max-w-7xl px-5 xl:px-0">
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-5xl md:leading-[4rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Welcome!
          <br /> My name is Mahmoud Mirani.
        </h1>

        <p
          className="mt-6 animate-fade-up text-gray-500 opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Below is a list of my previous projects.
        </p>
      </div>
      <div className="my-10 my-20 flex w-full max-w-screen-xl animate-fade-up flex-wrap justify-evenly px-5">
        {features.map(({ imagePath, title, description, tags, portrait }) =>
          portrait ? (
            <Card
              imagePath={imagePath}
              title={title}
              description={description}
              tags={tags}
            />
          ) : (
            <HorizontalCard
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

const features = [
  {
    title: "Seed",
    description:
      "This is a mobile game created with Unity, it is about staying alive by collecting energy, unlocking layers and playing around with gravity while on your journey to the center of the planet because you want to find water in order to become a tree on the planet. ",
    imagePath: "/images/seed.png",
    tags: ["Unity", "C#", "Github"],
    portrait: true,
  },
];
