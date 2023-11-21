"use client";
import useMediaQuery from "@/lib/hooks/use-media-query";

export default function Card({
  imagePath,
  title,
  description,
  tags,
  date,
}: {
  imagePath?: string;
  title?: string;
  description?: string;
  tags: string[];
  date?: string;
}) {
  const { isMobile } = useMediaQuery();
  return (
    <div className="z-10 m-7 flex h-auto max-w-lg flex-col overflow-hidden rounded-md bg-white shadow-lg">
      {imagePath && (
        <img className="w-full" src={imagePath} alt="Picture of a project" />
      )}
      <div className="mb-auto px-4 py-3 ">
        <div className={isMobile ? "mb-1" : "mb-1 flex justify-between"}>
          <div className="text-xl font-bold">{title}</div>
          {date && (
            <div className="flex items-center text-gray-500">{date}</div>
          )}
        </div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className="flex flex-wrap px-4 pb-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="mb-1 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
