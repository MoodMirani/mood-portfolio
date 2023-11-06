"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { Github } from "../shared/icons";

export default function NavBar() {
  const scrolled = useScroll(50);

  return (
    <>
      <div
        className={`fixed top-0 flex w-full justify-center ${
          scrolled
            ? "bg-gradient-to-tr from-indigo-50 to-cyan-100"
            : "bg-white/0"
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 w-full max-w-screen-xl items-center justify-between">
          <Link href="/" className="flex items-center font-display text-xl">
            <p className="font-bold opacity-75">Mahmoud Mirani</p>
          </Link>

          <div className="flex gap-4">
            <a
              className="opacity-80 transition-opacity duration-200 hover:opacity-50"
              href="https://github.com/MoodMirani"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github />
            </a>
            <a
              className="opacity-80 transition-opacity duration-200 hover:opacity-50"
              href="https://www.linkedin.com/in/mahmoud-mirani/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a
              className="opacity-80 transition-opacity duration-200 hover:opacity-50"
              href="/documents/Mahmoud_Mirani_CV_IT.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="font-bold">Resumé</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
