import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";

export default function HorizontalCard({
  imagePath,
  title,
  description,
  tags,
}: {
  imagePath?: string;
  title?: string;
  description?: string;
  tags: string[];
}) {
  return (
    <div className="z-10 my-10 flex max-w-sm rounded-md shadow-lg">
      <img className="" src={imagePath} alt="Picture of a project" />
      <div className="flex flex-col justify-between bg-white p-4">
        <div className="mb-8">
          <div className="mb-2 text-xl font-bold text-gray-900">{title}</div>
          <p className="text-base text-gray-700">{description}</p>
        </div>
        <div className="flex px-6 pb-2 pt-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
