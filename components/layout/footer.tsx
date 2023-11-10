export default function Footer() {
  return (
    <div className="absolute flex w-full justify-evenly py-5 text-center">
      <div className="text-gray-500">
        A project created by{" "}
        <div className="flex">
          <p className="font-semibold text-gray-600">Mahmoud Mirani</p>
          &nbsp;|&nbsp;<p>mahso@kth.se</p>&nbsp;|&nbsp;
          <a
            className="underline-offset-2 hover:underline"
            href="https://www.linkedin.com/in/mahmoud-mirani/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
