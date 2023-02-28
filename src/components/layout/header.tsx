import type { FC } from 'react';

import Link from 'next/link';

import { Container } from '../container';

type LinkJSON = {
  label: string;
  href: string;
};

type Props = {
  nav: LinkJSON[];
};

export const Header: FC<Props> = ({ nav }) => {
  return (
    <header>
      <Container className="pt-6 sm:py-12">
        <nav>
          {nav.map((item, i) => {
            return (
              <Link href={`/${item.href}`} key={`${item.label}-${i}`}>
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </header>
  );
};
