type CardProps = {
  imagePath?: string;
  title?: string;
  description?: string;
  tags: string[];
};

export default function Card({
  imagePath,
  title,
  description,
  tags,
}: CardProps) {
  return (
    <div className="z-10 m-7 flex h-auto max-w-lg flex-col overflow-hidden rounded-md bg-white shadow-lg md:flex-row">
      {imagePath && (
        <div className="w-full md:w-1/2">
          <img
            className="h-auto w-full object-cover"
            src={imagePath}
            alt="Picture of a project"
          />
        </div>
      )}
      <div className="flex w-full flex-col md:w-1/2">
        <div className="mb-auto px-4 py-4">
          <div className="mb-2 text-xl font-bold">{title}</div>
          <p className="text-base text-gray-700">{description}</p>
        </div>
        <div className="flex flex-wrap px-4 pb-2 pt-4">
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
