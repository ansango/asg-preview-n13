import type { FC } from "react";

import type { Page } from ".tina/__generated__/types";

import { HeroBase, type HeroBaseProps } from "./hero";

type Props = Pick<Page, "blocks">;

export const Blocks: FC<Props> = ({ blocks }) => {
  return (
    <>
      {blocks?.map((block, i) => {
        switch (block?.__typename) {
          case "PageBlocksHeroBase": {
            return <HeroBase key={i} {...(block as HeroBaseProps)} />;
          }
          default:
            return null;
        }
      })}
    </>
  );
};
