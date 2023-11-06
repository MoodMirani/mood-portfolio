export default function Card({
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
    <div className="z-10 m-7 flex h-auto max-w-lg flex-col overflow-hidden rounded-md bg-white shadow-lg">
      {imagePath && (
        <img className="w-full" src={imagePath} alt="Picture of a project" />
      )}
      <div className="mb-auto px-6 py-4">
        <div className="mb-2 text-xl font-bold">{title}</div>
        <p className="text-base text-gray-700">{description}</p>
      </div>
      <div className="flex flex-wrap px-6 pb-2 pt-4">
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
  );
}
