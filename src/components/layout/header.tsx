import type { FC } from "react";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { Container } from "../container";

type LinkJSON = {
  label: string;
  href: string;
};

type Props = {
  nav: LinkJSON[];
};

export const Header: FC<Props> = ({ nav }) => {
  const segment = useSelectedLayoutSegment();
  const active = segment === "home" ? "" : segment || "";
  return (
    <header>
      <Container>
        <nav>
          <ul className="flex flex-col space-y-2 items-end">
            {nav.map((item, i) => {
              const isPair = i % 2 === 0;
              return (
                <li key={`${item.label}-${i}`}>
                  <Link
                    href={`/${item.href}`}
                    className={
                      active === item.href
                        ? `underline underline-offset-4 block ${
                            isPair ? "-rotate-[1.5deg]" : "rotate-[1.5deg]"
                          } `
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
