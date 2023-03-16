import type { FC } from "react";

import Link from "next/link";

import { Container } from "../container";

type LinkJSON = {
  label: string;
  href: string;
};

type Props = {
  links: LinkJSON[];
  social: LinkJSON[];
};

export const Footer: FC<Props> = ({ links, social }) => {
  return (
    <footer>
      <Container>
        <nav className="space-y-2">
          <ul className="space-y-2 flex flex-col items-end">
            {links.map((item, i) => (
              <li key={`${item.label}-${i}`}>
                <Link href={`/${item.href}`}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="space-y-2 flex flex-col items-end">
            {social.map((item, i) => (
              <li key={`${item.label}-${i}-external`}>
                <a href={item.href} target="_blank" rel="noopener noreferrer">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </footer>
  );
};
