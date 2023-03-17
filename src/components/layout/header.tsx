import type { FC } from "react";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import { useTheme } from "next-themes";

import { useMounted } from "@/lib";

import { Container } from "../container";

type LinkJSON = {
  label: string;
  href: string;
};

type Props = {
  nav: LinkJSON[];
};

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();

  return (
    <>
      <>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
            className="w-7 h-7 link"
          >
            <g fill="none" fillRule="evenodd">
              {mounted && (
                <>
                  {theme === "dark" ? (
                    <>
                      <path
                        stroke="currentColor"
                        strokeLinejoin="round"
                        strokeWidth="4"
                        d="M24 37c7.18 0 13-5.82 13-13s-5.82-13-13-13s-13 5.82-13 13s5.82 13 13 13Z"
                      ></path>
                      <path
                        fill="currentColor"
                        d="M24 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm14.5 6a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm6 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm-6 14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM24 47a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5ZM9.5 41a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm-6-14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Zm6-14.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5Z"
                      ></path>
                    </>
                  ) : (
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="4"
                      d="M28.053 4.41c-5.47 1.427-9.508 6.4-9.508 12.317c0 7.03 5.699 12.727 12.728 12.727c5.916 0 10.89-4.037 12.316-9.507A20.05 20.05 0 0 1 44 24c0 11.046-8.954 20-20 20S4 35.046 4 24S12.954 4 24 4c1.389 0 2.744.141 4.053.41Z"
                    ></path>
                  )}
                </>
              )}
            </g>
          </svg>
        </button>
      </>
    </>
  );
};

export const Header: FC<Props> = ({ nav }) => {
  const segment = useSelectedLayoutSegment();
  const active = segment === "home" ? "" : segment || "";
  return (
    <header>
      <Container className="flex justify-between items-start">
        <ThemeChanger />
        <nav>
          <ul className="flex flex-col space-y-2 items-end">
            {nav.map((item, i) => {
              return (
                <li key={`${item.label}-${i}`}>
                  <Link
                    href={`/${item.href}`}
                    className={
                      active === item.href
                        ? "underline underline-offset-4 block odd:rotate-[1.5deg] even:-rotate-[1.5deg]"
                        : ""
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Container>
    </header>
  );
};
