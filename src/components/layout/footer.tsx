import type { FC } from "react";

import Link from "next/link";

import { Container } from "../container";

type LinkJSON = {
  label: string;
  href: string;
};

type Props = {
  navigation: Array<LinkJSON>;
  social: Array<LinkJSON>;
};

export const Footer: FC<Props> = ({ navigation, social }) => {
  return (
    <footer>
      <Container>
        <nav className="space-y-2">
          <ul className="flex flex-col items-end space-y-2">
            {navigation.map((item, i) => (
              <li key={`${item.label}-${i}`}>
                <Link href={`/${item.href}`}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="flex flex-col items-end space-y-2">
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
